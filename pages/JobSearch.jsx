// "use client";
// import { useState } from "react";
// import axios from "axios"; // Import Axios

// const JobSearch = () => {
//   const [keywords, setKeywords] = useState("");
//   const [location, setLocation] = useState("");
//   const [jobResults, setJobResults] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Fetch jobs when the form is submitted
//   const fetchJobs = async () => {
//     if (!keywords) {
//       alert("Please provide both keywords and location.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     const url = "https://jooble.org/api/";
//     const key = "a5192dc3-f8a4-42a7-88a6-2cdb4859be2a";
//     const params = {
//       keywords,
//       location,
//       // location: "France",
//     };

//     try {
//       const response = await axios.post(url + key, params, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       // Handle success
//       console.log(response.data.jobs, "jobc");
//       setJobResults(response.data.jobs);
//       setLoading(false);
//     } catch (err) {
//       // Handle error
//       setError("Failed to fetch jobs. Please try again later.");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-8">
//       <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
//         <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//           <div className="flex justify-between items-center mb-8">
//             <h1 className="text-2xl font-bold text-gray-800">My Jobs</h1>
//           </div>
//         </div>
//       </div>
//       <div className=" bg-gray-100 p-4">
//         <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//           <h1 className="text-3xl font-semibold text-center mb-6">
//             Job Search
//           </h1>

//           {/* Search Form */}
//           <div className="mb-6">
//             <label
//               htmlFor="keywords"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Keywords
//             </label>
//             <input
//               id="keywords"
//               type="text"
//               className="mt-1 p-2 w-full border rounded-lg shadow-sm"
//               placeholder="Enter job title, e.g., 'Developer'"
//               value={keywords}
//               onChange={(e) => setKeywords(e.target.value)}
//             />
//           </div>

//           <div className="mb-6">
//             <label
//               htmlFor="location"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Location
//             </label>
//             <input
//               id="location"
//               type="text"
//               className="mt-1 p-2 w-full border rounded-lg shadow-sm"
//               placeholder="Enter city or country, e.g., 'Berlin'"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//             />
//           </div>

//           <button
//             onClick={fetchJobs}
//             className="w-full py-2 px-4 bg-cyan-600 text-white rounded-lg "
//           >
//             Search Jobs
//           </button>
//         </div>

//         {/* Display Job Results */}
//         {loading && <div className="mt-6 text-center">Loading...</div>}
//         {error && <div className="mt-6 text-center text-red-500">{error}</div>}
//         {jobResults && !loading && !error && (
//           <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//             {jobResults.map((job) => (
//               <div
//                 key={job.id}
//                 className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
//               >
//                 <h3 className="text-xl font-semibold text-cyan-600">
//                   {job.title}
//                 </h3>
//                 <p className="text-sm text-gray-600">{job.company}</p>
//                 <p className="text-sm text-gray-500">{job.location}</p>
//                 <a
//                   href={job.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-cyan-600 hover:underline mt-2 block"
//                 >
//                   Apply Now
//                 </a>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobSearch;
// "use client";
// import { useContext, useState } from "react";
// import axios from "axios";
// import { useTranslation } from "next-i18next";
// import { ResumeContext } from "../components/context/ResumeContext";

// const JobSearch = () => {
//   const { t } = useTranslation();
//   const [location, setLocation] = useState("");
//   const [jobResults, setJobResults] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const {resumeData} = useContext(ResumeContext)
//   const [keywords, setKeywords] = useState(resumeData?.position);

//   const fetchJobs = async () => {
//     if (!keywords) {
//       alert(t("jobsearch.error_message"));
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     const url = "https://jooble.org/api/";
//     const key = "a5192dc3-f8a4-42a7-88a6-2cdb4859be2a";
//     const params = { keywords, location };

//     try {
//       const response = await axios.post(url + key, params, {
//         headers: { "Content-Type": "application/json" },
//       });

//       setJobResults(response.data.jobs);
//       setLoading(false);
//     } catch (err) {
//       setError(t("jobsearch.error_message"));
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-8">
//       <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">
//           {t("jobsearch.my_jobs")}
//         </h1>
//       </div>

//       <div className="bg-gray-100 p-4">
//         <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//           <h1 className="text-3xl font-semibold text-center mb-6">
//             {t("jobsearch.job_search")}
//           </h1>

//           {/* Search Form */}
//           <div className="mb-6">
//             <label
//               htmlFor="keywords"
//               className="block text-sm font-medium text-gray-700"
//             >
//               {t("jobsearch.keywords")}
//             </label>
//             <input
//               id="keywords"
//               type="text"
//               className="mt-1 p-2 w-full border rounded-lg shadow-sm"
//               placeholder={t("jobsearch.keywords_placeholder")}
//               value={keywords}
//               onChange={(e) => setKeywords(e.target.value)}
//             />
//           </div>

//           <div className="mb-6">
//             <label
//               htmlFor="location"
//               className="block text-sm font-medium text-gray-700"
//             >
//               {t("jobsearch.location")}
//             </label>
//             <input
//               id="location"
//               type="text"
//               className="mt-1 p-2 w-full border rounded-lg shadow-sm"
//               placeholder={t("jobsearch.location_placeholder")}
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//             />
//           </div>

//           <button
//             onClick={fetchJobs}
//             className="w-full py-2 px-4 bg-cyan-600 text-white rounded-lg"
//           >
//             {t("jobsearch.search_jobs")}
//           </button>
//         </div>

//         {/* Display Job Results */}
//         {loading && (
//           <div className="mt-6 text-center">{t("jobsearch.loading")}</div>
//         )}
//         {error && <div className="mt-6 text-center text-red-500">{error}</div>}
//         {jobResults && !loading && !error && (
//           <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//             {jobResults.map((job) => (
//               <div
//                 key={job.id}
//                 className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
//               >
//                 <h3 className="text-xl font-semibold text-cyan-600">
//                   {job.title}
//                 </h3>
//                 <p className="text-sm text-gray-600">{job.company}</p>
//                 <p className="text-sm text-gray-500">{job.location}</p>
//                 <a
//                   href={job.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-cyan-600 hover:underline mt-2 block"
//                 >
//                   {t("jobsearch.apply_now")}
//                 </a>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobSearch;

"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

const JobSearch = () => {
  const { t } = useTranslation();
  const [jobResults, setJobResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://api.ciblijob.fr/api/user/job-list"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }
        const data = await response.json();
        setJobResults(data.data);
      } catch (err) {
        setError(t("jobsearch.error_message"));
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [t]);

  const handleTitleClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {t("jobsearch.my_jobs")}
        </h1>
      </div>

      <div className="bg-gray-100 p-4">
        {loading && (
          <div className="mt-6 text-center">{t("jobsearch.loading")}</div>
        )}
        {error && <div className="mt-6 text-center text-red-500">{error}</div>}
        {!loading && !error && jobResults.length > 0 && (
          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {jobResults.map((job) => (
              <div
                key={job.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
              >
                <h3
                  className="text-xl font-semibold text-cyan-600 cursor-pointer"
                  onClick={() => handleTitleClick(job)}
                >
                  {job.job_title}
                </h3>
                <p className="text-sm text-gray-600">{job.company_name}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
                <a
                  href={job.redirect_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:underline mt-2 block"
                >
                  {t("jobsearch.apply_now")}
                </a>
              </div>
            ))}
          </div>
        )}
        {!loading && !error && jobResults.length === 0 && (
          <div className="mt-6 text-center">{t("jobsearch.no_jobs_found")}</div>
        )}
      </div>

      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedJob.job_title}</h2>
            <p className="mb-4">{selectedJob.job_description}</p>
            <div className="flex justify-end">
              <a
                href={selectedJob.redirect_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-600 text-white py-2 px-4 rounded-lg mr-2"
              >
                {t("jobsearch.apply_now")}
              </a>
              <button
                onClick={handleCloseModal}
                className="bg-gray-500 text-white py-2 px-4 rounded-lg"
              >
                {t("myresume.cancel")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobSearch;
