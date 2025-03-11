import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EmotionWheel: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div
        className="bg-cover bg-center flex-1 flex flex-col items-center justify-center relative px-4 md:px-0"
        style={{
          borderRadius: "2rem",
          backgroundImage:
            "url('https://i.postimg.cc/sDCHBY3F/screenshot-20240808-145620.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f2e9e4",
        }}
      >
        {/* Emotion Wheel Title */}
        <div className="bg-[#ffc7ce] rounded-3xl px-6 py-4 mb-6 max-w-screen-md text-center z-10 w-full mt-12">
          <h1
            className="text-3xl md:text-5xl font-extrabold text-[#5b352e]"
            style={{
              fontFamily: "'League Spartan', sans-serif",
              fontWeight: 800,
            }}
          >
            Emotion Wheel
          </h1>
        </div>

        {/* Content */}
        <div className="mx-auto text-center mb-6 max-w-screen-md w-full">
          <p
            className="text-lg md:text-2xl text-gray-600 tracking-widest"
            style={{
              fontFamily: "'Patrick Hand', sans-serif",
              color: "#1a4b93",
            }}
          >
            You can do it on your own digital device or on paper
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center mb-6">
          <img
            className="max-w-[80%] md:max-w-[70%] max-h-[40vh] rounded-lg shadow-md"
            src="../../public/emotionWheelDone.png"
            alt="Step 4 Illustration"
          />
        </div>

        {/* Start Now Button */}
        <div className="flex justify-center w-full mb-4">
          <a
            className="rounded-full py-2 px-6 border border-transparent shadow-sm text-sm md:text-lg font-bold text-white bg-[var(--green)] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom w-3/4 md:w-1/4"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
            href="/emotionwheel2"
          >
            Start Briefing Overview
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmotionWheel;
