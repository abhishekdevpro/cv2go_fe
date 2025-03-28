"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Download, Edit, Trash, Plus } from "lucide-react";
import { useRouter } from "next/router";
import FullScreenLoader from "../../components/ResumeLoader/Loader";
import { toast } from "react-toastify";
import Link from "next/link";
import { BASE_URL } from "../../components/Constant/constant";
import { useTranslation } from "react-i18next";
import { ResumeContext } from "../../components/context/ResumeContext";
const MyCvLetter = () => {
  const { t } = useTranslation();
  const [coverletters, setCoverLetters] = useState([]);
  const [deletecoverletterId, setDeletecoverletterId] = useState(null);
  const [coverletterId, setcoverletterId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentCoverLetter, setCurrentCoverLetter] = useState(null);
  const [newCoverLetterTitle, setNewCoverLetterTitle] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const { selectedLang } = useContext(ResumeContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`${BASE_URL}/api/user/coverletter?lang=${selectedLang}`, {
          headers: { Authorization: token },
        })
        .then((response) => {
          const coverletters = response?.data?.data || [];
          if (coverletters.length === 0) {
            toast.info(t("mycvletter.no_coverletters"));
          }
          setCoverLetters(coverletters);
        })
        .catch((error) => {
          console.error("Error fetching cover letter list:", error);
          toast.error(t("mycvletter.fetch_coverletters_error"));
        });
    }
  }, []);
  const handleEdit = (coverletterId) => {
    setcoverletterId(coverletterId);
    router.push(`/dashboard/cvaibuilder/${coverletterId}`);
  };
  const handleDownload = async (coverletterId) => {
    setcoverletterId(coverletterId);
    const apiUrl = `${BASE_URL}/api/user/download-coverletter/${coverletterId}?lang=${selectedLang}`;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to download file");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `resume_${coverletterId}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading file:", error);
      toast.error("Failed to download the file. Please try again later.");
    }
  };
  const handleDeleteCvLetter = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        await axios.delete(
          `${BASE_URL}/api/user/coverletter/${deletecoverletterId}?lang=${selectedLang}`,
          {
            headers: { Authorization: token },
          }
        );
        toast.success(t("mycvletter.resume_deleted_success"));
        setIsDeleteModalOpen(false);
        setCoverLetters(
          coverletters.filter(
            (coverletter) => coverletter.id !== deletecoverletterId
          )
        );
      } catch (error) {
        console.error("Error deleting cover letter :", error);
        toast.error(t("mycvletter.resume_deleted_error"));
      }
    }
  };
  const handleOpenEditModal = (coverletter) => {
    setCurrentCoverLetter(coverletter);
    setNewCoverLetterTitle(coverletter.cover_letter_title);
    setIsEditModalOpen(true);
  };

  const handleUpdateCvLetterTitle = () => {
    const token = localStorage.getItem("token");
    if (token && currentCoverLetter) {
      axios
        .put(
          `${BASE_URL}/api/user/coverletter-details/${currentCoverLetter.id}?lang=${selectedLang}`,
          { cover_letter_title: newCoverLetterTitle },
          { headers: { Authorization: token } }
        )
        .then(() => {
          toast.success(t("mycvletter.resume_title_updated_success"));
          setIsEditModalOpen(false);
          setCoverLetters((prevCoverLetters) =>
            prevCoverLetters.map((coverletter) =>
              coverletter.id === currentCoverLetter.id
                ? { ...coverletter, cover_letter_title: newCoverLetterTitle }
                : coverletter
            )
          );
        })
        .catch((error) => {
          console.error("Error updating cover letter title:", error);
          toast.error(t("mycvletter.resume_title_updated_error"));
        });
    }
  };
  const router = useRouter();
  const handleCreate = () => {
    setShowLoader(true); // Show the loader
    setTimeout(() => {
      router.push("/dashboard/cv-builder");
    }, 2000);
  };

  return (
    // <div className="container mx-auto p-4 max-w-7xl">
    //   {showLoader && <FullScreenLoader />}
    //   <div className="flex flex-col sm:flex-row  justify-between items-center mb-8">
    //     <h1 className="text-2xl font-bold text-gray-800">My Cover Letters</h1>
    //     <button
    //       onClick={handleCreate}
    //       className="flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-200 font-medium shadow-sm"
    //     >
    //       <Plus className="w-5 h-5 mr-2" /> Create New Cover Letters
    //     </button>
    //   </div>

    //   <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    //     <div className="overflow-x-auto max-h-96 overflow-y-scroll">
    //       <table className="w-full min-w-full divide-y divide-gray-200">
    //         <thead className="bg-gray-50">
    //           <tr>
    //             <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
    //               Sr. no.
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
    //               My Cover Letters
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
    //               Modification
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
    //               Created
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
    //               Actions
    //             </th>
    //           </tr>
    //         </thead>
    //         <tbody className="bg-white divide-y divide-gray-200">
    //           {coverletters.length > 0 ? (
    //             coverletters.map((coverletter, index) => (
    //               <tr key={coverletter.id} className="hover:bg-gray-50">
    //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    //                   {index + 1}.
    //                 </td>
    //                 <td className="px-6 py-4 whitespace-nowrap">
    //                   <div className="flex items-center space-x-2">
    //                     <span className="text-sm text-gray-900">
    //                       {coverletter.cover_letter_title}
    //                     </span>
    //                     <button
    //                       onClick={() => handleOpenEditModal(coverletter)}
    //                       className="text-cyan-600 hover:text-blue-800"
    //                     >
    //                       🖍
    //                     </button>
    //                   </div>
    //                 </td>
    //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    //                   {/* {coverletter.updated_at} */}
    //                   {new Date(coverletter.updated_at).toLocaleDateString()}
    //                 </td>
    //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    //                   {/* {coverletter.created_at} */}
    //                   {new Date(coverletter.created_at).toLocaleDateString()}
    //                 </td>
    //                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
    //                   <div className="flex items-center space-x-3">
    //                     <button
    //                       onClick={() => handleEdit(coverletter.id)}
    //                       className="text-cyan-600 hover:text-cyan-800 transition-colors duration-200"
    //                     >
    //                       <Edit className="w-5 h-5" />
    //                     </button>
    //                     <button
    //                       onClick={() => {
    //                         setIsDeleteModalOpen(true);
    //                         setDeletecoverletterId(coverletter.id);
    //                       }}
    //                       className="text-red-600 hover:text-red-800"
    //                     >
    //                       <Trash className="w-5 h-5" />
    //                     </button>
    //                     <button
    //                       onClick={() => handleDownload(coverletter.id)}
    //                       className="text-cyan-600 hover:text-cyan-800  transition-colors duration-200"
    //                     >
    //                       <Download className="w-5 h-5" />
    //                     </button>
    //                   </div>
    //                 </td>
    //               </tr>
    //             ))
    //           ) : (
    //             <tr>
    //               <td
    //                 colSpan="7"
    //                 className="px-6 py-4 text-center text-sm text-gray-500"
    //               >
    //                 Please Upload Cover Letter.
    //               </td>
    //             </tr>
    //           )}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    //   {/* Delete Modal */}
    //   {isDeleteModalOpen && (
    //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    //       <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
    //         <h2 className="text-lg font-semibold text-gray-900 mb-4">
    //           Are you sure you want to delete this cover letter?
    //         </h2>
    //         <div className="flex justify-end space-x-3">
    //           <button
    //             onClick={() => setIsDeleteModalOpen(false)}
    //             className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
    //           >
    //             Cancel
    //           </button>
    //           <button
    //             onClick={handleDeleteCvLetter}
    //             className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
    //           >
    //             Delete
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   )}

    //   {/* Edit Modal */}
    //   {isEditModalOpen && (
    //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    //       <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
    //         <h2 className="text-lg font-semibold text-gray-900 mb-4">
    //           Edit Cover Letter Title
    //         </h2>
    //         <input
    //           type="text"
    //           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    //           value={newCoverLetterTitle}
    //           onChange={(e) => setNewCoverLetterTitle(e.target.value)}
    //           placeholder="Enter new cover letter title"
    //         />
    //         <div className="flex justify-end space-x-3 mt-4">
    //           <button
    //             onClick={() => setIsEditModalOpen(false)}
    //             className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
    //           >
    //             Cancel
    //           </button>
    //           <button
    //             onClick={handleUpdateCvLetterTitle}
    //             className="px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-md hover:bg-cyan-600"
    //           >
    //             Save
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </div>
    <div className="container mx-auto p-6 max-w-7xl">
      {showLoader && <FullScreenLoader />}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          {t("mycvletter.my_cover_letters")}
        </h1>
        <button
          onClick={handleCreate}
          className="flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-200 font-medium shadow-sm"
        >
          <Plus className="w-5 h-5 mr-2" />{" "}
          {t("mycvletter.create_new_coverletter")}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto max-h-96 overflow-y-scroll">
          <table className="w-full min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {t("mycvletter.sr_no")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {t("mycvletter.cover_letter")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {t("mycvletter.modification")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {t("mycvletter.created")}
                </th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {t("mycvletter.actions")}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {coverletters.length > 0 ? (
                coverletters.map((coverletter, index) => (
                  <tr key={coverletter.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {index + 1}.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-900">
                          {coverletter.cover_letter_title}
                        </span>
                        <button
                          onClick={() => handleOpenEditModal(coverletter)}
                          className="text-cyan-600 hover:text-blue-800"
                        >
                          🖍
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(coverletter.updated_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(coverletter.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleEdit(coverletter.id)}
                          className="text-cyan-600 hover:text-cyan-800 transition-colors duration-200"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => {
                            setIsDeleteModalOpen(true);
                            setDeletecoverletterId(coverletter.id);
                          }}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDownload(coverletter.id)}
                          className="text-cyan-600 hover:text-cyan-800 transition-colors duration-200"
                        >
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    {t("mycvletter.upload_prompt")}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {t("mycvletter.delete_confirm")}
            </h2>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                {t("mycvletter.cancel")}
              </button>
              <button
                onClick={handleDeleteCvLetter}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                {t("mycvletter.delete")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {t("mycvletter.edit_cover_letter_title")}
            </h2>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newCoverLetterTitle}
              onChange={(e) => setNewCoverLetterTitle(e.target.value)}
              placeholder={t("mycvletter.enter_new_title")}
            />
            <div className="flex justify-end space-x-3 mt-4">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                {t("mycvletter.cancel")}
              </button>
              <button
                onClick={handleUpdateCvLetterTitle}
                className="px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-md hover:bg-cyan-600"
              >
                {t("mycvletter.save")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCvLetter;
