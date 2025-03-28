// import React, { useState } from "react";
// import { useRouter } from "next/router";
// import logo from "../forgotpassword/logo.png";
// import Image from "next/image";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { BASE_URL } from "../../components/Constant/constant";

// function Index() {
//   const [formData, setFormData] = useState({
//     email: "",
//   });
//   const Router = useRouter();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!formData.email) {
//       toast.error("Email is required");
//       return;
//     }

//     // Create FormData object and append email
//     const formDataToSend = new FormData();
//     formDataToSend.append("email", formData.email);

//     try {
//       const response = await axios.post(
//         `${BASE_URL}/api/user/forget-password`,
//         formDataToSend,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.status === 200) {
//         toast.success("Password reset link sent to your email");
//         Router.push("/login2");
//       } else {
//         toast.error("Failed to send email");
//       }
//     } catch (error) {
//       console.error(
//         error.response?.data || error.message || "An error occurred"
//       );
//       toast.error(error.response?.data?.message || "An error occurred");
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center h-screen w-full">
//         {/* Make sure this is always rendered */}
//         <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg bg-white">
//           <div className="flex justify-center mb-6">
//             <Image src={logo} className="w-40 h-10" alt="Logo" />
//           </div>
//           <div className="text-2xl text-black text-center font-bold mb-4">
//             Forgot Password
//           </div>
//           <p className="text-black text-base text-center mb-6">
//             People across the globe are joining us to upgrade their career with
//             our Robust AI.
//           </p>
//           <form onSubmit={handleLogin}>
//             <div className="m-4">
//               <label className="block text-black mb-2">Email ID</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 placeholder="Enter your email ID"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300"
//             >
//               Send Email
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Index;
import React, { useState } from "react";
import { useRouter } from "next/router";
import logo from "../forgotpassword/logo.png";
import Image from "next/image";
import axios from "axios";
import { BASE_URL } from "../../components/Constant/constant";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import Navbar from "../Navbar/Navbar";

function Index() {
  const { t } = useTranslation(); // Initialize i18n hook
  const [formData, setFormData] = useState({
    email: "",
  });
  const Router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      toast.error(t("forgotpage.email_required"));
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("email", formData.email);

    try {
      const response = await axios.post(
        `${BASE_URL}/api/user/forget-password`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        toast.success(t("forgotpage.password_reset_message"));
        Router.push("/login2");
      } else {
        toast.error(t("forgotpage..password_reset_error"));
      }
    } catch (error) {
      console.error(
        error.response?.data || error.message || "An error occurred"
      );
      toast.error(
        error.response?.data?.message || t("forgotpage.password_reset_error")
      );
    }
  };

  return (
    <> 
    <Navbar />
      <div className="flex justify-center items-center h-screen w-full">
        <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg bg-white">
          <div className="flex justify-center mb-6">
            <Image src={logo} className="w-40 h-10" alt="Logo" />
          </div>
          <div className="text-2xl text-black text-center font-bold mb-4">
            {t("forgotpage.forgot_password")}
          </div>
          <p className="text-black text-base text-center mb-6">
            {t("forgotpage.global_message")}
          </p>
          <form onSubmit={handleLogin}>
            <div className="m-4">
              <label className="block text-black mb-2">
                {t("forgotpage.email_label")}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder={t("forgotpage.enter_email")}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300"
            >
              {t("forgotpage.send_email")}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Index;
