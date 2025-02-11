import React, { useState } from "react";
import CoverLetterListPage from "./coverletterlist";
import Resumelistpage from "./resumelist";

const Templatelistpage = () => {
  const [activeTab, setActiveTab] = useState("resume");

  return (
    <div className="p-4 md:p-6 flex flex-col items-center mt-10">
      {/* Toggle Buttons */}
      <div className="mb-6 flex gap-4">
        <button
          onClick={() => setActiveTab("resume")}
          className={`px-6 py-2 rounded-lg font-semibold ${
            activeTab === "resume"
              ? "bg-cyan-600 text-white"
              : "bg-gray-300 text-gray-800"
          }`}
        >
          My Resume
        </button>
        <button
          onClick={() => setActiveTab("coverLetter")}
          className={`px-6 py-2 rounded-lg font-semibold ${
            activeTab === "coverLetter"
              ? "bg-cyan-600 text-white"
              : "bg-gray-300 text-gray-800"
          }`}
        >
          My Cover Letter
        </button>
      </div>

      {/* Conditional Rendering */}
      <div className="w-full flex justify-center">
        {activeTab === "resume" ? <Resumelistpage /> : <CoverLetterListPage />}
      </div>
    </div>
  );
};

export default Templatelistpage;
