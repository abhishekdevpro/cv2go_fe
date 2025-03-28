import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";
function AIEnhancedResumeAccuracy() {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto my-5 p-6 sm:p-10 shadow-lg bg-white rounded-lg">
        <h1 className="text-3xl font-bold my-4 ">{t("AI-Enhanced_h")}</h1>
        <h2> {t("AI-Enhanced_h1")}</h2>
        {t("AI-Enhanced_p1")}
        <h1 className="text-xl font-bold my-5">{t("AI-Enhanced_h1A")}</h1>
        <h1 className="text-sm font-semibold my-2">1. {t("AI-Enhanced_h2")}</h1>
        {t("AI-Enhanced_p2")}
        <h1 className="text-sm font-semibold my-2">2. {t("AI-Enhanced_h3")}</h1>
        {t("AI-Enhanced_p3")}
        <h1 className="text-sm font-semibold my-2">
          3. {t("AI-Enhanced_h3A")}
        </h1>
        {t("AI-Enhanced_p4")}
        <h1 className="text-sm font-semibold my-2">4. {t("AI-Enhanced_h4")}</h1>
        {t("AI-Enhanced_p5")}
        <h1 className="text-sm font-semibold my-2">5. {t("AI-Enhanced_h5")}</h1>
        {t("AI-Enhanced_p6")}
        <h1 className="text-sm font-semibold my-2">6. {t("AI-Enhanced_h6")}</h1>
        {t("AI-Enhanced_p7")}
        <h1 className="text-sm font-semibold my-2">7. {t("AI-Enhanced_h7")}</h1>
        {t("AI-Enhanced_p8")}
        <h1 className="text-lg font-bold my-4"> {t("AI-Enhanced_h8")}</h1>
        <h1 className="text-sm font-semibold my-2">{t("AI-Enhanced_h9")}</h1>
        {t("AI-Enhanced_p9")}
        <h1 className="text-sm font-semibold my-2"> {t("AI-Enhanced_h10")}</h1>
        {t("AI-Enhanced_p10")}
        <h1 className="text-sm font-semibold my-2"> {t("AI-Enhanced_h11")}</h1>
        {t("AI-Enhanced_p11")}
        <h1 className="text-sm font-semibold my-2"> {t("AI-Enhanced_h12")}</h1>
        {t("AI-Enhanced_p12")}
        <h1 className="text-sm font-semibold my-2"> {t("AI-Enhanced_h13")}</h1>
        {t("AI-Enhanced_p13")}
        <h1 className="text-lg font-bold my-4">{t("AI-Enhanced_h14")}</h1>
        <h1 className="text-sm font-semibold my-2">{t("AI-Enhanced_h15")}</h1>
        {t("AI-Enhanced_p14")}
        <h1 className="text-sm font-semibold my-2"> {t("AI-Enhanced_h16")}</h1>
        {t("AI-Enhanced_p15")}
        <h1 className="text-sm font-semibold my-2"> {t("AI-Enhanced_h17")}</h1>
        {t("AI-Enhanced_p16")}
        <h1 className="text-sm font-semibold my-2"> {t("AI-Enhanced_h18")} </h1>
        {t("AI-Enhanced_p17")}
        <h1 className="text-lg font-bold my-4">{t("AI-Enhanced_h19")}</h1>
        {t("AI-Enhanced_p18")}
      </div>
      <Footer />
    </div>
  );
}

export default AIEnhancedResumeAccuracy;
