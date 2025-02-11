// import "/styles/globals.css";
// // In your component or _app.js
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
// function App({ Component, pageProps }) {
//   const router = useRouter();

//   const googleTranslateElementInit = () => {
//     new window.google.translate.TranslateElement(
//       {
//         pageLanguage: "en",
//         autoDisplay: false,
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
//     const adminToken = localStorage.getItem("token"); // Separate token for admin
//     const isDashboardRoute = router.pathname.startsWith("/dashboard");
//     const isAdminRoute = router.pathname.startsWith("/admin"); // Check for admin routes

//     if (isDashboardRoute && !token) {
//       // Save the attempted route for dashboard user
//       localStorage.setItem("redirectAfterLogin", router.pathname);
//       router.push("/login2"); // Redirect to login for dashboard user
//     }

//     if (isAdminRoute && !token) {
//       // Save the attempted route for admin
//       localStorage.setItem("redirectAfterAdminLogin", router.pathname);
//       router.push("/adminlogin"); // Redirect to admin login if accessing admin route without a token
//     }
//   }, [router.pathname]);
//   // console.log(router.pathname);
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
function App({ Component, pageProps }) {
  const router = useRouter();

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
        includedLanguages: "en,fr", // Only English and French
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE, // Optional: Simplifies UI
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    // const adminToken = localStorage.getItem("adminToken");
    const isDashboardRoute = router.pathname.startsWith("/dashboard");
    const isAdminRoute = router.pathname.startsWith("/admin");

    // Redirect if no token is found
    if (isDashboardRoute && !token) {
      // localStorage.setItem("redirectAfterLogin", router.pathname);
      router.push("/login2");
    }

    if (isAdminRoute && !token) {
      // localStorage.setItem("redirectAfterAdminLogin", router.pathname);
      router.push("/adminlogin");
    }

    // Set up Axios interceptor to catch 401 responses
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        // Check if the error response is a 401 Unauthorized
        if (error.response && error.response.status === 401) {
          // Check if the error came from the user-related API
          // if (error.config.url.includes("user")) {
          //   console.log("User token invalid, removing token...");
          //   localStorage.removeItem("token"); // Remove user token
          //   router.push("/login2"); // Redirect to login page
          // }

          // // Check if the error came from the admin-related API
          // if (error.config.url.includes("admin")) {
          //   console.log("Admin token invalid, removing admin token...");
          //   localStorage.removeItem("adminToken"); // Remove admin token
          //   router.push("/adminlogin"); // Redirect to admin login
          // }
          localStorage.removeItem("token"); // Clear token
          router.push("/login"); // Redirect to login
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
      <div id="google_translate_element"></div>
      <ResumeProvider>
        <CoverLetterProvider>
          <Component {...pageProps} />
          <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
        </CoverLetterProvider>
      </ResumeProvider>
    </>
  );
}

export default appWithTranslation(App);
