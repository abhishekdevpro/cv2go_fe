import { useState } from "react";

const LinkedInModal = ({ isOpen, onClose }) => {
  const [linkedinUrl, setLinkedinUrl] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold">LinkedIn Profile</h2>

        {/* Input Field */}
        <label className="block mt-4 text-sm font-medium text-gray-700">
          LinkedIn Profile
        </label>
        <input
          type="text"
          placeholder="input your LinkedIn profile url"
          className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={linkedinUrl}
          onChange={(e) => setLinkedinUrl(e.target.value)}
        />

        {/* Visit LinkedIn Link */}
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 mt-2 inline-block"
        >
          Visit my LinkedIn Profile
        </a>

        {/* Buttons */}
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 border rounded-md mr-2 hover:bg-gray-100"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-md">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkedInModal;
