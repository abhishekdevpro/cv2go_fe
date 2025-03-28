// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import Navbar from "../Navbar/Navbar";
// import Link from "next/link";

// export default function Subscription() {
//   const [status, setStatus] = useState("Inactive");

//   return (
//     <>
//       <Navbar />
//       <div className="p-4 md:p-10 max-w-5xl mx-auto">
//         <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>

//         <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
//           {/* Sidebar (Takes full width on mobile) */}
//           <div className="w-full md:w-1/4">
//             <Sidebar />
//           </div>

//           {/* Main Content */}
//           <div className="w-full md:w-3/4">
//             <div className="p-6 bg-white ">
//               <h3 className="text-xl font-semibold mb-6">Subscription</h3>

//               {/* Help & Support Box */}
//               <div className="p-4 border border-gray-300 rounded-md bg-gray-50 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
//                 <div className="w-full md:w-1/2">
//                   <p className="font-semibold text-gray-800">
//                     Need help or want to change your subscription?
//                   </p>
//                   <p className="mt-2 text-gray-700">Contact us at:</p>
//                   <ul className="list-disc ml-5 text-gray-700">
//                     <li>📞 855-695-3235</li>
//                     <li className="text-[15px]">
//                       📧 customersupport@CV2GO.fr
//                     </li>
//                   </ul>
//                 </div>

//                 {/* Vertical Divider (Hidden on small screens) */}
//                 <div className="hidden md:block border-l border-gray-300 h-24 mx-6"></div>

//                 <div className="w-full md:w-1/2 mt-4 md:mt-0">
//                   <p className="font-semibold text-gray-800">
//                     Available 7 days a week:
//                   </p>
//                   <ul className="list-disc ml-5 text-gray-700">
//                     <li>Monday-Friday: 8 AM - 8 PM (CST)</li>
//                     <li>Saturday: 8 AM - 5 PM (CST)</li>
//                     <li>Sunday: 10 AM - 6 PM (CST)</li>
//                   </ul>
//                 </div>
//               </div>

//               {/* Account ID */}
//               <div className="py-4 border-b border-gray-300">
//                 <p className="font-semibold text-gray-900">
//                   Account ID:{" "}
//                   <span className="text-gray-600 font-medium">618744350</span>
//                 </p>
//               </div>

//               {/* Subscription Details */}
//               <div className="mt-6">
//                 <h4 className="text-lg font-semibold text-gray-900">
//                   Subscription details
//                 </h4>
//                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-3">
//                   <p className="text-gray-700">
//                     Status:{" "}
//                     <span className="font-medium text-gray-900">{status}</span>
//                   </p>
//                   <Link href="/payment">
//                     <button
//                       className="mt-3 md:mt-0 text-cyan-600 font-medium underline"
//                       // onClick={() => setStatus("Active")}
//                     >
//                       Subscribe
//                     </button>
//                   </Link>
//                 </div>

//                 <p className="mt-4 text-gray-700">
//                   For more information or changes to your subscription, contact
//                   us at
//                   <span className="text-cyan-600 cursor-pointer">
//                     {" "}
//                     customersupport@CV2GO.fr
//                   </span>
//                   .
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";
import { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";
import axios from "axios";
import { BASE_URL } from "../../components/Constant/constant";
import { ResumeContext } from "../../components/context/ResumeContext";
import { toast } from "react-toastify";
export default function Subscription() {
  const { t } = useTranslation();
  const [status, setStatus] = useState("Inactive");
  const [accountId, setAccountId] = useState();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const { selectedLang } = useContext(ResumeContext);
  const handleCancelSubscription = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Unauthorized. Please log in.");
        return;
      }

      const response = await axios.post(
        `${BASE_URL}/api/user/payment/cancel-subscription`,
        {}, // Empty body if API doesn't require data
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token, // Add Bearer if required
          },
        }
      );

      if (response.status === 200) {
        // Successfully canceled the subscription
        toast.success("Your subscription has been canceled.");
      } else {
        toast.error(
          response.data.message || "Failed to cancel the subscription."
        );
      }
    } catch (error) {
      console.error("Error canceling subscription:", error);

      if (error.response?.status === 401) {
        toast.error("Session expired. Please log in again.");
        localStorage.removeItem("token"); // Remove token if expired
        window.location.href = "/login"; // Redirect to login page
      } else {
        toast.error(
          error.response?.data?.message ||
            "An error occurred. Please try again later."
        );
      }
    }
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError(t("account.unauthorized"));

          return;
        }

        const response = await axios.get(
          `${BASE_URL}/api/user/user-profile?lang=${selectedLang}`,
          {
            headers: { Authorization: token },
          }
        );

        if (response.data?.status === "success") {
          const userProfile = response.data.data; // Store response data in a variable
          setUserData(userProfile);
          setStatus(userProfile.is_active_plan ? "Active" : "Inactive");
          // setUserData(response.data.data);
          // setStatus(userData.is_active_plan ? "Active" : "Inactive");
        } else {
          setError(t("account.error"));
        }
      } catch (err) {
        setStatus("Inactive");
        console.error("Error fetching user profile:", err);
        setError(t("account.error"));
      } finally {
      }
    };

    fetchUserProfile();
  }, [selectedLang, t]);
  return (
    <>
      <Navbar />
      <div className="p-4 md:p-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          {t("subscription.title")}
        </h2>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-6">
                {t("subscription.heading")}
              </h3>

              {/* Help & Support Box */}
              <div className="p-4 border border-gray-300 rounded-md bg-gray-50 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="w-full md:w-1/2">
                  <p className="font-semibold text-gray-800">
                    {t("subscription.help_support")}
                  </p>
                  <p className="mt-2 text-gray-700">
                    {t("subscription.contact_us")}
                  </p>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>{t("subscription.phone")}</li>
                    <li className="text-[15px]">{t("subscription.email")}</li>
                  </ul>
                </div>

                {/* Vertical Divider (Hidden on small screens) */}
                <div className="hidden md:block border-l border-gray-300 h-24 mx-6"></div>

                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                  <p className="font-semibold text-gray-800">
                    {t("subscription.availability")}
                  </p>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>{t("subscription.monday_friday")}</li>
                    <li>{t("subscription.saturday")}</li>
                    <li>{t("subscription.sunday")}</li>
                  </ul>
                </div>
              </div>

              {/* Account ID */}
              <div className="py-4 border-b border-gray-300">
                <p className="font-semibold text-gray-900">
                  {t("subscription.account_id")}{" "}
                  <span className="text-gray-600 font-medium">
                    {userData?.account_id || "N/A"}
                  </span>
                </p>
              </div>

              {/* Subscription Details */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  {t("subscription.subscription_details")}
                </h4>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-3">
                  <p className="text-gray-700">
                    Status:{" "}
                    <span
                      className={`font-medium ${
                        status === "Active" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {status}
                    </span>
                  </p>
                  {/* <Link href="/payment">
                    <button className="mt-3 md:mt-0 text-cyan-600 font-medium underline">
                      {t("subscription.subscribe")}
                    </button>
                  </Link> */}
                  <div className="flex space-x-4">
                    <Link href="/payment">
                      <button className="mt-3 md:mt-0 px-4 py-2 bg-cyan-600 text-white rounded-md">
                        {t("subscription.upgrade")}
                      </button>
                    </Link>
                    <button
                      onClick={handleCancelSubscription}
                      disabled={
                        userData?.plan_id === 1 || !userData?.is_active_plan
                      } // Disable if Free Plan
                      className={`mt-3 md:mt-0 px-4 py-2 rounded-md ${
                        userData?.plan_id === 1 || !userData?.is_active_plan
                          ? "bg-gray-400 cursor-not-allowed" // Disabled styling
                          : "bg-red-600 text-white hover:bg-red-700" // Active styling
                      }`}
                    >
                      {t("subscription.cancel_subscription")}
                    </button>
                  </div>
                </div>
                <p className="text-gray-700">
                  Current Plan:{" "}
                  {userData?.plan_id ? (
                    <span className="font-medium">
                      {userData.plan_id === 1 && "Free Plan"}
                      {userData.plan_id === 2 && "Single Pass"}
                      {userData.plan_id === 3 && "AI Pro Month"}
                      {userData.plan_id === 4 && "AI Pro Yearly"}
                    </span>
                  ) : (
                    "N/A"
                  )}
                </p>
                <p className="mt-4 text-gray-700">
                  {t("subscription.more_info")}{" "}
                  <a href="mailto:customersupport@info@CV2GO">
                    <span className="text-cyan-600 cursor-pointer">
                      {t("subscription.email")}
                    </span>
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
