// import React, { useContext } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { CoverLetterContext } from "../../context/CoverLetterContext";

// const LetterDetails = () => {
//   const { coverLetterData, setCoverLetterData } =
//     useContext(CoverLetterContext);

//   const handleDateChange = (date) => {
//     // Format the selected date as "January 17, 2025"
//     const formattedDate = date
//       ? new Intl.DateTimeFormat("en-US", {
//           month: "long",
//           day: "numeric",
//           year: "numeric",
//         }).format(date)
//       : "";

//     // Update the context with the formatted date
//     setCoverLetterData((prevData) => ({
//       ...prevData,
//       letterDetails: {
//         ...prevData.letterDetails,
//         date: formattedDate,
//       },
//     }));
//   };

//   return (
//     <div className="p-4 md:p-8 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6 text-black">Letter Details</h2>
//       <div className="space-y-4">
//         {/* Date */}
//         <div>
//           <label className="block text-black font-medium mb-2">Date</label>
//           <DatePicker
//             selected={
//               coverLetterData.letterDetails.date
//                 ? new Date(coverLetterData.letterDetails.date)
//                 : null
//             }
//             onChange={handleDateChange}
//             dateFormat="MMMM d, yyyy"
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholderText="Select a date"
//           />
//         </div>

//         {/* Job Title */}
//         <div>
//           <label className="block text-black font-medium mb-2">Job Title</label>
//           <input
//             type="text"
//             value={coverLetterData.letterDetails.jobTitle}
//             onChange={(e) =>
//               setCoverLetterData((prevData) => ({
//                 ...prevData,
//                 letterDetails: {
//                   ...prevData.letterDetails,
//                   jobTitle: e.target.value,
//                 },
//               }))
//             }
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter the job title"
//           />
//         </div>

//         {/* Reference */}
//         <div>
//           <label className="block text-black font-medium mb-2">Reference</label>
//           <input
//             type="text"
//             value={coverLetterData.letterDetails.reference}
//             onChange={(e) =>
//               setCoverLetterData((prevData) => ({
//                 ...prevData,
//                 letterDetails: {
//                   ...prevData.letterDetails,
//                   reference: e.target.value,
//                 },
//               }))
//             }
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter the reference (e.g., Ref#123)"
//           />
//         </div>

//         {/* Company Name */}
//         <div>
//           <label className="block text-black font-medium mb-2">
//             Company Name
//           </label>
//           <input
//             type="text"
//             value={coverLetterData.letterDetails.companyName}
//             onChange={(e) =>
//               setCoverLetterData((prevData) => ({
//                 ...prevData,
//                 letterDetails: {
//                   ...prevData.letterDetails,
//                   companyName: e.target.value,
//                 },
//               }))
//             }
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter the company's name"
//           />
//         </div>

//         {/* Salutation */}
//         <div>
//           <label className="block text-black font-medium mb-2">
//             Salutation
//           </label>
//           <input
//             type="text"
//             value={coverLetterData.letterDetails.salutation}
//             onChange={(e) =>
//               setCoverLetterData((prevData) => ({
//                 ...prevData,
//                 letterDetails: {
//                   ...prevData.letterDetails,
//                   salutation: e.target.value,
//                 },
//               }))
//             }
//             className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter the salutation (e.g., Ms. Smith)"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LetterDetails;

import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CoverLetterContext } from "../../context/CoverLetterContext";
import { useTranslation } from "react-i18next";

const LetterDetails = () => {
  const { t, i18n } = useTranslation();
  const { coverLetterData, setCoverLetterData } =
    useContext(CoverLetterContext);

  const handleDateChange = (date) => {
    const formattedDate = date
      ? new Intl.DateTimeFormat(i18n.language === "en" ? "en-US" : "fr-FR", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }).format(date)
      : "";

    setCoverLetterData((prevData) => ({
      ...prevData,
      letterDetails: {
        ...prevData.letterDetails,
        date: formattedDate,
      },
    }));
  };

  return (
    <div className="p-4 md:p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-black">
        {t("letterDetails.title")}
      </h2>
      <div className="space-y-4">
        {/* Date */}
        <div>
          <label className="block text-black font-medium mb-2">
            {t("letterDetails.date")}
          </label>
          <DatePicker
            selected={
              coverLetterData.letterDetails.date
                ? new Date(coverLetterData.letterDetails.date)
                : null
            }
            onChange={handleDateChange}
            dateFormat="MMMM d, yyyy"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholderText={t("letterDetails.datePlaceholder")}
          />
        </div>

        {/* Job Title */}
        <div>
          <label className="block text-black font-medium mb-2">
            {t("letterDetails.jobTitle")}
          </label>
          <input
            type="text"
            value={coverLetterData.letterDetails.jobTitle}
            onChange={(e) =>
              setCoverLetterData((prevData) => ({
                ...prevData,
                letterDetails: {
                  ...prevData.letterDetails,
                  jobTitle: e.target.value,
                },
              }))
            }
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t("letterDetails.jobTitlePlaceholder")}
          />
        </div>

        {/* Reference */}
        <div>
          <label className="block text-black font-medium mb-2">
            {t("letterDetails.reference")}
          </label>
          <input
            type="text"
            value={coverLetterData.letterDetails.reference}
            onChange={(e) =>
              setCoverLetterData((prevData) => ({
                ...prevData,
                letterDetails: {
                  ...prevData.letterDetails,
                  reference: e.target.value,
                },
              }))
            }
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t("letterDetails.referencePlaceholder")}
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-black font-medium mb-2">
            {t("letterDetails.companyName")}
          </label>
          <input
            type="text"
            value={coverLetterData.letterDetails.companyName}
            onChange={(e) =>
              setCoverLetterData((prevData) => ({
                ...prevData,
                letterDetails: {
                  ...prevData.letterDetails,
                  companyName: e.target.value,
                },
              }))
            }
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t("letterDetails.companyNamePlaceholder")}
          />
        </div>

        {/* Salutation */}
        <div>
          <label className="block text-black font-medium mb-2">
            {t("letterDetails.salutation")}
          </label>
          <input
            type="text"
            value={coverLetterData.letterDetails.salutation}
            onChange={(e) =>
              setCoverLetterData((prevData) => ({
                ...prevData,
                letterDetails: {
                  ...prevData.letterDetails,
                  salutation: e.target.value,
                },
              }))
            }
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t("letterDetails.salutationPlaceholder")}
          />
        </div>
      </div>
    </div>
  );
};

export default LetterDetails;
