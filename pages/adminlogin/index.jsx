

import React, { useState } from "react";
import logo from "./logo.png";
import Modal from "./Modal";
import Signup from "./Signup";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import { BASE_URL } from "../../components/Constant/constant";
// import Navbar from "../Navbar/Navbar";

function AdminLogin() {
  const [isThirdstepOpen, setThirdstepOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const Router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Email and Password are Required");
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/api/admin/auth/login`,
        formData,
      );

      if (response.data.status === "success" || response.data.code === 200) {
        toast.success(response.data.message ||"Login successfully");
        console.log(response)
        console.log("Token", response.data.data.token)
        localStorage.setItem("token",response.data.data.token)
        Router.push("/admin/profile");
      } else {
        toast.error("Failed to Login");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <ToastContainer/>
        <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg bg-gray-100">
          <div className="flex justify-center mb-6">
            <Image src={logo} className=" " alt="Logo" />
          </div>
          <div className="text-3xl text-black text-center font-bold mb-9">
          🛡️ Admin Login
          </div>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block  mb-2 text-black">🛡️ Admin ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email ID"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black mb-2">🔒 Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your password"
              />
            </div>
          
            <button
              type="submit"
              className="w-full bg-yellow-500 mt-10 text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300"
            >
              Login 
            </button>
          </form>
        </div>
      </div>
      <Modal isOpen={isThirdstepOpen} onClose={() => setThirdstepOpen(false)}>
        <Signup />
      </Modal>
    </>
  );
}

export default AdminLogin;

  