"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import logo from "./builderImages/GraphicDesignerResume.jpg";

const NewPages = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Header Section */}
      <div className="bg-gray-100 p-6 rounded-lg flex items-center gap-4">
        <div>
          <h2 className="text-xl font-bold ">CibliAI Resume Builder</h2>
          <p className="text-gray-700 text-sm mt-2">
            Applying for jobs has never been easier! CibliAI is an advanced
            AI-powered tool designed to craft resumes perfectly tailored to each
            job opportunity.
          </p>
        </div>
        <Image
          src={logo}
          alt="CibliAI"
          width={200}
          height={200}
          className="rounded-md"
        />
      </div>
      <div className="flex justify-center gap-4 items-center mt-4">
        {/* Features Section */}
        <h3 className="text-2xl font-bold text-center my-6">
          CIBLI AI INTERVIEWS
        </h3>

        <div className="">
          {[
            "Resume Scoring",
            "Improvement Suggestions",
            "Dynamic Resume Generation",
          ].map((item, index) => (
            <div key={index} className="border-b ">
              <button
                onClick={() => toggleSection(index)}
                className={`w-full flex items-center justify-between p-3 text-lg font-semibold rounded-md transition-all duration-300 ${
                  openSection === index ? "bg-green-200" : "bg-gray-100"
                }`}
              >
                {item}
                {openSection === index ? <ChevronDown /> : <ChevronRight />}
              </button>
              {openSection === index && (
                <p className="mt-2 text-gray-600 text-sm">
                  Detailed information about {item}. This section provides
                  insights and valuable details regarding the selected topic.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <p className="text-center text-sm text-gray-600 mt-6">
        Eliminate the guesswork, save time, and maximize your chances of success
        with CibliAI—the smarter way to build the perfect resume for every job
        application.
      </p>
    </div>
  );
};

export default NewPages;
