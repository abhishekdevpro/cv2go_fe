import React from "react";
import image1 from "./Images/homeimage1.jpg";

const Home_step = () => {
  const steps = [
    {
      title: "Open Canva",
      description:
        'Open up Canva and search for "Resume" to start designing your own.',
    },
    { title: "Find the right template" },
    { title: "Personalize your resume" },
    { title: "Get creative with more features" },
    { title: "Order your prints" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 bg-gray-50 p-8">
      <div className="w-full md:w-1/2">
        <img
          src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
          alt="Resume Builder Tutorial"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          How to make a resume
        </h1>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border-l-4 border-cyan-600 bg-white p-4 rounded-lg shadow-sm"
            >
              <h3 className="font-semibold text-lg text-gray-900">
                {step.title}
              </h3>
              {step.description && (
                <p className="text-gray-600 mt-1">{step.description}</p>
              )}
            </div>
          ))}
        </div>

        <button className="mt-8 bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-800 transition-colors">
          Build my resume
        </button>
      </div>
    </div>
  );
};

export default Home_step;
