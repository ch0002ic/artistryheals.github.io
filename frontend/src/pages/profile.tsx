// pages/Profile.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Profile: React.FC = () => {
  const { user, isLoggedIn, loading} = useAuth();

  // If you are using a loading state in AuthContext, uncomment:
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Suppose user_metadata includes firstName, lastName, birthday, etc.
  const { firstName, lastName, birthday, school, category, gender } = user?.user_metadata || {};

  return (
    <div>
      <Navbar />
    <div className="max-w-3xl mx-auto mt-8 px-4 h-[93vh]">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>

      <div className="bg-white shadow-md rounded p-6">
        <p className="mb-2">
          <strong>Email:</strong> {user?.email}
        </p>
        <p className="mb-2">
          <strong>First Name:</strong> {firstName}
        </p>
        <p className="mb-2">
          <strong>Last Name:</strong> {lastName}
        </p>
        <p className="mb-2">
          <strong>Birthday:</strong> {birthday}
        </p>
        <p className="mb-2">
          <strong>School/Organization:</strong> {school}
        </p>
        <p className="mb-2">
          <strong>Category:</strong> {category}
        </p>
        <p className="mb-2">
          <strong>Gender:</strong> {gender}
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Profile;
