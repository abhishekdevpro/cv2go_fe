import Link from "next/link";
import { useState } from "react";

export default function LiveInterview() {
  const [showModal, setShowModal] = useState(false);
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    resume: "",
    role: "",
    domain: "General",
    interviewType: "General",
    aiModel: "GPT-4o",
    appointment: "Immediately",
  });

  const handleSubmit = () => {
    setEntries([...entries, { ...formData, status: "Completed" }]);
    setShowModal(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold">Live Interview</h1>
      <p className="text-gray-600 mt-2">
        Interview Copilot is your real-time AI partner that offers on-the-fly,
        personalized interview support...
      </p>

      {/* Interview Categories */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        {[
          "General Interview",
          "Coding Copilot Interview",
          "HireVue Interview",
          "Phone Interview",
        ].map((title, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 border rounded-lg shadow bg-white cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <div className="w-8 h-8 bg-gray-200 flex items-center justify-center rounded-md">
              📄
            </div>
            <p className="mt-2 font-semibold">{title}</p>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        {entries.length > 0 && (
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Interview</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Appointment</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index} className="text-center">
                  <td className="p-2 border">{entry.interviewType}</td>
                  <td className="p-2 border">✅ {entry.status}</td>
                  <td className="p-2 border">{entry.appointment}</td>
                  <td className="p-2 border">/</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {entries.length === 0 && (
          <p className="p-4 text-center text-gray-500">
            &lt;Empty Job Info&gt;
          </p>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold">Start Your Next Interview</h2>
            <div className="mt-4 space-y-3">
              <div>
                <label className="block text-sm">Resume (Optional)</label>
                <select
                  className="w-full p-2 border rounded"
                  onChange={(e) =>
                    setFormData({ ...formData, resume: e.target.value })
                  }
                >
                  <option>Select your resume</option>
                </select>
              </div>
              <div>
                <label className="block text-sm">Role (Optional)</label>
                <select
                  className="w-full p-2 border rounded"
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                >
                  <option>Select your Role</option>
                </select>
              </div>
              <div>
                <label className="block text-sm">Schedule your interview</label>
                <select
                  className="w-full p-2 border rounded"
                  onChange={(e) =>
                    setFormData({ ...formData, appointment: e.target.value })
                  }
                >
                  <option>Immediately</option>
                  <option>Set Date and Time</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <Link href="/dashboard/interviewmodal">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                  // onClick={handleSubmit}
                >
                  Launch
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
