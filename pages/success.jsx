import { useRouter } from "next/router";
import { FaCheckCircle } from "react-icons/fa";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6 text-center">
      <FaCheckCircle className="w-20 h-20 text-green-500 mb-4" />
      <h1 className="text-2xl font-bold text-green-700">Payment Successful!</h1>
      <p className="text-gray-700 mt-2">Thank you for your purchase.</p>
      <button
        className="mt-5 px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-800 transition"
        onClick={() => router.push("/")}
      >
        Go to Homepage
      </button>
    </div>
  );
}
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";
// import { FaCheckCircle } from "react-icons/fa";
// import { BASE_URL } from "../components/Constant/constant";
// export default function SuccessPage() {
//   const router = useRouter();

//   useEffect(() => {
//     const sendWebhook = async () => {
//       try {
//         const response = await axios.post(
//           `${BASE_URL}/api/user/payment/webhook`,
//           {}
//         );

//         console.log("Webhook response:", response.data);
//       } catch (error) {
//         console.error("Error calling webhook:", error.response?.data || error);
//       }
//     };

//     sendWebhook();
//   }, []); // Runs when the component mounts

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
//       <FaCheckCircle className="w-20 h-20 text-green-500 mb-4" />
//       <h1 className="text-2xl font-bold text-green-700">Payment Successful!</h1>
//       <p className="text-gray-700 mt-2">Thank you for your purchase.</p>
//       <button
//         className="mt-5 px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-800 transition"
//         onClick={() => router.push("/")}
//       >
//         Go to Homepage
//       </button>
//     </div>
//   );
// }
