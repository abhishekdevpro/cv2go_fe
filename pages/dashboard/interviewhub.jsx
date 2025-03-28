import React, { useState } from "react";

const InterviewPreparationHub = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    resume: "",
    position: "",
    company: "",
    jobDescription: "",
    companyDetail: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.resume || !formData.position || !formData.company) {
      alert("Please fill all required fields!");
      return;
    }
    setEntries([...entries, formData]);
    setFormData({
      resume: "",
      position: "",
      company: "",
      jobDescription: "",
      companyDetail: "",
    });
    setIsOpenForm(false);
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold">Interview Preparation Hub</h1>
        <p className="text-gray-600 mt-2">
          Share your career goals or upcoming interview details, and let our AI
          craft a customized set of targeted questions and answers just for you.
          This personalized approach ensures you’ll walk into every interview
          with clarity, confidence, and the competitive edge you need. Get ready
          to prepare smarter and step closer to your dream job.
        </p>
      </div>

      {/* Info Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">Showcase your professionalism</h2>
          <p className="text-gray-600 mt-2">
            Clarify the position you are applying for and the target company
            name, demonstrating your clear career goals and focus.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">
            Improve the specificity of your preparation
          </h2>
          <p className="text-gray-600 mt-2">
            Upload a resume or tell us about yourself, and we’ll take it from
            there.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">
            Demonstrate your interest in the company
          </h2>
          <p className="text-gray-600 mt-2">
            Upload a resume or tell us about yourself, and we’ll take it from
            there.
          </p>
        </div>
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        + Prepare
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold">Prepare for QA Pairs</h2>

            {/* Resume Selection */}
            <label className="block mt-4">Resume *</label>
            <select className="w-full p-2 border rounded">
              <option>Select your resume</option>
            </select>

            {/* Job Description */}
            <label className="block mt-4">Job Description</label>
            <input
              type="text"
              placeholder="It's optional. e.g. https://www.example.com/jobs?id=abc123"
              className="w-full p-2 border rounded"
            />

            {/* Buttons */}
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 mr-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsErrorOpen(true); // Open error modal
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Next
              </button>
              {isErrorOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-lg font-semibold">Notice</h2>
                    <div className="flex justify-center my-4">
                      <span className="text-red-500 text-4xl">❌</span>
                    </div>
                    <h3 className="text-lg font-bold text-center">
                      Job Description Analysis Failed
                    </h3>
                    <p className="text-center text-gray-600 mt-2">
                      Sorry, we are unable to analyze the link you provided.{" "}
                      <br />
                      Click Next to access JD editor.
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center mt-4">
                      <button
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() => {
                          setIsErrorOpen(false);
                        }}
                      >
                        Back to Edit
                      </button>
                      <button
                        className="px-4 py-2 mx-2 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={() => {
                          setIsOpen(false);
                          setIsErrorOpen(false);
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => setIsOpenForm(true)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      >
                        Next
                      </button>

                      {isOpenForm && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
                            <h2 className="text-lg font-semibold">
                              Prepare for QA Pairs
                            </h2>
                            <button
                              className="absolute top-2 right-2"
                              onClick={() => setIsOpenForm(false)}
                            >
                              ✖
                            </button>

                            <label className="block mt-4">Resume *</label>
                            <input
                              name="resume"
                              value={formData.resume}
                              onChange={handleInputChange}
                              className="w-full p-2 border rounded"
                              placeholder="Enter resume file name"
                            />

                            <label className="block mt-4">Position *</label>
                            <input
                              name="position"
                              value={formData.position}
                              onChange={handleInputChange}
                              className="w-full p-2 border rounded"
                            />

                            <label className="block mt-4">Company *</label>
                            <input
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="w-full p-2 border rounded"
                            />

                            <label className="block mt-4">
                              Job Description
                            </label>
                            <textarea
                              name="jobDescription"
                              value={formData.jobDescription}
                              onChange={handleInputChange}
                              className="w-full p-2 border rounded"
                              rows="3"
                            ></textarea>

                            <label className="block mt-4">Company Detail</label>
                            <textarea
                              name="companyDetail"
                              value={formData.companyDetail}
                              onChange={handleInputChange}
                              className="w-full p-2 border rounded"
                              rows="3"
                            ></textarea>

                            <div className="flex justify-end mt-4">
                              <button
                                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 mr-2"
                                onClick={() => setIsOpenForm(false)}
                              >
                                Cancel
                              </button>
                              <button
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                onClick={handleSubmit}
                              >
                                Create
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* No Interview Roles Found Section */}

      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <table className="w-full border-collapse">
          {entries.length > 0 && (
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Resume</th>
                <th className="p-2 border">Position</th>
                <th className="p-2 border">Company</th>
                <th className="p-2 border">Company Detail</th>
                <th className="p-2 border">Job Description</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
          )}
          <tbody>
            {entries.length > 0 ? (
              entries.map((entry, index) => (
                <tr key={index} className="text-center">
                  <td className="p-2 border">{entry.resume}</td>
                  <td className="p-2 border">{entry.position}</td>
                  <td className="p-2 border">{entry.company}</td>
                  <td className="p-2 border">{entry.companyDetail}</td>
                  <td className="p-2 border">{entry.jobDescription}</td>
                  <td className="p-2 border">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded mx-1">
                      ✏ Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() =>
                        setEntries(entries.filter((_, i) => i !== index))
                      }
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  <div className="flex flex-col items-center justify-center mt-12 bg-white p-6 rounded-lg shadow-md">
                    <img
                      src="/no-roles-found.png"
                      alt="No roles found"
                      className="w-32"
                    />
                    <h2 className="text-xl font-semibold mt-4">
                      No Interview Roles Found
                    </h2>
                    <p className="text-gray-600 mt-2 text-center">
                      Click the Prepare button to create your first interview
                      role.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InterviewPreparationHub;
