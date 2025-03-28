"use client";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Navbar from "../Navbar/Navbar";
import { BASE_URL } from "../../components/Constant/constant";
import { ResumeContext } from "../../components/context/ResumeContext";
import { useTranslation } from "react-i18next";
export default function Notification() {
  const { t } = useTranslation();
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [marketingNotifications, setMarketingNotifications] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { selectedLang } = useContext(ResumeContext);
  // Fetch Notification Preferences
  useEffect(() => {
    const fetchNotificationSettings = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError(t("notification.unauthorized"));
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `${BASE_URL}/api/user/notification-permission?lang=${selectedLang}`,
          {
            headers: { Authorization: token },
          }
        );

        if (response.data?.status === "success") {
          const { is_email, is_sms, is_marketing_notification } =
            response.data.data;
          setEmailNotifications(is_email);
          setSmsNotifications(is_sms);
          setMarketingNotifications(is_marketing_notification);
        } else {
          setError(t("notification.error"));
        }
      } catch (err) {
        console.error("Error fetching notification settings:", err);
        setError(t("notification.error"));
      } finally {
        setLoading(false);
      }
    };

    fetchNotificationSettings();
  }, []);

  // Update Notification Preferences
  const updateNotification = async (type, value) => {
    const updatedSettings = {
      is_email: type === "email" ? value : emailNotifications,
      is_sms: type === "sms" ? value : smsNotifications,
      is_marketing_notification:
        type === "marketing" ? value : marketingNotifications,
    };

    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${BASE_URL}/api/user/notification-permission?lang=${selectedLang}`,
        updatedSettings,
        {
          headers: { Authorization: token },
        }
      );
    } catch (err) {
      console.error("Error updating notification settings:", err);
      setError("Failed to update notification settings.");
    }
  };

  if (loading)
    return (
      <p className="text-center text-gray-500">{t("notification.loading")}</p>
    );
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <Navbar />
      <div className="p-4 md:p-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          {t("notification.title")}
        </h2>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className="md:w-1/4 w-full">
            <Sidebar />
          </div>
          <div className="md:w-3/4 w-full">
            <div className="p-6 bg-white shadow-md rounded-md">
              <h3 className="text-xl font-semibold mb-4">
                {t("notification.heading")}
              </h3>

              {/* Product Notifications */}
              <div className="mb-6">
                <h4 className="font-semibold">
                  {t("notification.product_notifications")}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {t("notification.product_notifications_desc")}
                </p>

                {/* Email Notification Toggle */}
                <ToggleSwitch
                  label={t("notification.email_notifications")}
                  enabled={emailNotifications}
                  onChange={() => {
                    setEmailNotifications(!emailNotifications);
                    updateNotification("email", !emailNotifications);
                  }}
                />

                {/* SMS Notification Toggle */}
                <ToggleSwitch
                  label={t("notification.sms_notifications")}
                  enabled={smsNotifications}
                  onChange={() => {
                    setSmsNotifications(!smsNotifications);
                    updateNotification("sms", !smsNotifications);
                  }}
                />
              </div>

              {/* Marketing Notifications */}
              <div>
                <h4 className="font-semibold">
                  {" "}
                  {t("notification.marketing_notifications")}
                </h4>
                <ToggleSwitch
                  label={t("notification.marketing_optin")}
                  enabled={marketingNotifications}
                  onChange={() => {
                    setMarketingNotifications(!marketingNotifications);
                    updateNotification("marketing", !marketingNotifications);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Reusable Toggle Switch Component
const ToggleSwitch = ({ label, enabled, onChange }) => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <button
        onClick={onChange}
        className={`relative w-12 h-6 rounded-full transition duration-300 ${
          enabled ? "bg-cyan-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
            enabled ? "translate-x-6" : ""
          }`}
        ></span>
      </button>
      <label className="text-gray-700">{label}</label>
    </div>
  );
};
