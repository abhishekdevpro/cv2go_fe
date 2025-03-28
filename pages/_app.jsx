// import "/styles/globals.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import { ResumeProvider } from "../components/context/ResumeContext";
// import { CoverLetterProvider } from "../components/context/CoverLetterContext";
// import { appWithTranslation } from "next-i18next";
// import "../components/utils/i18n";
// import axios from "axios";
// function App({ Component, pageProps }) {
//   const router = useRouter();

//   const googleTranslateElementInit = () => {
//     new window.google.translate.TranslateElement(
//       {
//         pageLanguage: "fr",
//         autoDisplay: false,
//         includedLanguages: "en,fr", // Only English and French
//         layout: google.translate.TranslateElement.InlineLayout.SIMPLE, // Optional: Simplifies UI
//       },
//       "google_translate_element"
//     );
//   };

//   useEffect(() => {
//     var addScript = document.createElement("script");
//     addScript.setAttribute(
//       "src",
//       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
//     );
//     document.body.appendChild(addScript);
//     window.googleTranslateElementInit = googleTranslateElementInit;
//   }, []);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     // const adminToken = localStorage.getItem("adminToken");
//     const isDashboardRoute = router.pathname.startsWith("/dashboard");
//     const isAdminRoute = router.pathname.startsWith("/admin");

//     // Redirect if no token is found
//     if (isDashboardRoute && !token) {
//       // localStorage.setItem("redirectAfterLogin", router.pathname);
//       router.push("/login2");
//     }

//     if (isAdminRoute && !token) {
//       // localStorage.setItem("redirectAfterAdminLogin", router.pathname);
//       router.push("/adminlogin");
//     }

//     // Set up Axios interceptor to catch 401 responses
//     const interceptor = axios.interceptors.response.use(
//       (response) => response,
//       (error) => {
//         // Check if the error response is a 401 Unauthorized
//         if (error.response && error.response.status === 401) {
//           localStorage.removeItem("token"); // Clear token
//           router.push("/login"); // Redirect to login
//         }
//         return Promise.reject(error);
//       }
//     );

//     return () => {
//       axios.interceptors.response.eject(interceptor);
//       console.log("Interceptor ejected.");
//     };
//   }, [router.pathname]);

//   return (
//     <>
//       <div id="google_translate_element"></div>
//       <ResumeProvider>
//         <CoverLetterProvider>
//           <Component {...pageProps} />
//           <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
//         </CoverLetterProvider>
//       </ResumeProvider>
//     </>
//   );
// }

// export default appWithTranslation(App);

import "/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ResumeProvider } from "../components/context/ResumeContext";
import { CoverLetterProvider } from "../components/context/CoverLetterContext";
import { appWithTranslation } from "next-i18next";
import "../components/utils/i18n";
import axios from "axios";
import LanguageSelector from "./Navbar/LanguageSelector";
import CookieConsent from "../components/Pricing/CookieConsent";

function App({ Component, pageProps }) {
  const router = useRouter();

  const googleTranslateElementInit = () => {
    let savedLanguage = localStorage.getItem("selectedLang") || "en"; // Default to French

    new window.google.translate.TranslateElement(
      {
        pageLanguage: savedLanguage,
        autoDisplay: false,
        includedLanguages: "en", // Only English and French
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  // useEffect(() => {
  //   // Set default language in localStorage if not set
  //   if (!localStorage.getItem("selectedLanguage")) {
  //     localStorage.setItem("selectedLanguage", "fr"); // Default to French
  //   }
  // }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const isDashboardRoute = router.pathname.startsWith("/dashboard");
    const isAdminRoute = router.pathname.startsWith("/admin");

    // Redirect if no token is found
    if (isDashboardRoute && !token) {
      router.push("/login2");
    }

    if (isAdminRoute && !token) {
      router.push("/adminlogin");
    }

    // Set up Axios interceptor to catch 401 responses
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("token"); // Clear token
          router.push("/login2"); // Redirect to login
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
      console.log("Interceptor ejected.");
    };
  }, [router.pathname]);

  return (
    <>
      <ResumeProvider>
        <CoverLetterProvider>
          {/* <LanguageSelector /> */}
          <Component {...pageProps} />
          <CookieConsent />
          <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
        </CoverLetterProvider>
      </ResumeProvider>
    </>
  );
}

export default appWithTranslation(App);
