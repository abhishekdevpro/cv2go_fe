"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import { BASE_URL } from "../../../components/Constant/constant";
import { useTranslation } from "react-i18next";
import { SaveLoader } from "../../../components/ResumeLoader/SaveLoader";
import { ResumeContext } from "../../../components/context/ResumeContext";

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { selectedLang } = useContext(ResumeContext);

  const handleCreateResume = async () => {
    setLoading(true);
    setError("");

    try {
      // Replace this with your actual token
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${BASE_URL}/api/user/resume-create?lang=${selectedLang}`,
        {},
        {
          headers: {
            Authorization: ` ${token}`,
          },
        }
      );

      // Assuming the response contains the ID
      console.log(response);
      const { id } = response.data.data;

      // Navigate to the dynamic route
      router.push(`/dashboard/resume-builder/${id}`);
    } catch (err) {
      console.error("Error creating resume:", err);
      setError("Failed to create resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">
            {t("createResume.welcome_resumebuilder")}
          </h1>
          <p className="mb-6 text-gray-600">
            {t("createResume.create_resume")}
          </p>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <button
            onClick={handleCreateResume}
            className={`px-6 py-3 text-white font-semibold rounded-lg ${
              loading ? "bg-gray-400" : "bg-cyan-600 hover:bg-cyan-600"
            }`}
            disabled={loading}
          >
            {loading ? (
              <SaveLoader loadingText={t("createResume.creating")} />
            ) : (
              t("createResume.resume_btn")
            )}
          </button>
        </div>
      </main>
    </>
  );
}
