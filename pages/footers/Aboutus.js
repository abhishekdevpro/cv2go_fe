import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";
function Aboutus() {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <div className="m-4 sm:mx-10 lg:mx-40 p-4 sm:p-6 shadow-2xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-4 underline">
          {t("about_us")}
        </h1>
        <p className="text-base sm:text-lg">{t("welcome_message")}</p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          {t("our_mission")}
        </h2>
        <p className="text-base sm:text-lg">{t("mission_description")}</p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          {t("why_choose_us")}
        </h2>
        <p className="text-base sm:text-lg">
          <strong>{t("expertise_experience")}</strong>{" "}
          {t("expertise_description")}
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          {t("personalized_approach")}
        </h2>
        <p className="text-base sm:text-lg">{t("personalized_description")}</p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          {t("proven_results")}
        </h2>
        <p className="text-base sm:text-lg">
          {t("proven_results_description")}
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          {t("our_services")}
        </h2>
        <p className="text-base sm:text-lg">
          <strong>{t("resume_writing")}:</strong>{" "}
          {t("resume_writing_description")}
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          {t("cover_letter_writing")}
        </h2>
        <p className="text-base sm:text-lg">{t("cover_letter_description")}</p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          {t("linkedin_optimization")}
        </h2>
        <p className="text-base sm:text-lg">
          {t("linkedin_optimization_description")}
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          {t("career_coaching")}
        </h2>
        <p className="text-base sm:text-lg">
          {t("career_coaching_description")}
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          {t("join_community")}
        </h2>
        <p className="text-base sm:text-lg">
          {t("join_community_description")}
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          {t("contact_us")}
        </h2>
        <p className="text-base sm:text-lg">{t("contact_us_description")}</p>
      </div>

      <Footer />
    </div>
  );
}

export default Aboutus;
