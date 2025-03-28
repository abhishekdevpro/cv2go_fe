import { useState, useContext, useEffect, useRef } from "react";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
import { CoverLetterContext } from "../components/context/CoverLetterContext";
import CoverLetterEditor from "../components/cv/coverletterform/CoverLetterEditor";
import TemplateSelector from "../components/cv/coverletter/CvSelector";
import CoverLetterPreview from "../components/cv/coverletter/CoverLetterPreview";
import ColorPickers from "./ColorPickers";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import MobileCoverLetterBuilder from "./mobile-cv-builder";
import { BASE_URL } from "../components/Constant/constant";
import { useTranslation } from "react-i18next";
function CoverLetterBuilder() {
  const {
    coverLetterData,
    setCoverLetterData,
    backgroundColorss,
    selectedFont,
    setSelectedFont,
    setBgColor,
    setHeaderColor,
  } = useContext(CoverLetterContext);
  const router = useRouter();
  const { i18n, t } = useTranslation();
  const language = i18n.language;
  const templateRef = useRef(null);
  const [token, setToken] = useState(null);
  const [coverletterId, setCoverLetterId] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState("template1");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical tablet/mobile breakpoint
    };

    // Check on mount
    checkIsMobile();

    // Add resize listener
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);
  useEffect(() => {
    const fetchResumeData = async () => {
      const { id } = router.query;
      const token = localStorage.getItem("token");

      if (id && token) {
        try {
          const response = await axios.get(
            `${BASE_URL}/api/user/coverletter/${id}?lang=${language}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );

          if (response.data.status === "success") {
            const { data } = response.data;
            // console.log(data,"rnd");

            const parsedData = data.cover_letter_obj;

            setCoverLetterData(parsedData.coverletterInfo);

            if (parsedData?.coverletterInfo?.templateDetails) {
              setBgColor(
                parsedData.coverletterInfo.templateDetails.backgroundColor || ""
              );
              setHeaderColor(
                parsedData.coverletterInfo.templateDetails.backgroundColor || ""
              );
              setSelectedTemplate(
                parsedData.coverletterInfo.templateDetails.templateId ||
                  "template1"
              );
            }
          }
        } catch (error) {
          console.error("Error fetching cover letter  data:", error);
          toast.error("Failed to fetch cover letter  data");
        }
      }
    };

    fetchResumeData();
  }, [router.query]);
  useEffect(() => {
    const path = window.location.pathname;
    const id = path.split("/").pop();
    setCoverLetterId(id);
  }, []);

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
        templateId: selectedTemplate,
        backgroundColor: backgroundColorss || "",
        font: selectedFont || "Ubuntu",
      },
      personalDetails: {
        name: data.personalDetails?.name || "",
        address: data.personalDetails?.address || "",
        email: data.personalDetails?.email || "",
        contact: data.personalDetails?.contact || "",
      },
    };
  };

  const handleFinish = async () => {
    if (!coverLetterData) return;
    const coverletterInfo = {
      coverletterInfo: formatCoverLetterData(coverLetterData),
    };
    console.log(coverLetterData, ">>>coverlettersdata");
    const htmlContent = templateRef?.current?.innerHTML;
    if (!htmlContent) {
      toast.error("Error: Template content is missing.");
      return;
    }

    const coverletterHtml = `
      <style>
        @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
      </style>
      ${htmlContent}
    `;
    try {
      const coverletterId = router.query.id || localStorage.getItem("id");
      if (!coverletterId) {
        toast.error("Cover Letter ID not found");
        return;
      }

      const response = await axios.put(
        `${BASE_URL}/api/user/coverletter/${coverletterId}?lang=${language}`,

        { ...coverletterInfo, cover_letter_html: coverletterHtml },
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
      } else {
        toast.error(response.data.error || "Error while saving the Resume");
      }
    } catch (error) {
      toast.error(error?.message || "Error updating resume!");
      console.error("Error updating resume:", error);
    }
  };
  const downloadAsPDF = async () => {
    handleFinish();
    if (!templateRef.current) {
      toast.error("Template reference not found");
      return;
    }

    try {
      const htmlContent = templateRef.current.innerHTML;

      const fullContent = `
        <style>
          @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
        </style>
        ${htmlContent}
      `;

      // const response = await axios.post(
      //   `${BASE_URL}/api/user/generate-pdf1`,
      //   { html: fullContent },
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: token,
      //     },
      //   }
      // );

      downloadPDF();
    } catch (error) {
      console.error("PDF generation error:", error);
      toast.error(
        error.response?.data?.message || "Failed to generate and open PDF"
      );
    }
  };
  const downloadPDF = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/user/download-coverletter/${coverletterId}?lang=${language}`,

        {
          headers: {
            Authorization: token,
          },
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: "application/pdf" })
      );
      const link = document.createElement("a");
      link.href = url;

      link.setAttribute("download", `resume.pdf`);
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error("PDF Download Error:", error);
      toast.error("Failed to download the PDF. Please try again.");
    }
  };

  return (
    // <CoverLetterProvider>
    <>
      {isMobile ? (
        <MobileCoverLetterBuilder
          selectedFont={selectedFont}
          handleFontChange={handleFontChange}
          backgroundColorss={backgroundColorss}
          setBgColor={setBgColor}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
          handleFinish={handleFinish}
          downloadAsPDF={downloadAsPDF}
          templateRef={templateRef}
        />
      ) : (
        <div className="flex flex-col min-h-screen">
          {/* Sticky Navbar */}
          <div className="sticky top-0 z-50 bg-white shadow-md">
            <Navbar />
          </div>

          {/* Main Content */}
          <div className=" bg-gray-50 ">
            {/* Sticky Options Bar */}
            <div className="sticky top-[64px] z-40 bg-gray-200 p-4 shadow-sm">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                {/* Font Selector and Options */}
                <div className="flex items-center gap-4">
                  <select
                    value={selectedFont}
                    onChange={handleFontChange}
                    className="w-40 h-10 rounded-lg border border-green-500 px-4 font-bold text-black bg-white focus:ring-2 focus:ring-green-500"
                  >
                    <option value="Ubuntu">Ubuntu</option>
                    <option value="Calibri">Calibri</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Roboto">Roboto</option>
                    <option value="Poppins">Poppins</option>
                  </select>

                  <ColorPickers
                    selectmultiplecolor={backgroundColorss}
                    onChange={setBgColor}
                  />
                  <TemplateSelector
                    selectedTemplate={selectedTemplate}
                    setSelectedTemplate={setSelectedTemplate}
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={handleFinish}
                    className="bg-blue-950 text-white px-6 py-2 rounded-lg"
                  >
                    {t("cvBuilder.save")}
                  </button>
                  <button
                    onClick={downloadAsPDF}
                    className="bg-yellow-500 text-black px-6 py-2 rounded-lg"
                  >
                    {t("cvBuilder.download")}
                  </button>
                </div>
              </div>
            </div>

            {/* Scrollable Main Content */}
            <div className="flex flex-col md:flex-row flex-grow p-4">
              {/* Editor Section */}
              <div className="w-[40%] overflow-auto bg-gray-100">
                <main className="w-full mx-auto md:p-4">
                  <CoverLetterEditor />
                </main>
              </div>

              {/* Preview Section */}
              <aside className="w-[60%] min-h-screen border-l bg-gray-50">
                <div className="sticky top-20 p-4">
                  <CoverLetterPreview
                    selectedTemplate={selectedTemplate}
                    ref={templateRef}
                  />
                </div>
              </aside>
            </div>
          </div>
        </div>
        // </CoverLetterProvider>
      )}
    </>
  );
}

export default CoverLetterBuilder;
