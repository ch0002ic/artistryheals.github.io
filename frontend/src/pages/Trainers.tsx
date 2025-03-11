
// pages/Individuals.tsx

import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const Trainers: React.FC = () => {
  const { isLoggedIn, loading } = useAuth();

  // While we're checking the session, show a loading spinner or empty div
  if (loading) {
    return <div>Loading...</div>;
  }

  // If not logged in, redirect
  if (!isLoggedIn) {
    return <Navigate to="/login"/>;
  }

  // Otherwise, show the protected content
  return (
    <div>
        <Navbar />
        <div className="h-[100vh] w-full flex flex-col justify-center items-center">
      <h1>Trainers Page</h1>
      <p>Welcome to the Trainers page!</p>
      </div>
      <Footer />
    </div>
  );
};

export default Trainers;
