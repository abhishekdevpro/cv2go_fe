// // pages/reset-password/[token].jsx
// import React, { useState } from "react";
// import { useRouter } from "next/router";
// import logo from "../forgotpassword/logo.png";
// import Image from "next/image";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { BASE_URL } from "../../components/Constant/constant";

// function ResetPassword() {
//   const router = useRouter();
//   const { token } = router.query; // Capture the token from the URL
//   const [formData, setFormData] = useState({
//     newPassword: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();

//     if (!formData.newPassword) {
//       toast.error("New password is required");
//       return;
//     }

//     try {
//       // Access the email from the query parameters
//       const { email } = router.query;

//       if (!token) {
//         toast.error("Invalid token");
//         return;
//       }

//       const response = await axios.post(
//         `${BASE_URL}/api/user/reset-password`,
//         {
//           token,
//           new_password: formData.newPassword,
//           email, // Include email in the request if needed
//         }
//       );

//       if (response.status === 200) {
//         toast.success("Password reset successfully");
//         router.push("/login2");
//       } else {
//         toast.error("Failed to reset password");
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
//         <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg bg-white">
//           <div className="flex justify-center mb-6">
//             <Image src={logo} className="w-40 h-10" alt="Logo" />
//           </div>
//           <div className="text-2xl text-black text-center font-bold mb-4">
//             Reset Password
//           </div>
//           <p className="text-black text-base text-center mb-6">
//             Enter your new password to reset your account.
//           </p>
//           <form onSubmit={handleResetPassword}>
//             <div className="m-4">
//               <label className="block text-black mb-2">New Password</label>
//               <input
//                 type="password"
//                 name="newPassword"
//                 value={formData.newPassword}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 placeholder="Enter your new password"
//                 required
//               />
//               <label className="block text-black mb-2">Confirm Password</label>
//               <input
//                 type="password"
//                 name="newPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 placeholder="Enter your new password"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300"
//             >
//               Reset Password
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ResetPassword;
// pages/reset-password/[token].jsx

import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import logo from "../../forgotpassword/logo.png";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../components/Constant/constant";
import Navbar from "../../Navbar/Navbar";
import { ResumeContext } from "../../../components/context/ResumeContext";

// function ResetPassword() {
//   const router = useRouter();
//   const { token, email } = router.query; // Capture token and email from URL
//   const [formData, setFormData] = useState({
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();

//     if (!formData.newPassword || !formData.confirmPassword) {
//       toast.error("Both fields are required");
//       return;
//     }

//     if (formData.newPassword !== formData.confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }

//     if (!token) {
//       toast.error("Invalid token");
//       return;
//     }

//     try {
//       const response = await axios.post(`${BASE_URL}/api/user/reset-password`, {
//         token,
//         new_password: formData.newPassword,
//         email,
//       });

//       if (response.status === 200) {
//         toast.success("Password reset successfully");
//         router.push("/login2");
//       } else {
//         toast.error("Failed to reset password");
//       }
//     } catch (error) {
//       console.error(error.response?.data || error.message || "An error occurred");
//       toast.error(error.response?.data?.message || "An error occurred");
//     }
//   };

//   return (
//     <>
//     <Navbar />
//       <div className="flex justify-center items-center h-screen w-full">
//       <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg bg-white">
//         <div className="flex justify-center mb-6">
//           <Image src={logo} className="w-40 h-10" alt="Logo" />
//         </div>
//         <div className="text-2xl text-black text-center font-bold mb-4">
//           Reset Password
//         </div>
//         <p className="text-black text-base text-center mb-6">
//           Enter your new password to reset your account.
//         </p>
//         <form onSubmit={handleResetPassword}>
//           <div className="m-4">
//             <label className="block text-black mb-2">New Password</label>
//             <input
//               type="password"
//               name="newPassword"
//               value={formData.newPassword}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               placeholder="Enter your new password"
//               required
//             />
//             <label className="block text-black mb-2 mt-4">Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               placeholder="Confirm your new password"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300"
//           >
//             Reset Password
//           </button>
//         </form>
//       </div>
//     </div>
//     </>
//   );
// }

function ResetPassword() {
  const router = useRouter();
  const { token, email } = router.query; // Capture token and email from URL
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const {selectedLang} = useContext(ResumeContext)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!formData.newPassword || !formData.confirmPassword) {
      toast.error("Both fields are required");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!token) {
      toast.error("Invalid token");
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("token", token);
      formDataToSend.append("new_password", formData.newPassword);
      // formDataToSend.append("email", email);

      const response = await axios.post(`${BASE_URL}/api/user/reset-password?lang=${selectedLang}`, formDataToSend);

      if (response.status === 200) {
        toast.success("Password reset successfully");
        router.push("/login2");
      } else {
        toast.error("Failed to reset password");
      }
    } catch (error) {
      console.error(error.response?.data || error.message || "An error occurred");
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg bg-white">
        <div className="flex justify-center mb-6">
          <Image src={logo} className="w-40 h-10" alt="Logo" />
        </div>
        <div className="text-2xl text-black text-center font-bold mb-4">
          Reset Password
        </div>
        <p className="text-black text-base text-center mb-6">
          Enter your new password to reset your account.
        </p>
        <form onSubmit={handleResetPassword}>
          <div className="m-4">
            <label className="block text-black mb-2">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your new password"
              required
            />
            <label className="block text-black mb-2 mt-4">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Confirm your new password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;