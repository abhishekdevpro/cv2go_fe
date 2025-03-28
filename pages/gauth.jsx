import React, { useEffect, useState } from "react";
import axios from "axios";

import { useRouter } from "next/router";
import { BASE_URL } from "../components/Constant/constant";
import { useTranslation } from "react-i18next";
const Gauth = () => {
  const [loading, setLoading] = useState(true);
  const { i18n, t } = useTranslation();
  const language = i18n.language;

  const router = useRouter();

  useEffect(() => {
    const getQueryParams = (url) => {
      const params = new URLSearchParams(new URL(url).search);
      return Object.fromEntries(params.entries());
    };

    const queryParams = getQueryParams(window.location.href);
    const code = queryParams.code;
    console.log(code);

    if (code) {
      const sendAuthCode = async () => {
        try {
          const response = await axios.get(
            `${BASE_URL}/api/user/auth/callback?code=${code}&lang=${language}`
          );
          console.log(response);
          const token = response.data.data.token;

          localStorage.setItem("token", token);
          router.push(`/dashboard`);
        } catch (error) {
          console.error("Error while sending auth code:", error);

          router.push("/login2"); // Redirect to the login page on error
        } finally {
          setLoading(false); // Stop the loader
        }
      };

      sendAuthCode();
    } else {
      console.error("Code parameter is missing in the URL");
      setLoading(false);
      router.push("/login2"); // Redirect to the login page if code is missing
    }
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="loader border-t-4 border-green-500 rounded-full w-12 h-12 animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading, please wait...</p>
        </div>
      ) : (
        <div className="text-gray-600">Redirecting...</div>
      )}
    </div>
  );
};

export default Gauth;
