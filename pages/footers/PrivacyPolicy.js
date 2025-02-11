import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar/>
      <div className="max-w-4xl mx-auto my-5 p-6 sm:p-10 shadow-lg bg-white rounded-lg">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center underline mb-6">
          Privacy Policy
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">Introduction</h2>
          <p className="text-gray-700 mt-2">
            At Cibli Job, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy outlines how we
            collect, use, and safeguard your data when you use our website and
            services.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <h3 className="font-semibold mt-3">Personal Information</h3>
          <p className="text-gray-700">
            We may collect personal information such as your name, email, phone
            number, mailing address, resume details, and payment information.
          </p>

          <h3 className="font-semibold mt-3">Non-Personal Information</h3>
          <p className="text-gray-700">
            We also collect non-personal information like IP address, browser
            type, and website behavior to improve our services.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            2. How We Use Your Information
          </h2>
          <h3 className="font-semibold mt-3">Service Delivery</h3>
          <p className="text-gray-700">
            We use your information to provide resume writing, career coaching,
            and LinkedIn profile optimization.
          </p>

          <h3 className="font-semibold mt-3">Communication</h3>
          <p className="text-gray-700">
            We may contact you about our services, updates, and promotional
            offers. You can opt-out at any time.
          </p>

          <h3 className="font-semibold mt-3">Improvement & Analysis</h3>
          <p className="text-gray-700">
            Non-personal data helps us analyze website usage and improve
            security.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">3. Data Security</h2>
          <p className="text-gray-700">
            We use appropriate security measures to protect your data but cannot
            guarantee absolute security.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">4. Sharing Your Information</h2>
          <h3 className="font-semibold mt-3">Third-Party Service Providers</h3>
          <p className="text-gray-700">
            We may share data with trusted partners like payment processors and
            email services.
          </p>

          <h3 className="font-semibold mt-3">Business Transfers</h3>
          <p className="text-gray-700">
            If we undergo a merger or sale, your information may be transferred.
          </p>

          <h3 className="font-semibold mt-3">Legal Requirements</h3>
          <p className="text-gray-700">
            We may disclose your data if required by law.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">5. Your Rights and Choices</h2>
          <h3 className="font-semibold mt-3">Access & Correction</h3>
          <p className="text-gray-700">
            You can update or correct your personal data anytime.
          </p>

          <h3 className="font-semibold mt-3">Data Deletion</h3>
          <p className="text-gray-700">
            You may request data deletion, subject to legal obligations.
          </p>

          <h3 className="font-semibold mt-3">Opt-Out</h3>
          <p className="text-gray-700">
            You can opt out of promotional emails anytime.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">6. Cookies & Tracking</h2>
          <p className="text-gray-700">
            We use cookies to improve your experience. You can manage cookie
            settings in your browser.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">7. Third-Party Links</h2>
          <p className="text-gray-700">
            Our website may link to third-party sites. We are not responsible
            for their privacy policies.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">8. Childrens Privacy</h2>
          <p className="text-gray-700">
            Our services are not intended for individuals under 18. If a child
            provides personal data, we will delete it.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">9. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy. Continued use of our services
            after changes means acceptance of the revised policy.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">10. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions, contact us at:{" "}
            <a
              href="mailto:career@ciblJob.fr"
              className="text-blue-600 underline"
            >
              career@ciblJob.fr
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
