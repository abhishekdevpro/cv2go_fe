import Link from "next/link";

const InterviewSection = () => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-100 rounded-lg">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Clear Your Interview</h3>
            <p className="text-gray-600 max-w-md">
              Gain insights from our expert-written resources and receive weekly
              updates straight to your inbox.
            </p>
          </div>
        </div>
        <Link
          // href={`https://blog.ciblijob.fr/`}
          href=""
        >
          <button className="px-6 py-2 border border-cyan-600 text-cyan-600 rounded-lg hover:bg-blue-50">
            Visit Resources
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InterviewSection;
