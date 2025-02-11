import { File, FileText, Rocket } from "lucide-react";
import React from "react";

const ATSResumeSection = () => {
  return (
    <div className="relative w-full min-h-[400px] bg-gradient-to-br from-cyan-600 to-cyan-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Resumes optimized for applicant tracking systems (ATS)
          </h1>

          <p className="text-gray-200 text-lg max-w-2xl">
            Enhancv resumes and cover letters are vigorously tested against
            major ATS systems to ensure complete parsability
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Build an ATS-Friendly Resume
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <FileText />,
              title: "Readable contact information",
            },
            {
              icon: <File />,
              title: "Full experience section parsing",
            },
            {
              icon: <Rocket />,
              title: "Optimized skills section",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 flex items-center space-x-4"
            >
              <div className="text-2xl text-white">{feature.icon}</div>
              <span className="text-white font-medium">{feature.title}</span>
            </div>
          ))}
        </div>

        {/* Decorative Lines */}
        <div className="absolute top-0 right-0 w-1/3 h-full">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute right-0 h-px bg-gradient-to-r from-transparent to-teal-500"
              style={{
                top: `${20 + i * 15}%`,
                width: `${60 + i * 10}%`,
                opacity: 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ATSResumeSection;
