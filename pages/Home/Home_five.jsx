// import Link from "next/link";
// import { useEffect, useState } from "react";

// const Home_five = () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect(() => {
//         // Check for the token (you can adjust based on where the token is stored)
//         const token = localStorage.getItem('token');
//         setIsAuthenticated(!!token);
//     }, []);
//   return (
//     <div className="bg-orange-100 py-10">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-center font-bold text-3xl py-5">Want To Supercharge Your Career Growth With Our AI Tool?</h1>
//         <div className="flex justify-center">
//           <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
//             <h1 className="font-bold text-xl mb-4">CV2GO  Builder</h1>
//             <div className="flex items-center gap-2 font-medium mb-2">
//               <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-orange-500"></i>
//               <span>AI Score</span>
//             </div>
//             <div className="flex items-center gap-2 font-medium mb-2">
//               <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-orange-500"></i>
//               <span>AI Parsing</span>
//             </div>
//             <div className="flex items-center gap-2 font-medium mb-2">
//               <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-orange-500"></i>
//               <span>Resume Building</span>
//             </div>
//             <div className="flex items-center gap-2 font-medium mb-2">
//               <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-orange-500"></i>
//               <span>AI Enhancer</span>
//             </div>
//             <div className="flex items-center gap-2 font-medium mb-2">
//               <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-orange-500"></i>
//               <span>Match & Apply</span>
//             </div>
//             <div className="flex items-center gap-2 font-medium mb-2">
//               <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-orange-500"></i>
//               <span>AI Skill Test</span>
//             </div>
//             <div className="flex items-center gap-2 font-medium mb-2">
//               <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-orange-500"></i>
//               <span>Skill Badges</span>
//             </div>
//             <div className="flex items-center gap-2 font-medium mb-2">
//               <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-orange-500"></i>
//               <span>& More</span>
//             </div>
//             <div className="flex justify-center mt-6">
//             <Link href={isAuthenticated?"/dashboard":"/login2"}>
//               <button className="px-6 py-3 rounded-2xl font-semibold text-black bg-orange-400 hover:bg-orange-500 shadow-md">
//                 Get Started For Free
//               </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home_five;

import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

import Link from "next/link";
import logo from "../Home/modallogo.png";
// import logo from "../Home/Images/modallogo.jpg";
import Image from "next/image";
import resumeImg from "./Images/GraphicDesignerResume.jpg";
import poweredbypaypal from "./Images/poweredbypaypal.png";
import paypal from "./Images/paypal.png";
import applepay from "./Images/apple-pay.png";
import Script from "next/script";
import ApplePayButton from "./ApplePayButton";
import { BASE_URL } from "../../components/Constant/constant";
import { PoundSterling } from "lucide-react";
function Home_five() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // Fixed price

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const [redirectPath, setRedirectPath] = useState("/login2");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setRedirectPath("/dashboard");
    }
  }, []);
  const handlePayment = (e) => {
    e.preventDefault();
    const amount = 19;

    const payload = {
      amount,
      ResumeId: "9CN06189KH259320999",
      Name: name,
      Email: email,
      Phone: phone,
    };

    axios
      .post(`${BASE_URL}/api/user/paypal/create-payment`, payload, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const data = response.data;
        if (data && data.data) {
          // Redirect to the PayPal URL provided in the response
          window.location.href = data.data;
        }
      })
      .catch((error) => console.error("Payment Error:", error));

    handleCloseModal(); // Close the modal after submitting the form
  };

  const [showModal1, setShowModal1] = useState(false);
  const [name1, setName1] = useState("");
  const [email1, setEmail1] = useState("");
  const [phone1, setPhone1] = useState("");
  // Fixed price

  const handleCloseModal1 = () => setShowModal1(false);
  const handleShowModal1 = () => setShowModal1(true);

  const handlePayment1 = (e) => {
    e.preventDefault();
    const amount = 29;

    const payload = {
      amount,
      ResumeId: "9CN06189KH259320999",
      Name: name1,
      Email: email1,
      Phone: phone1,
    };

    axios
      .post(`${BASE_URL}/api/user/paypal/create-payment`, payload, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        const data = response.data;
        if (data && data.data) {
          // Redirect to the PayPal URL provided in the response
          window.location.href = data.data;
        }
      })
      .catch((error) => console.error("Payment Error:", error));

    handleCloseModal1(); // Close the modal after submitting the form
  };

  return (
    <>
      <div className="  ">
        <section className=" ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold  rounded-2xl text-cyan-600 border p-3 border-gray">
                Choose a Plan, Which is right for you?
              </h2>
            </div>
            <div className="space-y-4 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {/* Pricing Card */}

              {/* Pricing Card */}
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-gray-800 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-bold">Resume Builder</h3>
                <p className="font-light text-white sm:text-lg dark:text-white">
                  Relevant for automation &amp; one time download.
                </p>
                <div className="flex justify-center items-baseline my-8 gap-3">
                  <span className="text-white dark:text-white">Starting </span>
                  <PoundSterling size={36} className="text-white stroke-[3]" />
                  <span className="mr-2 text-5xl font-extrabold">0</span>
                </div>
                {/* List */}
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Create optimized resumes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Copy and paste content from site</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Unlimited resume edits</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Save resume as pdf and docs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Download fully formatted Resume</span>
                  </li>
                  <li className="flex items-center space-x-3">{/* Icon */}</li>
                  <li className="flex items-center space-x-3">{/* Icon */}</li>
                </ul>
                <Link
                  // href="/login2"
                  href={redirectPath}
                  className="text-white border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                >
                  Get started for Free
                </Link>
              </div>
              {/* Pricing Card */}
              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-gray-800 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-bold">Expert Human Writer</h3>
                <p className="font-light text-white sm:text-lg dark:text-white">
                  Built by expert resume writers
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <PoundSterling size={36} className="text-white stroke-[3]" />
                  <span className="mr-2 text-5xl font-extrabold"> 19</span>
                  <span className="text-white dark:text-white">/Resume</span>
                </div>
                {/* List */}
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Create optimized resumes</span>
                  </li>

                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Receive resume in pdf and docs</span>
                  </li>

                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Cover letter included</span>
                  </li>

                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>3 revisions included</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Speak one on one with writer</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Final Delivery 1 week</span>
                  </li>
                </ul>
                <button
                  className="text-white bg-primary-600 border hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                  onClick={handleShowModal}
                >
                  Get started
                </button>
              </div>

              {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                  <div className=" w-full max-w-[90%] sm:max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden max-h-[90vh] overflow-y-auto ">
                    {/* Logo */}
                    <div className="flex justify-between items-center p-2 ">
                      <Image
                        src={logo}
                        alt="logo"
                        className="h-10 w-auto sm:h-8"
                      />
                      {/* Close Button */}
                      <button
                        className=" text-gray-600 hover:text-gray-800 z-20"
                        onClick={handleCloseModal}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex flex-col md:flex-row">
                      {/* Image Section */}
                      <div className="md:w-1/2 w-full p-4 flex justify-center ">
                        <div className="w-[400px] h-[400px] ">
                          <Image
                            src={resumeImg}
                            alt="resumeimg"
                            className="w- full h-full rounded-lg"
                          />
                        </div>
                      </div>

                      {/* Right Section: Form */}
                      <div className="md:w-1/2 w-full p-4 ">
                        <div className="text-left mb-6">
                          <h2 className="text-2xl font-bold text-gray-900">
                            £19
                          </h2>
                          <p className="text-sm text-gray-500">Total Amount</p>
                        </div>

                        <form onSubmit={handlePayment}>
                          <div className="mb-4">
                            <label className="block text-gray-800 mb-2">
                              👨🏻‍💼 Name
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-gray-800 mb-2">
                              📧 Email
                            </label>
                            <input
                              type="email"
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-gray-800 mb-2">
                              ☎️ Phone
                            </label>
                            <input
                              type="tel"
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              required
                            />
                          </div>

                          {/* Submit Button */}
                          <div className="flex justify-center mt-6">
                            <button
                              type="submit"
                              className="w-full bg-yellow-400 text-black font-bold  rounded-[50px] hover:bg-yellow-500 transition duration-200"
                            >
                              {/* <Image
                                src={paypal}
                                alt="paypal"
                                className="h-10 w-auto m-auto"
                              /> */}
                              <p className="p-2 text-md">Secure Checkout</p>
                            </button>
                          </div>
                          <div className="flex justify-center mt-6">
                            <button className="w-full bg-black text-white font-bold  rounded-[50px] transition duration-200  ">
                              <Image
                                src={applepay}
                                alt="apple pay"
                                className=" w-auto m-auto h-10"
                              />
                            </button>
                          </div>
                          <div className="flex justify-center mt-6 ">
                            <Image
                              src={poweredbypaypal}
                              alt="poweredbypaypal"
                              className="h-10 w-auto"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {showModal1 && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                  <div className=" w-full max-w-[90%] sm:max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden max-h-[90vh] overflow-y-auto ">
                    {/* Logo */}
                    <div className="flex justify-between items-center p-2 ">
                      <Image
                        src={logo}
                        alt="logo"
                        className="h-10 w-auto sm:h-8"
                      />
                      {/* Close Button */}
                      <button
                        className=" text-gray-600 hover:text-gray-800 z-20"
                        onClick={handleCloseModal1}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex flex-col md:flex-row">
                      {/* Image Section */}
                      <div className="md:w-1/2 w-full p-4 flex justify-center ">
                        <div className="w-[400px] h-[400px] ">
                          <Image
                            src={resumeImg}
                            alt="resumeimg"
                            className="w- full h-full rounded-lg"
                          />
                        </div>
                      </div>

                      {/* Right Section: Form */}
                      <div className="md:w-1/2 w-full p-4 ">
                        <div className="text-left mb-6">
                          <h2 className="text-2xl font-bold text-gray-900">
                            £29
                          </h2>
                          <p className="text-sm text-gray-500">Total Amount</p>
                        </div>

                        <form onSubmit={handlePayment1}>
                          <div className="mb-4">
                            <label className="block text-gray-800 mb-2">
                              👨🏻‍💼 Name
                            </label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                              value={name1}
                              onChange={(e) => setName1(e.target.value)}
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-gray-800 mb-2">
                              📧 Email
                            </label>
                            <input
                              type="email"
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                              value={email1}
                              onChange={(e) => setEmail1(e.target.value)}
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block text-gray-800 mb-2">
                              ☎️ Phone
                            </label>
                            <input
                              type="tel"
                              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                              value={phone1}
                              onChange={(e) => setPhone1(e.target.value)}
                              required
                            />
                          </div>

                          {/* Submit Button */}
                          <div className="flex justify-center mt-6">
                            <button
                              type="submit"
                              className="w-full bg-yellow-400 text-black font-bold  rounded-[50px] hover:bg-yellow-500 transition duration-200"
                            >
                              {/* <Image
                                src={paypal}
                                alt="paypal"
                                className="h-10 w-auto m-auto"
                              /> */}
                              <p className="p-2 text-md "> Secure Checkout </p>
                            </button>
                          </div>
                          <div className="flex justify-center mt-6">
                            <button className="w-full bg-black text-white font-bold  rounded-[50px] transition duration-200  ">
                              <Image
                                src={applepay}
                                alt="apple pay"
                                className=" w-auto m-auto h-10"
                              />
                            </button>
                          </div>
                          <div className="flex justify-center mt-6 ">
                            <Image
                              src={poweredbypaypal}
                              alt="poweredbypaypal"
                              className="h-10 w-auto"
                            />
                          </div>
                          <div className="flex justify-center mt-6 ">
                            <ApplePayButton />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-gray-800 rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-2xl font-bold">
                  {" "}
                  French English Combo
                </h3>
                <p className="font-light text-white sm:text-lg dark:text-white">
                  Built by expert resume writers
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <PoundSterling size={36} className="text-white stroke-[3]" />
                  <span className="mr-2 text-5xl font-extrabold">29</span>
                  <span className="text-white dark:text-white">/Resume</span>
                </div>
                {/* List */}
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Create optimized resumes</span>
                  </li>

                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Receive resume in pdf and docs</span>
                  </li>

                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Cover letter included</span>
                  </li>

                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>3 revisions included</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Speak one on one with writer</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* Icon */}
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Final Delivery 1 week</span>
                  </li>
                </ul>
                <button
                  className="text-white bg-primary-600 border hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                  onClick={handleShowModal1}
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home_five;
