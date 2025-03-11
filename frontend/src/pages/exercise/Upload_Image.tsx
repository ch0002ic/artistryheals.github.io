import { useState, ChangeEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Upload_Image: React.FC = () => {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setPreviewSrc(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div
        className="flex-1 bg-cover bg-center flex flex-col items-center relative"
        style={{
          borderRadius: "2rem",
          backgroundImage:
            "url('https://i.postimg.cc/sDCHBY3F/screenshot-20240808-145620.png')",
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f2e9e4",
        }}
      >
        {/* Upload Container */}
        <div
          className="w-full max-w-[1170px] bg-white rounded-3xl overflow-hidden mx-auto mb-8 relative shadow-[20px_20px_0_0_#ff66c4]"
          style={{ height: "60vh" }}
        >
          <div className="p-12 h-full flex flex-col justify-between items-center relative">
            <div
              className="w-full h-full border-8 border-dashed rounded-2xl flex items-center justify-center relative"
              style={{ borderColor: "#f2e9e4" }}
            >
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                onChange={handleFileChange}
              />
              {previewSrc ? (
                <img
                  id="imagePreview"
                  src={previewSrc}
                  alt="Preview"
                  className="absolute inset-0 max-h-full max-w-full object-contain rounded-2xl"
                />
              ) : (
                <div className="text-center" id="uploadPrompt">
                  <i className="fas fa-cloud-upload-alt text-6xl text-custom mb-8"></i>
                  <p
                    className="text-3xl text-gray-600 font-semibold"
                    style={{ fontFamily: "'Open Sans', sans-serif", color: "#1a4b93" }}
                  >
                    Upload your image here
                  </p>
                  <p
                    className="text-2xl text-gray-600 mt-4"
                    style={{ fontFamily: "'Open Sans', sans-serif", color: "#d0916a" }}
                  >
                    Supports JPG, PNG
                  </p>
                </div>
              )}
            </div>
            <img
              src="https://i.postimg.cc/GpJZ2BnJ/screenshot-20240808-131151-removebg-preview.png"
              alt="Step 1 Illustration"
              className="absolute bottom-0 right-0 max-w-xs"
            />
          </div>
        </div>

        <div className="flex justify-center w-full mt-8 mb-16">
          <a
            className="py-3 px-24 rounded-full border-2 border-custom text-custom font-bold hover:bg-custom hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom transition-colors duration-200 text-lg w-1/6 flex items-center justify-center"
            href="/Result"
          >
            Done
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Upload_Image;