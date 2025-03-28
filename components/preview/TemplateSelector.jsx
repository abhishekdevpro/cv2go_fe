import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import template1 from "./template/template1.png";
import template2 from "./template/template2.png";
import template3 from "./template/template3.png";
import template4 from "./template/template4.png";
import template5 from "./template/template5.png";
import template6 from "./template/template6.png";
import template7 from "./template/template7.png";
import template8 from "./template/template8.png";
import template9 from "./template/template9.png";
import template10 from "./template/template10.png";
import template11 from "./template/template11.png";
import template12 from "./template/template12.png";
import template13 from "./template/template13.png";
import template14 from "./template/template14.png";
import template15 from "./template/template15.png";
import template16 from "./template/template16.png";
import template17 from "./template/template17.png";
import template18 from "./template/template18.png";
import template19 from "./template/template19.png";
import template20 from "./template/template20.png";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../Constant/constant";
import axios from "axios";
const TemplateSelector = ({
  selectedTemplate,
  setSelectedTemplate,
  selectedPdfType,
  setSelectedPdfType,
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [templateId, setTemplateId] = useState(selectedTemplate);
  const [userData, setUserData] = useState(null);
  // Default PDF type

  const allTemplates = [
    { key: "template1", imageUrl: template1, pdfType: 2 },
    { key: "template3", imageUrl: template3, pdfType: 3 },
    { key: "template4", imageUrl: template4, pdfType: 3 },
    { key: "template5", imageUrl: template5, pdfType: 3 },
    { key: "template6", imageUrl: template6, pdfType: 1 },
    { key: "template7", imageUrl: template7, pdfType: 1 },
    { key: "template8", imageUrl: template8, pdfType: 2 },
    { key: "template9", imageUrl: template9, pdfType: 1 },
    { key: "template10", imageUrl: template10, pdfType: 3 },
    { key: "template11", imageUrl: template11, pdfType: 2 },
    { key: "template12", imageUrl: template12, pdfType: 3 },
    { key: "template13", imageUrl: template13, pdfType: 3 },
    { key: "template14", imageUrl: template14, pdfType: 3 },
    { key: "template15", imageUrl: template15, pdfType: 3 },
    { key: "template16", imageUrl: template16, pdfType: 2 },
    { key: "template17", imageUrl: template17, pdfType: 2 },
    { key: "template18", imageUrl: template18, pdfType: 2 },
    { key: "template19", imageUrl: template19, pdfType: 1 },
    { key: "template20", imageUrl: template20, pdfType: 1 },
  ];
  const basicTemplates = allTemplates.slice(0, 2);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("Unauthorized. Please log in.");
          return;
        }

        const response = await axios.get(`${BASE_URL}/api/user/user-profile`, {
          headers: { Authorization: token },
        });

        if (response.data?.status === "success") {
          const user = response.data.data;
          setUserData(user);
        }
      } catch (err) {
        console.error("Error fetching user profile:", err);
        setStatus("Inactive");
      }
    };

    fetchUserProfile();
  }, []);
  useEffect(() => {
    const selectedIndex = templates.findIndex(
      (template) => template.key === selectedTemplate
    );
    if (selectedIndex !== -1) {
      setCurrentIndex(selectedIndex);
      setSelectedPdfType(templates[selectedIndex].pdfType);
    }
  }, [selectedTemplate]);
  const templates = userData?.plan_id === 1 ? basicTemplates : allTemplates;
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template.key);
    setTemplateId(template.key);
    setSelectedPdfType(template.pdfType);
    closeModal();
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? templates.length - 3 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === templates.length - 3 ? 0 : prevIndex + 1
    );
  };

  const getDisplayedTemplates = () => {
    const start = Math.max(0, currentIndex - 1);
    const end = Math.min(templates.length, currentIndex + 2);
    return templates.slice(start, end);
  };

  // const getPdfTypeLabel = (type) => {
  //   switch (type) {
  //     case '1': return 'Type 1';
  //     case '2': return 'Type 2';
  //     case '3': return 'Type 3';
  //     default: return 'Unknown Type';
  //   }
  // };

  return (
    <div className="font-sans">
      <div className="flex flex-col md:flex-row gap-2 m-2">
        <button
          onClick={openModal}
          className="hidden md:block rounded-lg border-2 border-cyan-500 px-5 py-2 font-bold bg-white text-black"
        >
          <span>
            {t("templateSelector.selectedTemplate", {
              templateId: templateId || "template1",
            })}
          </span>
        </button>
        <button
          onClick={openModal}
          className="block md:hidden rounded-lg border-2 border-cyan-500 px-5 py-2 font-bold bg-white text-black"
        >
          {t("templateSelector.templateButton")}
        </button>
        {/* <div className="rounded-lg border-2 border-blue-800 px-5 py-2 font-bold bg-white text-blue-800">
          PDF Type: {selectedPdfType}
        </div> */}
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/75 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-5xl relative shadow-2xl">
            <div className="text-lg font-bold mb-4 text-center border rounded-3xl py-2 text-white bg-gray-800">
              {t("templateSelector.modalTitle")}
            </div>

            <div className="relative flex items-center mb-6">
              <button
                onClick={goToPrevious}
                className="absolute -left-3 z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <div className="flex justify-center w-full overflow-hidden px-8">
                <div className="flex gap-4">
                  {getDisplayedTemplates().map((template) => (
                    <div
                      key={template.key}
                      onClick={() => handleTemplateClick(template)}
                      className={`
                        relative group cursor-pointer transition-all duration-300
                        ${
                          template.key === templateId
                            ? "transform scale-105"
                            : "hover:scale-102"
                        }
                      `}
                    >
                      <div
                        className={`
                        w-64 p-2 rounded-lg transition-all duration-300
                        ${
                          template.key === templateId
                            ? "bg-cyan-100 ring-4 ring-cyan-500 ring-offset-2"
                            : "hover:bg-gray-50"
                        }
                      `}
                      >
                        <div className="relative">
                          <Image
                            src={template.imageUrl}
                            alt={template.key}
                            width={300}
                            height={400}
                            className={`
                              w-full h-80 object-cover rounded-lg shadow-md transition-transform duration-300
                              ${
                                template.key === templateId
                                  ? "ring-2 ring-cyan-400"
                                  : "group-hover:ring-2 group-hover:ring-cyan-300"
                              }
                            `}
                          />
                          {template.key === templateId && (
                            <div className="absolute inset-0 border-4 border-cyan-500 rounded-lg pointer-events-none" />
                          )}
                        </div>
                        <div className="flex flex-col gap-1">
                          <div
                            className={`
                            mt-2 text-center py-2 px-4 rounded-md transition-colors duration-300
                            ${
                              template.key === templateId
                                ? "bg-cyan-500 text-white font-semibold"
                                : "text-gray-600 group-hover:text-cyan-600"
                            }
                          `}
                          >
                            {template.key}
                          </div>
                          {/* <div className="text-center py-1 px-4 rounded-md bg-gray-100 text-gray-700">
                            {template.pdfType}
                          </div> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={goToNext}
                className="absolute -right-3 z-10 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <button
              onClick={closeModal}
              className="w-full sm:w-auto px-6 py-2.5 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center mx-auto"
            >
              {t("templateSelector.closeButton")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
