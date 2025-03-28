import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { BASE_URL } from "../components/Constant/constant";
const allColors = [
  { name: "None", value: "" },
  { name: "Nobel Grey", value: "#6D7278" },

  { name: "Electric Lilac", value: "#b19cd9" },
  { name: "Purple", value: "#9333EA" },
  { name: "Turquoise", value: "#00b5ad" },
  { name: "Jungle Green", value: "#16A34A" },

  {
    name: "Red",

    value: "#DC2626",
  },
  {
    name: "Yellow",

    value: "#EAB308",
  },
  {
    name: "Orange",

    value: "#F97316",
  },
  {
    name: "Pink",

    value: "#EC4899",
  },
  {
    name: "Teal",

    value: "#14B8A6",
  },

  {
    name: "Blue",

    value: "#00b38d",
  },
  {
    name: "Indigo",

    value: "#4F46E5",
  },
  {
    name: "Navy Blue",

    value: "#1E3A8A",
  },
  {
    name: "Light Blue",

    value: "#93C5FD",
  },
  { name: "Oxford Blue", value: "#2563EB" },
  {
    name: "Light Red",

    value: "#FCA5A5",
  },
  {
    name: "Light Green",

    value: "#86EFAC",
  },
  {
    name: "Light Yellow",

    value: "#FDE047",
  },
  {
    name: "Light Teal",

    value: "#5EEAD4",
  },
  {
    name: "Light Purple",

    value: "#D8B4FE",
  },
];
const freeColors = allColors.slice(1, 3);
const ColorPicker = ({ selectedColor, onChange }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
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

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleColorSelect = (color) => {
    onChange(color);
    setIsOpen(false); // Close dropdown after selection
  };

  const colors = userPlan === 1 ? freeColors : allColors;

  return (
    <div className="relative flex items-center m-2 z-20 ">
      <button
        onClick={handleToggleDropdown}
        className="hidden sm:block rounded-lg border-2 border-cyan-500 px-8 p-1 font-bold  bg-white text-black"
        style={{ backgroundColor: selectedColor || "transparent" }}
      >
        <span className="">{t("backgroundColor.label")}</span>
      </button>
      <button
        onClick={handleToggleDropdown}
        className="sm:hidden rounded-lg border-2 border-cyan-500 px-5 py-2 font-bold  bg-white text-black"
        style={{ backgroundColor: selectedColor || "transparent" }}
      >
        {t("backgroundColor.labelMobile")}
      </button>
      {isOpen && (
        // <div className="absolute top-10 mt-2  bg-white border rounded-3xl shadow-lg z-50">
        //   <div className="flex  p-5 space-x-4 bg-white rounded-3xl">
        //     {colors.map((color, index) => {
        //       const isSelected = selectedColor === color.value;
        //       const hoverStyle = {
        //         backgroundColor: color.value,
        //         borderColor: isSelected ? "black" : "gray",
        //       };

        //       return (
        //         <div
        //           key={index}
        //           onClick={() => handleColorSelect(color.value)}
        //           className={`w-6 h-6 rounded-full cursor-pointer border transition-all duration-300 ease-in-out ${
        //             isSelected
        //               ? "border-blue-80 shadow-lg shadow-blue-500"
        //               : "border-gray-300"
        //           } hover:border-black`}
        //           style={hoverStyle}
        //         />
        //       );
        //     })}
        //   </div>
        // </div>
        <div className="absolute top-10 mt-2 bg-white border rounded-3xl shadow-lg z-50 w-64 sm:w-auto">
          <div className="flex flex-wrap p-4 gap-3 bg-white rounded-3xl justify-center sm:justify-start">
            {colors.map((color, index) => {
              const isSelected = selectedColor === color.value;
              const hoverStyle = {
                backgroundColor: color.value,
                borderColor: isSelected ? "black" : "gray",
              };

              return (
                <div
                  key={index}
                  onClick={() => handleColorSelect(color.value)}
                  className={`w-8 h-8 rounded-full cursor-pointer border transition-all duration-300 ease-in-out ${
                    isSelected
                      ? "border-blue-500 shadow-md shadow-blue-500 scale-110"
                      : "border-gray-300"
                  } hover:border-black`}
                  style={hoverStyle}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
