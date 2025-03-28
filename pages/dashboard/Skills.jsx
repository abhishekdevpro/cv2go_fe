import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { BASE_URL } from "../../components/Constant/constant";
import { toast } from "react-toastify";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ResumeContext } from "../../components/context/ResumeContext";
const Skills = () => {
  const { t } = useTranslation();
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tokenError, setTokenError] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showPopup, setShowPopup] = useState(true);
  const router = useRouter();
  const { result } = router.query; // Accessing result from query parameters
  const { selectedLang } = useContext(ResumeContext);
  // Function to fetch skills data
  const fetchSkills = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login2";
      return;
    }

    try {
      const response = await axios.get(
        `${BASE_URL}/api/user/user-skills?lang=${selectedLang}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (Array.isArray(response.data.data)) {
        const formattedSkills = response.data.data.map((skill) => ({
          id: skill.id,
          name: skill.name,
          total_question: skill.skill_assessment?.results?.total_question || 0,
          right_answer: skill.skill_assessment?.results?.right_answer || 0,
          wrong_answer: skill.skill_assessment?.results?.wrong_answer || 0,
          Percentage: skill.skill_assessment?.results?.Percentage || "0.0",
        }));
        setSkills(formattedSkills);
      } else {
        throw new Error("API response data is not an array");
      }
      setLoading(false);
    } catch (error) {
      console.error(
        "There was an error fetching the skills data!",
        error.response ? error.response.data : error.message
      );
      if (error.response && error.response.status === 401) {
        setTokenError(t("skill.toast.unauthorized"));
        window.location.href = "/login2";
      } else {
        setError(error);
      }
      setLoading(false);
    }
  };

  // Handle new results and add to skills list
  useEffect(() => {
    if (result) {
      setSkills((prevSkills) => [
        ...prevSkills,
        {
          id: result.skillId,
          name: result.skillName,
          total_question: result.totalQuestions,
          right_answer: result.rightAnswers,
          wrong_answer: result.wrongAnswers,
          Percentage: result.percentage,
        },
      ]);
    }
  }, [result]);

  const handleTakeTest = (skillId, skillName) => {
    setSelectedSkill({ id: skillId, name: skillName });
    setShowInstructions(true);
  };

  const proceedToTest = () => {
    if (selectedSkill) {
      setShowInstructions(false);
      router.push(
        `Skilltest/${selectedSkill.id}/${encodeURIComponent(
          selectedSkill.name
        )}`
      );
    }
  };

  const closeInstructions = () => {
    setShowInstructions(false);
  };

  const handleContinue = () => {
    setShowPopup(false);
    fetchSkills();
  };

  if (tokenError) {
    return <div>{tokenError}</div>;
  }
  const handleCreateResume = () => {
    setTimeout(() => {
      router.push("/dashboard/resume-builder");
    }, 2000);
  };
  if (error) {
    toast.error(t("skill.toast.resume_required")); // Show toast notification

    return (
      <div className="py-16 px-5 text-center text-3xl">
        <h1>{t("create_or_upload")}</h1>
        <div className="flex justify-center mt-5">
          <button
            onClick={handleCreateResume}
            className="flex justify-center items-center px-4 py-2 w-full sm:w-auto bg-cyan-600 text-white rounded-lg hover:bg-cyan-800 transition-colors duration-200 font-medium shadow-sm"
          >
            <Plus className="w-5 h-5 mr-2" /> {t("create_new_resume")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className=" w-full">
      {/* Popup screen */}
      {showPopup && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
            <h2 className="text-2xl font-bold mb-3">
              {t("skill.welcome_message")}
            </h2>
            <p className="text-lg mb-4">{t("skill.instructions")}</p>
            <button
              onClick={handleContinue}
              className="bg-gray-400 text-black px-4 py-2 rounded-lg shadow-xl font-semibold"
            >
              {t("skill.continue")}
            </button>
          </div>
        </div>
      )}

      {/* Main content after the popup */}
      {!showPopup && (
        <>
          <h1 className="text-3xl text-center md:text-5xl font-bold text-gray-700 p-3">
            {t("skill.take_skill_assessment")}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-5 py-5 text-center">
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-cyan-600 rounded-xl shadow-2xl border-2 border-slate-600 px-5 py-4 text-center"
                >
                  <h3 className="text-2xl sm:text-3xl text-white font-semibold py-3">
                    {skill.name || "Add skill from CV"}
                  </h3>
                  <p className="text-center text-white py-1">
                    {t("skill.total_questions")}: {skill.total_question || "15"}
                  </p>
                  <p className="text-center text-white py-1">
                    {t("skill.right_answers")}: {skill.right_answer || "0"}
                  </p>
                  <p className="text-center text-white py-1">
                    {t("skill.wrong_answers")}: {skill.wrong_answer || "0"}
                  </p>
                  <p className="text-center text-white py-1">
                    {t("skill.percentage")}:{" "}
                    {Math.floor(skill.Percentage) || "0"}
                  </p>
                  <div className="flex justify-center py-6">
                    <button
                      onClick={() => handleTakeTest(skill.id, skill.name)}
                      className="px-8 py-2 rounded-xl shadow-xl bg-gray-400 text-black font-semibold"
                    >
                      {t("skill.take_test")}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-gray-700">
                {t("skill.no_skills")}
              </div>
            )}
          </div>
        </>
      )}

      {/* Modal for instructions */}
      {showInstructions && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center relative">
            <button
              onClick={closeInstructions}
              className="absolute top-0 right-0 m-4 text-red-600 hover:text-red-800 font-semibold"
            >
              {t("skill.close")}
            </button>
            <h2 className="text-2xl font-bold mb-3">
              {t("instructions_title")}
            </h2>
            <p className="text-lg mb-3 text-start">
              <strong>{t("skill.common_instructions")}</strong>
              <br />
              <br />
              1.{t("skill.instruction_1")}
              <br />
              2. {t("skill.instruction_2")}
              <br />
              3. {t("skill.instruction_3")}
              <br />
              4. {t("skill.instruction_4")}
              <br />
              5. {t("skill.instruction_5")}
              <br />
              6. {t("skill.instruction_6")}
              <br />
              7. {t("skill.instruction_7")}
              <br />
              8.{t("skill.instruction_8")}
              <br />
            </p>
            <button
              onClick={proceedToTest}
              className="bg-gray-400 text-black px-4 py-2 rounded-xl shadow-xl font-semibold"
            >
              {t("skill.proceed_to_test")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
