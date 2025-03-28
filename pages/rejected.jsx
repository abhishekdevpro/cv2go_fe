import { useRouter } from "next/router";
import { FaTimesCircle } from "react-icons/fa";
export default function RejectionPage(selectedPlan) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6 text-center">
      <FaTimesCircle className="w-20 h-20 text-red-500 mb-4" />
      <h1 className="text-2xl font-bold text-red-700">Payment Failed!</h1>
      <p className="text-gray-700 mt-2">
        Something went wrong. Please try again.
      </p>
      <button
        className="mt-5 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        onClick={() =>
          router.push({
            pathname: "/payment",
          })
        }
      >
        Try Again
      </button>
    </div>
  );
}
