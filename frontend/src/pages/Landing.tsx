import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./css/Landing.css";
import { useAuth } from '../context/AuthContext';
import { BarChart } from "@mui/x-charts/BarChart";

// const data = [
//   { name: 'Jan', progress: 30 },
//   { name: 'Feb', progress: 50 },
//   { name: 'Mar', progress: 70 },
//   { name: 'Apr', progress: 90 },
//   { name: 'May', progress: 100 },
// ];

const Landing: React.FC = () => {
  const { user, isLoggedIn } = useAuth();
  const { firstName, category, } = user?.user_metadata || {};

  return (
    <div>
      <Navbar />

      {!isLoggedIn ? (
        <div
          className="bg-cover bg-center flex flex-col items-center relative mainDiv min-h-[93vh] md:h-[93vh] px-5"
          style={{
            backgroundImage: "url('landingBg.png')",
            backgroundColor: "rgba(0,0,0,0.45)",
            backgroundBlendMode: "overlay",
          }}
        >
          <main className="flex flex-col items-center justify-center flex-grow text-white font-bold w-full px-4 md:px-16 py-8 md:py-0">
            <div className="max-w-4xl space-y-8 md:space-y-16 text-center md:text-left">
              <p
                className="text-2xl lg:text-4xl px-20 hidden md:block"
                style={{
                  fontFamily: "League Spartan, sans-serif",
                  fontWeight: 500,
                }}
              >
                Artistry Heals is an online platform for self-paced mindful art exercises
                to help schools and counsellors visualize, understand, and release
                your emotions through expressive journeys.
              </p>
              <p
                className="text-5xl lg:text-9xl md:px-20 px-0"
                style={{
                  fontFamily: "League Spartan, sans-serif",
                  fontWeight: 800,
                }}
              >
                You are...
              </p>
              <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16">
                <div className="flex flex-col items-center">
                  <Link
                    to="/register?category=individual"
                    className="pill hover:bg-opacity-90 text-custom font-bold py-4 px-8 lg:px-16 rounded-full mb-3 text-xl md:text-2xl"
                  >
                    INDIVIDUAL
                  </Link>
                  <p className="text-base md:text-lg font-normal">To Draw</p>
                </div>
                <div className="flex flex-col items-center">
                  <Link
                    to="/register?category=trainer"
                    className="pill hover:bg-opacity-90 text-custom font-bold py-4 px-8 lg:px-16 rounded-full mb-3 text-xl md:text-2xl bg-[var(--green)]"
                  >
                    TRAINER
                  </Link>
                  <p className="text-base md:text-lg font-normal">To Facilitate</p>
                </div>
                <div className="flex flex-col items-center">
                  <Link
                    to="/register?category=hr"
                    className="pill hover:bg-opacity-90 text-custom font-bold py-4 px-8 lg:px-16 rounded-full mb-3 text-xl md:text-2xl bg-[var(--blue)]"
                  >
                    HR
                  </Link>
                  <p className="text-base md:text-lg font-normal">To Manage</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      ) : (
        <>
          {category === 'Individual' &&
            <div className="flex justify-center items-center bg-[var(--beige)] p-4 md:p-20">
              <div className="grid grid-flow-row md:grid-flow-col md:grid-rows-3 gap-8 w-full md:w-[80vw]">
                <div className="md:row-span-3 rounded-lg bg-white shadow-lg overflow-hidden">
                  <img src="https://placehold.co/600x400" alt="" className="w-full h-auto" />
                  <div className="flex flex-col items-center justify-center p-5">
                    <p className="text-xl md:text-2xl font-bold">Welcome, {firstName}!</p>
                    <p className="text-sm md:text-lg font-normal text-center">Here is your personalized content.</p>
                  </div>
                </div>
                <div className="md:col-span-5 bg-gray-100 shadow-lg rounded-lg p-4 md:p-5">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center justify-between w-full">
                    <div className="bg-white shadow-xl rounded-xl w-full md:h-80 p-4 md:p-5">
                      <h1 className="text-3xl md:text-5xl font-bold text-left">Hello</h1>
                    </div>
                    <div className="bg-white shadow-xl rounded-xl w-full md:h-80 p-4">Rectangle 1</div>
                    <div className="bg-white shadow-xl rounded-xl w-full md:h-80 p-4">Rectangle 1</div>
                  </div>
                </div>
                <div className="md:col-span-5 md:row-span-2 bg-white shadow-lg rounded-lg p-4 md:p-5">
                  <BarChart
                    xAxis={[
                      {
                        id: 'barCategories',
                        data: ['bar A', 'bar B', 'bar C'],
                        scaleType: 'band',
                      },
                    ]}
                    series={[
                      {
                        data: [2, 5, 3],
                      },
                    ]}
                    height={400}
                    margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                  />
                </div>
              </div>
            </div>}
          {category === 'Trainer' && <p className="p-4 md:p-8">Welcome, Trainer! Here is your personalized content.</p>}
          {category === 'HR' && <p className="p-4 md:p-8">Welcome, HR! Here is your personalized content.</p>}
        </>
      )}

      <Footer />
    </div>
  );
};

export default Landing;