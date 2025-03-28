import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { BASE_URL } from "../Constant/constant";

import {
  User,
  Share2,
  FileText,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Code2,
  Languages,
  Award,
  Search,
  Check,
  X,
  Circle,
} from "lucide-react";
import FullScreenLoader from "../ResumeLoader/Loader";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { ResumeContext } from "../context/ResumeContext";
import { SaveLoader } from "../ResumeLoader/SaveLoader";
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

const TooltipContent = ({ improvements, resumeId, onClose }) => {
  const [Loading, setLoading] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();
  const { selectedLang } = useContext(ResumeContext);
  const formatItems = [
    {
      label: t("formatting.bullet_points"),
      value: improvements?.formatting?.bullet_points_used,
      description: t("formatting.bullet_points_desc"),
    },
    {
      label: t("formatting.clear_headings"),
      value: improvements?.formatting?.clear_headings,
      description: t("formatting.clear_headings_desc"),
    },
    {
      label: t("formatting.consistent_font"),
      value: improvements?.formatting?.consistent_font,
      description: t("formatting.consistent_font_desc"),
    },
    {
      label: t("formatting.contact_info"),
      value: improvements?.formatting?.contact_info_visible,
      description: t("formatting.contact_info_desc"),
    },
  ];

  const handleATS = async () => {
    const token = localStorage.getItem("token");

    setLoading(true); // Ensure loading is set to true when the request starts

    try {
      const response = await axios.get(
        `${BASE_URL}/api/user/ats-improve/${resumeId}?lang=${selectedLang}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.data) {
        toast.success(response.message || t("toast.ats_success"));
        onClose();
        // router.push('/dashboard')
        window.location.reload();
      } else {
        toast.error(t("toast.no_response"));
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || t("toast.error"));
    } finally {
      setLoading(false); // Ensure loading is set to false after the request finishes
    }
  };

  return (
    <div className="h-[600px] overflow-y-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <div className="flex flex-col">
        {/* Improvements Section */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {t("improvements.title")}
          </h3>
          <ul className="space-y-3">
            {improvements?.areas_for_improvement?.file_format && (
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full" />
                <p className="text-gray-700">
                  <span className="font-bold text-black">
                    {t("improvements.file_format")}:{" "}
                  </span>
                  {improvements.areas_for_improvement.file_format}
                </p>
              </li>
            )}
            {improvements?.areas_for_improvement?.keyword_optimization && (
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full" />
                <p className="text-gray-700">
                  <span className="font-bold text-black">
                    {t("improvements.keyword_optimization")}:{" "}
                  </span>
                  {improvements.areas_for_improvement.keyword_optimization}
                </p>
              </li>
            )}
          </ul>
        </div>

        {/* Formatting Checklist */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {t("formatting.title")}
          </h3>
          <ul className="grid grid-cols-2 gap-4">
            {formatItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg"
              >
                <div
                  className={`rounded-full p-1.5 ${
                    item.value
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {item.value ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <X className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <p className="text-gray-700 font-medium">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overall Comments */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 mt-6 text-white">
        <h3 className="text-lg font-bold">{t("overall_comments")}</h3>
        <p>{improvements?.overall_comments}</p>
      </div>
      <button
        onClick={handleATS}
        className={`mt-6 px-6 py-2 w-full bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors ${
          improvements.ats_score === 10 || Loading
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        disabled={improvements.ats_score === 10 || Loading}
      >
        {Loading ? (
          <SaveLoader loadingText="Proceed To Improve" />
        ) : (
          t("button.improve")
        )}
      </button>
    </div>
  );
};

const ResumeStrength = ({ score, strength, resumeId }) => {
  const [showLoader, setShowLoader] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  // console.log(strength.ats_strenght, "strength");
  const { t } = useTranslation();
  const getSectionsList = (data) => {
    if (!data) return [];
    return [
      {
        name: t("resumeStrength.sections.personalInformation"),
        completed: data.is_personal_info,
        score: data.personal_score,
        max_score: 15,
        icon: User,
      },
      {
        name: t("resumeStrength.sections.socialLinks"),
        completed: data.is_social,
        score: data.social_score,
        max_score: 5,
        icon: Share2,
      },
      {
        name: t("resumeStrength.sections.personalSummary"),
        completed: data.is_personal_summery,
        score: data.personal_summery_score,
        max_score: 10,
        icon: FileText,
      },
      {
        name: t("resumeStrength.sections.education"),
        completed: data.is_education,
        score: data.education_score,
        max_score: 10,
        icon: GraduationCap,
      },
      {
        name: t("resumeStrength.sections.workHistory"),
        completed: data.is_work_history,
        score: data.work_history_score,
        max_score: 15,
        icon: Briefcase,
      },
      {
        name: t("resumeStrength.sections.projects"),
        completed: data.is_project,
        score: data.project_score,
        max_score: 15,
        icon: FolderGit2,
      },
      {
        name: t("resumeStrength.sections.skills"),
        completed: data.is_skills,
        score: data.skills_score,
        max_score: 10,
        icon: Code2,
      },
      {
        name: t("resumeStrength.sections.languages"),
        completed: data.is_languages,
        score: data.languages_score,
        max_score: 5,
        icon: Languages,
      },
      {
        name: t("resumeStrength.sections.certification"),
        completed: data.is_certifications,
        score: data.certifications_score,
        max_score: 5,
        icon: Award,
      },
      {
        name: "ATS",
        completed: data.is_ats_friendly,
        score: data.ats_score,
        max_score: 10,
        icon: Search,
      },
    ];
  };

  // const handleImproveResume = () => {
  //   setShowLoader(true);
  //   setTimeout(() => {
  //     router.push({
  //       pathname: `/dashboard/aibuilder/${resumeId}`,
  //       query: { improve: "true" },
  //     });
  //   }, 5000);
  // };
  const handleImproveResume = async () => {
    if (!resumeId) return;

    setShowLoader(true);

    try {
      const token = localStorage.getItem("token");
      // Call the API before navigating
      const response = await axios.get(
        `${BASE_URL}/api/user/auto-improve/${resumeId}?lang=${selectedLang}`,
        {
          headers: {
            Authorization: token, // Ensure correct auth header
          },
        }
      );

      // If API request is successful, navigate to the AI Builder page
      if (response.status === 200) {
        toast.success(response?.data?.message);
        setTimeout(() => {
          router.push({
            pathname: `/dashboard/aibuilder/${resumeId}`,
            query: { improve: "true" },
          });
        }, 5000);
      } else {
        toast.error("Failed to improve resume. Please try again.");
      }
    } catch (error) {
      console.error("Error improving resume:", error);
      toast.error(
        error.response?.data?.message || "An error occurred. Try again."
      );
    } finally {
      setShowLoader(false);
    }
  };
  const sectionsList = getSectionsList(strength);

  const getScoreColor = (score, maxScore) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 70) return "bg-green-500";
    return "bg-red-600";
  };

  return (
    <>
      {showLoader && <FullScreenLoader />}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TooltipContent
          improvements={strength?.ats_strenght}
          resumeId={resumeId}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>

      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-1">
              {" "}
              {t("resumeStrength.resumeStrength")}
            </h2>
            <div className="flex items-center gap-2">
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-lg font-semibold">
                {score}%
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <h3 className="text-xl font-semibold mb-1">
              {" "}
              {t("resumeStrength.fixResume")}
            </h3>
            <p className="text-gray-600">
              {t("resumeStrength.foundErrors", {
                errors: strength.total_errors,
              })}{" "}
            </p>
            <p className="text-gray-600 mb-2">{t("resumeStrength.useTool")}</p>
            <div className="flex gap-2">
              <button
                onClick={handleImproveResume}
                disabled={!resumeId}
                className={`px-6 py-2 bg-black text-white rounded-lg hover:bg-black transition-colors ${
                  !resumeId ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {t("resumeStrength.improveResume")}
              </button>
              {/* <button
                disabled={strength.ats_score === 10 || !resumeId}
                onClick={() => setIsModalOpen(true)}
                className={`px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-800 transition-colors ${
                  strength.ats_score === 10 || !resumeId
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {t("resumeStrength.improveATS")}
              </button> */}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {sectionsList.map((section) => {
            const Icon = section.icon;
            const currentScore = section.score || 0;
            const scoreColor = getScoreColor(currentScore, section.max_score);
            const isATS = section.name === "ATS";

            return (
              <div
                key={section.name}
                className="flex items-center gap-4 relative"
                // onClick={() => isATS && setIsModalOpen(true)}
                style={{ cursor: isATS ? "pointer" : "default" }}
              >
                <Icon className="w-5 h-5 text-gray-600 flex-shrink-0" />

                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      {section.name}
                    </span>
                    <span className="text-sm font-medium text-gray-700">
                      {`${((currentScore / section.max_score) * 100).toFixed(
                        0
                      )} %`}
                    </span>
                  </div>

                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${scoreColor}`}
                      style={{
                        width: `${(currentScore / section.max_score) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ResumeStrength;
