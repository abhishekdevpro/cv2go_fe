import React, { useContext, useState } from "react";
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
import { useTranslation } from "react-i18next";
import { ResumeContext } from "../../components/context/ResumeContext";

const Signup = () => {
  const { t } = useTranslation();
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
  const { selectedLang } = useContext(ResumeContext);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("called");

    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.phone ||
      !formData.password
    ) {
      toast.error(t("loginpage.all_fields_required"));
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
        `${BASE_URL}/api/user/auth/signup?lang=${selectedLang}`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response, response.status, "userinfoooo");
      if (response.status === 200) {
        toast.success(t("signuppage.verification_sent"));

        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          password: "",
        });
      } else {
        toast.error(t("signuppage.signup_failed"));
        router.push("/login2");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.error || t("signuppage.error_occurred")
      );
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
          <div className="text-2xl text-black text-center font-bold">
            {t("signuppage.create_account")}
          </div>
          <form onSubmit={handleSignup}>
            <div className="flex gap-7 mt-2">
              <div className="mb-4">
                <label className="block text-black">
                  {t("signuppage.first_name")}*
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder={t("signuppage.first_name_placeholder")}
                  required
                  minLength={2}
                  maxLength={40}
                  disabled={isLoading}
                />
              </div>
              <div className="mb-4">
                <label className="block text-black">
                  {t("signuppage.last_name")}*
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder={t("signuppage.last_name_placeholder")}
                  required
                  minLength={2}
                  maxLength={40}
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-black">
                {t("signuppage.email")}*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder={t("signuppage.email_placeholder")}
                required
                disabled={isLoading}
              />
            </div>
            <div className="mb-4">
              <label className="block text-black">
                {t("signuppage.phone")}*
              </label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
                placeholder={t("signuppage.phone_placeholder")}
                required
                disabled={isLoading}
              />
            </div>
            <div className="mb-4">
              <label className="block text-black">
                {t("signuppage.password")}*
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder={t("signuppage.password_placeholder")}
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
                  {showPassword ? t("loginpage.hide") : t("loginpage.view")}
                </button>
              </div>
            </div>

            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  required
                  className="mr-2"
                  disabled={isLoading}
                />
                <Link href={"/TermsandConditions"}>
                  {" "}
                  {t("loginpage.agree_terms")}
                  {t("loginpage.terms_conditions")}
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-600 text-black px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t("signuppage.signing_up")}
                </>
              ) : (
                t("signuppage.signup")
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
