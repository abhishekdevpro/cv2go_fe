// import React, { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// const Sidebar = ({ onClose }) => {
//   const router = useRouter();
//   const [isLoggedIn, setIsLoggedIn] = useState();
//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Clear the token
//     setIsLoggedIn(false); // Update login state
//   };
//   const getLinkClassName = (path) => {
//     return router.pathname === path
//       ? "flex items-center p-2 bg-cyan-600 border-b-2 rounded font-semibold text-white"
//       : "flex items-center p-2 hover:bg-cyan-600  border-b-2 rounded font-semibold  ";
//   };

//   return (
//     <div className="bg-white h-screen p-4 border-r border-gray-200 md:block absolute  z-50">
//       {/* Sidebar links */}
//       <ul className="space-y-2 mt-4">
//         <li>
//           <Link
//             href="/dashboard"
//             className="flex items-center p-2 bg-black border-b-2 border-black font-semibold text-white"
//             onClick={onClose} // Close sidebar on link click
//           >
//             <span className="mr-10 ">🖥️</span>
//             <span>Dashboard</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/dashboard/page"
//             className={getLinkClassName("/dashboard/page")}
//             onClick={onClose} // Close sidebar on link click
//           >
//             <span className="mr-2">👤</span>
//             <span>Profile</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/dashboard/resume-builder"
//             className={getLinkClassName("/dashboard/resume-builder")}
//             onClick={onClose} // Close sidebar on link click
//           >
//             <span className="mr-2">🤖</span>
//             <span>AI Resume Builder</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="resumelist"
//             className={getLinkClassName("/dashboard/resumelist")}
//             onClick={onClose} // Close sidebar on link click
//           >
//             <span className="mr-2">📑</span>
//             <span>My Resumes</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="cvletterlist"
//             className={getLinkClassName("/dashboard/cvletterlist")}
//             onClick={onClose} // Close sidebar on link click
//           >
//             <span className="mr-2">📑</span>
//             <span>My Cover Letters</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="myjobs"
//             className={getLinkClassName("/dashboard/myjobs")}
//             onClick={onClose} // Close sidebar on link click
//           >
//             <span className="mr-2">📑</span>
//             <span>My Jobs</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="notification"
//             className={getLinkClassName("/dashboard/notification")}
//             onClick={onClose} // Close sidebar on link click
//           >
//             <span className="mr-2">🔔</span>
//             <span>Notifications</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="skilltest"
//             className={getLinkClassName("/dashboard/skilltest")}
//             onClick={onClose} // Close sidebar on link click
//           >
//             <span className="mr-2">📝</span>
//             <span>Skill Test</span>
//           </Link>
//         </li>
//         {/* <li>
//           <Link
//             href="addrefferal"
//             className={getLinkClassName("/dashboard/addrefferal")}
//             onClick={onClose} // Close sidebar on link click
//           >
//             <span className="mr-2">👥</span>
//             <span>Add Referral</span>
//           </Link>
//         </li> */}
//         <li>
//           <Link
//             href="skillhistorylist"
//             className={getLinkClassName("/dashboard/skillhistorylist")}
//             onClick={onClose} // Close sidebar on link click
//           >
//             <span className="mr-2">📊</span>
//             <span>Skill history</span>
//           </Link>
//         </li>
//         {/* <li>
//           <Link
//             href="reffrerallistpage"
//             className={getLinkClassName("/dashboard/reffrerallistpage")}
//             onClick={onClose} // Close sidebar on link click
//           >
//             <span className="mr-2">👥</span>
//             <span>Referral List</span>
//           </Link>
//         </li> */}
//         <li>
//           <Link
//             href="paymentpage"
//             className={getLinkClassName("/dashboard/paymentpage")}
//             onClick={onClose} // Close sidebar on link click
//           >
//             <span className="mr-2">💳</span>
//             <span>Payment</span>
//           </Link>
//         </li>
//         {/* <li>
//           <Link
//             href="password"
//             className={getLinkClassName("/dashboard/password")}
//             onClick={onClose} // Close sidebar on link click
//           >
//             <span className="mr-2">🔑</span>
//             <span>Change Password</span>
//           </Link>
//         </li> */}
//         <li>
//           <Link
//             href="/"
//             className="flex items-center p-2 hover:bg-cyan-600  border-b-2 rounded font-semibold"
//             onClick={() => {
//               handleLogout();
//             }}
//           >
//             <span className="mr-2 ">🔓</span>
//             <span>Log Out</span>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const Sidebar = ({ onClose }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState();
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    setIsLoggedIn(false); // Update login state
  };
  const getLinkClassName = (path) => {
    return router.pathname === path
      ? "flex items-center p-2 bg-cyan-600 border-b-2 rounded font-semibold text-white"
      : "flex items-center p-2 hover:bg-cyan-600  border-b-2 rounded font-semibold  ";
  };

  return (
    // <div className="bg-white h-screen p-4 border-r border-gray-200 md:block absolute  z-50">
    //   {/* Sidebar links */}
    //   <ul className="space-y-2 mt-4">
    //     <li>
    //       <Link
    //         href="/dashboard"
    //         className="flex items-center p-2 bg-black border-b-2 border-black font-semibold text-white"
    //         onClick={onClose} // Close sidebar on link click
    //       >
    //         <span className="mr-10 ">🖥️</span>
    //         <span>Dashboard</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         href="/dashboard/page"
    //         className={getLinkClassName("/dashboard/page")}
    //         onClick={onClose} // Close sidebar on link click
    //       >
    //         <span className="mr-2">👤</span>
    //         <span>Profile</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         href="/dashboard/resume-builder"
    //         className={getLinkClassName("/dashboard/resume-builder")}
    //         onClick={onClose} // Close sidebar on link click
    //       >
    //         <span className="mr-2">🤖</span>
    //         <span>AI Resume Builder</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         href="resumelist"
    //         className={getLinkClassName("/dashboard/resumelist")}
    //         onClick={onClose} // Close sidebar on link click
    //       >
    //         <span className="mr-2">📑</span>
    //         <span>My Resumes</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         href="cvletterlist"
    //         className={getLinkClassName("/dashboard/cvletterlist")}
    //         onClick={onClose} // Close sidebar on link click
    //       >
    //         <span className="mr-2">📑</span>
    //         <span>My Cover Letters</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         href="myjobs"
    //         className={getLinkClassName("/dashboard/myjobs")}
    //         onClick={onClose} // Close sidebar on link click
    //       >
    //         <span className="mr-2">📑</span>
    //         <span>My Jobs</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         href="notification"
    //         className={getLinkClassName("/dashboard/notification")}
    //         onClick={onClose} // Close sidebar on link click
    //       >
    //         <span className="mr-2">🔔</span>
    //         <span>Notifications</span>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         href="skilltest"
    //         className={getLinkClassName("/dashboard/skilltest")}
    //         onClick={onClose} // Close sidebar on link click
    //       >
    //         <span className="mr-2">📝</span>
    //         <span>Skill Test</span>
    //       </Link>
    //     </li>

    //     <li>
    //       <Link
    //         href="skillhistorylist"
    //         className={getLinkClassName("/dashboard/skillhistorylist")}
    //         onClick={onClose} // Close sidebar on link click
    //       >
    //         <span className="mr-2">📊</span>
    //         <span>Skill history</span>
    //       </Link>
    //     </li>

    //     <li>
    //       <Link
    //         href="paymentpage"
    //         className={getLinkClassName("/dashboard/paymentpage")}
    //         onClick={onClose} // Close sidebar on link click
    //       >
    //         <span className="mr-2">💳</span>
    //         <span>Payment</span>
    //       </Link>
    //     </li>

    //     <li>
    //       <Link
    //         href="/"
    //         className="flex items-center p-2 hover:bg-cyan-600  border-b-2 rounded font-semibold"
    //         onClick={() => {
    //           handleLogout();
    //         }}
    //       >
    //         <span className="mr-2 ">🔓</span>
    //         <span>Log Out</span>
    //       </Link>
    //     </li>
    //   </ul>
    // </div>
    <div className="bg-white h-screen p-4 border-r border-gray-200 md:block absolute z-50">
      <ul className="space-y-2 mt-4">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center p-2 bg-black border-b-2 border-black font-semibold text-white"
            onClick={onClose}
          >
            <span className="mr-10">🖥️</span>
            <span>{t("dashboard")}</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/started"
            className={getLinkClassName("/dashboard/started")}
            onClick={onClose}
          >
            <span className="mr-2">👤</span>
            <span>Get Started</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/resumefromstarted"
            className={getLinkClassName("/dashboard/resumefromstarted")}
            onClick={onClose}
          >
            <span className="mr-2">👤</span>
            <span>Document Center</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/page"
            className={getLinkClassName("/dashboard/page")}
            onClick={onClose}
          >
            <span className="mr-2">👤</span>
            <span>{t("profile")}</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/resume-builder"
            className={getLinkClassName("/dashboard/resume-builder")}
            onClick={onClose}
          >
            <span className="mr-2">🤖</span>
            <span>{t("ai_resume_builder")}</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/resumelist"
            className={getLinkClassName("/dashboard/resumelist")}
            onClick={onClose}
          >
            <span className="mr-2">📑</span>
            <span>{t("my_resumes")}</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/cvletterlist"
            className={getLinkClassName("/dashboard/cvletterlist")}
            onClick={onClose}
          >
            <span className="mr-2">📑</span>
            <span>{t("my_cover_letters")}</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/myjobs"
            className={getLinkClassName("/dashboard/myjobs")}
            onClick={onClose}
          >
            <span className="mr-2">📑</span>
            <span>{t("my_jobs")}</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/notification"
            className={getLinkClassName("/dashboard/notification")}
            onClick={onClose}
          >
            <span className="mr-2">🔔</span>
            <span>{t("notifications")}</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/skilltest"
            className={getLinkClassName("/dashboard/skilltest")}
            onClick={onClose}
          >
            <span className="mr-2">📝</span>
            <span>{t("skill_test")}</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/skillhistorylist"
            className={getLinkClassName("/dashboard/skillhistorylist")}
            onClick={onClose}
          >
            <span className="mr-2">📊</span>
            <span>{t("skill_history")}</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/paymentpage"
            className={getLinkClassName("/dashboard/paymentpage")}
            onClick={onClose}
          >
            <span className="mr-2">💳</span>
            <span>{t("payment")}</span>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex items-center p-2 hover:bg-cyan-600 border-b-2 rounded font-semibold"
            onClick={() => {
              handleLogout();
            }}
          >
            <span className="mr-2">🔓</span>
            <span>{t("logout")}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
