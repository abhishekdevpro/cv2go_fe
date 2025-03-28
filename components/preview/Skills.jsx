
// import React, { useContext } from "react";
// import { ResumeContext } from "../context/ResumeContext";

// const Skills = ({ title, skills, color = "black", layout }) => {
//   const { resumeData, setResumeData, backgroundColorss } = useContext(ResumeContext);
//    console.log(backgroundColorss,"backgroundColorss");
//   const handleTitleChange = (e) => {
//     const newSkills = [...resumeData.skills];
//     const skillType = newSkills.find((skillType) => skillType.title === title);
//     if (skillType) {
//       skillType.title = e.target.innerText;
//     }
//     setResumeData({ ...resumeData, skills: newSkills });
//   };

//   return (
//     skills.length > 0 && (
//       <div className="">
//         <h2
//            style={{
//             color: layout === "row" || !backgroundColorss ? "black" : color,
//           }}
//           className="text-md font-semibold mb-2 editable"
//           contentEditable
//           suppressContentEditableWarning
//           onBlur={handleTitleChange}
//         >
//           {title}
//         </h2>
//         {layout === "row"  ? (
//           <div
//             style={{ color: "black" }} // Explicitly set color to black for row layout
//             className=""
//           >
//             {skills.join(", ")}
//           </div>
//         ) : (
//           <ul
//             style={{ color: backgroundColorss? color:"black" }}
//             className="list-disc ml-6"
//           >
//             {skills.map((skill, index) => (
//               <li key={index} className="">
//                 {skill}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     )
//   );
// };

// export default Skills;
import React, { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

const Skills = ({ title, skills, color = "black", layout }) => {
  const { resumeData, setResumeData, backgroundColorss } = useContext(ResumeContext);

  console.log(backgroundColorss, "backgroundColorss");

  const handleTitleChange = (e) => {
    const newSkills = [...resumeData.skills];
    const skillType = newSkills.find((skillType) => skillType.title === title);
    if (skillType) {
      skillType.title = e.target.innerText;
    }
    setResumeData({ ...resumeData, skills: newSkills });
  };

  const handleSkillChange = (index, newValue) => {
    const newSkills = [...resumeData.skills];
    const skillType = newSkills.find((skillType) => skillType.title === title);
    if (skillType && skillType.skills) {
      skillType.skills[index] = newValue;
      setResumeData({ ...resumeData, skills: newSkills });
    }
  };

  return (
    skills.length > 0 && (
      <div className="">
        <h2
          style={{
            color: layout === "row" || !backgroundColorss ? "black" : color,
          }}
          className="text-md font-semibold mb-2 editable"
          contentEditable
          suppressContentEditableWarning
          onBlur={handleTitleChange}
        >
          {title}
        </h2>
        {layout === "row" ? (
          <div
            style={{ color: "black" }}
            className="hover:outline-dashed hover:outline-2 hover:outline-gray-400"
            contentEditable
            suppressContentEditableWarning
          >
            {skills.join(", ")}
          </div>
        ) : (
          <ul
            style={{ color: backgroundColorss ? color : "black" }}
            className="list-disc ml-6"
          >
            {skills.map((skill, index) => (
              <li
                key={index}
                className="hover:outline-dashed hover:outline-2 hover:outline-gray-400 hover:scale-105 transition-transform duration-300"
              >
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleSkillChange(index, e.target.innerText)}
                >
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  );
};

export default Skills;