import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ResumeContext } from "../components/context/ResumeContext"; // Adjust path as needed
import { BASE_URL } from "../components/Constant/constant";

const allFonts = ["Ubuntu", "Calibri", "Georgia", "Roboto", "Poppins"];
const freeFonts = ["Ubuntu", "Calibri"]; // Restricted fonts for free users

const FontSelector = () => {
  const { selectedFont, setSelectedFont } = useContext(ResumeContext);
  const [userPlan, setUserPlan] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("Unauthorized. Please log in.");
          return;
        }

        const response = await axios.get(`${BASE_URL}/api/user/user-profile`, {
          headers: { Authorization: token },
        });

        if (response.data?.status === "success") {
          setUserPlan(response.data.data.plan_id);
        }
      } catch (err) {
        console.error("Error fetching user profile:", err);
      }
    };

    fetchUserProfile();
  }, []);

  const fonts = userPlan === 1 ? freeFonts : allFonts; // Restrict fonts for free users

  return (
    <select
      value={selectedFont}
      onChange={(e) => setSelectedFont(e.target.value)}
      className="w-40 h-10 rounded-lg border border-cyan-500 px-4 font-bold text-black bg-white focus:ring-2 focus:ring-cyan-600"
    >
      {fonts.map((font) => (
        <option key={font} value={font}>
          {font}
        </option>
      ))}
    </select>
  );
};

export default FontSelector;
