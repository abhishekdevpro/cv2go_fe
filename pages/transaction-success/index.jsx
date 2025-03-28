import React from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-white/20 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="flex flex-col items-center text-center">
          {/* Success Icon */}
          <div className="mb-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Payment Successful
          </h1>

          {/* Success Message */}
          <p className="text-gray-600 mb-6">
            Your payment was processed successfully. Thank you for your
            purchase!
          </p>

          {/* Confirmation Details */}
          <div className="bg-gray-50 w-full rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">
              A confirmation email has been sent to your inbox with the
              transaction details.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              className="w-full py-2 px-4 bg-cyan-600 text-white rounded-lg hover:bg-blue-800 transition-colors"
              onClick={() => {
                window.location.href = "/dashboard/aibuilder";
              }}
            >
              Go to Dashboard
            </button>

            <Link href="/orders">
              <button className="w-full py-2 px-4 border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors">
                View Orders
              </button>
            </Link>
          </div>

          {/* Support Link */}
          <a href="#" className="mt-6 text-sm text-blue-700 hover:underline">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
