import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function TermsandConditions() {
  return (
    <div>
      <Navbar/>
      <div className="m-4 sm:mx-10 lg:mx-40 p-4 sm:p-6 shadow-2xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-4 underline">
          Terms and Conditions
        </h1>

        <p className="text-base sm:text-lg">
          Welcome to Cibli Job. These terms and conditions outline the rules and
          regulations for the use of Cibli Jobs website and services. By
          accessing this website and using our services, you accept these terms
          and conditions in full. If you disagree with any part of these terms
          and conditions, please do not use our website or services.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          1. Definitions
        </h2>
        <ul className="list-inside list-disc pl-4 text-base sm:text-lg">
          <li>
            Client: Any individual or entity using the services of Cibli Job.
          </li>
          <li>Company: Cibli Job.</li>
          <li>
            Services: Resume writing, career coaching, LinkedIn profile
            optimization, and other career-related services provided by Cibli
            Job.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          2. Use of Services
        </h2>
        <ul className="list-inside list-disc pl-4 text-base sm:text-lg">
          <li>
            Clients must provide accurate and complete information when
            utilizing our services.
          </li>
          <li>
            Services are intended for personal use only. Redistribution or
            resale of our services is prohibited.
          </li>
          <li>
            Clients agree to use our services in a manner consistent with all
            applicable laws and regulations.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          3. Payment and Refunds
        </h2>
        <ul className="list-inside list-disc pl-4 text-base sm:text-lg">
          <li>
            Payment for services must be made in full before the commencement of
            any work.
          </li>
          <li>
            All fees are non-refundable unless otherwise stated in a specific
            service agreement.
          </li>
          <li>
            In case of dissatisfaction with our services, clients must contact
            us within 7 days of receiving the final product. We will make
            reasonable efforts to address and rectify any issues.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          4. Intellectual Property
        </h2>
        <ul className="list-inside list-disc pl-4 text-base sm:text-lg">
          <li>
            All content, materials, and services provided by Cibli Job are
            protected by intellectual property laws.
          </li>
          <li>
            Clients are granted a limited license to use the content and
            materials for personal, non-commercial purposes.
          </li>
          <li>
            Reproduction, distribution, or modification of our content and
            materials without prior written consent is prohibited.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          5. Confidentiality
        </h2>
        <ul className="list-inside list-disc pl-4 text-base sm:text-lg">
          <li>
            Cibli Job respects the privacy and confidentiality of its clients.
          </li>
          <li>
            Any personal information provided by clients will be used solely for
            the purpose of delivering services and will not be shared with third
            parties without explicit consent.
          </li>
          <li>
            Clients agree not to disclose any confidential information obtained
            through our services to third parties.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          6. Limitation of Liability
        </h2>
        <ul className="list-inside list-disc pl-4 text-base sm:text-lg">
          <li>
            Cibli Job will not be liable for any direct, indirect, incidental,
            or consequential damages arising out of or in connection with the
            use of our services.
          </li>
          <li>
            We do not guarantee employment or specific job outcomes as a result
            of using our services.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          7. Disclaimer of Warranties
        </h2>
        <ul className="list-inside list-disc pl-4 text-base sm:text-lg">
          <li>
            Our services are provided on an as-is and as-available basis. Cibli
            Jobs makes no warranties, express or implied, regarding the
            accuracy, reliability, or completeness of our services.
          </li>
          <li>
            We do not warrant that our services will meet clients expectations
            or that any errors or defects will be corrected.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          8. Changes to Terms and Conditions
        </h2>
        <ul className="list-inside list-disc pl-4 text-base sm:text-lg">
          <li>
            Cibli Job reserves the right to modify or update these terms and
            conditions at any time without prior notice.
          </li>
          <li>
            Continued use of our website and services after any changes
            signifies acceptance of the revised terms and conditions.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          9. Governing Law
        </h2>
        <ul className="list-inside list-disc pl-4 text-base sm:text-lg">
          <li>
            These terms and conditions are governed by and construed in
            accordance with the laws of the jurisdiction in which Cibli Job
            operates.
          </li>
          <li>
            Any disputes arising out of or in connection with these terms and
            conditions shall be subject to the exclusive jurisdiction of the
            courts in that jurisdiction.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold my-2 mt-5">
          10. Contact Information
        </h2>
        <p className="text-base sm:text-lg">
          If you have any questions or concerns about these terms and
          conditions, please contact us at:
          <br />
          Email:{" "}
          <a href="mailto:career@CibliJob.fr" className="text-blue-500">
            career@CibliJob.fr
          </a>
        </p>

        <p className="text-base sm:text-lg mt-5">
          These terms and conditions are designed to ensure a clear
          understanding of our services and the responsibilities of both Cibli
          Job and our clients. If you need any additional details or specific
          clauses included, please let us know!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default TermsandConditions;
