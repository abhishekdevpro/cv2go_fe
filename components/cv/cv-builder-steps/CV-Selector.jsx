"use client";
import Image from "next/image";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import cvletter1 from "../coverletter/cvimgs/cvletter1.png";
import cvletter2 from "../coverletter/cvimgs/cvletter2.png";
import cvletter3 from "../coverletter/cvimgs/cvletter3.png";
import cvletter4 from "../coverletter/cvimgs/cvletter4.png";
import cvletter5 from "../coverletter/cvimgs/cvletter5.png";
import { CoverLetterContext } from "../../context/CoverLetterContext";
import { BASE_URL } from "../../Constant/constant";
import { useTranslation } from "react-i18next";
const CVSelector = ({ onNext, onBack, onChange, value }) => {
  const [selectedHexCode, setSelectedHexCode] = useState("#2563EB");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // const [coverLetterData, setCoverLetterData] = useState(null);
  const { coverLetterData, setCoverLetterData } =
    useContext(CoverLetterContext);
  const { i18n, t } = useTranslation();
  const language = i18n.language;
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const colors = [
    {
      name: "Gray",
      class: "bg-gray-200",
      selectedClass: "ring-gray-400",
      hexCode: "#6D7278",
    },
    {
      name: "Blue",
      class: "bg-cyan-600",
      selectedClass: "ring-blue-400",
      hexCode: "#00b38d",
    },
    {
      name: "Purple",
      class: "bg-purple-600",
      selectedClass: "ring-purple-400",
      hexCode: "#9333EA",
    },
    {
      name: "Green",
      class: "bg-cyan-600",
      selectedClass: "ring-green-400",
      hexCode: "#16A34A",
    },
    {
      name: "Red",
      class: "bg-red-600",
      selectedClass: "ring-red-400",
      hexCode: "#DC2626",
    },
    {
      name: "Yellow",
      class: "bg-yellow-500",
      selectedClass: "ring-yellow-400",
      hexCode: "#EAB308",
    },
    {
      name: "Pink",
      class: "bg-pink-500",
      selectedClass: "ring-pink-400",
      hexCode: "#EC4899",
    },
    {
      name: "cyan",
      class: "bg-cyan-500",
      selectedClass: "ring-cyan-400",
      hexCode: "#14B8A6",
    },
    {
      name: "Orange",
      class: "bg-orange-500",
      selectedClass: "ring-orange-400",
      hexCode: "#F97316",
    },
    {
      name: "Indigo",
      class: "bg-indigo-600",
      selectedClass: "ring-indigo-400",
      hexCode: "#4F46E5",
    },
    {
      name: "Navy Blue",
      class: "bg-blue-900",
      selectedClass: "ring-blue-700",
      hexCode: "#1E3A8A",
    },
    {
      name: "Light Blue",
      class: "bg-blue-300",
      selectedClass: "ring-blue-200",
      hexCode: "#93C5FD",
    },
    {
      name: "Light Red",
      class: "bg-red-300",
      selectedClass: "ring-red-200",
      hexCode: "#FCA5A5",
    },
    {
      name: "Light Green",
      class: "bg-green-300",
      selectedClass: "ring-green-200",
      hexCode: "#86EFAC",
    },
    {
      name: "Light Yellow",
      class: "bg-yellow-300",
      selectedClass: "ring-yellow-200",
      hexCode: "#FDE047",
    },
    {
      name: "Light cyan",
      class: "bg-cyan-300",
      selectedClass: "ring-cyan-200",
      hexCode: "#5EEAD4",
    },
    {
      name: "Light Purple",
      class: "bg-purple-300",
      selectedClass: "ring-purple-200",
      hexCode: "#D8B4FE",
    },
  ];

  const cvTemplates = [
    {
      key: "template1",
      imageUrl: cvletter1,
      name: t("cvSelector.template1"),
      hasPhoto: true,
    },
    {
      key: "template2",
      imageUrl: cvletter2,
      name: t("cvSelector.template2"),
      hasPhoto: false,
    },
    {
      key: "template3",
      imageUrl: cvletter3,
      name: t("cvSelector.template3"),
      hasPhoto: false,
    },
    {
      key: "template4",
      imageUrl: cvletter4,
      name: t("cvSelector.template4"),
      hasPhoto: false,
    },
    {
      key: "template5",
      imageUrl: cvletter5,
      name: t("cvSelector.template5"),
      hasPhoto: true,
    },
  ];

  useEffect(() => {
    if (!value.hexCode) {
      const defaultColor = colors.find((c) => c.name === "Blue");
      handleColorChange(defaultColor.hexCode, defaultColor.name);
    }
  }, []);

  const handleColorChange = (hexCode, colorName) => {
    setSelectedHexCode(hexCode);
    onChange({
      ...value,
      color: colorName,
      hexCode: hexCode,
    });
  };
  // console.log(coverLetterData, ">>>>coverletterdata");
  const handleTemplateSelect = (template) => {
    onChange({
      ...value,
      template: template.key,
      category: template.category,
      style: template.style,
    });
  };
  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const coverletterId = router.query.id || localStorage.getItem("id");
        if (!coverletterId || !token) {
          // toast.error("Cover Letter ID or token not found");
          toast.error(t("cvSelector.errorCoverLetterId"));
          return;
        }

        const response = await axios.get(
          `${BASE_URL}/api/user/coverletter/${coverletterId}?lang=${language}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        if (response.data.code == 200 || response.data.status == "success") {
          const parsedAIData = response.data.data.cover_letter_obj;
          setCoverLetterData(parsedAIData.coverletterInfo);

          if (parsedAIData.coverletterInfo.templateDetails) {
            const backgroundColor =
              parsedAIData.coverletterInfo.templateDetails.backgroundColor;
            const colorObj =
              colors.find((c) => c.hexCode === backgroundColor) ||
              colors.find((c) => c.name === "Blue");
            handleColorChange(colorObj.hexCode, colorObj.name);
          }

          // Set initial photo preference based on selected template
          if (parsedAIData.coverletterInfo.templateDetails?.templateId) {
            const selectedTemplate = cvTemplates.find(
              (t) =>
                t.key ===
                parsedAIData.coverletterInfo.templateDetails.templateId
            );
            if (selectedTemplate) {
              onChange({ ...value });
            }
          }
        } else {
          toast.error(response.data.message || "Failed to fetch resume data");
        }
      } catch (error) {
        toast.error(error?.message || "Error fetching resume data");
        console.error("Error fetching resume:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResumeData();
  }, [router.query.id, token]);

  const formatCoverLetterData = (data) => {
    console.log(data, ">>>data");
    return {
      closing: data.closing || "",
      body: data.body || "",
      gratitude: data.gratitude || "",
      introduction: data.introduction || "",
      letterDetails: {
        companyName: data.letterDetails?.companyName || "",
        date: data.letterDetails?.date || "",
        jobTitle: data.letterDetails?.jobTitle || "",
        reference: data.letterDetails?.reference || "",
        salutation: data.letterDetails?.salutation || "",
      },

      signature: data.signature || "",
      templateDetails: {
        templateId: value.template,
        backgroundColor: selectedHexCode || "#2563EB",
        font: "Ubuntu",
      },
      personalDetails: {
        name: data.personalDetails?.name || "",
        address: data.personalDetails?.address || "",
        email: data.personalDetails?.email || "",
        contact: data.personalDetails?.contact || "",
      },
    };
  };

  const handleSaveSelection = async () => {
    if (!coverLetterData) return;
    const coverletterInfo = {
      coverletterInfo: formatCoverLetterData(coverLetterData),
    };
    console.log(coverLetterData, ">>>coverlettersdata");
    if (!value.template) {
      toast.error(t("cvSelector.selectTemplateError"));
      return;
    }

    try {
      const coverletterId = router.query.id || localStorage.getItem("id");
      if (!coverletterId) {
        toast.error("Resume ID not found");
        return;
      }

      const response = await axios.put(
        `${BASE_URL}/api/user/coverletter/${coverletterId}`,
        coverletterInfo,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      if (response.data.code === 200 || response.data.status === "success") {
        // setIsSaved(true);
        // localStorage.setItem("isSaved", "true");
        toast.success(response.data.message || "Resume saved Successfully");
        onNext();
      } else {
        toast.error(response.data.error || "Error while saving the Resume");
      }
    } catch (error) {
      toast.error(error?.message || "Error updating resume!");
      console.error("Error updating resume:", error);
    }
  };

  const getHoverStyle = (templateKey) => {
    if (value.template === templateKey) {
      return {
        borderWidth: "4px",
        borderColor: selectedHexCode,
        boxShadow: `0 0 0 4px ${selectedHexCode}33`,
      };
    }
    return {};
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("cvSelector.title")}
          </h2>
          <p className="text-xl text-gray-600">{t("cvSelector.description")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="bg-white rounded-xl shadow-lg p-6 h-fit sticky top-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("cvSelector.colorTheme")}
              </h3>
              <div className="grid grid-cols-5 gap-4">
                {colors.map((color) => (
                  <div
                    key={color.name}
                    className="flex items-center justify-center"
                  >
                    <button
                      className={`
                        w-8 h-8 rounded-full ${color.class}
                        transform hover:scale-110 transition-all duration-200
                        ${
                          selectedHexCode === color.hexCode
                            ? `ring-2 ring-offset-2 ${color.selectedClass}`
                            : "hover:ring-2 hover:ring-offset-2 hover:ring-gray-300"
                        }
                      `}
                      onClick={() =>
                        handleColorChange(color.hexCode, color.name)
                      }
                      title={color.name}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("cvSelector.categories")}
              </h3>
              <div className="space-y-2">
                {Array.from(new Set(cvTemplates.map((t) => t.category))).map(
                  (category) => (
                    <button
                      key={category}
                      className={`
                      w-full text-left px-4 py-2 rounded-lg
                      ${
                        value.category === category
                          ? "bg-blue-50 text-cyan-600"
                          : "text-gray-600 hover:bg-gray-50"
                      }
                    `}
                      onClick={() => onChange({ ...value, category })}
                    >
                      {category}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Templates Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {cvTemplates
                .filter((t) => !value.category || t.category === value.category)
                .map((template) => (
                  <button
                    key={template.key}
                    onClick={() => handleTemplateSelect(template)}
                    className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                    style={getHoverStyle(template.key)}
                  >
                    <div className="w-full">
                      <div className="relative aspect-[3/4]">
                        <Image
                          src={template.imageUrl}
                          alt={template.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-white font-medium text-lg">
                          {template.name}
                        </p>
                        <p className="text-white/80 text-sm">
                          {template.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <button
            onClick={onBack}
            className="px-8 py-3 bg-white border-2 border-gray-300 rounded-xl text-gray-700 
              font-medium hover:bg-gray-50 hover:border-gray-400 transition-colors"
          >
            {t("cvSelector.back")}
          </button>
          <button
            onClick={handleSaveSelection}
            disabled={loading}
            style={{ backgroundColor: selectedHexCode }}
            className="px-8 py-3 text-white rounded-xl font-medium
              hover:opacity-90 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50"
          >
            {loading ? t("cvSelector.saving") : t("cvSelector.next")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CVSelector;
