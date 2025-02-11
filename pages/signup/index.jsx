import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar/Navbar";
import logo from "./logo.png";
import { BASE_URL } from "../../components/Constant/constant";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  });
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Form validation
    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.phone ||
      !formData.password
    ) {
      toast.error("All fields are required", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setIsLoading(true);

    const body = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };

    try {
      const response = await axios.post(
        `${BASE_URL}/api/user/auth/signup`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status === "success" || response.data.code === 200) {
        toast.success(
          response.data.message ||
            "Verification link sent on your email ID, please activate to login",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );

        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          password: "",
        });
        router.push("/login2");
      } else {
        toast.error(response.data.error || "Failed to sign up", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "An error occurred", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="p-8 rounded-xl shadow-lg shadow-slate-700 w-full max-w-lg m-5 bg-white">
          <div className="flex justify-center mb-4">
            <Image src={logo} className="w-40 h-10 object-contain" alt="Logo" />
          </div>
          <div className="text-2xl text-black text-center font-bold mb-6">
            Create an Account
          </div>
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="flex gap-4 flex-wrap">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-black mb-1">First Name*</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your first name"
                  required
                  minLength={2}
                  maxLength={40}
                  disabled={isLoading}
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-black mb-1">Last Name*</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your last name"
                  required
                  minLength={2}
                  maxLength={40}
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label className="block text-black mb-1">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Enter your email"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-black mb-1">Phone*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Enter your phone number"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-black mb-1">Password*</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                  minLength={6}
                  maxLength={30}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  disabled={isLoading}
                >
                  {showPassword ? "🕵🏻 Hide " : "👁 View"}
                </button>
              </div>
            </div>

            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  required
                  className="mr-2"
                  disabled={isLoading}
                />
                <Link
                  href={"/TermsandConditions"}
                  className="text-cyan-600 hover:underline"
                >
                  {" "}
                  Agree to terms & conditions
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Signing up...
                </>
              ) : (
                "Sign up"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
