import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../../components/Constant/constant";
import { useTranslation } from "react-i18next";
import { ResumeContext } from "../../components/context/ResumeContext";

function Skillhistory() {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const { selectedLang } = useContext(ResumeContext);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(
        `${BASE_URL}/api/user/skill-assessment-history?lang=${selectedLang}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        // Ensure response.data.data is an array before setting state
        const data = Array.isArray(response.data.data)
          ? response.data.data
          : [];
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <>
      <h5 className="text-2xl font-bold mb-6 ms-5">
        {t("skillhistory.title")}
      </h5>
      <div className="container mx-auto p-4 text-center">
        <div className="overflow-x-auto">
          {users.length === 0 ? (
            <p className="text-lg text-gray-500">
              {t("skillhistory.no_history")}
            </p>
          ) : (
            <table className="min-w-full bg-dark text-black rounded-md text-center">
              <thead>
                <tr className="bg-cyan-600 text-white">
                  <th className="py-2 px-4">{t("skillhistory.date_time")}</th>
                  <th className="py-2 px-4">
                    {t("skillhistory.verification_status")}
                  </th>
                  <th className="py-2 px-4">
                    {t("skillhistory.total_questions")}
                  </th>
                  <th className="py-2 px-4">
                    {t("skillhistory.right_answers")}
                  </th>
                  <th className="py-2 px-4">
                    {t("skillhistory.wrong_answers")}
                  </th>
                  <th className="py-2 px-4">{t("skillhistory.percentage")}</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className="border border-gray-700 text-center"
                  >
                    <td className="py-2 px-4">{user.date_time || "N/A"}</td>
                    <td className="py-2 px-4">
                      {user.is_verified
                        ? t("skillhistory.verified")
                        : t("skillhistory.not_verified")}
                    </td>
                    <td className="py-2 px-4">{user.results.total_question}</td>
                    <td className="py-2 px-4">{user.results.right_answer}</td>
                    <td className="py-2 px-4">{user.results.wrong_answer}</td>
                    <td className="py-2 px-4">{user.results.Percentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Skillhistory;
