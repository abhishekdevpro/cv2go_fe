import React, { useTransition } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";
function AiSkillTests() {
  const { t } = useTranslation();
  return (
    <div>
      <Navbar />
      <div className=" max-w-4xl mx-auto my-5 p-6 sm:p-10 shadow-lg bg-white rounded-lg">
        <h1 className="text-4xl font-semibold my-4 underline ">
          {t("Ai_Skill_Tests")}
        </h1>
        <h1 className="text-2xl font-semibold my-2 mt-5 ">
          {t("Ai_Skill_Tests_heading1")}
        </h1>
        {t("Ai_Skill_Tests_paragraph1")}
        <h1 className="text-2xl font-semibold my-2 mt-5">
          {t("Ai_Skill_Tests_heading2")}
        </h1>
        <h1 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading3")}
        </h1>
        {t("Ai_Skill_Tests_paragraph2")}
        <h1 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading4")}
        </h1>
        {t("Ai_Skill_Tests_paragraph3")}
        <h1 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading5")}
        </h1>
        {t("Ai_Skill_Tests_paragraph4")}
        <h1 className="text-sm font-semibold my-2">
          4. {t("Ai_Skill_Tests_heading6")}
        </h1>
        {t("Ai_Skill_Tests_paragraph5")}
        <h1 className="text-sm font-semibold my-2">
          5. {t("Ai_Skill_Tests_heading7")}
        </h1>
        {t("Ai_Skill_Tests_paragraph6")}
        <h1 className="text-sm font-semibold my-2">
          6. {t("Ai_Skill_Tests_heading8")}
        </h1>
        {t("Ai_Skill_Tests_paragraph7")}
        <h1 className="text-sm font-semibold my-2">
          7. {t("Ai_Skill_Tests_heading9")}
        </h1>
        {t("Ai_Skill_Tests_paragraph8")}
        <h1 className="text-lg font-bold my-4">
          {" "}
          {t("Ai_Skill_Tests_heading10")}
        </h1>
        <h1 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading11")}
        </h1>
        {t("Ai_Skill_Tests_paragraph9")}
        <h1 className="text-sm font-semibold my-2">
          {" "}
          {t("Ai_Skill_Tests_heading12")}
        </h1>
        {t("Ai_Skill_Tests_paragraph10")}
        <h1 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading13")}
        </h1>
        {t("Ai_Skill_Tests_paragraph11")}
        <h1 className="text-sm font-semibold my-2">
          {" "}
          {t("Ai_Skill_Tests_heading14")}
        </h1>
        {t("Ai_Skill_Tests_paragraph12")}
        <h1 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading15")}
        </h1>
        {t("Ai_Skill_Tests_paragraph13")}
        <h1 className="text-lg font-bold my-4">
          {t("Ai_Skill_Tests_heading14")}
        </h1>
        <h1 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading17")}
        </h1>
        {t("Ai_Skill_Tests_paragraph14")}
        <h1 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading18")}
        </h1>
        {t("Ai_Skill_Tests_paragraph15")}
        <h1 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading19")}
        </h1>
        {t("Ai_Skill_Tests_paragraph16")}
        <h1 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading20")}
        </h1>
        {t("Ai_Skill_Tests_paragraph17")}
        <h1 className="text-sm font-semibold my-2">
          {t("Ai_Skill_Tests_heading21")}
        </h1>
        {t("Ai_Skill_Tests_paragraph18")}
        <h1 className="text-lg font-bold my-4">
          {t("Ai_Skill_Tests_heading22")}
        </h1>
        {t("Ai_Skill_Tests_paragraph19")}
      </div>
      <Footer />
    </div>
  );
}

export default AiSkillTests;
