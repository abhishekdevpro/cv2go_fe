import React, { useState } from "react";
import SavedJobsPage from "./SavedJobs";

import Navbar from "../Navbar/Navbar";
import JobSearch from "../JobSearch";

const JobsToggle = () => {
  const [activeTab, setActiveTab] = useState("myJobs");

  return (
    <>
      <Navbar />
      <div className=" mx-auto mt-10 p-6 rounded-lg shadow-lg">
        <div className="flex border-b mb-6">
          <button
            className={`flex-1 py-2 text-center text-lg font-medium transition-all duration-300 ${
              activeTab === "myJobs"
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("myJobs")}
          >
            My Jobs
          </button>
          <button
            className={`flex-1 py-2 text-center text-lg font-medium transition-all duration-300 ${
              activeTab === "savedJobs"
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("savedJobs")}
          >
            Saved Jobs
          </button>
        </div>

        {activeTab === "myJobs" ? <JobSearch /> : <SavedJobsPage />}
      </div>
    </>
  );
};

export default JobsToggle;
