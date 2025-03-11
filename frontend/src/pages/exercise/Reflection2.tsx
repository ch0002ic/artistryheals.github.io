import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Reflection2: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div
        className="flex-1 bg-cover bg-center flex flex-col items-center relative"
        style={{
          borderRadius: "2rem",
          backgroundImage: "url('https://i.postimg.cc/sDCHBY3F/screenshot-20240808-145620.png')",
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f2e9e4",
        }}
      >
        {/* Title Box */}
        <div
          className="bg-[#ffc7ce] rounded-3xl px-16 py-8 z-10 relative"
          style={{ transform: "translateY(50%)" }}
        >
          <h1
            className="text-6xl font-extrabold text-center text-[#5b352e] whitespace-nowrap"
            style={{ fontFamily: "'League Spartan', sans-serif", fontWeight: 800 }}
          >
            Reflection question 2
          </h1>
        </div>

        {/* Main Content Box */}
        <div
          className="w-full max-w-[1170px] bg-white rounded-3xl overflow-hidden mx-auto mb-16 relative shadow-[20px_20px_0_0_#ff66c4]"
          style={{ height: "70vh" }}
        >
          <div className="px-24 py-16 h-full flex flex-col justify-between items-center">
            <div className="flex w-full mt-2">
              <div className="w-2/3 mt-2">
                <p
                  className="mt-16 text-4xl text-gray-600 tracking-widest"
                  style={{ fontFamily: "'Patrick Hand', sans-serif", color: "#1a4b93" }}
                >
                  Which emotion is the most <span className="text-custom">difficult</span> to describe? And the{" "}
                  <span className="text-custom">easiest</span> one?
                </p>
              </div>
              <div className="w-2/5 -mb-12">
                <img
                  src="https://i.postimg.cc/XqfPTwPM/screenshot-20240808-121125.png"
                  alt="Step 1 Illustration"
                  className="p-12 rounded-lg"
                />
              </div>
            </div>

            <div className="flex w-full">
              <textarea
                placeholder="Type your thoughts here"
                rows={4}
                className="w-full p-4 border-2 border-custom rounded-lg focus:ring-custom focus:border-custom text-gray-700 text-3xl"
                style={{ fontFamily: "'Patrick Hand', sans-serif" }}
              />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center w-4/5 -mt-8 mb-16 -ml-20">
          <a
            className="flex1 px-8 py-3 rounded-full text-[#D0916A] font-bold hover:bg-[#D0916A] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D0916A] transition-colors duration-200 text-lg self-start"
            onClick={() => window.history.back()}
          >
            &lt; Back
          </a>
          <a
            className="mx-auto ml-90 py-3 rounded-full border-2 border-custom text-custom font-bold hover:bg-custom hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom transition-colors duration-200 text-lg w-1/6 flex items-center justify-center"
            href="/Reflection3"
          >
            Next
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reflection2;