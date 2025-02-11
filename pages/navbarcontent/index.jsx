import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Navbarcontent() {
  return (
    <>
      <Navbar />

      <div className="m-4 sm:mx-10 lg:mx-40 p-4 sm:p-6 shadow-2xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-4 underline">
          AI Resume Builder
        </h1>
        <p className="text-base sm:text-lg">
          AI Resume Builder on CibliJob.com offers a seamless way to craft
          professional resumes tailored to specific job roles. Leveraging
          advanced AI algorithms, it guides users through every step, ensuring
          optimal formatting, keyword optimization, and personalized content.
          Save time and create standout resumes with ease.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          AI-Powered Resume Builder:
        </h2>
        <p className="text-base sm:text-lg">
          Automatically generates personalized, professional resumes tailored to
          specific industries and job roles. Suggests the best format,
          structure, and content based on AI analysis of job trends and
          requirements.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Resume Score:
        </h2>
        <p className="text-base sm:text-lg">
          Provides an instant score for your resume based on industry standards
          and recruiter expectations. Helps users understand how well their
          resume performs in terms of readability, relevance, and keyword
          optimization.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Multiple Resumes:
        </h2>
        <p className="text-base sm:text-lg">
          Allows users to create and manage multiple resumes for different job
          applications, catering to various industries and roles. Saves time by
          letting you tweak versions without starting from scratch.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Skill Testing & Integration:
        </h2>
        <p className="text-base sm:text-lg">
          Includes a feature to test your skills and integrate results into the
          resume, showcasing your expertise to employers. Adds credibility by
          quantifying and validating your abilities.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Amazing & Interactive Dashboard:
        </h2>
        <p className="text-base sm:text-lg">
          A user-friendly dashboard provides real-time updates on your resume
          performance and interaction history. Tracks job applications, resume
          downloads, and feedback from recruiters.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Multiple Templates:
        </h2>
        <p className="text-base sm:text-lg">
          Offers a variety of modern and professional templates to choose from,
          ensuring your resume stands out visually. Templates are customizable
          to fit personal branding and job-specific needs.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Sign Up & Logins:
        </h2>
        <p className="text-base sm:text-lg">
          Easy sign-up and login options, including social media integration for
          convenience. Secure and accessible anytime for making quick updates
          and downloads.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Fully Automatic System:
        </h2>
        <p className="text-base sm:text-lg">
          The AI system is fully automated, requiring minimal user input for
          maximum output. Ensures efficiency, accuracy, and a hassle-free resume
          creation process.
        </p>

        <br />
        <br />
        <p className="text-base sm:text-lg">
          Each feature is designed to save users time, improve the quality of
          their resumes, and increase their chances of landing the right job.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Navbarcontent;
