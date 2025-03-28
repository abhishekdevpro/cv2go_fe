// import React, { useContext, useState, useEffect } from "react";
// import { ResumeContext } from "../context/ResumeContext";
// import { AlertCircle, X, Loader2, ChevronDown } from "lucide-react";
// import { useRouter } from "next/router";
// import { BASE_URL } from "../Constant/constant";
// import { useTranslation } from "react-i18next";
// const PersonalInformation = () => {
//   const { i18n, t } = useTranslation();
//   const language = i18n.language;

//   const {
//     resumeData,
//     setResumeData,
//     handleProfilePicture,
//     handleChange,
//     resumeStrength,
//     setResumeStrength,
//   } = useContext(ResumeContext);
//   const router = useRouter();
//   const { improve } = router.query;

//   const [activeTooltip, setActiveTooltip] = useState(null);
//   const [jobTitleSuggestions, setJobTitleSuggestions] = useState([]);
//   const [locationSuggestions, setLocationSuggestions] = useState([]);
//   const [countryCodes, setCountryCodes] = useState([]);
//   const [showJobTitleDropdown, setShowJobTitleDropdown] = useState(false);
//   const [showLocationDropdown, setShowLocationDropdown] = useState(false);
//   const [showCountryCodeDropdown, setShowCountryCodeDropdown] = useState(false);
//   const [selectedCountryCode, setSelectedCountryCode] = useState("+91"); // Default to India
//   const [isLoading, setIsLoading] = useState({
//     jobTitle: false,
//     location: false,
//     autoFix: false,
//     countryCodes: false,
//   });

//   const dummyImage =
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlie4MsQ9pJSSKY7DoEpxn3uBAq-rT7in1sA&s";

//   useEffect(() => {
//     const fetchCountryCodes = async () => {
//       setIsLoading((prev) => ({ ...prev, countryCodes: true }));
//       try {
//         const response = await fetch(
//           `${BASE_URL}/api/user/countries?lang=${language}`
//         );
//         if (response.ok) {
//           const data = await response.json();
//           const sortedCountries = data.data.sort((a, b) =>
//             a.name.localeCompare(b.name)
//           );
//           setCountryCodes(sortedCountries);
//         }
//       } catch (error) {
//         console.error("Error fetching country codes:", error);
//       }
//       setIsLoading((prev) => ({ ...prev, countryCodes: false }));
//     };

//     fetchCountryCodes();
//   }, []);

//   const fetchJobTitles = async (keyword) => {
//     if (!keyword || keyword.length < 1) {
//       setJobTitleSuggestions([]);
//       return;
//     }

//     setIsLoading((prev) => ({ ...prev, jobTitle: true }));
//     try {
//       const response = await fetch(
//         `${BASE_URL}/api/user/job-title?job_title_keyword=${encodeURIComponent(
//           keyword
//         )}?lang=${language}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         const jobTitles = data.data.map((item) => item.name);
//         setJobTitleSuggestions(jobTitles);
//         setShowJobTitleDropdown(true);
//       }
//     } catch (error) {
//       console.error("Error fetching job titles:", error);
//     }
//     setIsLoading((prev) => ({ ...prev, jobTitle: false }));
//   };

//   const fetchLocations = async (keyword) => {
//     if (!keyword || keyword.length < 1) {
//       setLocationSuggestions([]);
//       return;
//     }

//     setIsLoading((prev) => ({ ...prev, location: true }));
//     try {
//       const response = await fetch(
//         `${BASE_URL}/api/user/locations?locations=${encodeURIComponent(
//           keyword
//         )}?lang=${language}`
//       );
//       if (response.ok) {
//         const data = await response.json();
//         const locations = data.data.location_names.map((item) => item);
//         setLocationSuggestions(locations);
//         setShowLocationDropdown(true);
//       }
//     } catch (error) {
//       console.error("Error fetching locations:", error);
//     }
//     setIsLoading((prev) => ({ ...prev, location: false }));
//   };

//   const handleAutoFix = async (field, content) => {
//     if (!content) return;

//     setIsLoading((prev) => ({ ...prev, autoFix: true }));

//     try {
//       let endpoint = "";
//       let key = "";

//       if (field === "name") {
//         endpoint = "/ai-username";
//         key = "user name";
//       } else if (field === "position") {
//         endpoint = "/ai-jobtitle";
//         key = "job title";
//       } else if (field === "contactInformation") {
//         endpoint = "/ai-contact";
//         key = "contact information";
//       }

//       const token = localStorage.getItem("token");

//       const response = await fetch(
//         `${BASE_URL}/api/user${endpoint}?lang=${language}`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `${token}`,
//           },
//           body: JSON.stringify({
//             key: key,
//             keyword: "auto improve",
//             content: content,
//           }),
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();

//         if (data.data.resume_analysis) {
//           let updatedValue = null;

//           if (field === "name") {
//             updatedValue = data.data.resume_analysis.user_name;
//           } else if (field === "position") {
//             updatedValue = data.data.resume_analysis.job_title;
//           } else if (field === "contactInformation") {
//             updatedValue = data.data.resume_analysis.contact;
//           }

//           if (updatedValue) {
//             const event = {
//               target: {
//                 name: field,
//                 value: updatedValue,
//               },
//             };
//             handleChange(event);
//             setActiveTooltip(null);

//             // Clear errors for this field
//             if (resumeStrength?.personal_info_strenght) {
//               const updatedStrength = {
//                 ...resumeStrength,
//                 personal_info_strenght: {
//                   ...resumeStrength.personal_info_strenght,
//                   [field]: [],
//                 },
//               };
//               setResumeStrength(updatedStrength);
//             }
//           }
//         }
//       }
//     } catch (error) {
//       console.error(`Error auto-fixing ${field}:`, error);
//     } finally {
//       setIsLoading((prev) => ({ ...prev, autoFix: false }));
//     }
//   };

//   const VALIDATION_RULES = {
//     name: {
//       maxLength: 20,
//       minLength: 2,
//       errorMessage: "Name must be between 2 and 150 characters",
//     },
//     position: {
//       maxLength: 100,
//       minLength: 2,
//       errorMessage: "Job title must be between 2 and 100 characters",
//     },
//     contactInformation: {
//       maxLength: 20,
//       errorMessage: "Contact number must be 20 characters or less",
//     },
//     email: {
//       maxLength: 100,
//       regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//       errorMessage: "Please enter a valid email address",
//     },
//     address: {
//       maxLength: 200,
//       minLength: 5,
//       errorMessage: "Address must be between 5 and 200 characters",
//     },
//   };

//   // Comprehensive validation function
//   const validateField = (field, value) => {
//     const rules = VALIDATION_RULES[field];
//     if (!rules) return null; // No specific validation for this field

//     // Trim the value to remove leading/trailing whitespace
//     const trimmedValue = value?.trim() || "";

//     // Check for empty value
//     if (!trimmedValue) {
//       return "This field cannot be empty";
//     }

//     // Length validation
//     if (rules.maxLength && trimmedValue.length > rules.maxLength) {
//       return rules.errorMessage;
//     }

//     if (rules.minLength && trimmedValue.length < rules.minLength) {
//       return rules.errorMessage;
//     }

//     // Email validation
//     if (field === "email" && rules.regex && !rules.regex.test(trimmedValue)) {
//       return rules.errorMessage;
//     }

//     // Contact number specific validation
//     if (field === "contactInformation") {
//       const contactRegex = /^(\+\d{1,3}\s?)?\(?\d+\)?[\d\s\-]+$/;
//       if (!contactRegex.test(trimmedValue)) {
//         return "Invalid contact number format";
//       }
//     }

//     return null; // Validation passed
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "position") {
//       fetchJobTitles(value);
//     } else if (name === "address") {
//       fetchLocations(value);
//     }
//     const validationError = validateField(name, value);
//     handleChange(e);
//     if (validationError) {
//       const updatedStrength = {
//         ...resumeStrength,
//         personal_info_strenght: {
//           ...resumeStrength?.personal_info_strenght,
//           [name]: [validationError],
//         },
//       };
//       setResumeStrength(updatedStrength);
//     }
//   };

//   const selectSuggestion = (field, value) => {
//     const event = {
//       target: { name: field, value },
//     };
//     handleChange(event);
//     if (field === "position") {
//       setShowJobTitleDropdown(false);
//     } else {
//       setShowLocationDropdown(false);
//     }
//   };

//   const selectCountryCode = (country) => {
//     const newCountryCode = `+${country.phonecode}`;
//     setSelectedCountryCode(newCountryCode);

//     // Update contact information with new country code
//     if (resumeData.contactInformation) {
//       const updatedContact = {
//         target: {
//           name: "contactInformation",
//           value: `${newCountryCode} ${resumeData.contactInformation.replace(
//             /^(\+\d+\s*)?/,
//             ""
//           )}`,
//         },
//       };
//       handleChange(updatedContact);
//     }

//     setShowCountryCodeDropdown(false);
//   };

//   // const hasErrors = (field) => {
//   //   const strengthInfo = resumeStrength?.personal_info_strenght?.[field];
//   //   return Array.isArray(strengthInfo) && strengthInfo.length > 0;
//   // };

//   const getSuggestions = (field) => {
//     return resumeStrength?.personal_info_strenght?.[field] || [];
//   };

//   useEffect(() => {
//     const handleClickOutside = () => {
//       setShowJobTitleDropdown(false);
//       setShowLocationDropdown(false);
//       setShowCountryCodeDropdown(false);
//     };

//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   const formFields = [
//     { field: "name", placeholder: "Full Name", type: "text" },
//     {
//       field: "position",
//       placeholder: "Job Title",
//       type: "text",
//       hasSuggestions: true,
//     },
//     {
//       field: "contactInformation",
//       placeholder: "Contact Number",
//       type: "tel",
//       hasCountryCode: true,
//     },
//     { field: "email", placeholder: "Email", type: "email" },
//     {
//       field: "address",
//       placeholder: "Address",
//       type: "text",
//       hasSuggestions: true,
//     },
//   ];
//   // const hasErrors = (field) => {
//   //   const strengthInfo = resumeStrength?.personal_info_strenght?.[field];
//   //   return Array.isArray(strengthInfo) && strengthInfo.length > 0;
//   // };
//   // const hasErrors = (field) => {
//   //   const strengthInfo = resumeStrength?.personal_info_strenght?.[field];

//   //   // Special check for contact information to ensure it's validated correctly
//   //   if (field === "contactInformation") {
//   //     const contactValue = resumeData[field];
//   //     console.log("Contact Value: ", contactValue); // Debugging line

//   //     const isValidContact = /^(\+\d{1,3}\s?)?\(?\d+\)?[\d\s\-]+$/.test(
//   //       contactValue
//   //     );
//   //     console.log("Is Valid Contact: ", isValidContact); // Debugging line

//   //     if (contactValue && !isValidContact) {
//   //       return true; // Invalid phone number format
//   //     }
//   //     return false; // Valid phone number
//   //   }

//   //   return Array.isArray(strengthInfo) && strengthInfo.length > 0;
//   // };
//   // const hasErrors = (field) => {
//   //   const strengthInfo = resumeStrength?.personal_info_strenght?.[field];
//   //   const fieldValue = resumeData[field]?.trim(); // Trim to check for empty values

//   //   // 1️⃣ Check for empty values (show error if missing)
//   //   if (!fieldValue) return true;

//   //   // 2️⃣ Special validation for contact information
//   //   if (field === "contactInformation") {
//   //     console.log("Contact Value: ", fieldValue); // Debugging

//   //     const isValidContact = /^(\+\d{1,3}\s?)?\(?\d+\)?[\d\s\-]+$/.test(
//   //       fieldValue
//   //     );

//   //     console.log("Is Valid Contact: ", isValidContact); // Debugging

//   //     if (!isValidContact) {
//   //       return true; // Invalid phone number format
//   //     }
//   //   }

//   //   // 3️⃣ Check for API errors in `resumeStrength`
//   //   return Array.isArray(strengthInfo) && strengthInfo.length > 0;
//   // };
//   const hasErrors = (field) => {
//     const strengthInfo = resumeStrength?.personal_info_strenght?.[field];
//     const fieldValue = resumeData[field] || "";

//     // Validate the field
//     const validationError = validateField(field, fieldValue);

//     // If there's a validation error, return true
//     if (validationError) return true;

//     // Check for API-level errors in resumeStrength
//     return Array.isArray(strengthInfo) && strengthInfo.length > 0;
//   };

//   const handleContactChange = (e) => {
//     const { value } = e.target;
//     const fullContactValue = `${selectedCountryCode} ${value.replace(
//       /^(\+\d+\s*)?/,
//       ""
//     )}`;

//     console.log("Updated Contact Value: ", fullContactValue); // Debugging line

//     const updatedContact = {
//       target: {
//         name: "contactInformation",
//         value: fullContactValue,
//       },
//     };
//     handleChange(updatedContact);
//   };

//   return (
//     <div className="flex flex-col gap-3 w-full items-center md:mt-10 p-4 md:px-10">
//       <h2 className="text-2xl md:text-3xl font-semibold text-black">
//         {t("builder_forms.personal_info.details_info")}
//       </h2>

//       <div className="flex flex-col items-center gap-6 w-full">
//         <div className="flex flex-col items-center gap-4">
//           <img
//             src={resumeData.profilePicture || dummyImage}
//             alt="Profile"
//             className="w-28 h-28 md:w-32 md:h-32 rounded-lg object-cover"
//           />
//           <input
//             type="file"
//             name="profileImage"
//             accept="image/*"
//             className="bg-gray-300 text-sm text-black py-2 px-4 rounded-md cursor-pointer hover:bg-gray-400 transition-colors"
//             onChange={handleProfilePicture}
//           />
//         </div>

//         <div className="flex flex-col gap-4 w-full max-w-xl">
//           {formFields.map(
//             ({ field, placeholder, type, hasSuggestions, hasCountryCode }) => (
//               <div
//                 key={field}
//                 className="relative group"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="flex items-center relative">
//                   {/* If field has a country code (for contact number) */}

//                   {hasCountryCode && (
//                     <div className="relative w-full">
//                       <div className="flex items-center">
//                         {/* Country Code Selector */}
//                         <div
//                           className="absolute left-2 z-10 flex items-center cursor-pointer"
//                           onClick={() =>
//                             setShowCountryCodeDropdown(!showCountryCodeDropdown)
//                           }
//                         >
//                           <span className="text-gray-700 mr-1">
//                             {selectedCountryCode}
//                           </span>
//                           <ChevronDown className="w-4 h-4 text-gray-500" />
//                         </div>

//                         {/* Input Field for Contact Information */}
//                         {showCountryCodeDropdown && (
//                           <div className="absolute top-full left-0 mt-1 w-64 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-50">
//                             {countryCodes.map((country) => (
//                               <div
//                                 key={country.id}
//                                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
//                                 onClick={() => selectCountryCode(country)}
//                               >
//                                 <span>{country.name}</span>
//                                 <span>+{country.phonecode}</span>
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                         <input
//                           type={type}
//                           placeholder={placeholder}
//                           name={field}
//                           className={`w-full p-2 pl-16 border rounded-md outline-none transition-colors ${
//                             improve && hasErrors(field)
//                               ? "border-red-500 focus:border-red-600"
//                               : "border-gray-300 focus:border-blue-500"
//                           }`}
//                           value={
//                             resumeData[field]
//                               ? resumeData[field].replace(/^(\+\d+\s*)?/, "")
//                               : ""
//                           }
//                           onChange={
//                             field === "contactInformation"
//                               ? handleContactChange
//                               : handleInputChange
//                           }
//                         />

//                         {/* Error Icon for Contact Information */}
//                         {/* {improve && hasErrors(field) && (
//                           <button
//                             type="button"
//                             className="absolute right-2 mt-2 text-red-500 hover:text-red-600 transition-colors"
//                             onClick={() =>
//                               setActiveTooltip(
//                                 activeTooltip === field ? null : field
//                               )
//                             }
//                             aria-label="Show suggestions"
//                           >
//                             <AlertCircle className="w-5 h-5" />
//                           </button>
//                         )} */}
//                         {improve &&
//                           Object.keys(VALIDATION_RULES).some((field) =>
//                             hasErrors(field)
//                           ) && (
//                             <div className="w-full max-w-xl bg-red-50 border border-red-200 p-3 rounded-md mb-4">
//                               <p className="text-red-600 text-sm">
//                                 Please review and correct the highlighted fields
//                               </p>
//                             </div>
//                           )}
//                       </div>
//                     </div>
//                   )}

//                   {/* If field does NOT have a country code */}
//                   {!hasCountryCode && (
//                     <div className="relative w-full">
//                       {/* Input Field */}
//                       <input
//                         type={type}
//                         placeholder={placeholder}
//                         name={field}
//                         className={`w-full p-2 border rounded-md outline-none transition-colors ${
//                           improve && hasErrors(field)
//                             ? "border-red-500 focus:border-red-600"
//                             : "border-gray-300 focus:border-blue-500"
//                         }`}
//                         value={resumeData[field] || ""}
//                         onChange={handleInputChange}
//                         onFocus={() => {
//                           if (field === "position")
//                             setShowJobTitleDropdown(true);
//                           if (field === "address")
//                             setShowLocationDropdown(true);
//                         }}
//                       />

//                       {/* Error Icon for Other Fields */}
//                       {improve && hasErrors(field) && (
//                         <button
//                           type="button"
//                           className="absolute right-2 mt-2 text-red-500 hover:text-red-600 transition-colors"
//                           onClick={() =>
//                             setActiveTooltip(
//                               activeTooltip === field ? null : field
//                             )
//                           }
//                           aria-label="Show suggestions"
//                         >
//                           <AlertCircle className="w-5 h-5" />
//                         </button>
//                       )}

//                       {/* Loading Indicator for Job Title & Address Suggestions */}
//                       {hasSuggestions &&
//                         isLoading[
//                           field === "position" ? "jobTitle" : "location"
//                         ] && (
//                           <div className="absolute right-8">
//                             <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
//                           </div>
//                         )}
//                     </div>
//                   )}
//                 </div>

//                 {hasSuggestions &&
//                   (field === "position"
//                     ? showJobTitleDropdown && jobTitleSuggestions.length > 0
//                     : showLocationDropdown &&
//                       locationSuggestions.length > 0) && (
//                     <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
//                       {(field === "position"
//                         ? jobTitleSuggestions
//                         : locationSuggestions
//                       ).map((suggestion, index) => (
//                         <div
//                           key={index}
//                           className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
//                           onClick={() => selectSuggestion(field, suggestion)}
//                         >
//                           {suggestion}
//                         </div>
//                       ))}
//                     </div>
//                   )}

//                 {activeTooltip === field && hasErrors(field) && (
//                   <div className="absolute z-50 left-8  w-80 bg-white rounded-lg shadow-xl transform transition-all duration-200 ease-in-out border border-gray-700">
//                     <div className="p-4 border-b border-gray-700">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center space-x-2">
//                           <AlertCircle className="w-5 h-5 text-red-400" />
//                           <span className="font-medium text-black">
//                             Suggestions
//                           </span>
//                         </div>

//                         <div className="flex items-center space-x-2">
//                           {(field === "name" ||
//                             field === "position" ||
//                             field === "contactInformation") && (
//                             <button
//                               onClick={() =>
//                                 handleAutoFix(field, resumeData[field])
//                               }
//                               disabled={
//                                 isLoading.autoFix || !resumeData[field]?.trim()
//                               } // ✅ Disable when empty
//                               className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                             >
//                               {isLoading.autoFix ? (
//                                 <Loader2 className="w-4 h-4 animate-spin" />
//                               ) : (
//                                 "Auto Fix"
//                               )}
//                             </button>
//                           )}
//                           <button
//                             onClick={() => setActiveTooltip(null)}
//                             className="text-black transition-colors"
//                           >
//                             <X className="w-5 h-5" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="p-4">
//                       {getSuggestions(field).map((msg, i) => (
//                         <div
//                           key={i}
//                           className="flex items-start space-x-3 mb-3 last:mb-0"
//                         >
//                           <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></div>
//                           <p className="text-black text-sm">{msg}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PersonalInformation;
"use client";

import { useContext, useState, useEffect } from "react";
import { ResumeContext } from "../context/ResumeContext";
import { AlertCircle, X, Loader2, ChevronDown } from "lucide-react";
import { useRouter } from "next/router";
import { BASE_URL } from "../Constant/constant";
import { useTranslation } from "react-i18next";

const PersonalInformation = () => {
  const { i18n, t } = useTranslation();
  const language = i18n.language;

  const {
    resumeData,
    setResumeData,
    handleProfilePicture,
    handleChange,
    resumeStrength,
    setResumeStrength,
  } = useContext(ResumeContext);
  const router = useRouter();
  const { improve } = router.query;

  const [activeTooltip, setActiveTooltip] = useState(null);
  const [jobTitleSuggestions, setJobTitleSuggestions] = useState([]);
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [countryCodes, setCountryCodes] = useState([]);
  const [showJobTitleDropdown, setShowJobTitleDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showCountryCodeDropdown, setShowCountryCodeDropdown] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91"); // Default to India
  const [isLoading, setIsLoading] = useState({
    jobTitle: false,
    location: false,
    autoFix: false,
    countryCodes: false,
  });
  const [validationErrors, setValidationErrors] = useState({});

  const dummyImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlie4MsQ9pJSSKY7DoEpxn3uBAq-rT7in1sA&s";

  // Define validation rules
  const VALIDATION_RULES = {
    name: {
      maxLength: 50,
      minLength: 2,
      errorMessage: "Name must be between 2 and 20 characters",
    },
    position: {
      maxLength: 150,
      minLength: 2,
      errorMessage: "Job title must be between 2 and 100 characters",
    },
    contactInformation: {
      maxLength: 20,
      errorMessage: "Contact number must be 20 characters or less",
    },
    email: {
      maxLength: 100,
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: "Please enter a valid email address",
    },
    address: {
      maxLength: 500,
      minLength: 5,
      errorMessage: "Address must be between 5 and 200 characters",
    },
  };

  useEffect(() => {
    const fetchCountryCodes = async () => {
      setIsLoading((prev) => ({ ...prev, countryCodes: true }));
      try {
        const response = await fetch(
          `${BASE_URL}/api/user/countries?lang=${language}`
        );
        if (response.ok) {
          const data = await response.json();
          const sortedCountries = data.data.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          setCountryCodes(sortedCountries);
        }
      } catch (error) {
        console.error("Error fetching country codes:", error);
      }
      setIsLoading((prev) => ({ ...prev, countryCodes: false }));
    };

    fetchCountryCodes();
  }, [language]);

  const fetchJobTitles = async (keyword) => {
    if (!keyword || keyword.length < 1) {
      setJobTitleSuggestions([]);
      return;
    }

    setIsLoading((prev) => ({ ...prev, jobTitle: true }));
    try {
      const response = await fetch(
        `${BASE_URL}/api/user/job-title?job_title_keyword=${encodeURIComponent(
          keyword
        )}&lang=${language}`
      );
      if (response.ok) {
        const data = await response.json();
        const jobTitles = data.data.map((item) => item.name);
        setJobTitleSuggestions(jobTitles);
        setShowJobTitleDropdown(true);
      }
    } catch (error) {
      console.error("Error fetching job titles:", error);
    }
    setIsLoading((prev) => ({ ...prev, jobTitle: false }));
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
        )}&lang=${language}`
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

  const handleAutoFix = async (field, content) => {
    if (!content) return;

    setIsLoading((prev) => ({ ...prev, autoFix: true }));

    try {
      let endpoint = "";
      let key = "";

      if (field === "name") {
        endpoint = "/ai-username";
        key = "user name";
      } else if (field === "position") {
        endpoint = "/ai-jobtitle";
        key = "job title";
      } else if (field === "contactInformation") {
        endpoint = "/ai-contact";
        key = "contact information";
      }

      const token = localStorage.getItem("token");

      const response = await fetch(
        `${BASE_URL}/api/user${endpoint}?lang=${language}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify({
            key: key,
            keyword: "auto improve",
            content: content,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();

        if (data.data.resume_analysis) {
          let updatedValue = null;

          if (field === "name") {
            updatedValue = data.data.resume_analysis.user_name;
          } else if (field === "position") {
            updatedValue = data.data.resume_analysis.job_title;
          } else if (field === "contactInformation") {
            updatedValue = data.data.resume_analysis.contact;
          }

          if (updatedValue) {
            const event = {
              target: {
                name: field,
                value: updatedValue,
              },
            };
            handleChange(event);
            setActiveTooltip(null);

            // Clear errors for this field
            if (resumeStrength?.personal_info_strenght) {
              const updatedStrength = {
                ...resumeStrength,
                personal_info_strenght: {
                  ...resumeStrength.personal_info_strenght,
                  [field]: [],
                },
              };
              setResumeStrength(updatedStrength);
            }

            // Clear validation errors for this field
            setValidationErrors((prev) => ({
              ...prev,
              [field]: null,
            }));
          }
        }
      }
    } catch (error) {
      console.error(`Error auto-fixing ${field}:`, error);
    } finally {
      setIsLoading((prev) => ({ ...prev, autoFix: false }));
    }
  };

  // Comprehensive validation function
  const validateField = (field, value) => {
    const rules = VALIDATION_RULES[field];
    if (!rules) return null; // No specific validation for this field

    // Trim the value to remove leading/trailing whitespace
    const trimmedValue = value?.trim() || "";

    // Check for empty value
    if (!trimmedValue) {
      return "This field cannot be empty";
    }

    // Length validation
    if (rules.maxLength && trimmedValue.length > rules.maxLength) {
      return rules.errorMessage;
    }

    if (rules.minLength && trimmedValue.length < rules.minLength) {
      return rules.errorMessage;
    }

    // Email validation
    if (field === "email" && rules.regex && !rules.regex.test(trimmedValue)) {
      return rules.errorMessage;
    }

    // Contact number specific validation
    // if (field === "contactInformation") {
    //   const contactRegex = /^(\+\d{1,3}\s?)?$$?\d+$$?[\d\s-]+$/
    //   if (!contactRegex.test(trimmedValue)) {
    //     return "Invalid contact number format"
    //   }
    // }

    return null; // Validation passed
  };

  // Function to enforce character limits during input
  const enforceCharLimit = (value, field) => {
    const rules = VALIDATION_RULES[field];
    if (!rules || !rules.maxLength) return value;

    // For contact information, we need to handle the country code separately
    if (field === "contactInformation") {
      const countryCodeLength = selectedCountryCode.length;
      const contactWithoutCode = value.replace(/^(\+\d+\s*)?/, "");

      if (countryCodeLength + contactWithoutCode.length > rules.maxLength) {
        return contactWithoutCode.slice(0, rules.maxLength - countryCodeLength);
      }
      return contactWithoutCode;
    }

    // For other fields, simply limit to maxLength
    return value.slice(0, rules.maxLength);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Enforce character limit
    const limitedValue = enforceCharLimit(value, name);

    // If the value was truncated, update the input field
    if (limitedValue !== value) {
      e.target.value = limitedValue;
    }

    if (name === "position") {
      fetchJobTitles(limitedValue);
    } else if (name === "address") {
      fetchLocations(limitedValue);
    }

    // Validate the field
    const validationError = validateField(name, limitedValue);

    // Update validation errors state
    setValidationErrors((prev) => ({
      ...prev,
      [name]: validationError,
    }));

    // Create a modified event with the limited value
    const modifiedEvent = {
      target: {
        name,
        value: limitedValue,
      },
    };

    // Call the original handleChange with our modified event
    handleChange(modifiedEvent);

    // Update resume strength if there's an error
    if (validationError) {
      const updatedStrength = {
        ...resumeStrength,
        personal_info_strenght: {
          ...resumeStrength?.personal_info_strenght,
          [name]: [validationError],
        },
      };
      setResumeStrength(updatedStrength);
    } else if (resumeStrength?.personal_info_strenght?.[name]) {
      // Clear errors if validation passes
      const updatedStrength = {
        ...resumeStrength,
        personal_info_strenght: {
          ...resumeStrength.personal_info_strenght,
          [name]: [],
        },
      };
      setResumeStrength(updatedStrength);
    }
  };

  const selectSuggestion = (field, value) => {
    // Enforce character limit on the selected suggestion
    const limitedValue = enforceCharLimit(value, field);

    const event = {
      target: { name: field, value: limitedValue },
    };
    handleChange(event);

    // Validate the selected suggestion
    const validationError = validateField(field, limitedValue);
    setValidationErrors((prev) => ({
      ...prev,
      [field]: validationError,
    }));

    if (field === "position") {
      setShowJobTitleDropdown(false);
    } else {
      setShowLocationDropdown(false);
    }
  };

  const selectCountryCode = (country) => {
    const newCountryCode = `+${country.phonecode}`;
    setSelectedCountryCode(newCountryCode);

    // Update contact information with new country code
    if (resumeData.contactInformation) {
      const contactWithoutCode = resumeData.contactInformation.replace(
        /^(\+\d+\s*)?/,
        ""
      );

      // Enforce character limit considering the new country code
      const rules = VALIDATION_RULES.contactInformation;
      const maxContactLength = rules.maxLength - newCountryCode.length - 1; // -1 for space
      const limitedContact = contactWithoutCode.slice(0, maxContactLength);

      const updatedContact = {
        target: {
          name: "contactInformation",
          value: `${newCountryCode} ${limitedContact}`,
        },
      };
      handleChange(updatedContact);

      // Validate the updated contact
      const validationError = validateField(
        "contactInformation",
        `${newCountryCode} ${limitedContact}`
      );
      setValidationErrors((prev) => ({
        ...prev,
        contactInformation: validationError,
      }));
    }

    setShowCountryCodeDropdown(false);
  };

  const getSuggestions = (field) => {
    return resumeStrength?.personal_info_strenght?.[field] || [];
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setShowJobTitleDropdown(false);
      setShowLocationDropdown(false);
      setShowCountryCodeDropdown(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const formFields = [
    { field: "name", placeholder: "Full Name", type: "text" },
    {
      field: "position",
      placeholder: "Job Title",
      type: "text",
      hasSuggestions: true,
    },
    {
      field: "contactInformation",
      placeholder: "Contact Number",
      type: "tel",
      hasCountryCode: true,
    },
    { field: "email", placeholder: "Email", type: "email" },
    {
      field: "address",
      placeholder: "Address",
      type: "text",
      hasSuggestions: true,
    },
  ];

  const hasErrors = (field) => {
    // Check for validation errors first
    if (validationErrors[field]) return true;

    // Then check for API-level errors in resumeStrength
    const strengthInfo = resumeStrength?.personal_info_strenght?.[field];
    return Array.isArray(strengthInfo) && strengthInfo.length > 0;
  };

  const handleContactChange = (e) => {
    const { value } = e.target;

    // Remove any existing country code from the input
    const contactWithoutCode = value.replace(/^(\+\d+\s*)?/, "");

    // Enforce character limit considering the country code
    const rules = VALIDATION_RULES.contactInformation;
    const maxContactLength = rules.maxLength - selectedCountryCode.length - 1; // -1 for space
    const limitedContact = contactWithoutCode.slice(0, maxContactLength);

    // If the value was truncated, update the input field
    if (limitedContact !== contactWithoutCode) {
      e.target.value = limitedContact;
    }

    const fullContactValue = `${selectedCountryCode} ${limitedContact}`;

    const updatedContact = {
      target: {
        name: "contactInformation",
        value: fullContactValue,
      },
    };

    // Validate the contact
    const validationError = validateField(
      "contactInformation",
      fullContactValue
    );
    setValidationErrors((prev) => ({
      ...prev,
      contactInformation: validationError,
    }));

    handleChange(updatedContact);
  };

  // Function to get the remaining character count for a field
  const getRemainingChars = (field) => {
    const rules = VALIDATION_RULES[field];
    if (!rules || !rules.maxLength) return null;

    const value = resumeData[field] || "";

    if (field === "contactInformation") {
      // For contact, we need to consider the country code in the count
      return rules.maxLength - value.length;
    }

    return rules.maxLength - value.length;
  };

  return (
    <div className="flex flex-col gap-3 w-full items-center md:mt-10 p-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-black">
        {t("builder_forms.personal_info.details_info")}
      </h2>

      <div className="flex flex-col items-center gap-6 w-full">
        <div className="flex flex-col items-center gap-4">
          <img
            src={resumeData.profilePicture || dummyImage}
            alt="Profile"
            className="w-28 h-28 md:w-32 md:h-32 rounded-lg object-cover"
          />
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            className="bg-gray-300 text-sm text-black py-2 px-4 rounded-md cursor-pointer hover:bg-gray-400 transition-colors"
            onChange={handleProfilePicture}
          />
        </div>

        <div className="flex flex-col gap-4 w-full max-w-xl">
          {/* {Object.keys(VALIDATION_RULES).some((field) => hasErrors(field)) && (
            <div className="w-full bg-red-50 border border-red-200 p-3 rounded-md">
              <p className="text-red-600 text-sm">Please review and correct the highlighted fields</p>
            </div>
          )} */}

          {formFields.map(
            ({ field, placeholder, type, hasSuggestions, hasCountryCode }) => (
              <div
                key={field}
                className="relative group"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center relative">
                  {/* If field has a country code (for contact number) */}
                  {hasCountryCode && (
                    <div className="relative w-full">
                      <div className="flex items-center">
                        {/* Country Code Selector */}
                        {/* <div
                        className="absolute left-2 z-10 flex items-center cursor-pointer"
                        onClick={() => setShowCountryCodeDropdown(!showCountryCodeDropdown)}
                      >
                        <span className="text-gray-700 mr-1">{selectedCountryCode}</span>
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      </div>

                      {showCountryCodeDropdown && (
                        <div className="absolute top-full left-0 mt-1 w-64 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-50">
                          {countryCodes.map((country) => (
                            <div
                              key={country.id}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                              onClick={() => selectCountryCode(country)}
                            >
                              <span>{country.name}</span>
                              <span>+{country.phonecode}</span>
                            </div>
                          ))}
                        </div>
                      )} */}
                        <input
                          type={type}
                          placeholder={placeholder}
                          name={field}
                          className={`w-full p-2 border rounded-md outline-none transition-colors ${
                            hasErrors(field)
                              ? "border-red-500 focus:border-red-600"
                              : "border-gray-300 focus:border-blue-500"
                          }`}
                          value={
                            resumeData[field]
                              ? resumeData[field].replace(/^(\+\d+\s*)?/, "")
                              : ""
                          }
                          onChange={handleContactChange}
                        />

                        {/* Error Icon for Contact Information */}
                        {improve && hasErrors(field) && (
                          <button
                            type="button"
                            className="absolute right-2 mt-2 text-red-500 hover:text-red-600 transition-colors"
                            onClick={() =>
                              setActiveTooltip(
                                activeTooltip === field ? null : field
                              )
                            }
                            aria-label="Show suggestions"
                          >
                            <AlertCircle className="w-5 h-5" />
                          </button>
                        )}
                      </div>

                      {/* Character counter for contact */}
                      {/* {VALIDATION_RULES[field].maxLength && (
                      <div
                        className={`text-xs mt-1 text-right ${
                          getRemainingChars(field) <= 5 ? "text-red-500" : "text-gray-500"
                        }`}
                      >
                        {getRemainingChars(field)} / {VALIDATION_RULES[field].maxLength} characters remaining
                      </div>
                    )} */}
                    </div>
                  )}

                  {/* If field does NOT have a country code */}
                  {!hasCountryCode && (
                    <div className="relative w-full">
                      {/* Input Field */}
                      <input
                        type={type}
                        placeholder={placeholder}
                        name={field}
                        className={`w-full p-2 border rounded-md outline-none transition-colors ${
                          improve && hasErrors(field)
                            ? "border-red-500 focus:border-red-600"
                            : "border-gray-300 focus:border-blue-500"
                        }`}
                        value={resumeData[field] || ""}
                        onChange={handleInputChange}
                        onFocus={() => {
                          if (field === "position")
                            setShowJobTitleDropdown(true);
                          if (field === "address")
                            setShowLocationDropdown(true);
                        }}
                      />

                      {/* Error Icon for Other Fields */}
                      {improve && hasErrors(field) && (
                        <button
                          type="button"
                          className="absolute right-2 mt-2 text-red-500 hover:text-red-600 transition-colors"
                          onClick={() =>
                            setActiveTooltip(
                              activeTooltip === field ? null : field
                            )
                          }
                          aria-label="Show suggestions"
                        >
                          <AlertCircle className="w-5 h-5" />
                        </button>
                      )}

                      {/* Loading Indicator for Job Title & Address Suggestions */}
                      {hasSuggestions &&
                        isLoading[
                          field === "position" ? "jobTitle" : "location"
                        ] && (
                          <div className="absolute right-8">
                            <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
                          </div>
                        )}

                      {/* Character counter */}
                      {/* {VALIDATION_RULES[field].maxLength && (
                      <div
                        className={`text-xs mt-1 text-right ${
                          getRemainingChars(field) <= 5 ? "text-red-500" : "text-gray-500"
                        }`}
                      >
                        {getRemainingChars(field)} / {VALIDATION_RULES[field].maxLength} characters remaining
                      </div>
                    )} */}
                    </div>
                  )}
                </div>

                {hasSuggestions &&
                  (field === "position"
                    ? showJobTitleDropdown && jobTitleSuggestions.length > 0
                    : showLocationDropdown &&
                      locationSuggestions.length > 0) && (
                    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                      {(field === "position"
                        ? jobTitleSuggestions
                        : locationSuggestions
                      ).map((suggestion, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                          onClick={() => selectSuggestion(field, suggestion)}
                        >
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  )}

                {activeTooltip === field && hasErrors(field) && (
                  <div className="absolute z-50 left-8 w-80 bg-white rounded-lg shadow-xl transform transition-all duration-200 ease-in-out border border-gray-700">
                    <div className="p-4 border-b border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <AlertCircle className="w-5 h-5 text-red-400" />
                          <span className="font-medium text-black">
                            Suggestions
                          </span>
                        </div>

                        <div className="flex items-center space-x-2">
                          {(field === "name" || field === "position") && (
                            <button
                              onClick={() =>
                                handleAutoFix(field, resumeData[field])
                              }
                              disabled={
                                isLoading.autoFix || !resumeData[field]?.trim()
                              }
                              className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {isLoading.autoFix ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : (
                                "Auto Fix"
                              )}
                            </button>
                          )}
                          <button
                            onClick={() => setActiveTooltip(null)}
                            className="text-black transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      {/* Show validation errors first */}
                      {/* {validationErrors[field] && (
                      <div className="flex items-start space-x-3 mb-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400 mt-2"></div>
                        <p className="text-black text-sm">{validationErrors[field]}</p>
                      </div>
                    )} */}

                      {/* Then show API suggestions */}
                      {getSuggestions(field).map((msg, i) => (
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
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
