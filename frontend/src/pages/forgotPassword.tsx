import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

const ForgotPassword: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically handle the form submission, e.g., send the email to the server
    setSubmitted(true);
    setTimer(60);
    setCanResend(false);
  };

  useEffect(() => {
    if (submitted && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else if (timer === 0) {
      setCanResend(true);
    }
  }, [submitted, timer]);

  return (
    <div>
      <Navbar />
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center relative"
        style={{
          borderRadius: "2rem",
          backgroundImage:
            "url('https://i.postimg.cc/sDCHBY3F/screenshot-20240808-145620.png')",
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f2e9e4",
        }}
      >
        <div className="w-[750px] bg-white shadow-lg rounded-3xl overflow-hidden mx-auto">
          <div className="px-10 py-16 max-w-[500px] mx-auto">
            <h1 className="text-4xl font-extrabold text-center text-[#5b352e] mb-4">
              Password reset
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Help us reset your password.
            </p>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="flex items-center">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#5b352e] w-1/4"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-3/4 rounded-full border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 bg-gray-200 px-4 py-2"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                {submitted && (
                  <>
                    <p className="text-center text-green-600 mt-4">
                      A password reset link should be emailed to you shortly.
                    </p>
                    {!canResend && (
                      <p className="text-center text-gray-600 mt-2">
                        Resend email ({timer})
                      </p>
                    )}
                    {canResend && (
                      <p className="text-center text-blue-600 mt-2 cursor-pointer">
                        <a href="#" onClick={handleSubmit}>
                          Resend Email
                        </a>
                      </p>
                    )}
                  </>
                )}
                <button
                  type="submit"
                  className="w-full flex justify-center mt-10 mb-6 py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-custom hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
