//
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../Navbar/Navbar";
import Sidebar from "./Sidebar";

import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
export default function Started() {
  const router = useRouter();

  const handleAddResumeClick = () => {
    router.push("/dashboard/resumefromstarted");
  };
  const handlePosition = () => {
    router.push("/dashboard/interviewhub");
  };
  const handleInterview = () => {
    router.push("/dashboard/liveinterview");
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full shadow-md">
        <Navbar />
      </div>
      <div className="flex flex-1 w-full mt-4 bg-white shadow-md rounded-lg overflow-hidden">
        {/* Sidebar & Content */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="p-4 focus:outline-none">
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`md:w-64 flex-shrink-0 md:block  ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        >
          <Sidebar onClose={closeSidebar} />
        </div>
        <div className="flex-1 w-full max-w-8xl p-4 overflow-auto">
          <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">
              Get the most out of Final Round AI
            </h1>
            <h3>Start with the basics</h3>

            {/* Steps Section */}
            <div className="bg-green-100 p-4 rounded-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              {[
                { label: "Add your resume", action: handleAddResumeClick },
                { label: "Add your position", action: handlePosition },
                { label: "Launch an interview", action: handleInterview },
                { label: "View interview report", action: handleInterview },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md w-full md:w-1/4 hover:bg-cyan-600 cursor-pointer"
                  onClick={step.action}
                >
                  <h3 className="font-semibold">
                    {index + 1}. {step.label}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Upload relevant details for AI assistance.
                  </p>
                </div>
              ))}
            </div>

            {/* Other Sections Remain Unchanged */}
            {/* Tutorials Section */}
            <h2 className="text-xl font-semibold mt-6">
              Watch the Interview Copilot™ demo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                "Live Interview",
                "Coding Interviews",
                "AI Mock Interview",
                "Settings",
              ].map((tutorial, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-sm">
                  <p className="font-medium">How to set up {tutorial}?</p>
                  <button className="mt-2 px-4 py-2 bg-red-600 text-white rounded">
                    Watch Tutorial
                  </button>
                </div>
              ))}
            </div>

            {/* Support & Upgrade Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 border rounded-lg shadow-sm">
                <h3 className="font-semibold">Need more interview guides?</h3>
                <p className="text-sm text-gray-600">
                  Check out the latest questions.
                </p>
                <Link href="/blog" className="text-blue-600">
                  Read more
                </Link>
              </div>
              <div className="p-4 border rounded-lg shadow-sm">
                <h3 className="font-semibold">Contact Support</h3>
                <p className="text-sm text-gray-600">
                  Reach us via chat or email.
                </p>
                <a
                  href="mailto:support@finalroundai.com"
                  className="text-blue-600"
                >
                  support@genesistech.ca
                </a>
              </div>
              <div className="p-4 border rounded-lg shadow-sm">
                <h3 className="font-semibold">Book an Onboarding Session</h3>
                <button className="mt-2 px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed">
                  Upgrade to schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
