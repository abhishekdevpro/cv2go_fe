import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Aboutus() {
  return (
    <div>
      <Navbar/>
      <div className="m-4 sm:mx-10 lg:mx-40 p-4 sm:p-6 shadow-2xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-4 underline">
          About Us
        </h1>
        <p className="text-base sm:text-lg">
          Welcome to Cibli Job, your trusted partner in crafting the ideal
          resume that opens doors to new career opportunities. We specialize in
          creating personalized, professional resumes that showcase your unique
          skills, experiences, and achievements.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Our Mission
        </h2>
        <p className="text-base sm:text-lg">
          At Cibli Job, our mission is to empower job seekers by providing
          expertly designed resumes that make a lasting impression. We
          understand that your resume is more than just a document; it’s a
          reflection of your professional journey and aspirations. Our goal is
          to help you stand out in a competitive job market and secure the
          position you deserve.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Why Choose Us?
        </h2>
        <p className="text-base sm:text-lg">
          <strong>Expertise and Experience:</strong> Our team of seasoned resume
          writers and career coaches brings years of industry experience to the
          table. We stay updated with the latest trends in resume formatting and
          content, ensuring your resume meets current standards and
          expectations.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Personalized Approach
        </h2>
        <p className="text-base sm:text-lg">
          We believe that every individual is unique, and so is their career
          path. Our personalized approach means that we take the time to
          understand your background, career goals, and strengths. We tailor
          your resume to highlight your most relevant skills and achievements,
          making it a powerful tool in your job search.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Proven Results
        </h2>
        <p className="text-base sm:text-lg">
          Our clients success is our top priority. We have a track record of
          helping job seekers across various industries secure interviews and
          job offers. Our professional resumes have proven to increase
          visibility and impact, giving you the confidence to pursue your career
          goals.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Our Services
        </h2>
        <p className="text-base sm:text-lg">
          <strong>Resume Writing:</strong> Whether you’re a recent graduate,
          mid-career professional, or seasoned executive, our custom resume
          writing service is designed to meet your needs. We create compelling,
          ATS-friendly resumes that highlight your qualifications and make you
          stand out to employers.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Cover Letter Writing
        </h2>
        <p className="text-base sm:text-lg">
          Complement your resume with a well-crafted cover letter. We write
          persuasive cover letters that tell your story and explain why you’re
          the perfect fit for the role.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          LinkedIn Profile Optimization
        </h2>
        <p className="text-base sm:text-lg">
          In today’s digital age, a strong LinkedIn profile is essential. We
          optimize your LinkedIn profile to increase your visibility, connect
          with potential employers, and showcase your professional brand.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Career Coaching
        </h2>
        <p className="text-base sm:text-lg">
          Our career coaching services provide you with the guidance and support
          needed to navigate your job search, prepare for interviews, and make
          informed career decisions.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Join Our Community
        </h2>
        <p className="text-base sm:text-lg">
          At Cibli Job, we’re more than just a resume writing service. We’re a
          community of career-driven individuals dedicated to supporting each
          other’s professional growth. Join us today and take the first step
          towards achieving your career aspirations.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Contact Us
        </h2>
        <p className="text-base sm:text-lg">
          Ready to transform your resume and unlock new opportunities? Contact
          us today and let Cibli Job help you craft the perfect resume for your
          career journey.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Aboutus;
