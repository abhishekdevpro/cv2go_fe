// "use client"
// import React from 'react';
// import { useTranslation } from 'next-i18next';
// import { Check } from 'lucide-react';

// const PricingSection = () => {
//   const { t } = useTranslation();

//   // Plan types
//   const planTypes = ['freePlan', 'singlePass', 'aiProMonth', 'aiProYearly'];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold mb-6 text-gray-800">
//             {t('pricing.title')}
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             {t('pricing.intro')}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {planTypes.map((planType) => (
//             <div
//               key={planType}
//               className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
//             >
//               <div className="p-6 border-b border-gray-100">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                   {t(`pricing.${planType}.title`)}
//                 </h3>

//                 <div className="flex items-baseline mb-1">
//                   <span className="text-3xl font-bold text-gray-900">
//                     {Number(t(`pricing.${planType}.price`)) === 0
//                       ? t('pricing.freeLabel')
//                       : `$${t(`pricing.${planType}.price`)}`}
//                   </span>
//                   {t(`pricing.${planType}.billingCycle`) && (
//                     <span className="text-gray-500 ml-1 text-sm">
//                       /{t(`pricing.${planType}.billingCycle`)}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               <div className="p-6">
//                 <ul className="space-y-3">
//                   {Array.from({ length: 10 }).map((_, index) => {
//                     const feature = t(`pricing.${planType}.feature${index + 1}`);
//                     if (!feature || feature === `pricing.${planType}.feature${index + 1}`) {
//                       return null;
//                     }
//                     return (
//                       <li key={index} className="flex items-start">
//                         <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
//                         <span className="text-gray-600 text-sm">{feature}</span>
//                       </li>
//                     );
//                   })}
//                 </ul>

//                 <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300"
//                 >
//                   {t(`pricing.${planType}.buttonText`)}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;

// "use client";
// import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'next-i18next';
// import { Check } from 'lucide-react';
// import { useRouter } from 'next/router';

// const PricingSection = () => {
//   const { t } = useTranslation();
//   const router = useRouter()
//   // State to track if the component is mounted on the client
//   const [isMounted, setIsMounted] = useState(false);

//   // Ensure the component only renders on the client side
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);
//  const handleClick =()=>{
//     const token = localStorage.getItem("token")
//     {token?router.push('/payment'):"/login2"}
//  }
//   // Plan types
//   const planTypes = ['freePlan', 'singlePass', 'aiProMonth', 'aiProYearly'];

//   // If the component hasn't mounted yet, return null to avoid rendering on the server
//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl container mx-auto px-4">
//         {/* <div className="text-center mb-16">
//           <h1 className="text-4xl font-bold mb-6 text-gray-800">
//             {t('pricing.title')}
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             {t('pricing.intro')}
//           </p>
//         </div> */}

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {planTypes.map((planType) => (
//             <div
//               key={planType}
//               className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
//             >
//               <div className="p-6 border-b border-gray-100">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                   {t(`pricing.${planType}.title`)}
//                 </h3>

//                 <div className="flex items-baseline mb-1">
//                   <span className="text-3xl font-bold text-gray-900">
//                     {Number(t(`pricing.${planType}.price`)) === 0
//                       ? t('pricing.freeLabel')
//                       : `$${t(`pricing.${planType}.price`)}`}
//                   </span>
//                   {t(`pricing.${planType}.billingCycle`) && (
//                     <span className="text-gray-500 ml-1 text-sm">
//                       /{t(`pricing.${planType}.billingCycle`)}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               <div className="p-6">
//                 <ul className="space-y-3">
//                   {Array.from({ length: 10 }).map((_, index) => {
//                     const feature = t(`pricing.${planType}.feature${index + 1}`);
//                     if (!feature || feature === `pricing.${planType}.feature${index + 1}`) {
//                       return null;
//                     }
//                     return (
//                       <li key={index} className="flex items-start">
//                         <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
//                         <span className="text-gray-600 text-sm">{feature}</span>
//                       </li>
//                     );
//                   })}
//                 </ul>

//                 <button className="w-full mt-8 bg-cyan-600 hover:bg-cyan-600 text-white font-medium py-3 px-4 rounded-lg transition duration-300"
//                   onClick={handleClick}
//                 >
//                   {t(`pricing.${planType}.buttonText`)}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;
"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { Check } from "lucide-react";
import { useRouter } from "next/router";

const PricingSection = () => {
  const { t } = useTranslation();
  const router = useRouter();
  // State to track if the component is mounted on the client
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component only renders on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = (planType) => {
    const token = localStorage.getItem("token");

    if (planType === "freePlan") {
      // If it's the free plan, route to dashboard if logged in, otherwise to login2
      token ? router.push("/dashboard") : router.push("/login2");
    } else {
      // For paid plans, route to payment if logged in, otherwise to login2
      token ? router.push("/payment") : router.push("/login2");
    }
  };

  // Plan types
  const planTypes = ["freePlan", "singlePass", "aiProMonth", "aiProYearly"];

  // If the component hasn't mounted yet, return null to avoid rendering on the server
  if (!isMounted) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl container mx-auto px-4">
        {/* <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            {t('pricing.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('pricing.intro')}
          </p>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {planTypes.map((planType) => (
            <div
              key={planType}
              className="bg-black rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-white mb-2">
                  {t(`pricing.${planType}.title`)}
                </h3>

                <div className="flex items-baseline mb-1">
                  <span className="text-3xl font-bold text-white">
                    {Number(t(`pricing.${planType}.price`)) === 0
                      ? t("pricing.freeLabel")
                      : `$${t(`pricing.${planType}.price`)}`}
                  </span>
                  {t(`pricing.${planType}.billingCycle`) && (
                    <span className="text-white ml-1 text-sm">
                      /{t(`pricing.${planType}.billingCycle`)}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {Array.from({ length: 10 }).map((_, index) => {
                    const feature = t(
                      `pricing.${planType}.feature${index + 1}`
                    );
                    if (
                      !feature ||
                      feature === `pricing.${planType}.feature${index + 1}`
                    ) {
                      return null;
                    }
                    return (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-white text-sm">{feature}</span>
                      </li>
                    );
                  })}
                </ul>

                <button
                  className="w-full mt-8 bg-cyan-600 hover:bg-cyan-800 text-white font-medium py-3 px-4 rounded-lg transition duration-300"
                  onClick={() => handleClick(planType)}
                >
                  {t(`pricing.${planType}.buttonText`)}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
