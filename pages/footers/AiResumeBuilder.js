import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function AiResumeBuilder() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar/>
      <div className="max-w-4xl mx-auto my-5 p-6 sm:p-10 shadow-lg bg-white rounded-lg">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center underline mb-6">
          AI Resume Builder
        </h1>

        <h2 className="text-2xl font-bold my-5">
          Revolutionizing the Job Application Process
        </h2>
        <p className="text-gray-700">
          Welcome to Cibli Job’s AI Resume Builder – an innovative solution
          designed to streamline the resume creation process and help you land
          your dream job. Our cutting-edge AI technology simplifies resume
          writing, ensuring that your skills and achievements are presented in
          the best possible light.
        </p>

        <h2 className="text-xl font-bold my-5">Key Features</h2>

        {[
          {
            title: "1. Intelligent Content Generation",
            description:
              "Our AI analyzes your input and generates tailored content that aligns with industry standards and is optimized for Applicant Tracking Systems (ATS).",
          },
          {
            title: "2. Customizable Templates",
            description:
              "Choose from a range of professionally designed templates suited for different industries. Customize layouts, fonts, and colors to match your personal brand.",
          },
          {
            title: "3. Skills & Keywords Optimization",
            description:
              "AI scans job descriptions and suggests relevant keywords, increasing your chances of passing ATS filters and attracting recruiters.",
          },
          {
            title: "4. Real-Time Feedback & Suggestions",
            description:
              "Receive instant feedback on your resume’s content, structure, and impact. Improve your resume with AI-powered suggestions.",
          },
          {
            title: "5. Easy-to-Use Interface",
            description:
              "Our user-friendly platform makes resume building easy for everyone, from fresh graduates to seasoned professionals.",
          },
          {
            title: "6. Experience-Specific Sections",
            description:
              "AI helps tailor your resume by recommending relevant sections like work experience, education, certifications, and projects.",
          },
          {
            title: "7. Multilingual Support",
            description:
              "Build resumes in multiple languages, ensuring your application meets global employer expectations.",
          },
        ].map((feature, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}

        <h2 className="text-xl font-bold my-5">How It Works</h2>

        {[
          {
            title: "Step 1: Sign Up & Input Your Information",
            description:
              "Create an account on Cibli Job and provide your career details, including work experience, education, skills, and achievements.",
          },
          {
            title: "Step 2: Choose a Template",
            description:
              "Browse our professional templates and select the one that best fits your industry and style preferences.",
          },
          {
            title: "Step 3: Generate & Customize Your Resume",
            description:
              "AI generates a resume draft based on your input. Customize content and layout while using real-time feedback for improvements.",
          },
          {
            title: "Step 4: Download & Apply",
            description:
              "Download your resume in PDF, DOCX, or other formats, and start applying for jobs with confidence.",
          },
        ].map((step, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}

        <h2 className="text-xl font-bold my-5">
          Why Choose Our AI Resume Builder?
        </h2>

        {[
          {
            title: "Efficiency & Speed",
            description:
              "Create a high-quality resume in minutes, saving time and effort.",
          },
          {
            title: "Professional Quality",
            description:
              "Expertly crafted designs and content ensure a professional and impactful resume.",
          },
          {
            title: "Increased Visibility",
            description:
              "ATS-optimized resumes increase your chances of getting noticed by recruiters.",
          },
          {
            title: "Continuous Improvement",
            description:
              "Our AI learns from industry trends, offering up-to-date resume-building tools.",
          },
        ].map((benefit, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{benefit.title}</h3>
            <p className="text-gray-700">{benefit.description}</p>
          </div>
        ))}

        <h2 className="text-xl font-bold my-5">
          Start Building Your Resume Today
        </h2>
        <p className="text-gray-700">
          Transform your job application process with Cibli Job’s AI Resume
          Builder. Sign up now and take the first step toward landing your dream
          job with a professionally crafted resume that showcases your unique
          strengths and qualifications.
        </p>

        <h2 className="text-lg font-bold my-4 text-center">Get Started</h2>
        <p className="text-center text-gray-700 ">
          Ready to create your Cibli Job ? Visit our AI Resume Builder page and
          start building your resume today!
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default AiResumeBuilder;
