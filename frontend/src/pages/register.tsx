// pages/Register.tsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { schools } from "@/data/schools"; // optional local data
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./css/datepicker-custom.css";
import { handleSchoolInputChange } from "@/pages/js/register"; // if you use a helper function
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/supabaseClient";
import Footer from "@/components/Footer";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [schoolSuggestions, setSchoolSuggestions] = useState<string[]>([]);
  const [schoolInput, setSchoolInput] = useState<string>("");
  const [birthday, setBirthday] = useState<Date | null>(null);
  const [categoryIndex, setCategoryIndex] = useState<number>(0);
  const [gender, setGender] = useState<string>("male");
  const [error, setError] = useState<string | null>(null);

  // You might have these categories for user_metadata
  const categories = ["Individual", "Trainer", "HR"];

  const { isLoggedIn } = useAuth();

  // If already logged in, redirect away
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/exercise");
    }
  }, [isLoggedIn, navigate]);

  // On mount, read ?category from query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      const index = categories.findIndex(
        (cat) => cat.toLowerCase() === category.toLowerCase()
      );
      if (index !== -1) {
        setCategoryIndex(index);
      }
    }
  }, [location.search]);

  const onSchoolInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setSchoolInput(input);
    // If you have a helper function to filter schools, you can call it:
    if (handleSchoolInputChange) {
      handleSchoolInputChange(input, setSchoolSuggestions, schools);
    }
  };

  const handleCategoryChange = (direction: "left" | "right") => {
    setCategoryIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? categories.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === categories.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Optional: Format the birthday
    const birthdayString = birthday ? birthday.toISOString().split("T")[0] : "";

    // Sign up with Supabase
    const { data: _, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          firstName,
          lastName,
          birthday: birthdayString,
          school: schoolInput,
          category: categories[categoryIndex],
          gender,
        },
      },
    });

    if (error) {
      setError(error.message);
    } else {
      // After successful registration, direct them to the login page:
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="min-h-[93vh] flex flex-col items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/sDCHBY3F/screenshot-20240808-145620.png')",
          backgroundSize: "cover",
          backgroundColor: "#f2e9e4",
        }}
      >
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-3xl overflow-hidden mx-auto px-10">
          <div className="px-6 py-10">
            <h1 className="text-4xl font-extrabold text-center text-[#5b352e] mb-4">
              Create {categories[categoryIndex]} Account
            </h1>
            <p className="text-center text-gray-600 mb-6">
              Hi, Enter your details to create an account
            </p>
            {error && (
              <p className="text-red-500 text-center mb-4">{error}</p>
            )}
            <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* First Name */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-left text-[#5b352e] mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-full border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 bg-gray-200 px-4 py-2"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-left text-[#5b352e] mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-full border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 bg-gray-200 px-4 py-2"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-left text-[#5b352e] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-full border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 bg-gray-200 px-4 py-2"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-left text-[#5b352e] mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-full border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 bg-gray-200 px-4 py-2"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-left text-[#5b352e] mb-1">
                  Date of Birth
                </label>
                <DatePicker
                  selected={birthday}
                  onChange={(date: Date | null) => setBirthday(date)}
                  className="w-full rounded-full border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 bg-gray-200 px-4 py-2"
                  placeholderText="Select your birthday"
                  showYearDropdown
                  showMonthDropdown
                  dropdownMode="select"
                />
              </div>

              {/* Organization / School */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-left text-[#5b352e] mb-1">
                  Organization / School
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full rounded-full border-gray-300 shadow-sm focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-50 bg-gray-200 px-4 py-2"
                    placeholder="Enter your organization or school"
                    value={schoolInput}
                    onChange={onSchoolInputChange}
                  />
                  {schoolSuggestions.length > 0 && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
                      {schoolSuggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setSchoolInput(suggestion);
                            setSchoolSuggestions([]);
                          }}
                        >
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Category */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-left text-[#5b352e] mb-1">
                  Category
                </label>
                <div className="flex items-center justify-between bg-gray-200 rounded-full px-4 py-2">
                  <button
                    type="button"
                    onClick={() => handleCategoryChange("left")}
                    className="px-2 py-1 bg-transparent rounded-full"
                  >
                    &lt;
                  </button>
                  <span className="text-[#5b352e] text-center font-bold text-lg">
                    {categories[categoryIndex]}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCategoryChange("right")}
                    className="px-2 py-1 bg-transparent rounded-full"
                  >
                    &gt;
                  </button>
                </div>
              </div>

              {/* Gender */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-left text-[#5b352e] mb-1">
                  Gender
                </label>
                <div className="flex justify-center items-center space-x-4">
                  {["Male", "Female", "Non-binary (Other)"].map((g) => (
                    <label key={g} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value={g.toLowerCase()}
                        checked={gender.toLowerCase() === g.toLowerCase()}
                        onChange={() => setGender(g.toLowerCase())}
                        className="form-radio text-custom focus:ring-custom"
                        required
                      />
                      <span className="ml-2 text-[#5b352e]">{g}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-span-1 md:col-span-2">
                <button
                  type="submit"
                  className="w-full flex justify-center mt-6 py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-white bg-custom hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom"
                >
                  CREATE ACCOUNT
                </button>
              </div>
            </form>
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <a href="/login" className="text-[#ff66c4] hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
