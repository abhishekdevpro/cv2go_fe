import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import { FaUpload, FaTrash, FaDownload, FaEdit } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { Download, Edit, Trash, Plus } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa"; //
import MyResume from "./MyResume";
import LinkedInModal from "./linkedinmodal";

export default function ResumeFromStarted() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleCreateResume = () => {
    setTimeout(() => {
      router.push("/dashboard/resume-builder");
    }, 2000);
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <div className="w-full shadow-md">
          <Navbar />
        </div>

        <div className="flex flex-1 w-full  mt-4 bg-white shadow-md rounded-lg overflow-hidden">
          {/* Hamburger icon for mobile view */}
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

          {/* Content area */}
          <div className="flex-1 w-full max-w-8xl p-4 overflow-auto">
            {/* <ProfileForm /> */}
            <div className="max-w-6xl mx-auto p-6">
              <h1 className="text-2xl font-bold">Document Center</h1>
              <p className="text-gray-600 mt-2">
                Upload your resume, cover letter, or any other job application
                materials, and let our AI polish them.
              </p>
              {/* Info Box */}

              {visible && (
                <div className="bg-gray-100 p-4 mt-4 rounded-lg border border-gray-300 relative">
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={() => setVisible(false)}
                  >
                    ✕
                  </button>
                  <h2 className="text-lg font-semibold">
                    Your resume but better in one easy step
                  </h2>
                  <p className="text-gray-600">
                    Upload your resume via the button below to pass ATS checks.
                  </p>
                </div>
              )}
              {/* Action Buttons */}
              <div className="mt-4 flex gap-4">
                <div className="flex flex-col sm:flex-row justify-center items-center mb-8 gap-4 mt-4 p-4">
                  <button className="flex justify-center items-center px-4 py-2 w-full sm:w-auto bg-black text-white rounded-lg  transition-colors duration-200 font-medium shadow-sm gap-2">
                    <FaUpload /> Upload
                  </button>
                  <button
                    onClick={handleCreateResume}
                    className="flex justify-center items-center px-4 py-2 w-full sm:w-auto bg-cyan-600 text-white rounded-lg hover:bg-cyan-800 transition-colors duration-200 font-medium shadow-sm"
                  >
                    <Plus className="w-5 h-5 mr-2" /> Create AI Resume Builder
                  </button>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex justify-center items-center px-4 py-2 w-full sm:w-auto bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors duration-200 font-medium shadow-sm"
                  >
                    <Plus className="w-5 h-5 mr-2" /> LinkedIn Profile
                  </button>
                  <LinkedInModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                  />
                </div>
              </div>
              {/* Documents Table */}
              <div className="mt-6 bg-white shadow-md rounded-lg overflow-hidden">
                <MyResume />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
