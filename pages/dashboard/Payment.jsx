import React, { useContext, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { BASE_URL } from "../../components/Constant/constant";
import { useTranslation } from "react-i18next";
import { ResumeContext } from "../../components/context/ResumeContext";

function Payment() {
  const { t } = useTranslation();
  const { selectedLang } = useContext(ResumeContext);
  const handleChoosePlan3 = () => {
    const amount = 269; // Fixed price
    const token = localStorage.getItem("token"); // Retrieve token from localStorage

    const payload = {
      amount,
      ResumeId: "9CN06189KH259320999", // Ensure the field name matches the API expectation
      Token: token || "", // Ensure the field name matches the API expectation
    };

    axios
      .post(
        `${BASE_URL}/api/user/paypal/create-payment?lang=${selectedLang}`,
        payload,
        {
          headers: { "Content-Type": "application/json" }, // Use JSON content type
        }
      )
      .then((response) => {
        const data = response.data;
        if (data && data.data) {
          // Redirect to the PayPal URL provided in the response
          window.location.href = data.data;
        }
      })
      .catch((error) => console.error("Payment Error:", error));
  };

  const handleChoosePlan4 = () => {
    const amount = 349; // Fixed price
    const token = localStorage.getItem("token"); // Retrieve token from localStorage

    if (!token) {
      window.location.href = "/login2";
      return;
    }

    const payload = {
      amount,
      ResumeId: "9CN06189KH259320999", // Ensure the field name matches the API expectation
      Token: token || "", // Ensure the field name matches the API expectation
    };

    axios
      .post(
        `${BASE_URL}/api/user/paypal/create-payment?lang=${selectedLang}`,
        payload,
        {
          headers: { "Content-Type": "application/json" }, // Use JSON content type
        }
      )
      .then((response) => {
        const data = response.data;
        if (data && data.data) {
          // Redirect to the PayPal URL provided in the response
          window.location.href = data.data;
        }
      })
      .catch((error) => console.error("Payment Error:", error));
  };

  return (
    <div className="min-h-screen mien bg-gray-300 flex w-full p-2">
      <div className="bg-white shadow-md rounded-lg  w-full">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600  tracking-wider">
                <div className="text-center">
                  <p className="text-lg font-bold ">
                    {t("payments.resume_builder")}
                  </p>
                  <span className=" text-violet-900 ">
                    {t("payments.starting")}
                  </span>
                  <span className=" text-violet-900 font-bold text-lg">
                    {" "}
                    $ 0
                  </span>{" "}
                  <br />
                  <button className="bg-blue-900 text-white p-2 rounded-lg m-2 mt-3">
                    {t("payments.free")}
                  </button>
                </div>
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600  tracking-wider">
                <div className="text-center">
                  <p className="text-lg font-bold">
                    {t("payments.expert_writer")}
                  </p>
                  <span className=" text-violet-900 font-bold text-lg">
                    {" "}
                    $19
                  </span>{" "}
                  <span className=" text-violet-900 ">
                    {t("payments.per_resume")}{" "}
                  </span>
                  <br />
                  <button className="bg-cyan-800 text-white p-2 px-5 rounded-lg m-4 disabled:">
                    {t("payments.choose_plan")}
                  </button>
                </div>
              </th>

              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600  tracking-wider">
                <div className="text-center">
                  <p className="text-lg font-bold">{t("payments.combo")} </p>
                  <span className=" text-violet-900 font-bold text-lg">
                    {" "}
                    $29
                  </span>{" "}
                  <span className=" text-violet-900 ">
                    {t("payments.per_resume")}{" "}
                  </span>
                  <br />
                  <button className="bg-yellow-500 text-white p-2 px-5 rounded-lg m-4 disabled:">
                    {t("payments.choose_plan")}
                  </button>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-center">
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600">
                  {" "}
                  {t("payments.features.optimized_resumes")}
                </p>
              </td>

              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600">
                  {" "}
                  {t("payments.features.optimized_resumes")}
                </p>
              </td>

              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600">
                  {" "}
                  {t("payments.features.optimized_resumes")}
                </p>
              </td>
            </tr>

            <tr className="text-center">
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600">
                  {t("payments.features.copy_paste")}
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600">
                  {t("payments.features.receive_pdf_docs")}
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600">
                  {t("payments.features.receive_pdf_docs")}
                </p>
              </td>
            </tr>
            <tr className="text-center">
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600">
                  {" "}
                  {t("payments.features.unlimited_edits")}
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600">
                  {t("payments.features.cover_letter")}
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600">
                  {t("payments.features.cover_letter")}
                </p>
              </td>
            </tr>

            <tr className="text-center">
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600">
                  {t("payments.features.save_pdf_docs")}
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600">
                  {t("payments.features.revisions")}
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600">
                  {t("payments.features.revisions")}
                </p>
              </td>
            </tr>
            <tr className="text-center">
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600">
                  ✔️ Download fully formatted Resume
                </p>
              </td>

              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600">
                  {t("payments.features.speak_writer")}
                </p>
              </td>

              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600">
                  {t("payments.features.speak_writer")}
                </p>
              </td>
            </tr>
            <tr className="text-center">
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600">✖️ </p>
              </td>

              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600">
                  {t("payments.features.final_delivery")}
                </p>
              </td>

              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-600">
                  {t("payments.features.final_delivery")}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payment;
