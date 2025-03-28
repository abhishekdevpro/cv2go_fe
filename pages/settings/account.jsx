// "use client";
// import React, { useContext, useEffect, useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import Sidebar from "./Sidebar";
// import axios from "axios";
// import { BASE_URL } from "../../components/Constant/constant";
// import { ResumeContext } from "../../components/context/ResumeContext";
// const Account = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const {selectedLang} = useContext(ResumeContext)
//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           setError("Unauthorized. Please log in.");
//           setLoading(false);
//           return;
//         }

//         const response = await axios.get(`${BASE_URL}/api/user/user-profile?lang=${selectedLang}`, {
//           headers: { Authorization: token },
//         });

//         if (response.data?.status === "success") {
//           setUserData(response.data.data);
//         } else {
//           setError("Failed to load user data.");
//         }
//       } catch (err) {
//         console.error("Error fetching user profile:", err);
//         setError("Failed to load user data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <>
//       <Navbar />
//       <div className="p-4 md:p-10 max-w-5xl mx-auto">
//         <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
//         <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
//           {/* Sidebar */}
//           <div className="md:w-1/4 w-full">
//             <Sidebar />
//           </div>

//           {/* Main Content */}
//           <div className="md:w-3/4 w-full">
//             <div className="p-6 bg-white shadow-md rounded-md">
//               <h3 className="text-xl font-semibold mb-4">Account</h3>
//               <div className="space-y-4">
//                 <div className="flex justify-between border-b pb-2">
//                   <span className="text-gray-600">Account ID</span>
//                   <span className="text-gray-900">
//                     {userData?.account_id || "N/A"}
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center border-b pb-2">
//                   <span className="text-gray-600">Email Address</span>
//                   <div className="flex items-center space-x-2">
//                     <span className="text-gray-900">
//                       {userData?.email || "N/A"}
//                     </span>
//                     {/* <button className="text-blue-600 text-sm font-semibold">
//                       Change
//                     </button> */}
//                   </div>
//                 </div>
//                 {/* <div className="flex justify-between items-center">
//                   <span className="text-gray-600">Password</span>
//                   <div className="flex items-center space-x-2">
//                     <span className="text-gray-900">
//                       {" "}
//                       {userData?.password || "******"}
//                     </span>
//                     <button className="text-blue-600 text-sm font-semibold">
//                       Change
//                     </button>
//                   </div>
//                 </div> */}
//                 {/* <div className="flex justify-between border-b pb-2">
//                   <span className="text-gray-600">Full Name</span>
//                   <span className="text-gray-900">
//                     {userData?.first_name || ""} {userData?.last_name || ""}
//                   </span>
//                 </div>
//                 <div className="flex justify-between border-b pb-2">
//                   <span className="text-gray-600">Phone</span>
//                   <span className="text-gray-900">
//                     {userData?.phone || "N/A"}
//                   </span>
//                 </div>
//                 <div className="flex justify-between border-b pb-2">
//                   <span className="text-gray-600">Profile Picture</span>
//                   <img
//                     src={userData?.photo || "/default-avatar.png"}
//                     alt="Profile"
//                     className="w-12 h-12 rounded-full border"
//                   />
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Account;
"use client";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import Sidebar from "./Sidebar";
import axios from "axios";
import { BASE_URL } from "../../components/Constant/constant";
import { ResumeContext } from "../../components/context/ResumeContext";

const Account = () => {
  const { t } = useTranslation();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { selectedLang } = useContext(ResumeContext);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError(t("account.unauthorized"));
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `${BASE_URL}/api/user/user-profile?lang=${selectedLang}`,
          {
            headers: { Authorization: token },
          }
        );

        if (response.data?.status === "success") {
          setUserData(response.data.data);
        } else {
          setError(t("account.error"));
        }
      } catch (err) {
        console.error("Error fetching user profile:", err);
        setError(t("account.error"));
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [selectedLang, t]);

  if (loading)
    return <p className="text-center text-gray-500">{t("account.loading")}</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <Navbar />
      <div className="p-4 md:p-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">{t("account.title")}</h2>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className="md:w-1/4 w-full">
            <Sidebar />
          </div>

          <div className="md:w-3/4 w-full">
            <div className="p-6 bg-white shadow-md rounded-md">
              <h3 className="text-xl font-semibold mb-4">
                {t("account.heading")}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">
                    {t("account.accountId")}
                  </span>
                  <span className="text-gray-900">
                    {userData?.account_id || "N/A"}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-600">{t("account.email")}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-900">
                      {userData?.email || "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
