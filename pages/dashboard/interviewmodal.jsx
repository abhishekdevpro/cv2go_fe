import { useState } from "react";
// import { motion } from "framer-motion";
// import { AlertCircle, MicOff } from "lucide-react";
// import { Button } from "@/components/ui/button";

export default function InterviewPage() {
  return (
    <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Background layout matching the image */}
      <div className="absolute inset-0 flex flex-col p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">Live Interview</h1>
          <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-sm">
            Premium
          </span>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {/* Left Panel */}
          <div className="bg-black text-white p-4 h-full rounded-md flex flex-col items-center justify-center">
            <p>Connect to your interview meeting room</p>
            <button className="mt-2 bg-orange-500 px-4 py-2 rounded">
              Select
            </button>
          </div>
          {/* Middle Panel */}
          <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow-md">
            <p className="text-green-600">Ready</p>
            <p className="text-sm text-gray-500">Interview Copilot w/ GPT-4o</p>
          </div>
          {/* Right Panel */}
          <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow-md">
            <p className="text-green-600">Ready</p>
            <p className="text-sm text-gray-500">
              Interview Copilot w/ Gemini-2.0 Flash
            </p>
          </div>
        </div>
      </div>

      {/* Center Disruption Notice */}
      {/* <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        exit={{ opacity: 0, scale: 0.9 }} 
        className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <h2 className="text-lg font-semibold">Interview Disrupted</h2>
        <p className="mt-2 text-sm text-gray-600">
          Some permissions have not been enabled, which might hinder the interview. 
          <a href="#" className="text-blue-600 font-medium"> If you have allowed the permissions, please refresh this page.</a>
        </p>
        
        <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-md">
          <div className="flex items-start gap-3">
            <MicOff className="text-red-500" />
            <div>
              <p className="font-semibold">Audio</p>
              <p className="text-sm text-gray-700">
                Enable Interview Copilot™ to provide real-time guidance based on your input. 
                You will need to turn this on to generate interview reports.
              </p>
              <p className="mt-1 text-sm text-red-600 font-medium">
                You have disabled audio permissions for the browser. Please check the tutorial and enable it.
              </p>
            </div>
          </div>
        </div>
        
        <p className="mt-3 text-sm text-gray-600 flex items-center gap-2">
          <AlertCircle className="w-4 h-4" /> I don’t know how to enable app permissions.
        </p>

        <div className="mt-5 flex justify-end">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Continue Launching
          </Button>
        </div>
      </motion.div> */}
    </div>
  );
}
