// import { useState } from "react";
// import { CheckCircle, DollarSign, Bell, Clock, RefreshCw } from "lucide-react";
// import Link from "next/link";
// import Navbar from "../Navbar/Navbar";
// import PricingSection from "../../components/Pricing/PricingPlan";

// export default function Payment() {
//   const [selectedPlan, setSelectedPlan] = useState("annual");

//   return (
//     <>
//       <Navbar />
//       <div className="p-6 max-w-7xl w-full mx-auto font-sans">
//         {/* Intro Section */}
//         <div className="bg-green-100 p-4 rounded-lg text-center">
//           <h2 className="text-lg md:text-xl font-semibold">
//             ✨ Cast a wider net – 10x your job applications
//           </h2>
//           <p className="text-gray-600 text-sm md:text-base">
//             Our AI-powered platform scours millions of jobs to continuously find
//             and apply to relevant job openings until you’re hired.
//           </p>
//         </div>

//         <h2 className="text-xl md:text-2xl font-bold mt-6 text-center">
//           Kudos! You’re one step closer to success 🎉
//         </h2>
//         <div className="flex flex-col justify-between gap-2">
//           <div>
//             {/* <PricingSection /> */}
//             {/* Plan Selection */}
//              <div className="flex flex-col md:flex-row justify-center mt-6 gap-4">
//               <PlanCard
//                 title="Trial access"
//                 price="$ 0"
//                 selected={selectedPlan === "trial"}
//                 onClick={() => setSelectedPlan("trial")}
//               />
//               <PlanCard
//                 title="Starting"
//                 price="$ 29 /Summary"
//                 selected={selectedPlan === "annual"}
//                 onClick={() => setSelectedPlan("annual")}
//               />
//             </div>

//             {/* Subscription Features */}
//             <div className="border p-6 mt-6 rounded-lg bg-gray-100">
//               <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm md:text-base">
//                 {selectedPlan === "trial" ? (
//                   <>
//                     <li>Create optimized resumes.</li>
//                     <li>Copy and paste content from site.</li>
//                     <li>Unlimited resume edits.</li>
//                     <li>Save resume as PDF and DOCs.</li>

//                     <li>Download fully formatted Resume.</li>
//                   </>
//                 ) : (
//                   <>
//                     <li>Create optimized resumes.</li>
//                     <li>Receive resume in PDF and DOCs.</li>
//                     <li>Cover letter included.</li>
//                     <li>3 revisions included.</li>
//                     <li>Speak one-on-one with writer.</li>
//                     <li>Final Delivery 1 week.</li>
//                   </>
//                 )}
//               </ul>
//             </div>
//           </div>
//           {/* Features & Payment Section */}
//           <div className="flex flex-col md:flex-row gap-6 mt-8">
//             {/* Features List */}
//             <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
//               <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
//                 All subscription features
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <Feature
//                   icon={<CheckCircle className="text-green-500" />}
//                   title="Automate your job search"
//                   description="We continuously scan millions of openings to find your top matches."
//                 />
//                 <Feature
//                   icon={<RefreshCw className="text-green-500" />}
//                   title="10x your job applications"
//                   description="Submit 10x as many applications with less effort than one manual application."
//                 />
//                 <Feature
//                   icon={<Bell className="text-green-500" />}
//                   title="Wake up to your best matches"
//                   description="Start each day with a list of roles matched to your skills and preferences."
//                 />
//                 <Feature
//                   icon={<Clock className="text-green-500" />}
//                   title="Save valuable hours every week"
//                   description="Reclaim your time by letting our AI handle the grunt work of job searching."
//                 />
//                 <Feature
//                   icon={<DollarSign className="text-green-500" />}
//                   title="Money-back guarantee"
//                   description="If you are unhappy for any reason during the trial, just let us know - we’ll refund your money."
//                 />
//                 <Feature
//                   icon={<CheckCircle className="text-green-500" />}
//                   title="24/7 customer support"
//                   description="Get assistance anytime with our award-winning customer care service."
//                 />
//               </div>
//               <div className=" mt-6">
//                 <Link href="/payment/plans">
//                   <button className="w-full bg-cyan-600 text-white text-lg font-semibold py-3 rounded-lg ">
//                     Next
//                   </button>
//                 </Link>
//                 <p className="text-gray-600 text-center mt-4">
//                   <strong>Got questions?</strong> Contact our 24/7 customer
//                   support.
//                 </p>
//                 <p className="text-gray-600 text-center">
//                   You may cancel by email, online, or by calling us toll-free at
//                   855-695-3235.
//                 </p>
//               </div>
//             </div>

//             {/* Payment Section */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // Plan Card Component
// function PlanCard({ title, price, selected, onClick }) {
//   return (
//     <button
//       className={`p-4 border rounded-lg w-full md:w-48 text-center ${
//         selected ? "border-cyan-600 bg-green-100" : "bg-white"
//       }`}
//       onClick={onClick}
//     >
//       <input
//         type="checkbox"
//         checked={selected}
//         readOnly
//         className="bg-cyan-600 text-cyan-600"
//       />
//       <p className="text-lg font-semibold">{title}</p>
//       <p className="text-2xl font-bold">{price}</p>
//     </button>
//   );
// }

// // Feature Component
// function Feature({ icon, title, description }) {
//   return (
//     <div className="flex space-x-3 items-start">
//       <div className="mt-1">{icon}</div>
//       <div>
//         <p className="font-semibold">{title}</p>
//         <p className="text-gray-600 text-sm">{description}</p>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { CheckCircle, DollarSign, Bell, Clock, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Navbar from "../Navbar/Navbar";

// Pricing data from your JSON
const pricingData = {
  title: "Pricing Plans",
  subtitle: "Choose the plan that works best for you",
  intro:
    "Our pricing plans are designed to accommodate all your resume building needs.",
  bestValueLabel: "Best Value",
  freeLabel: "Free",
  freePlan: {
    title: "Free Plan",
    billingCycle: "Free Plan",
    price: "0",
    bestValue: "false",
    buttonText: "Get Started",
    feature1: "Unlimited Resume Edits",
    feature2: "Download in PDF",
    feature3: "Interactive Dashboard",
    feature4: "2 Unique Resume Templates",
    feature5: "2 Color Options & 2 Fonts",
    feature6: "Resume Parsing (ATS-Friendly)",
    feature7: "French Language Support",
    feature8: "Job Search & Career Resources",
    feature9: "Cover Letter Builder",
    feature10: "Job Alerts & Tracking",
  },
  singlePass: {
    title: "Single Pass",
    price: "9.99",
    billingCycle: "single",
    bestValue: "false",
    buttonText: "Get Started",
    feature1: "Everything in Free +",
    feature2: "27 Unique Resume Templates",
    feature3: "5 Color Options & 6 Fonts",
    feature4: "Resume Parsing (ATS-Friendly)",
    feature5: "Free Cover Letter Builder",
    feature6: "AI Resume Score & Feedback",
    feature7: "Skill Tests & Analysis",
    feature8: "AI-Enabled Content",
    feature9: "Auto-Improvement",
    feature10: "ATS Optimization",
  },
  aiProMonth: {
    title: "AI Pro Month",
    price: "19.99",
    billingCycle: "month",
    bestValue: "false",
    buttonText: "Get Started",
    feature1: "Everything in Free +",
    feature2: "37 Unique Resume Templates",
    feature3: "8 Color Options & 6 Fonts",
    feature4: "Resume Parsing (ATS-Friendly)",
    feature5: "Free Cover Letter Builder",
    feature6: "AI Resume Score & Feedback",
    feature7: "Skill Tests & Analysis",
    feature8: "AI-Enabled Content",
    feature9: "Auto-Improvement",
    feature10: "ATS Optimization",
  },
  aiProYearly: {
    title: "AI Pro Yearly",
    price: "149.99",
    billingCycle: "year",
    bestValue: "true",
    buttonText: "Get Started",
    feature1: "Everything in Free +",
    feature2: "37 Unique Resume Templates",
    feature3: "8 Color Options & 6 Fonts",
    feature4: "Resume Parsing (ATS-Friendly)",
    feature5: "Free Cover Letter Builder",
    feature6: "AI Resume Score & Feedback",
    feature7: "Skill Tests & Analysis",
    feature8: "AI-Enabled Content",
    feature9: "Auto-Improvement",
    feature10: "ATS Optimization",
    feature11: "Most Affordable ATS Optimization",
  },
};

export default function Payment() {
  const [selectedPlan, setSelectedPlan] = useState("freePlan");
  const { t } = useTranslation();
  const router = useRouter();

  const handlePlanSelection = (planId) => {
    setSelectedPlan(planId);
  };

  const goToNextPage = () => {
    // Pass the selected plan to the next page as a query parameter
    router.push({
      pathname: "/payment/plans",
      query: { plan: selectedPlan },
    });
  };

  // Extract plans from the pricing data
  const plans = ["freePlan", "singlePass", "aiProMonth", "aiProYearly"];

  // Get features for a plan
  const getPlanFeatures = (planId) => {
    const plan = pricingData[planId];
    const features = [];

    for (let i = 1; i <= 11; i++) {
      const featureKey = `feature${i}`;
      if (plan[featureKey]) {
        features.push(plan[featureKey]);
      }
    }

    return features;
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-7xl w-full mx-auto font-sans">
        {/* Intro Section */}
        <div className="bg-green-100 p-4 rounded-lg text-center">
          <h2 className="text-lg md:text-xl font-semibold">
            ✨ {t("Cast a wider net – 10x your job applications")}
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            {t(
              "Our AI-powered platform scours millions of jobs to continuously find and apply to relevant job openings until you're hired."
            )}
          </p>
        </div>

        <h2 className="text-xl md:text-2xl font-bold mt-6 text-center">
          {t("Kudos! You're one step closer to success")} 🎉
        </h2>

        {/* Pricing Section Title */}
        <div className="text-center my-8">
          <h2 className="text-2xl font-bold">{t(pricingData.title)}</h2>
          <p className="text-gray-600 mt-2">{t(pricingData.subtitle)}</p>
          <p className="text-gray-500 mt-1">{t(pricingData.intro)}</p>
        </div>

        <div className="flex flex-col justify-between gap-2">
          <div>
            {/* Pricing Plans */}
            <div className="flex flex-col md:flex-row justify-center gap-4 flex-wrap">
              {plans.map((planId) => {
                const plan = pricingData[planId];
                return (
                  <div
                    key={planId}
                    className={`border rounded-lg p-4 flex flex-col w-full md:w-64 relative ${
                      selectedPlan === planId
                        ? "border-cyan-600 bg-green-50"
                        : "bg-white"
                    }`}
                    onClick={() => handlePlanSelection(planId)}
                  >
                    {/* {plan.bestValue === "true" && (
                      <div className="absolute -top-3 right-4 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full">
                        {t(pricingData.bestValueLabel)}
                      </div>
                    )} */}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">{t(plan.title)}</h3>
                      <input
                        type="checkbox"
                        checked={selectedPlan === planId}
                        onChange={() => {}}
                        className="h-5 w-5 text-cyan-600"
                      />
                    </div>

                    <div className="text-2xl font-bold mb-1">
                      {plan.price === "0"
                        ? t(pricingData.freeLabel)
                        : `$${t(plan.price)}${
                            plan.billingCycle !== "single"
                              ? `/${
                                  plan.billingCycle === "month"
                                    ? t("mo")
                                    : t("yr")
                                }`
                              : ""
                          }`}
                    </div>

                    <div className="text-sm text-gray-500 mb-4">
                      {t(plan.billingCycle)}
                    </div>

                    <div className="flex-grow">
                      <ul className="space-y-2 text-sm">
                        {getPlanFeatures(planId).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>{t(feature)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Plan Features */}
            {/* <div className="border p-6 mt-6 rounded-lg bg-gray-100">
              <h3 className="font-semibold mb-4">{t("Selected Plan Features")}</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm md:text-base">
                {getPlanFeatures(selectedPlan).map((feature, idx) => (
                  <li key={idx}>{t(feature)}</li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* Features & Payment Section */}
          <div className="flex flex-col md:flex-row gap-6 mt-8">
            {/* Features List */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
              <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
                {t("All subscription features")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Feature
                  icon={<CheckCircle className="text-green-500" />}
                  title={t("Automate your job search")}
                  description={t(
                    "We continuously scan millions of openings to find your top matches."
                  )}
                />
                <Feature
                  icon={<RefreshCw className="text-green-500" />}
                  title={t("10x your job applications")}
                  description={t(
                    "Submit 10x as many applications with less effort than one manual application."
                  )}
                />
                <Feature
                  icon={<Bell className="text-green-500" />}
                  title={t("Wake up to your best matches")}
                  description={t(
                    "Start each day with a list of roles matched to your skills and preferences."
                  )}
                />
                <Feature
                  icon={<Clock className="text-green-500" />}
                  title={t("Save valuable hours every week")}
                  description={t(
                    "Reclaim your time by letting our AI handle the grunt work of job searching."
                  )}
                />
                <Feature
                  icon={<DollarSign className="text-green-500" />}
                  title={t("Money-back guarantee")}
                  description={t(
                    "If you are unhappy for any reason during the trial, just let us know - we'll refund your money."
                  )}
                />
                <Feature
                  icon={<CheckCircle className="text-green-500" />}
                  title={t("24/7 customer support")}
                  description={t(
                    "Get assistance anytime with our award-winning customer care service."
                  )}
                />
              </div>
              <div className="mt-6">
                <button
                  onClick={goToNextPage}
                  className="w-full bg-cyan-600 text-white text-lg font-semibold py-3 rounded-lg"
                >
                  {t("Next")}
                </button>
                <p className="text-gray-600 text-center mt-4">
                  <strong>{t("Got questions?")}</strong>{" "}
                  {t("Contact our 24/7 customer support.")}
                </p>
                <p className="text-gray-600 text-center">
                  {t(
                    "You may cancel by email, online, or by calling us toll-free at 855-695-3235."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Feature Component
function Feature({ icon, title, description }) {
  return (
    <div className="flex space-x-3 items-start">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
