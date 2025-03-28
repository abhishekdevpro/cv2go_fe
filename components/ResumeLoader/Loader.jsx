"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const FullScreenLoader = () => {
  const { t } = useTranslation();
  useEffect(() => {
    // Inject the animation styles when the component is mounted
    const style = document.createElement("style");
    style.textContent = `
      @keyframes progress {
        0% { width: 0%; }
        50% { width: 70%; }
        100% { width: 100%; }
      }

      .animate-progress {
        animation: progress 3s linear infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Clean up the style when the component is unmounted
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center max-w-md w-full px-4">
        {/* Resume Preview Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 mx-auto mb-8 relative">
          {/* Blue header bar */}
          <div className="bg-cyan-600 h-12 absolute top-0 left-0 right-0 rounded-t-lg"></div>

          {/* Resume Content Preview */}
          <div className="mt-16 space-y-4">
            {/* Animated lines */}
            <div className="h-4 bg-gray-100 rounded animate-pulse w-1/4"></div>
            <div className="h-4 bg-gray-100 rounded animate-pulse w-3/4"></div>
            <div className="h-4 bg-gray-100 rounded animate-pulse w-2/3"></div>
            <div className="h-4 bg-gray-100 rounded animate-pulse w-1/2"></div>
            <div className="h-4 bg-gray-100 rounded animate-pulse w-3/4"></div>
          </div>
        </div>

        {/* Loading Indicator */}
        <div className="space-y-4">
          {/* Progress Bar */}
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-600 rounded-full animate-progress"></div>
          </div>

          {/* Loading Text */}
          <h2 className="text-xl font-semibold text-gray-800">
            {t("analyzingResume.title")}
          </h2>
          <p className="text-gray-600">{t("analyzingResume.description")}</p>
        </div>
      </div>
    </div>
  );
};

export default FullScreenLoader;

// import { useTranslation } from "react-i18next";

// export default function ExperienceStep({ onNext, onChange, value }) {
//   const { t } = useTranslation();

//   const experiences = [
//     { id: "none", label: t("experienceStep.options.none") },
//     { id: "less-3", label: t("experienceStep.options.less-3") },
//     { id: "3-5", label: t("experienceStep.options.3-5") },
//     { id: "5-10", label: t("experienceStep.options.5-10") },
//     { id: "10-plus", label: t("experienceStep.options.10-plus") },
//   ];

//   return (
//     <>
//       <div className="space-y-6">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-900">
//             {t("experienceStep.title")}
//           </h2>
//           <p className="mt-2 text-gray-600">
//             {t("experienceStep.description")}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {experiences.map((exp) => (
//             <button
//               key={exp.id}
//               onClick={() => {
//                 onChange(exp.id);
//                 onNext();
//               }}
//               className={`p-4 rounded-lg border-2 transition-all ${
//                 value === exp.id
//                   ? "border-green-500 bg-blue-50"
//                   : "border-gray-200 hover:border-green-400"
//               }`}
//             >
//               {exp.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
