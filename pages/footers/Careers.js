import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Careers() {
  return (
    <div>
      <Navbar/>
      <div className="m-4 sm:mx-10 lg:mx-40 p-4 sm:p-6 shadow-2xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-4 underline">
          Careers at Cibli Job
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Join Our Team
        </h2>
        <p className="text-base sm:text-lg">
          At Cibli Job, we are committed to helping individuals achieve their
          career goals through expertly crafted resumes and personalized career
          services. Our team is passionate about making a difference in the
          lives of job seekers, and we’re always on the lookout for talented
          individuals who share our vision and dedication.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5 underline">
          Why Work with Us?
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Innovative Environment
        </h3>
        <p className="text-base sm:text-lg">
          We foster a culture of innovation and continuous learning. Our team
          stays ahead of industry trends, ensuring that we provide cutting-edge
          services to our clients. You’ll have the opportunity to work with the
          latest tools and techniques in resume writing and career coaching.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Collaborative Culture
        </h3>
        <p className="text-base sm:text-lg">
          At Cibli Job, we believe in the power of collaboration. Our team
          members work closely together, sharing ideas and supporting one
          another to achieve common goals. You’ll be part of a supportive
          community that values your input and encourages professional growth.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Impactful Work
        </h3>
        <p className="text-base sm:text-lg">
          Your work at Cibli Job will have a direct impact on our clients’
          lives. By helping job seekers present their best selves to potential
          employers, you’ll play a crucial role in their career success. There’s
          nothing more rewarding than knowing you’ve contributed to someone’s
          journey towards their dream job.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Career Development
        </h3>
        <p className="text-base sm:text-lg">
          We invest in our team’s growth and development. You’ll have access to
          ongoing training and professional development opportunities, enabling
          you to enhance your skills and advance your career. Whether you’re a
          seasoned professional or just starting out, we provide a clear path
          for your career progression.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5 underline">
          Current Openings
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Resume Writer
        </h3>
        <p className="text-base sm:text-lg">
          Join our team of expert resume writers and help clients create
          standout resumes. You’ll work closely with job seekers to understand
          their career goals and craft resumes that highlight their strengths
          and achievements.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Career Coach
        </h3>
        <p className="text-base sm:text-lg">
          As a career coach, you’ll provide personalized guidance to clients
          navigating their job search. You’ll assist with interview preparation,
          job search strategies, and career planning, helping clients make
          informed decisions about their professional future.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          LinkedIn Profile Specialist
        </h3>
        <p className="text-base sm:text-lg">
          Optimize clients’ LinkedIn profiles to increase their visibility and
          professional presence. You’ll create compelling profiles that
          effectively showcase clients’ skills and experiences, connecting them
          with potential employers and opportunities.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Customer Support Representative
        </h3>
        <p className="text-base sm:text-lg">
          Provide exceptional support to our clients, answering questions and
          resolving issues related to our services. You’ll ensure that every
          client has a positive experience with Cibli Job.
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          How to Apply
        </h3>
        <p className="text-base sm:text-lg">
          If you’re passionate about helping others succeed and want to be part
          of a dynamic, growth-oriented team, we’d love to hear from you. To
          apply for a position at Cibli Job, please send your resume and a cover
          letter to{" "}
          <a href="mailto:career@CibliJob.fr" className="text-blue-500">
            career@CibliJob.ca
          </a>
          .
        </p>

        <h3 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          Join Us and Make a Difference
        </h3>
        <p className="text-base sm:text-lg">
          At Cibli Job, you’ll have the opportunity to make a meaningful impact
          every day. Join us and help shape the future of job seekers around the
          world. We look forward to welcoming you to our team!
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Careers;
