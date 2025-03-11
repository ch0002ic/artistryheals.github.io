import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const VideoWalkthrough: React.FC = () => {
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
              VIDEO WALKTHROUGH
            </p>
            <p className="text-md md:text-xl text-gray-600 tracking-wide leading-tight font-bold text-[#1a4b93]">
              Mindfulness Exercise for Emotional Awareness
            </p>
            <p className="text-md md:text-lg text-gray-600 mt-1 tracking-wide text-[#1a4b93]">
                Watch the Video Below to Learn How to Create Your Own Emotion Wheel!
            </p>
          </div>

          {/* Video - Limited height for fullscreen fit */}
          <div className="w-full flex justify-center">
            <video
              className="max-w-[80%] md:max-w-[40%] max-h-[30vh] rounded-lg shadow-md"
              controls
              autoPlay
              loop
            >
              <source
                src="/videos/your-video.mp4" // This is the path to the video in your public folder
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center w-full">
            <a
              className="px-6 md:px-8 py-2 md:py-3 rounded-full border-2 border-[#E0C89D] text-[#E0C89D] font-bold hover:bg-[#E0C89D] hover:text-white transition-all duration-200 text-sm md:text-lg"
              href="/emotionwheel5"
            >
              &lt; Back
            </a>
            <a
              className="px-6 md:px-8 py-2 md:py-3 rounded-full border-2 border-[#ff66c4] text-[#ff66c4] font-bold hover:bg-[#ff66c4] hover:text-white transition-all duration-200 text-sm md:text-lg"
              href="/Reflection1"
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

export default VideoWalkthrough;
