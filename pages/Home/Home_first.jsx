// import Link from "next/link";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import image1 from "./Images/homeimage1.jpg";
// import image2 from "./Images/homeimage2.jpg";
// import image3 from "./Images/homeimage3.jpg";
// import Image from "next/image";
// import Home_second from "./Home_second";
// import { useEffect, useState } from "react";

// import ImageSlider from "./Slider_details";
// function Home_first() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     // Check for the token (you can adjust based on where the token is stored)
//     const token = localStorage.getItem("token");
//     setIsAuthenticated(!!token);
//   }, []);
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   const images = [image1, image2, image3];

//   return (
//     <>
//       <div className="bg-gray-100 pt-10 w-full overflow-hidden">
//         <div className="container mx-auto">
//           <div className="flex justify-center md:hidden">
//             <Link
//               href="/Home/FAQ/Contact"
//               className="text-black bg-red-300 px-3 py-4 rounded-3xl font-bold text-center"
//             >
//               Contact us
//             </Link>
//           </div>

//           <div className="py-9 px-5 flex gap-3 md:gap-10 md:justify-evenly items-center flex-col md:flex-row">
//             {/* Content Section */}
//             <div className="px-3 py-3 w-full md:w-[500px]">
//               <div className=" flex flex-col gap-4 ">
//                 <div className="font-extrabold text-5xl font-sans">
//                   &quot;CV2GO&quot; AI Powered Resume Tool, Is Live NOW
//                 </div>

//                 <div className=" text-lg font-medium text-slate-700">
//                   Resume Score, Enhanced Resume & much more. Now Apply Job with
//                   confidence with our all in one solution under one roof.
//                 </div>
//                 <div className=" flex flex-wrap gap-4">
//                   {/* <Link href={isAuthenticated ? "/dashboard" : "/signup"}>
//                         <button className='  px-6 py-2 text-lg text-white bg-cyan-600 rounded-full font-bold hover:shadow-2xl hover:shadow-slate-500'

//                         > Sign Up! Its 100% Free!</button>
//                         </Link> */}
//                   <Link
//                     href={
//                       isAuthenticated ? "/dashboard/resume-builder" : "/login2"
//                     }
//                   >
//                     <button className=" text-white bg-black text-lg px-6 py-2 rounded-full  font-bold hover:shadow-2xl hover:shadow-slate-500 ">
//                       {" "}
//                       Build your Resume
//                     </button>
//                   </Link>
//                 </div>
//                 {/* <div className=' flex flex-wrap'>EXCELLENT <img src='https://www.resume-now.com/sapp/themes/resumenow/img/stars-4.5.svg' className=' h-6 w-16'/> rating 9212 reviews on <img src='https://www.resume-now.com/sapp/themes/resumenow/img/trustpilot-black.png' className=' h-6 w-16'/></div> */}
//                 <div className=" font-bold text-base">
//                   <i className="fa-solid fa-star text-yellow-500"></i>{" "}
//                   <i className="fa-solid fa-star text-yellow-500"></i>{" "}
//                   <i className="fa-solid fa-star text-yellow-500"></i>{" "}
//                   <i className="fa-solid fa-star text-yellow-500"></i>{" "}
//                   <i className="fa-solid fa-star text-yellow-500"></i> Reviews
//                   Certified by Recruiters & Admired by Jobseekers
//                 </div>
//                 <div className=" flex items-center align-middle ">
//                   <div className=" text-lg font-bold">As Featured on</div>
//                   <div>
//                     <img
//                       src="https://png.pngtree.com/png-clipart/20190613/original/pngtree-linked-in-icon-png-image_3584856.jpg"
//                       className=" h-24 w-24"
//                     />
//                   </div>
//                   {/* <div><img src='https://logowik.com/content/uploads/images/usa-today.jpg' className=' h-24 w-24'/></div> */}
//                   <div>
//                     <img
//                       src="https://parspng.com/wp-content/uploads/2021/09/instagram-7.png"
//                       className=" h-16 w-full"
//                     />
//                   </div>
//                 </div>
//                 {/* <img src='https://www.resume-now.com/sapp/themes/resumenow/img/exp/rs-brands-d.png' className=' h-7 md:h-10 rounded-xl'/> */}
//               </div>
//             </div>
//             {/* Image Slider Section */}
//             <div className="px-6 py-3">
//               <div className="hidden md:block md:max-w-lg p-4">
//                 <Slider {...settings}>
//                   {images?.map((image, index) => (
//                     <div key={index} className="w-full">
//                       <Image
//                         src={image}
//                         alt={`slide-${index}`}
//                         width={320}
//                         height={240}
//                         className="transition-transform transform hover:scale-105 md:h-auto md:w-96 "
//                       />
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ImageSlider />
//       <Home_second />
//     </>
//   );
// }

// export default Home_first;

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./Images/homeimage1.jpg";
import image2 from "./Images/homeimage2.jpg";
import image3 from "./Images/homeimage3.jpg";
import Image from "next/image";
import Home_second from "./Home_second";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

import ImageSlider from "./Slider_details";
import Home_step from "./Home-steps";
import Home_third from "./Home_third";
import ATSResumeSection from "./ATS-section";
import Home_fourth from "./Home_fourth";

function Home_first() {
  const { t } = useTranslation(); // Initialize useTranslation hook
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for the token (you can adjust based on where the token is stored)
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [image1, image2, image3];

  return (
    <>
      <div className="bg-gray-100 pt-10 w-full overflow-hidden">
        <div className="container mx-auto">
          <div className="flex justify-center md:hidden">
            <Link
              href="/Home/FAQ/Contact"
              className="text-black bg-red-300 px-3 py-4 rounded-3xl font-bold text-center"
            >
              {t("contact_us")} {/* Use translation key */}
            </Link>
          </div>

          <div className="py-9 px-5 flex gap-3 md:gap-10 md:justify-evenly items-center flex-col md:flex-row">
            {/* Content Section */}
            <div className="px-3 py-3 w-full md:w-[500px]">
              <div className="flex flex-col gap-4">
                <div className="font-extrabold text-5xl font-sans">
                  " CV2GO" AI Powered Resume Tool, is Live NOW
                </div>

                <div className="text-lg font-medium text-slate-700">
                  Resume Score, Enhanced Resume & much more. Now Apply Job with
                  confidence with our all-in-one solution under one roof.
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href={
                      isAuthenticated ? "/dashboard/resume-builder" : "/login2"
                    }
                  >
                    <button className="text-white bg-black text-lg px-6 py-2 rounded-full font-bold hover:shadow-2xl hover:shadow-slate-500">
                      {t("build_resume")} {/* Use translation key */}
                    </button>
                  </Link>
                </div>

                <div className="font-bold text-base">
                  <i className="fa-solid fa-star text-yellow-500"></i>{" "}
                  <i className="fa-solid fa-star text-yellow-500"></i>{" "}
                  <i className="fa-solid fa-star text-yellow-500"></i>{" "}
                  <i className="fa-solid fa-star text-yellow-500"></i>{" "}
                  <i className="fa-solid fa-star text-yellow-500"></i>{" "}
                  {t("reviews_certified")}
                </div>
                <div className="flex items-center align-middle">
                  <div className="text-lg font-bold">{t("featured_on")}</div>
                  <div>
                    <img
                      src="https://png.pngtree.com/png-clipart/20190613/original/pngtree-linked-in-icon-png-image_3584856.jpg"
                      className="h-24 w-24"
                    />
                  </div>
                  <div>
                    <img
                      src="https://parspng.com/wp-content/uploads/2021/09/instagram-7.png"
                      className="h-16 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Image Slider Section */}
            <div className="px-6 py-3">
              <div className="hidden md:block md:max-w-lg p-4">
                <Slider {...settings}>
                  {images?.map((image, index) => (
                    <div key={index} className="w-full">
                      <Image
                        src={image}
                        alt={`slide-${index}`}
                        width={320}
                        height={240}
                        className="transition-transform transform hover:scale-105 md:h-auto md:w-96"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Home_step />
      <ATSResumeSection />
      <Home_third />
      {/* <Home_fourth /> */}
      {/* <ImageSlider />
      <Home_second /> */}
    </>
  );
}

export default Home_first;
