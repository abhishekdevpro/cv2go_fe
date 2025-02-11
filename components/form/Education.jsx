// import { ResumeContext } from "../context/ResumeContext";
// import FormButton from "./FormButton";
// import React, { useContext, useState } from "react";
// import { AlertCircle, X } from "lucide-react";
// import { useRouter } from "next/router";

// const Education = () => {
//   const { resumeData, setResumeData, resumeStrength } =
//     useContext(ResumeContext);
//   const [activeTooltip, setActiveTooltip] = useState(null);
//   const router = useRouter();
//   const { improve } = router.query;

//   const handleEducation = (e, index) => {
//     const { name, value } = e.target;
//     const newEducation = [...resumeData.education];
//     newEducation[index][name] = value;
//     setResumeData({ ...resumeData, education: newEducation });
//   };

//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   const years = Array.from(
//     { length: 100 },
//     (_, i) => new Date().getFullYear() - i
//   );

//   const handleMonthChange = (e, index, field) => {
//     const newEducation = [...resumeData.education];
//     const currentDate = newEducation[index][field] || "Aug,2020";
//     const [_, year] = currentDate.split(",");
//     const newMonth = e.target.value;
//     newEducation[index][field] = `${newMonth},${year || ""}`;
//     setResumeData({ ...resumeData, education: newEducation });
//   };

//   const handleYearChange = (e, index, field) => {
//     const newEducation = [...resumeData.education];
//     const currentDate = newEducation[index][field] || "Aug,2020";
//     const [month, _] = currentDate.split(",");
//     const newYear = e.target.value;
//     newEducation[index][field] = `${month || ""},${newYear}`;
//     setResumeData({ ...resumeData, education: newEducation });
//   };

//   const addEducation = () => {
//     setResumeData({
//       ...resumeData,
//       education: [
//         ...resumeData.education,
//         {
//           school: "",
//           degree: "",
//           startYear: "Aug,2020",
//           endYear: "Jul,2024",
//           location: "",
//         },
//       ],
//     });
//   };

//   const removeEducation = (index) => {
//     const newEducation = [...resumeData.education];
//     newEducation.splice(index, 1);
//     setResumeData({ ...resumeData, education: newEducation });
//   };

//   // Helper function to check if a field has errors
//   const hasErrors = (index, field) => {
//     const educationStrength = resumeStrength?.education_strenght?.[index];
//     return educationStrength && educationStrength[field] !== null;
//   };

//   // Helper function to get error message for a field
//   const getErrorMessage = (index, field) => {
//     const educationStrength = resumeStrength?.education_strenght?.[index];
//     if (educationStrength && Array.isArray(educationStrength[field])) {
//       return educationStrength[field];
//     }
//     return null;
//   };

//   return (
//     <div className="flex-col gap-3 w-full mt-10 px-10">
//       <h2 className="input-title text-black text-3xl">Education</h2>
//       {resumeData.education.map((education, index) => (
//         <div key={index} className="f-col">
//           <div className="relative mb-4">
//             <input
//               type="text"
//               placeholder="School"
//               name="school"
//               className={`w-full other-input border ${
//                 hasErrors(index, "school") ? "border-red-500" : "border-black"
//               }`}
//               value={education.school}
//               onChange={(e) => handleEducation(e, index)}
//             />
//             {improve && hasErrors(index, "school") && (
//               <button
//                 type="button"
//                 className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-600 transition-colors"
//                 onClick={() =>
//                   setActiveTooltip(
//                     activeTooltip === `school-${index}`
//                       ? null
//                       : `school-${index}`
//                   )
//                 }
//               >
//                 <AlertCircle className="w-5 h-5" />
//               </button>
//             )}
//             {activeTooltip === `school-${index}` && (
//               // <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200">
//               //   <div className="bg-red-50 px-4 py-2 rounded-t-lg border-b border-red-100">
//               //     <div className="flex items-center gap-2">
//               //       <AlertCircle className="w-5 h-5 text-red-600" />
//               //       <span className="font-medium text-red-800">School Error</span>
//               //     </div>
//               //   </div>
//               //   <div className="p-4">
//               //     {getErrorMessage(index, 'school')?.map((msg, i) => (
//               //       <div key={i} className="text-gray-700 text-sm mb-2">{msg}</div>
//               //     ))}
//               //   </div>
//               //   <div className="border-t border-gray-100 p-3 flex justify-end">
//               //     <button
//               //       onClick={() => setActiveTooltip(null)}
//               //       className="text-cyan-600 hover:text-blue-800 text-sm font-medium"
//               //     >
//               //       Dismiss
//               //     </button>
//               //   </div>
//               // </div>
//               <div className="absolute z-50 right-0 mt-2 w-80 bg-white rounded-lg shadow-xl transform transition-all duration-200 ease-in-out border border-gray-700">
//                 <div className="p-4 border-b border-gray-700">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <AlertCircle className="w-5 h-5 text-red-400" />
//                       <span className="font-medium text-black">
//                         {" "}
//                         Suggestions
//                       </span>
//                     </div>
//                     <button
//                       onClick={() => setActiveTooltip(null)}
//                       className="text-gray-400 hover:text-black transition-colors"
//                     >
//                       <X className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   {getErrorMessage(index, "school").map((msg, i) => (
//                     <div
//                       key={i}
//                       className="flex items-start space-x-3 mb-3 last:mb-0"
//                     >
//                       <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></div>
//                       <p className="text-black text-sm">{msg}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="relative mb-4">
//             <input
//               type="text"
//               placeholder="Degree"
//               name="degree"
//               className={`w-full other-input border ${
//                 improve && hasErrors(index, "degree")
//                   ? "border-red-500"
//                   : "border-black"
//               }`}
//               value={education.degree}
//               onChange={(e) => handleEducation(e, index)}
//             />
//             {improve && hasErrors(index, "degree") && (
//               <button
//                 type="button"
//                 className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-600 transition-colors"
//                 onClick={() =>
//                   setActiveTooltip(
//                     activeTooltip === `degree-${index}`
//                       ? null
//                       : `degree-${index}`
//                   )
//                 }
//               >
//                 <AlertCircle className="w-5 h-5" />
//               </button>
//             )}
//             {activeTooltip === `degree-${index}` && (
//               // <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200">
//               //   <div className="bg-red-50 px-4 py-2 rounded-t-lg border-b border-red-100">
//               //     <div className="flex items-center gap-2">
//               //       <AlertCircle className="w-5 h-5 text-red-600" />
//               //       <span className="font-medium text-red-800">Degree Error</span>
//               //     </div>
//               //   </div>
//               //   <div className="p-4">
//               //     {getErrorMessage(index, 'degree')?.map((msg, i) => (
//               //       <div key={i} className="text-gray-700 text-sm mb-2">{msg}</div>
//               //     ))}
//               //   </div>
//               //   <div className="border-t border-gray-100 p-3 flex justify-end">
//               //     <button
//               //       onClick={() => setActiveTooltip(null)}
//               //       className="text-cyan-600 hover:text-blue-800 text-sm font-medium"
//               //     >
//               //       Dismiss
//               //     </button>
//               //   </div>
//               // </div>
//               <div className="absolute z-50 right-0 mt-2 w-80 bg-white rounded-lg shadow-xl transform transition-all duration-200 ease-in-out border border-gray-700">
//                 <div className="p-4 border-b border-gray-700">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <AlertCircle className="w-5 h-5 text-red-400" />
//                       <span className="font-medium text-black">
//                         Suggestions
//                       </span>
//                     </div>
//                     <button
//                       onClick={() => setActiveTooltip(null)}
//                       className="text-gray-400 hover:text-black transition-colors"
//                     >
//                       <X className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   {getErrorMessage(index, "degree").map((msg, i) => (
//                     <div
//                       key={i}
//                       className="flex items-start space-x-3 mb-3 last:mb-0"
//                     >
//                       <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></div>
//                       <p className="text-black text-sm">{msg}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="">
//             <label className="text-black">Start Date</label>
//             <div className="flex-wrap-gap-2">
//               <select
//                 className={`border other-input flex-1 ${
//                   improve && hasErrors(index, "startYear")
//                     ? "border-red-500"
//                     : "border-black"
//                 }`}
//                 value={(education.startYear || "Aug,2020").split(",")[0]}
//                 onChange={(e) => handleMonthChange(e, index, "startYear")}
//               >
//                 <option value="">Month</option>
//                 {months.map((month, idx) => (
//                   <option key={idx} value={month}>
//                     {month}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 className={`other-input border flex-1 ${
//                   improve && hasErrors(index, "startYear")
//                     ? "border-red-500"
//                     : "border-black"
//                 }`}
//                 value={(education.startYear || "Aug,2020").split(",")[1]}
//                 onChange={(e) => handleYearChange(e, index, "startYear")}
//               >
//                 <option value="">Year</option>
//                 {years.map((year, idx) => (
//                   <option key={idx} value={year}>
//                     {year}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <label className="text-black">End Date</label>
//             <div className="flex-wrap-gap-2">
//               <select
//                 className={`other-input border flex-1 ${
//                   improve && hasErrors(index, "endYear")
//                     ? "border-red-500"
//                     : "border-black"
//                 }`}
//                 value={(education.endYear || "Jul,2024").split(",")[0]}
//                 onChange={(e) => handleMonthChange(e, index, "endYear")}
//               >
//                 <option value="">Month</option>
//                 {months.map((month, idx) => (
//                   <option key={idx} value={month}>
//                     {month}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 className={`other-input border flex-1 ${
//                   improve && hasErrors(index, "endYear")
//                     ? "border-red-500"
//                     : "border-black"
//                 }`}
//                 value={(education.endYear || "Jul,2024").split(",")[1]}
//                 onChange={(e) => handleYearChange(e, index, "endYear")}
//               >
//                 <option value="">Year</option>
//                 {years.map((year, idx) => (
//                   <option key={idx} value={year}>
//                     {year}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="relative">
//             <label className="mt-2 text-black">Location</label>
//             <input
//               type="text"
//               placeholder="Location"
//               name="location"
//               className={`w-full other-input border ${
//                 improve && hasErrors(index, "location")
//                   ? "border-red-500"
//                   : "border-black"
//               }`}
//               value={education.location}
//               onChange={(e) => handleEducation(e, index)}
//             />
//             {improve && hasErrors(index, "location") && (
//               <button
//                 type="button"
//                 className="absolute right-2 top-1/2 translate-y-1 text-red-500 hover:text-red-600 transition-colors"
//                 onClick={() =>
//                   setActiveTooltip(
//                     activeTooltip === `location-${index}`
//                       ? null
//                       : `location-${index}`
//                   )
//                 }
//               >
//                 <AlertCircle className="w-5 h-5" />
//               </button>
//             )}
//             {activeTooltip === `location-${index}` && (
//               // <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200">

//               //   <div className="p-4">
//               //     {getErrorMessage(index, 'location')?.map((msg, i) => (
//               //       <div key={i} className="text-gray-700 text-sm flex items-center gap-2">
//               //         <AlertCircle className="w-5 h-5 text-red-600" />
//               //         <span>{msg}</span>
//               //         </div>
//               //     ))}
//               //   </div>
//               //   <div className="border-t border-gray-100 p-3 flex justify-end">
//               //     <button
//               //       onClick={() => setActiveTooltip(null)}
//               //       className="text-cyan-600 hover:text-blue-800 text-sm font-medium"
//               //     >
//               //       Dismiss
//               //     </button>
//               //   </div>
//               // </div>

//               <div className="absolute z-50 right-0 mt-2 w-80 bg-white rounded-lg shadow-xl transform transition-all duration-200 ease-in-out border border-gray-700">
//                 <div className="p-4 border-b border-gray-700">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <AlertCircle className="w-5 h-5 text-red-400" />
//                       <span className="font-medium text-black">
//                         Location Suggestions
//                       </span>
//                     </div>
//                     <button
//                       onClick={() => setActiveTooltip(null)}
//                       className="text-gray-400 hover:text-black transition-colors"
//                     >
//                       <X className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   {getErrorMessage(index, "location").map((msg, i) => (
//                     <div
//                       key={i}
//                       className="flex items-start space-x-3 mb-3 last:mb-0"
//                     >
//                       <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></div>
//                       <p className="text-black text-sm">{msg}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//       <FormButton
//         size={resumeData.education.length}
//         add={addEducation}
//         remove={removeEducation}
//       />
//     </div>
//   );
// };

// export default Education;

import { ResumeContext } from "../context/ResumeContext";
import FormButton from "./FormButton";
import React, { useContext, useState } from "react";
import { AlertCircle, X, Loader2 } from "lucide-react";
import { useRouter } from "next/router";
import { BASE_URL } from "../Constant/constant";
import { MdRemoveCircle } from "react-icons/md";
const Education = () => {
  const { resumeData, setResumeData, resumeStrength } =
    useContext(ResumeContext);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [universitySuggestions, setUniversitySuggestions] = useState([]);
  const [showUniversityDropdown, setShowUniversityDropdown] = useState(false);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState({
    university: false,
    location: false,
  });
  const router = useRouter();
  const { improve } = router.query;

  const handleEducation = (e, index) => {
    const { name, value } = e.target;
    const newEducation = [...resumeData.education];
    newEducation[index][name] = value;
    setResumeData({ ...resumeData, education: newEducation });

    if (name === "school") {
      fetchUniversities(value, index);
    }
    if (name === "location") {
      fetchLocations(value);
    }
  };

  const fetchUniversities = async (keyword, index) => {
    if (!keyword || keyword.length < 1) {
      setUniversitySuggestions([]);
      return;
    }

    setIsLoading((prev) => ({ ...prev, university: true }));
    try {
      const response = await fetch(
        `${BASE_URL}/api/user/university-lists?university_keyword=${encodeURIComponent(
          keyword
        )}`
      );
      if (response.ok) {
        const data = await response.json();
        setUniversitySuggestions(data.data.map((item) => item.name));
        setShowUniversityDropdown(true);
      }
    } catch (error) {
      console.error("Error fetching universities:", error);
    }
    setIsLoading((prev) => ({ ...prev, university: false }));
  };

  const fetchLocations = async (keyword) => {
    if (!keyword || keyword.length < 1) {
      setLocationSuggestions([]);
      return;
    }

    setIsLoading((prev) => ({ ...prev, location: true }));
    try {
      const response = await fetch(
        `${BASE_URL}/api/user/locations?locations=${encodeURIComponent(
          keyword
        )}`
      );
      if (response.ok) {
        const data = await response.json();
        const locations = data.data.location_names.map((item) => item);
        setLocationSuggestions(locations);
        setShowLocationDropdown(true);
      }
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
    setIsLoading((prev) => ({ ...prev, location: false }));
  };

  const selectUniversity = (value, index) => {
    const newEducation = [...resumeData.education];
    newEducation[index].school = value;
    setResumeData({ ...resumeData, education: newEducation });
    setShowUniversityDropdown(false);
  };

  const selectLocation = (value, index) => {
    const newEducation = [...resumeData.education];
    newEducation[index].location = value;
    setResumeData({ ...resumeData, education: newEducation });
    setShowLocationDropdown(false);
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );

  const handleMonthChange = (e, index, field) => {
    const newEducation = [...resumeData.education];
    const currentDate = newEducation[index][field] || "Aug,2020";
    const [_, year] = currentDate.split(",");
    const newMonth = e.target.value;
    newEducation[index][field] = `${newMonth},${year || ""}`;
    setResumeData({ ...resumeData, education: newEducation });
  };

  const handleYearChange = (e, index, field) => {
    const newEducation = [...resumeData.education];
    const currentDate = newEducation[index][field] || "Aug,2020";
    const [month, _] = currentDate.split(",");
    const newYear = e.target.value;
    newEducation[index][field] = `${month || ""},${newYear}`;
    setResumeData({ ...resumeData, education: newEducation });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          school: "",
          degree: "",
          startYear: "Aug,2020",
          endYear: "Jul,2024",
          location: "",
        },
      ],
    });
  };

  const removeEducation = (index) => {
    const newEducation = [...resumeData.education];
    newEducation.splice(index, 1);
    setResumeData({ ...resumeData, education: newEducation });
  };

  const hasErrors = (index, field) => {
    const educationStrength = resumeStrength?.education_strenght?.[index];
    return educationStrength && educationStrength[field] !== null;
  };

  const getErrorMessage = (index, field) => {
    const educationStrength = resumeStrength?.education_strenght?.[index];
    if (educationStrength && Array.isArray(educationStrength[field])) {
      return educationStrength[field];
    }
    return null;
  };

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      setShowUniversityDropdown(false);
      setShowLocationDropdown(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const renderTooltip = (index, field, title) => {
    if (activeTooltip === `${field}-${index}`) {
      return (
        <div className="absolute z-50 right-0 mt-2 w-80 bg-white rounded-lg shadow-xl transform transition-all duration-200 ease-in-out border border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="font-medium text-black">
                  {title || "Suggestions"}
                </span>
              </div>
              <button
                onClick={() => setActiveTooltip(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-4">
            {getErrorMessage(index, field)?.map((msg, i) => (
              <div
                key={i}
                className="flex items-start space-x-3 mb-3 last:mb-0"
              >
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></div>
                <p className="text-black text-sm">{msg}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex-col gap-3 w-full mt-10 px-10">
      <h2 className="input-title text-black text-3xl">Education</h2>
      {resumeData.education.map((education, index) => (
        <div key={index} className="f-col">
          <div className="relative mb-4">
            <div className="relative">
              <div className="flex items-center justify-between">
                <h3 className="text-black text-xl font-semibold">
                  {`Education ${index + 1}`}
                </h3>
                <button
                  type="button"
                  onClick={() => removeEducation(index)}
                  aria-label="Remove"
                  className="p-2 text-white bg-red-700 rounded-lg text-xl mb-2"
                >
                  <MdRemoveCircle />
                </button>
              </div>
              <input
                type="text"
                placeholder="School"
                name="school"
                className={`w-full other-input border ${
                  hasErrors(index, "school") ? "border-red-500" : "border-black"
                }`}
                value={education.school}
                onChange={(e) => handleEducation(e, index)}
                onClick={(e) => e.stopPropagation()}
              />
              {isLoading.university && (
                <div className="absolute right-8 top-1/2 -translate-y-1/2">
                  <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                </div>
              )}
              {improve && hasErrors(index, "school") && (
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-600 transition-colors"
                  onClick={() =>
                    setActiveTooltip(
                      activeTooltip === `school-${index}`
                        ? null
                        : `school-${index}`
                    )
                  }
                >
                  <AlertCircle className="w-5 h-5" />
                </button>
              )}
            </div>

            {showUniversityDropdown && universitySuggestions.length > 0 && (
              <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {universitySuggestions.map((university, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                    onClick={() => selectUniversity(university, index)}
                  >
                    {university}
                  </div>
                ))}
              </div>
            )}

            {renderTooltip(index, "school", "School Suggestions")}
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Degree"
              name="degree"
              className={`w-full other-input border ${
                improve && hasErrors(index, "degree")
                  ? "border-red-500"
                  : "border-black"
              }`}
              value={education.degree}
              onChange={(e) => handleEducation(e, index)}
            />
            {improve && hasErrors(index, "degree") && (
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-600 transition-colors"
                onClick={() =>
                  setActiveTooltip(
                    activeTooltip === `degree-${index}`
                      ? null
                      : `degree-${index}`
                  )
                }
              >
                <AlertCircle className="w-5 h-5" />
              </button>
            )}
            {renderTooltip(index, "degree", "Degree Suggestions")}
          </div>

          <div className="">
            <label className="text-black">Start Date</label>
            <div className="flex-wrap-gap-2">
              <select
                className={`border other-input flex-1 ${
                  improve && hasErrors(index, "startYear")
                    ? "border-red-500"
                    : "border-black"
                }`}
                value={(education.startYear || "Aug,2020").split(",")[0]}
                onChange={(e) => handleMonthChange(e, index, "startYear")}
              >
                <option value="">Month</option>
                {months.map((month, idx) => (
                  <option key={idx} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                className={`other-input border flex-1 ${
                  improve && hasErrors(index, "startYear")
                    ? "border-red-500"
                    : "border-black"
                }`}
                value={(education.startYear || "Aug,2020").split(",")[1]}
                onChange={(e) => handleYearChange(e, index, "startYear")}
              >
                <option value="">Year</option>
                {years.map((year, idx) => (
                  <option key={idx} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <label className="text-black">End Date</label>
            <div className="flex-wrap-gap-2">
              <select
                className={`other-input border flex-1 ${
                  improve && hasErrors(index, "endYear")
                    ? "border-red-500"
                    : "border-black"
                }`}
                value={(education.endYear || "Jul,2024").split(",")[0]}
                onChange={(e) => handleMonthChange(e, index, "endYear")}
              >
                <option value="">Month</option>
                {months.map((month, idx) => (
                  <option key={idx} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                className={`other-input border flex-1 ${
                  improve && hasErrors(index, "endYear")
                    ? "border-red-500"
                    : "border-black"
                }`}
                value={(education.endYear || "Jul,2024").split(",")[1]}
                onChange={(e) => handleYearChange(e, index, "endYear")}
              >
                <option value="">Year</option>
                {years.map((year, idx) => (
                  <option key={idx} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="relative">
            <label className="mt-2 text-black">Location</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Location"
                name="location"
                className={`w-full other-input border ${
                  improve && hasErrors(index, "location")
                    ? "border-red-500"
                    : "border-black"
                }`}
                value={education.location}
                onChange={(e) => handleEducation(e, index)}
                onClick={(e) => e.stopPropagation()}
              />
              {isLoading.location && (
                <div className="absolute right-8 top-1/2 -translate-y-1/2">
                  <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                </div>
              )}
              {improve && hasErrors(index, "location") && (
                <button
                  type="button"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500 hover:text-red-600 transition-colors"
                  onClick={() =>
                    setActiveTooltip(
                      activeTooltip === `location-${index}`
                        ? null
                        : `location-${index}`
                    )
                  }
                >
                  <AlertCircle className="w-5 h-5" />
                </button>
              )}
            </div>

            {showLocationDropdown && locationSuggestions.length > 0 && (
              <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {locationSuggestions.map((location, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                    onClick={() => selectLocation(location, index)}
                  >
                    {location}
                  </div>
                ))}
              </div>
            )}

            {renderTooltip(index, "location", "Location Suggestions")}
          </div>
        </div>
      ))}
      <FormButton
        size={resumeData.education.length}
        add={addEducation}
        remove={removeEducation}
      />
    </div>
  );
};

export default Education;
