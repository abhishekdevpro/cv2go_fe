"use client";

import { FaUpload, FaFileAlt } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import DefaultResumeData from "../utility/DefaultResumeData";
import { ResumeContext } from "../context/ResumeContext";
import { useTranslation } from "next-i18next";
export default function UploadStep({ onNext, onBack, onChange, value }) {
  const router = useRouter();
  const { t } = useTranslation();
  const [showLoadingAnimation, setShowLoadingAnimation] = useState(false);
  const { setResumeData } = useContext(ResumeContext);
  const resumeId = router.query.id || localStorage.getItem("resumeId");
  if (!resumeId) {
    toast.error(t("uploadStep.resume_id_error"));
    return;
  }

  const handleStartFromScratch = () => {
    localStorage.setItem("currentSection", 0);
    setResumeData(DefaultResumeData);
    router.push(`/dashboard/aibuilder/${resumeId}`);
  };

  return (
    // <div className="space-y-6">
    //   <div className="text-center">
    //     <h2 className="text-2xl font-bold text-gray-900">
    //       Are you uploading an existing resume?
    //     </h2>
    //     <p className="mt-2 text-gray-600">
    //       Just review, edit, and update it with new information
    //     </p>
    //   </div>

    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //     <button
    //       onClick={() => {
    //         onChange("upload");
    //         onNext();
    //       }}
    //       className="p-6 border-2 rounded-lg text-center hover:border-blue-400"
    //     >
    //       <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
    //         <FaUpload className="text-cyan-600 w-8 h-8" />
    //       </div>
    //       <h3 className="font-bold mb-2">Yes, upload from my resume</h3>
    //       <p className="text-gray-600 text-sm">
    //         We will give you expert guidance to fill out your info and enhance
    //         your resume
    //       </p>
    //     </button>

    //     <button
    //       onClick={handleStartFromScratch}
    //       className="p-6 border-2 rounded-lg text-center hover:border-blue-400"
    //     >
    //       <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
    //         <FaFileAlt className="text-cyan-600 w-8 h-8" />
    //       </div>
    //       <h3 className="font-bold mb-2">No, start from scratch</h3>
    //       <p className="text-gray-600 text-sm">
    //         We will guide you through the whole process so your skills can shine
    //       </p>
    //     </button>
    //   </div>

    //   <div className="flex justify-between mt-8">
    //     <button
    //       onClick={onBack}
    //       className="px-6 py-2 border rounded-lg hover:bg-gray-50"
    //     >
    //       Back
    //     </button>
    //   </div>
    // </div>
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          {t("uploadStep.title")}
        </h2>
        <p className="mt-2 text-gray-600">{t("uploadStep.description")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => {
            onChange("upload");
            onNext();
          }}
          className="p-6 border-2 rounded-lg text-center hover:border-blue-400"
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
            <FaUpload className="text-cyan-600 w-8 h-8" />
          </div>
          <h3 className="font-bold mb-2">{t("uploadStep.yes_upload")}</h3>
          <p className="text-gray-600 text-sm">
            {t("uploadStep.yes_upload_description")}
          </p>
        </button>

        <button
          onClick={handleStartFromScratch}
          className="p-6 border-2 rounded-lg text-center hover:border-blue-400"
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
            <FaFileAlt className="text-cyan-600 w-8 h-8" />
          </div>
          <h3 className="font-bold mb-2">{t("uploadStep.no_start_scratch")}</h3>
          <p className="text-gray-600 text-sm">
            {t("uploadStep.no_start_scratch_description")}
          </p>
        </button>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-2 border rounded-lg hover:bg-gray-50"
        >
          {t("uploadStep.back")}
        </button>
      </div>
    </div>
  );
}
