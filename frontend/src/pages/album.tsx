import React, { useState } from "react";
import "./css/album.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MasonryPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "react-photo-album/masonry.css";
import "yet-another-react-lightbox/styles.css";


const Album: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = Array.from({ length: 30 }, (_, index) => {
    const width = Math.floor(Math.random() * 200) + 500; // Random width between 400 and 600
    const height = Math.floor(Math.random() * 200) + 500; // Random height between 600 and 700
    return {
      src: `https://placehold.co/${width}x${height}`,
      width,
      height,
      title: `Sample Photo ${index + 1}`,
      style: {
        opacity: 0,
        animation: `fadeIn 0.5s ease-in ${index * 0.1}s forwards`,
      },
    };
  });

  

  return (
    <div className="bg-[var(--beige)]">
      <Navbar />
      <div className="py-4 px-20">
        <h1 className="text-7xl font-extrabold text-[var(--brown)] text-center mt-3 mb-10">Gallery</h1>
        <MasonryPhotoAlbum
          photos={photos}
          sizes={{
            size: "1168px",
            sizes: [
              {
                viewport: "(max-width: 1200px)",
                size: "calc(100vw - 32px)",
              },
            ],
          }}
          onClick={({ index }) => {
            setCurrentIndex(index);
            setOpen(true);
          }}
        />
      </div>
      <Footer />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={photos.map(photo => ({ src: photo.src }))}
        index={currentIndex}
        controller={{ closeOnBackdropClick: true, closeOnPullUp: true, closeOnPullDown: true }}
        styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .8)" } }}
      />
    </div>
  );
};

export default Album;