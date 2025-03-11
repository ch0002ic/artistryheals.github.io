import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EmotionWheel2: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div
        className="flex-1 bg-cover bg-center flex flex-col items-center justify-center px-4 md:px-8 py-6"
        style={{
          borderRadius: "2rem",
          backgroundImage:
            "url('https://i.postimg.cc/sDCHBY3F/screenshot-20240808-145620.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f2e9e4",
        }}
      >
        {/* Title Box */}
        <div className="bg-[#ffc7ce] rounded-3xl px-6 md:px-12 py-3 md:py-6 z-10 text-center shadow-lg">
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#5b352e]">
            Emotion Wheel
          </h1>
        </div>

        {/* Main Content - Flex to balance elements evenly */}
        <div className="w-full max-w-screen-lg bg-white rounded-3xl overflow-hidden mx-auto flex flex-col items-center justify-between py-6 md:py-8 px-6 md:px-12 shadow-[10px_10px_0_0_#ff66c4] flex-grow">
          <div className="text-center">
            <p className="text-xl md:text-3xl font-bold tracking-wide mb-2 text-[#5b352e]">
              STEP 1
            </p>
            <p className="text-md md:text-xl text-gray-600 tracking-wide leading-tight font-bold text-[#1a4b93]">
              DRAW A LARGE CIRCLE ON PAPER AND DIVIDE IT INTO 4-8 SECTIONS
            </p>
            <p className="text-md md:text-lg text-gray-600 mt-1 tracking-wide text-[#1a4b93]">
              Number of Sections Depends on How Many Different Emotions You've Had Throughout the Week.
              <br />(Eg. 6 Emotions = 6 Sections).
            </p>
          </div>

          {/* Image - Limited height for fullscreen fit */}
          <div className="w-full flex justify-center">
            <img
              src="https://i.postimg.cc/XYr2FLDx/screenshot-20240808-113736.png"
              alt="Step 1 Illustration"
              className="max-w-[70%] md:max-w-[60%] max-h-[35vh] rounded-lg shadow-md"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center w-full">
            <a
              className="px-6 md:px-8 py-2 md:py-3 rounded-full border-2 border-[#E0C89D] text-[#E0C89D] font-bold hover:bg-[#E0C89D] hover:text-white transition-all duration-200 text-sm md:text-lg"
              href="/emotionwheel"
            >
              &lt; Back
            </a>
            <a
              className="px-6 md:px-8 py-2 md:py-3 rounded-full border-2 border-[#ff66c4] text-[#ff66c4] font-bold hover:bg-[#ff66c4] hover:text-white transition-all duration-200 text-sm md:text-lg"
              href="/emotionwheel3"
            >
              Next
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmotionWheel2;
