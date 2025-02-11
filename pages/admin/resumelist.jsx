import React from "react";
import Link from "next/link";
import Image from "next/image";

// Import all template images dynamically
const templates = Array.from({ length: 20 }, (_, i) =>
  require(`./templateimages/template/template${i + 1}.png`)
);

const Resumelistpage = () => {
  return (
    <div className="p-4 md:p-6 flex flex-wrap justify-center gap-10 mt-5">
      <div className="max-h-[500px] overflow-y-auto p-2 w-full flex flex-wrap justify-center gap-10">
        {templates.map((template, index) => (
          <Link href="" key={index}>
            <div className="bg-cyan-600 rounded-lg shadow-xl shadow-cyan-600 text-center text-white cursor-pointer text-3xl font-semibold box-hover-effect transition-all hover:scale-105">
              <Image
                src={template}
                alt={`Template ${index + 1}`}
                className="w-60 h-72 object-cover rounded-lg"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Resumelistpage;
