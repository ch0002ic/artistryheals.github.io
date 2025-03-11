// pages/Login.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { supabase } from "@/supabaseClient";
import { useAuth } from "@/context/AuthContext";
import Footer from "@/components/Footer";

const Login: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  // If user is already logged in, redirect to /exercise
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/exercise");
    }
  }, [isLoggedIn, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      // Successful login; navigate to /exercise
      navigate("/exercise");
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="h-[93vh] bg-cover bg-center flex flex-col items-center justify-center relative"
        style={{
          borderRadius: "2rem",
          backgroundImage:
            "url('https://i.postimg.cc/sDCHBY3F/screenshot-20240808-145620.png')",
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f2e9e4",
        }}
      >
        <div className="w-full md:w-[750px] bg-white shadow-lg rounded-3xl overflow-hidden mx-4 md:mx-auto">
          <div className="px-6 py-8 md:px-10 md:py-16 max-w-full md:max-w-[500px] mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center text-[#5b352e] mb-4">
              Login
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Welcome back! Please enter your credentials to log in.
            </p>
            {error && (
              <p className="text-red-500 text-center">
                {error}
              </p>
            )}
            <form className="space-y-3" onSubmit={handleLogin}>
              {/* Email */}
              <div className="flex flex-col md:flex-row items-center">
                <label
                  htmlFor="email"
                  className="text-sm font-extrabold md:text-center text-[#5b352e] w-full md:w-1/4 text-start "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full md:w-3/4 rounded-full border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 bg-gray-200 px-4 py-2"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col md:flex-row items-center">
                <label
                  htmlFor="password"
                  className="text-sm font-extrabold text-start md:text-center text-[#5b352e] w-full md:w-1/4"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full md:w-3/4 rounded-full border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 bg-gray-200 px-4 py-2"
                  placeholder="Enter your password"
                />
              </div>

              <div className="mt-4 md:mt-10 flex justify-end">
                <a
                  href="/forgot-password"
                  className="text-blue-500 text-sm hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center mt-6 md:mt-10 mb-4 md:mb-6 py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-custom hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom"
                >
                  LOGIN
                </button>
              </div>
            </form>
            <p className="text-center text-sm mt-4">
              Don't have an account?{" "}
              <a href="/register" className="text-[#ff66c4] hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
