import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "./Constant/constant";

const PayAndDownload = ({ resumeId, token, PayerID }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentVerified, setPaymentVerified] = useState(false);
  const templateRef = useRef();

  useEffect(() => {
    if (PayerID) {
      verifyPayment();
    }
  }, [PayerID]);

  const downloadAsPDF = async () => {
    if (!templateRef.current) {
      toast.error("Template reference not found");
      return;
    }

    try {
      setIsLoading(true);

      // Get the HTML content from the template
      const htmlContent = templateRef.current.innerHTML;

      // Generate the full HTML for the PDF
      const fullContent = `
        <style>
          @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
        </style>
        ${htmlContent}
      `;

      // API call to generate the PDF
      await axios.post(
        `${BASE_URL}/api/user/generate-pdf-py`,
        { html: fullContent },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      downloadPDF();
      toast.success("PDF generation request sent successfully!");
      // createPayment();
    } catch (error) {
      console.error("PDF generation error:", error);
      toast.error(
        error.response?.data?.message || "Failed to generate and open PDF"
      );
    } finally {
      setIsLoading(false);
    }
  };
  const userID = localStorage.getItem("user_id");

  const createPayment = async () => {
    let PlanId = userID == 136 ? "4" : "1";

    try {
      setIsLoading(true);

      // Make the payment API call
      const payload = {
        PlanId,
        ResumeId: resumeId,
        Token: token || "",
      };

      const response = await axios.post(
        `${BASE_URL}/api/user/paypal/create-payment`,
        payload,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      if (data && data.data) {
        // Store the order ID for later verification if needed
        const orderId = data.order_id;
        localStorage.setItem("orderid", orderId);

        // Redirect the user to PayPal URL to complete payment
        window.location.href = data.data;
      } else {
        console.error("Payment URL not found");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      toast.error("Failed to initiate payment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const verifyPayment = async () => {
    try {
      setIsLoading(true);

      const orderId = localStorage.getItem("orderid");

      if (orderId && token && PayerID) {
        const response = await axios.get(
          `${BASE_URL}/api/user/paypal/verify-order?orderid=${orderId}`,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.status === "success") {
          setPaymentVerified(true);
          toast.success("Payment verified successfully!");

          localStorage.removeItem("orderid");
          await downloadPDF(orderId, resumeId, token);
        } else {
          toast.error("Payment verification failed. Please try again.");
        }
      }
    } catch (error) {
      console.error("Payment Verification Error:", error);
      toast.error(
        error?.response?.data?.message || "Payment verification failed"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const downloadPDF = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get(
        `${BASE_URL}/api/user/download-file/11/${resumeId}`,
        {
          headers: {
            Authorization: token,
          },
          responseType: "blob", // Important for file download
        }
      );

      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: "application/pdf" })
      );
      const link = document.createElement("a");
      link.href = url;

      // Set the file name
      link.setAttribute("download", `resume.pdf`);
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error("PDF Download Error:", error);
      toast.error("Failed to download the PDF. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div ref={templateRef} className="hidden">
        {/* Place the resume template here */}
      </div>
      <button
        onClick={downloadAsPDF}
        className="bg-yellow-500 text-black px-6 py-2 rounded-lg"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Download"}
      </button>
    </div>
  );
};

export default PayAndDownload;
