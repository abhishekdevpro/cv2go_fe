// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import logo from "../Navbar/logo.png";
// import Image from "next/image";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { BASE_URL } from "../../components/Constant/constant";
// import CibliJobId from "./CibliJobId";
// import { useTranslation } from "react-i18next";
// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isApiSuccess, setIsApiSuccess] = useState(false);
//   const [user, setUser] = useState("");
//   const [photo, setPhoto] = useState("");
//   const router = useRouter();
//   const axiosInstance = axios.create();
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const { i18n } = useTranslation();

//   const changeLanguage = (event) => {
//     i18n.changeLanguage(event.target.value);
//   };
//   useEffect(() => {
//     const token = localStorage.getItem("token"); // Access localStorage here

//     if (token) {
//       setIsLoggedIn(true);

//       // Check API success
//       const checkApiSuccess = async () => {
//         try {
//           const response = await axios.get(
//             `${BASE_URL}/api/user/user-profile`,
//             {
//               headers: {
//                 Authorization: token,
//               },
//             }
//           );

//           if (response.data.status === "success") {
//             setIsApiSuccess(true);
//             setUser(response.data.data.first_name);
//             setPhoto(response.data.data.photo);
//           } else {
//             setIsApiSuccess(false);
//           }
//         } catch (error) {
//           console.log("KSC catch err: ", error);
//           setIsApiSuccess(false);
//         }
//       };

//       checkApiSuccess();
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []); // Dependency array should be empty to run only once after the first render
//   const handleOpenPopup = () => setIsPopupOpen(true);
//   const handleClosePopup = () => setIsPopupOpen(false);
//   const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

//   const handleLinkClick = () => setIsMenuOpen(false);

//   const handleMouseEnter = () => setIsHovering(true);

//   const handleMouseLeave = () => setIsHovering(false);

//   // const handleLogout = () => {
//   //   localStorage.removeItem("token");
//   //   setIsLoggedIn(false);
//   //   toast.success("Logout Succesfully");
//   //   router.push("/");
//   // };
//   const handleLogout = async () => {
//     const token = localStorage.getItem("token");

//     try {
//       await axios.post(
//         `${BASE_URL}/api/user/logout`,
//         { token },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       localStorage.removeItem("token");
//       router.push("/login2");
//     } catch (error) {
//       console.error(
//         "Error during logout:",
//         error.response?.data || error.message
//       );
//       // Still remove token and redirect even if logout API fails
//       localStorage.removeItem("token");
//       router.push("/login2");
//     }
//   };

//   // Setup axios interceptor
//   useEffect(() => {
//     const interceptor = axiosInstance.interceptors.response.use(
//       (response) => response,
//       (error) => {
//         if (error.response?.status === 401) {
//           handleLogout();
//         }
//         return Promise.reject(error);
//       }
//     );

//     return () => {
//       axiosInstance.interceptors.response.eject(interceptor);
//     };
//   }, []);
//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   return (
//     <nav className="bg-white border-b border-gray-200">
//       <div className="mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/">
//               <Image src={logo} alt="logo" className="h-10  w-[140px]" />
//             </Link>
//           </div>
//           <div className="hidden md:flex justify-center items-center space-x-4">
//             {isLoggedIn ? (
//               <div>
//                 <Link
//                   href="/dashboard"
//                   className="text-white hover:text-cyan-600 px-3 py-2 rounded-md text-lg font-semibold"
//                 >
//                   Dashboard
//                 </Link>
//                 <Link
//                   href="/dashboard/resumelist"
//                   className="text-white hover:text-cyan-600 px-3 py-2 rounded-md text-lg font-semibold"
//                 >
//                   My Resumes
//                 </Link>
//                 <Link
//                   href="/dashboard/cvletterlist"
//                   className="text-white hover:text-cyan-600 px-3 py-2 rounded-md text-lg font-semibold"
//                 >
//                   Cover Letter
//                 </Link>
//               </div>
//             ) : (
//               <></>
//             )}
//             <select
//               onChange={changeLanguage}
//               defaultValue={i18n.language}
//               className="border p-2 rounded"
//             >
//               <option value="en">🇺🇸 English</option>
//               <option value="fr">🇫🇷 French</option>
//               <option value="es">🇪🇸 Spanish</option>
//               <option value="de">🇩🇪 German</option>
//             </select>
//             <Link
//               href="/navbarcontent"
//               className="text-white hover:text-cyan-600 px-3 py-2 rounded-md text-lg font-semibold"
//             >
//               AI Resume Builder
//             </Link>
//             <Link
//               href="/dashboard/Jobs"
//               className="text-white hover:text-cyan-600 px-3 py-2 rounded-md text-lg font-semibold"
//             >
//               Jobs
//             </Link>
//             <Link
//               href=""
//               className="text-white hover:text-cyan-600 px-3 py-2 rounded-md text-lg font-semibold"
//             >
//               Resources
//             </Link>
//             <Link
//               href=""
//               onClick={handleOpenPopup}
//               className="text-white hover:text-cyan-600 px-3 py-2 rounded-md text-lg font-semibold"
//             >
//               CV2GO ID
//             </Link>
//             <CibliJobId isOpen={isPopupOpen} onClose={handleClosePopup} />
//             {/* <Link
//               href="/footers/Aboutus"
//               className="text-white hover:text-cyan-600 px-3 py-2 rounded-md text-lg font-semibold"
//             >
//               About Us
//             </Link> */}
//             {/* <Link
//               href="#phone"
//               className="text-white hover:text-cyan-600 px-3 py-2 rounded-md text-lg font-semibold"
//             >
//               📞 Contact us
//             </Link> */}
//           </div>
//           <div className="hidden md:flex items-center gap-4">
//             {isLoggedIn ? (
//               <div className="relative">
//                 <button
//                   onClick={toggleDropdown}
//                   className="flex items-center bg-cyan-600 text-white px-4 py-2 text-md font-semibold border-2 rounded-xl"
//                 >
//                   {/* <img
//                     src="https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"
//                     alt="User"
//                     className="w-8 h-8 rounded-full "
//                   /> */}
//                   <img
//                     src={
//                       photo
//                         ? `https://api.ciblijob.fr${photo}`
//                         : "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"
//                     }
//                     alt="User"
//                     className="w-8 h-8 rounded-full"
//                   />

//                   <span className="ml-2">{user ? user : "profile"}</span>
//                 </button>
//                 {isDropdownOpen && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-white">
//                     <Link
//                       href="/"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                       onClick={() => setIsDropdownOpen(false)}
//                     >
//                       Home
//                     </Link>

//                     <Link
//                       href="/dashboard/page"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                       onClick={() => setIsDropdownOpen(false)}
//                     >
//                       Profile
//                     </Link>
//                     <Link
//                       href="/dashboard"
//                       className="block px-4 py-2 hover:bg-gray-200"
//                       onClick={() => setIsDropdownOpen(false)}
//                     >
//                       Dashboard
//                     </Link>
//                     <button
//                       onClick={() => {
//                         handleLogout();
//                         setIsDropdownOpen(false);
//                       }}
//                       className="block w-full text-left px-4 py-2 hover:bg-gray-200"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <>
//                 <Link
//                   href="/login2"
//                   className="bg-cyan-600 text-white  px-4 py-2 text-md font-semibold border-2 rounded-xl"
//                 >
//                   Log in
//                 </Link>
//                 {/* <Link
//                   href="/signup"
//                   className="bg-cyan-600 text-white  px-4 py-2 text-md font-semibold border-2 rounded-xl"
//                 >
//                   Sign up
//                 </Link> */}
//               </>
//             )}
//           </div>
//           <div className="md:hidden ">
//             <button
//               onClick={handleMenuClick}
//               className="text-white hover:text-cyan-600 focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//         {/* {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 relative z-30">
//               <Link
//                 href="/dashboard"
//                 className="text-white hover:text-cyan-600 block  px-3 py-2 rounded-md text-base font-semibold"
//               >
//                 Dashboard
//               </Link>
//               <Link
//                 href="/dashboard/resumelist"
//                 className="text-white hover:text-cyan-600 block  px-3 py-2 rounded-md text-base font-semibold"
//               >
//                 My Resumes
//               </Link>
//               <Link
//                 href="/dashboard/cvletterlist"
//                 className="text-white hover:text-cyan-600 block  px-3 py-2 rounded-md text-base font-semibold"
//               >
//                 Cover Letter
//               </Link>
//               <Link
//                 href="/dashboard/MyJobs"
//                 className="text-white hover:text-cyan-600 block  px-3 py-2 rounded-md text-base font-semibold"
//               >
//                 Jobs
//               </Link>
//               <Link
//                 href="/navbarcontent"
//                 className="text-white hover:text-cyan-600 block  px-3 py-2 rounded-md text-base font-semibold"
//               >
//                 AI Resume Builder
//               </Link>
//               <Link
//                 href=""
//                 className="text-white hover:text-cyan-600 block  px-3 py-2 rounded-md text-base font-semibold"
//               >
//                 Resources
//               </Link>
//               <Link
//                 href=""
//                 className="text-white hover:text-cyan-600 block  px-3 py-2 rounded-md text-base font-semibold"
//               >
//                 CV2GO ID
//               </Link>
//               {isLoggedIn ? (
//                 <Link
//                   href="/"
//                   className="bg-cyan-600 text-white  block px-3 py-2 rounded-md text-base font-semibold"
//                   onClick={() => {
//                     handleLogout();
//                     handleLinkClick();
//                   }}
//                 >
//                   Logout
//                 </Link>
//               ) : (
//                 <>
//                   <Link
//                     href="/login2"
//                     className="bg-cyan-600 text-white  block px-3 py-2 rounded-md text-base font-semibold"
//                     onClick={handleLinkClick}
//                   >
//                     Log in
//                   </Link>
//                   <Link
//                     href="/signup"
//                     className="bg-cyan-600 text-white  block px-3 py-2 rounded-md text-base font-semibold"
//                     onClick={handleLinkClick}
//                   >
//                     Sign up
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//         )} */}
//         {isMenuOpen && (
//           <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <Link
//                 href="/dashboard/MyJobs"
//                 className="text-white hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-semibold"
//               >
//                 Jobs
//               </Link>
//               <Link
//                 href="/navbarcontent"
//                 className="text-white hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-semibold"
//               >
//                 AI Resume Builder
//               </Link>
//               <Link
//                 href=""
//                 className="text-white hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-semibold"
//               >
//                 Resources
//               </Link>
//               <Link
//                 href=""
//                 onClick={handleOpenPopup}
//                 className="text-white hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-semibold"
//               >
//                 CV2GO ID
//               </Link>
//               <CibliJobId isOpen={isPopupOpen} onClose={handleClosePopup} />
//               {isLoggedIn ? (
//                 <>
//                   <Link
//                     href="/dashboard"
//                     className="text-white hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-semibold"
//                   >
//                     Dashboard
//                   </Link>
//                   <Link
//                     href="/dashboard/resumelist"
//                     className="text-white hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-semibold"
//                   >
//                     My Resumes
//                   </Link>
//                   <Link
//                     href="/dashboard/cvletterlist"
//                     className="text-white hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-semibold"
//                   >
//                     Cover Letter
//                   </Link>
//                   <Link
//                     href="/dashboard/page"
//                     className="text-white hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-semibold"
//                   >
//                     Profile
//                   </Link>
//                   <Link
//                     href="/"
//                     className="bg-cyan-600 text-white block px-3 py-2 rounded-md text-base font-semibold"
//                     onClick={() => {
//                       handleLogout();
//                       handleLinkClick();
//                     }}
//                   >
//                     Logout
//                   </Link>
//                 </>
//               ) : (
//                 <>
//                   <Link
//                     href="/login2"
//                     className="bg-cyan-600 text-white block px-3 py-2 rounded-md text-base font-semibold"
//                     onClick={handleLinkClick}
//                   >
//                     Log in
//                   </Link>
//                   {/* <Link
//                     href="/signup"
//                     className="bg-cyan-600 text-white block px-3 py-2 rounded-md text-base font-semibold"
//                     onClick={handleLinkClick}
//                   >
//                     Sign up
//                   </Link> */}
//                 </>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import logo from "../Navbar/logo.png";
import Image from "next/image";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../components/Constant/constant";
import CibliJobId from "./CibliJobId";
import { useTranslation } from "react-i18next";
import { ResumeContext } from "../../components/context/ResumeContext";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isApiSuccess, setIsApiSuccess] = useState(false);
  const [user, setUser] = useState("");
  const [photo, setPhoto] = useState("");
  const router = useRouter();
  const axiosInstance = axios.create();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  const { selectedLang } = useContext(ResumeContext);
  useEffect(() => {
    const token = localStorage.getItem("token"); // Access localStorage here

    if (token) {
      setIsLoggedIn(true);

      // Check API success
      const checkApiSuccess = async () => {
        try {
          const response = await axios.get(
            `${BASE_URL}/api/user/user-profile?lang=${selectedLang}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );

          if (response.data.status === "success") {
            setIsApiSuccess(true);
            setUser(response.data.data.first_name);
            setPhoto(response.data.data.photo);
          } else {
            setIsApiSuccess(false);
            localStorage.removeItem("token");
            setIsLoggedIn(false);
            router.push("/login2");
          }
        } catch (error) {
          localStorage.removeItem("token");
          setIsApiSuccess(false);
          setIsLoggedIn(false);
          router.push("/login2");
        }
      };

      checkApiSuccess();
    } else {
      setIsLoggedIn(false);
    }
  }, [selectedLang]); // Dependency array should be empty to run only once after the first render
  // useEffect(() => {
  //   const token = localStorage.getItem("token"); // Access localStorage here

  //   if (token) {
  //     setIsLoggedIn(true);

  //     // Check API success
  //     const checkApiSuccess = async () => {
  //       try {
  //         const response = await axios.get(
  //           `${BASE_URL}/api/user/user-profile`,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`, // Add Bearer prefix
  //             },
  //           }
  //         );

  //         if (response.data.status === "success") {
  //           setIsApiSuccess(true);
  //           setUser(response.data.data.first_name);
  //           setPhoto(response.data.data.photo);
  //         } else {
  //           setIsApiSuccess(false);
  //         }
  //       } catch (error) {
  //         console.log("API Error:", error);
  //         // Handle 401 error by removing token and redirecting to login
  //         if (error.response && error.response.status === 401) {
  //           localStorage.removeItem("token"); // Remove invalid token
  //           setIsLoggedIn(false); // Set logged-out state
  //           router.push("/login2"); // Redirect to login page
  //         } else {
  //           setIsApiSuccess(false);
  //         }
  //       }
  //     };

  //     checkApiSuccess();
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, []);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => setIsMenuOpen(false);

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => setIsHovering(false);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        `${BASE_URL}/api/user/logout`,
        { token },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.removeItem("token");
      router.push("/login2");
    } catch (error) {
      console.error(
        "Error during logout:",
        error.response?.data || error.message
      );
      // Still remove token and redirect even if logout API fails
      localStorage.removeItem("token");
      router.push("/login2");
    }
  };

  // Setup axios interceptor
  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          handleLogout();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, []);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image src={logo} alt="logo" className="h-10  w-[140px]" />
            </Link>
          </div>
          <div className="hidden md:flex justify-center items-center space-x-4">
            {isLoggedIn ? (
              <div>
                <Link
                  href="/dashboard"
                  className="text-black hover:text-cyan-600 px-3 py-2 rounded-md text-lg font-semibold"
                >
                  {t("dashboard")}
                </Link>
                {/* <Link
                  href="/dashboard/resumelist"
                  className="text-white hover:text-cyan-600 px-3 py-2 rounded-md text-lg font-semibold"
                >
                  {t("my_resumes")}
                </Link>
                <Link
                  href="/dashboard/cvletterlist"
                  className="text-white hover:text-cyan-600 px-3 py-2 rounded-md text-lg font-semibold"
                >
                  {t("cover_letter")}
                </Link> */}
              </div>
            ) : (
              <></>
            )}
            {/* <LanguageSelector /> */}
            <Link
              href="/footers/AiResumeBuilder"
              className="text-black hover:text-cyan-600 px-3 py-2 rounded-md text-lg font-semibold"
            >
              {t("ai_resume_builder")}
            </Link>
            <Link
              href="/dashboard/myjobs"
              className="text-black hover:text-cyan-600 px-3 py-2 rounded-md text-lg font-semibold"
            >
              {t("jobs")}
            </Link>
            <Link
              href=""
              className="text-black hover:text-cyan-600 px-3 py-2 rounded-md text-lg font-semibold"
            >
              {t("resources")}
            </Link>
            <Link
              href=""
              onClick={handleOpenPopup}
              className="text-black hover:text-cyan-600 px-3 py-2 rounded-md text-lg font-semibold"
            >
              {t("cibli_job_id")}
              {/* CV2GO ID */}
            </Link>
            <CibliJobId isOpen={isPopupOpen} onClose={handleClosePopup} />
          </div>
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center bg-cyan-600 text-white px-4 py-2 text-md font-semibold border-2 rounded-xl"
                >
                  <img
                    src={
                      photo
                        ? `https://api.ciblijob.fr${photo}`
                        : "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg"
                    }
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />

                  <span className="ml-2">{user ? user : "profile"}</span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-black shadow-lg rounded-md text-white z-50">
                    <Link
                      href="/"
                      className="block px-4 py-2 hover:bg-cyan-600"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t("home")}
                    </Link>

                    <Link
                      href="/dashboard/page"
                      className="block px-4 py-2 hover:bg-cyan-600"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t("profile")}
                    </Link>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-cyan-600"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t("dashboard")}
                    </Link>
                    <Link
                      href="/dashboard/resumelist"
                      className="block px-4 py-2 hover:bg-cyan-600"
                    >
                      {t("my_resumes")}
                    </Link>
                    <Link
                      href="/dashboard/cvletterlist"
                      className="block px-4 py-2 hover:bg-cyan-600"
                    >
                      {t("cover_letter")}
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 hover:bg-cyan-600"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {/* <Settings className="mr-3 w-5 h-5 text-gray-500 group-hover:text-orange-500" /> */}
                      {/* <span className="text-gray-800 group-hover:text-orange-500"> */}
                      {t("settings")}
                      {/* </span> */}
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-cyan-600"
                    >
                      {t("logout")}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/login2"
                  className="bg-cyan-600 text-white  px-4 py-2 text-md font-semibold border-2 rounded-xl"
                >
                  {t("login")}
                </Link>
                <Link
                  href="/signup"
                  className="bg-cyan-600 text-white  px-4 py-2 text-md font-semibold border-2 rounded-xl"
                >
                  {t("signup")}
                </Link>
              </>
            )}
          </div>
          <div className="md:hidden ">
            <button
              onClick={handleMenuClick}
              className="text-white hover:text-cyan-600 focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black shadow-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/dashboard/myjobs"
                className="text-white hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-semibold"
              >
                {t("jobs")}
              </Link>
              <Link
                href="/footers/AiResumeBuilder"
                className="text-white hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-semibold"
              >
                {t("ai_resume_builder")}
              </Link>
              <Link
                href=""
                className="text-white hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-semibold"
              >
                {t("resources")}
              </Link>
              <Link
                href=""
                onClick={handleOpenPopup}
                className="text-white hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-semibold"
              >
                {t("cibli_job_id")}
              </Link>
              <CibliJobId isOpen={isPopupOpen} onClose={handleClosePopup} />
              {isLoggedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    className="text-white hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-semibold"
                  >
                    {t("dashboard")}
                  </Link>
                  <Link
                    href="/dashboard/resumelist"
                    className="text-white hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-semibold"
                  >
                    {t("my_resumes")}
                  </Link>
                  <Link
                    href="/dashboard/cvletterlist"
                    className="text-white hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-semibold"
                  >
                    {t("cover_letter")}
                  </Link>
                  <Link
                    href="/dashboard/page"
                    className="text-white hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-semibold"
                  >
                    {t("profile")}
                  </Link>
                  <Link
                    href="/settings"
                    className="text-white hover:text-cyan-600 block px-3 py-2 rounded-md text-base font-semibold"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {/* <Settings className="mr-3 w-5 h-5 text-gray-500 group-hover:text-orange-500" /> */}
                    {/* <span className="text-gray-800 group-hover:text-orange-500"> */}
                    {t("settings")}
                    {/* </span> */}
                  </Link>
                  <Link
                    href="/"
                    className="bg-cyan-600 text-white block px-3 py-2 rounded-md text-base font-semibold"
                    onClick={() => {
                      handleLogout();
                      handleLinkClick();
                    }}
                  >
                    {t("logout")}
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/login2"
                    className="bg-cyan-600 text-white block px-3 py-2 rounded-md text-base font-semibold"
                    onClick={handleLinkClick}
                  >
                    {t("login")}
                  </Link>
                  <Link
                    href="/signup"
                    className="bg-cyan-600 text-white block px-3 py-2 rounded-md text-base font-semibold"
                    onClick={handleLinkClick}
                  >
                    {t("signup")}
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
