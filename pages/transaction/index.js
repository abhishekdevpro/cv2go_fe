import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { BASE_URL } from "../../components/Constant/constant";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const orderId = localStorage.getItem("orderid");

    if (orderId) {
      const verifyOrder = async () => {
        try {
          const response = await fetch(
            `${BASE_URL}/api/user/paypal/verify-order?orderid=${orderId}`
          );

          if (!response.ok) {
            toast.error("Payment failed");
            router.push("/payment-failed");
            throw new Error("Payment Failed: Try again");
          }

          const data = await response.json();

          // Assuming successful response indicates success
          if (data.success) {
            router.push("/payment-success");
          } else {
            toast.error("Payment verification failed");
            router.push("/payment-failed");
          }
        } catch (err) {
          setError(err.message);
          router.push("/payment-failed");
        } finally {
          setLoading(false);
        }
      };

      verifyOrder();
    } else {
      setLoading(false);
      setError("No order ID found in local storage.");
      router.push("/payment-failed");
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 h-screen text-3xl text-center content-center font-semibold">
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
          <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
            <div className="relative">
              <div className="absolute">
                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                  {error}
                </h1>
                <p className="my-2 text-gray-800">
                  Sorry about that! Please visit our homepage to get where you
                  need to go.
                </p>
                <button
                  onClick={() => router.push("/dashboard/aibuilder")}
                  className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-cyan-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
                >
                  Take me there!
                </button>
              </div>
            </div>
            <img
              src="https://i.ibb.co/G9DC8S0/404-2.png"
              alt="Error Illustration"
            />
          </div>
          <img
            src="https://i.ibb.co/ck1SGFJ/Group.png"
            alt="Error Illustration"
          />
        </div>
      </div>
    );
  }

  return null; // Nothing is displayed if redirection happens
};

export default Index;

// docker build . -t abhishekdevpro/dean_users_fe:1.1
// docker push abhishekdevpro/dean_users_fe:1.1
