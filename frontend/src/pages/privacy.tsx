
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[var(--beige)]">
      <Navbar />

      {/* Privacy Policy Content */}
      <div className="flex flex-col items-center justify-center px-0 min-h-[93vh] mainDiv">
      <div className="bg-white shadow-md rounded-lg max-w-[75vw] md:max-w-[50vw] w-full p-8 my-5">
        <h1 className="text-lg font-semibold text-center text-gray-800 mb-3">Privacy Policy</h1>
        <div className="text-base text-gray-600 text-left">
          <p className="mb-4 text-center">At Artistry Heals, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines the types of information we collect, how we use it, and how we safeguard it.</p>
          {[
            {title: "1. Information We Collect", text: "We collect information you provide directly to us, such as when you create an account, upload content, or communicate with us. This may include your name, email address, and any other information you choose to provide."},
            {title: "2. How We Use Your Information", text: "We use your information to provide and improve our services, communicate with you, and personalize your experience on the platform. We may also use your information for security purposes and to comply with legal obligations."},
            {title: "3. Sharing Your Information", text: "We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights. We may share aggregated or anonymized data with partners or for research purposes."},
            {title: "4. Data Security", text: "We implement security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, so we cannot guarantee absolute security."},
            {title: "5. Your Choices", text: "You have the right to access, update, or delete your personal information at any time. You can manage your communication preferences or opt-out of certain communications through your account settings."},
            {title: "6. Cookies and Tracking Technologies", text: "We use cookies and similar technologies to track your activity on our platform, enhance your experience, and analyze usage data. You can manage your cookie preferences through your browser settings."},
            {title: "7. Changes to This Privacy Policy", text: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page, and you are advised to review this page periodically."},
            {title: "8. Contact Us", text: "If you have any questions about this Privacy Policy, please contact us at "}
          ].map((section, index) => (

            <div key={index} className="mb-4">
              <h2 className="text-xl font-medium mb-2">{section.title}</h2>
              <p>{section.text} {section.title === "8. Contact Us" && <a href="mailto:artistryheals.official@gmail.com" className="text-blue-500 hover:underline">artistryheals.official@gmail.com</a>}</p>

            </div>
          ))}
        </div>
      </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
