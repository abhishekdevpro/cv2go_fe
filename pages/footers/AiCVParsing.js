import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";

function AiCVParsing() {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto my-5 p-6 sm:p-10 shadow-lg bg-white rounded-lg">
        <h1 className="text-3xl font-bold my-4 ">{t("Ai_CV_Parsing_h")}</h1>
        <h2> {t("Ai_CV_Parsing_h1")}</h2>
        {t("Ai_CV_Parsing_p1")}
        <h1 className="text-xl font-bold my-5">{t("Ai_CV_Parsing_h2")}</h1>
        <h1 className="text-sm font-semibold my-2">
          1. {t("Ai_CV_Parsing_h3")}
        </h1>
        {t("Ai_CV_Parsing_p2")}
        <h1 className="text-sm font-semibold my-2">
          2. {t("Ai_CV_Parsing_h4")}
        </h1>
        {t("Ai_CV_Parsing_p3")}
        <h1 className="text-sm font-semibold my-2">
          3. {t("Ai_CV_Parsing_h5")}
        </h1>
        {t("Ai_CV_Parsing_p4")}
        <h1 className="text-sm font-semibold my-2">
          4. {t("Ai_CV_Parsing_h6")}
        </h1>
        {t("Ai_CV_Parsing_p5")}
        <h1 className="text-sm font-semibold my-2">
          5. {t("Ai_CV_Parsing_h7")}
        </h1>
        {t("Ai_CV_Parsing_p6")}
        <h1 className="text-sm font-semibold my-2">
          6. {t("Ai_CV_Parsing_h8")}
        </h1>
        {t("Ai_CV_Parsing_p7")}
        <h1 className="text-sm font-semibold my-2">
          7. {t("Ai_CV_Parsing_h9")}
        </h1>
        {t("Ai_CV_Parsing_p8")}
        <h1 className="text-lg font-bold my-4">{t("Ai_CV_Parsing_h10")}</h1>
        <h1 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h11")}</h1>
        {t("Ai_CV_Parsing_p9")}
        <h1 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h12")}</h1>
        {t("Ai_CV_Parsing_p10")}
        <h1 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h13")}</h1>
        {t("Ai_CV_Parsing_p11")}
        <h1 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h14")}</h1>
        {t("Ai_CV_Parsing_p12")}
        <h1 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h15")}</h1>
        {t("Ai_CV_Parsing_p13")}
        <h1 className="text-lg font-bold my-4">{t("Ai_CV_Parsing_h16")}</h1>
        <h1 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h17")}</h1>
        {t("Ai_CV_Parsing_p14")}
        <h1 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h18")}</h1>
        {t("Ai_CV_Parsing_p15")}
        <h1 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h19")}</h1>
        {t("Ai_CV_Parsing_p16")}
        <h1 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h20")}</h1>
        {t("Ai_CV_Parsing_p17")}
        <h1 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h21")}</h1>
        {t("Ai_CV_Parsing_p18")}
        <h1 className="text-sm font-semibold my-2">{t("Ai_CV_Parsing_h22")}</h1>
        {t("Ai_CV_Parsing_p19")}
      </div>
      <Footer />
    </div>
  );
}

export default AiCVParsing;
