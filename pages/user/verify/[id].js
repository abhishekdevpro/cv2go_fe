import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../../components/Constant/constant";
import { ResumeContext } from "../../../components/context/ResumeContext";

const VerificationPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { selectedLang } = useContext(ResumeContext);

  useEffect(() => {
    const { id } = router.query;
    console.log(id, router.query, "token huu");

    if (!id) return;

    const verifyUser = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/user/verify-account/${id}?lang=${selectedLang}`
        );
        console.log(response);
        if (response.ok) {
          toast.success("Account verified successfully!");
          // Redirect to login after 3 seconds
          setTimeout(() => {
            router.push("/login2");
          }, 3000);
        } else {
          toast.error(
            "Verification failed. Please try again or contact support."
          );
          router.push("/login2");
        }
      } catch (error) {
        toast.error("An error occurred during verification. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    verifyUser();
  }, [router]);

  return (
    <>
      <ToastContainer position="top-center" theme="colored" />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Account Verification
            </h1>

            {isLoading ? (
              <div className="flex flex-col items-center gap-4">
                {/* Custom loader using only Tailwind */}
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-600">Verifying your account...</p>
              </div>
            ) : (
              <div className="mt-6">
                <button
                  onClick={() => router.reload()}
                  className="px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  Try Again
                </button>
                <p className="mt-4 text-sm text-gray-600">
                  If the problem persists, please{" "}
                  <a
                    href="mailto:support@genesistech.ca"
                    className="text-blue-500 hover:underline"
                  >
                    contact support
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationPage;
