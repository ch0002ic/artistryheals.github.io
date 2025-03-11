import React, { useState } from "react";
import Footer from "@/components/Footer";

const Result: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const handleModalOverlayClick = () => {
    setIsShareModalOpen(false);
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center relative justify-end items-center"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/KYbSRTc9/screenshot-20240809-150501.png')",
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f2e9e4",
      }}
    >
      {/* Header */}
      <div className="w-full h-[10px] flex items-center justify-between px-16">
        <a href="home.html">
          <img
            src="https://i.postimg.cc/5NzmY7s1/Artistry-Heals-removebg-preview.png"
            alt="Logo"
            className="w-58 h-24"
          />
        </a>
        <div className="flex space-x-8">
          <button className="text-[#5b352e] hover:text-opacity-80">
            <i className="fas fa-globe text-2xl"></i>
          </button>
          <img
            src="https://i.postimg.cc/nrsfy05S/screenshot-20240808-102244.png"
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto" style={{ height: "78vh" }}>
        <div className="px-24 py-24 flex flex-col justify-between items-center">
          <div className="flex w-full mt-8">
            <div className="w-full pl-80">
              <p
                className="text-2xl text-white mt-8 font-thin"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Emotion Wheel
              </p>
              <p
                className="text-4xl text-white mt-4 font-bold"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Your drawing is successfully uploaded
              </p>
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <p
                    className="text-2xl font-bold text-black mb-2 mt-12"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    Rate this exercise
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <i
                        key={index}
                        className={`fas fa-star text-3xl rounded-full cursor-pointer transition-colors duration-200 mr-1 ${
                          index < rating
                            ? "text-yellow-300"
                            : "text-gray-100 hover:text-yellow-300"
                        }`}
                        onClick={() => handleStarClick(index)}
                      ></i>
                    ))}
                  </div>
                </div>
                <button
                  id="shareButton"
                  className="text-white rounded-full py-3 px-16 flex items-center mt-12"
                  style={{ backgroundColor: "#849bff" }}
                  onClick={() => setIsShareModalOpen(true)}
                >
                  <i className="fas fa-share-alt mr-2"></i>
                  <span className="font-bold">Share to Community</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isShareModalOpen && (
        <div
          id="shareModal"
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={handleModalOverlayClick}
        >
          <div className="bg-white rounded-lg p-8 w-[500px]" onClick={stopPropagation}>
            <p className="text-xl font-bold mb-4">Share to Community</p>
            <p className="text-gray-700 mb-4">
              Click on any of the icons below to share your drawing with your colleagues/friends/peers and encourage them to join us at Artistry Heals!
            </p>
            <div className="flex justify-between mb-4">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://ch0002ic.github.io/artistryheals.github.io"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 text-3xl"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              <a
                href="https://x.com/share?url=https://ch0002ic.github.io/artistryheals.github.io&text=Hi%2C%20friends!%20Come%20join%20me%20at%20Artistry%20Heals%20to%20help%20you%20express%20your%20thoughts%20and%20feelings%20better!"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 text-3xl"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/shareArticle?mini=true&url=https://ch0002ic.github.io/artistryheals.github.io&text=Hi%2C%20friends!%20Come%20join%20me%20at%20Artistry%20Heals%20to%20help%20you%20express%20your%20thoughts%20and%20feelings%20better!"
                target="_blank"
                rel="noreferrer"
                className="text-blue-700 text-3xl"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://reddit.com/submit?url=https://ch0002ic.github.io/artistryheals.github.io&title=Hi%2C%20friends!%20Come%20join%20me%20at%20Artistry%20Heals%20to%20help%20you%20express%20your%20thoughts%20and%20feelings%20better!"
                target="_blank"
                rel="noreferrer"
                className="text-orange-600 text-3xl"
              >
                <i className="fab fa-reddit-square"></i>
              </a>
              <a
                href="https://pinterest.com/pin/create/button/?url=https://ch0002ic.github.io/artistryheals.github.iomedia=&description=Hi%2C%20friends!%20Come%20join%20me%20at%20Artistry%20Heals%20to%20help%20you%20express%20your%20thoughts%20and%20feelings%20better!"
                target="_blank"
                rel="noreferrer"
                className="text-red-600 text-3xl"
              >
                <i className="fab fa-pinterest-square"></i>
              </a>
            </div>
            <button
              id="closeModal"
              className="text-white bg-gray-500 px-4 py-2 rounded-lg"
              onClick={() => setIsShareModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Result;