import { useState } from "react";

const images = [
  "Holidaze.png",
  "holidaze.login.png",
  "holidazevenues.png",
  "holidazebook.png",
];

function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="relative w-2/3 md:w-1/2">
          <div className="relative h-64 md:h-96 overflow-hidden">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`image-${index}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="absolute bottom-2 left-0 w-full flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`text-white text-lg bg-black bg-opacity-50 px-2 py-1 rounded-lg focus:outline-none ${
                  index === currentImage ? "bg-opacity-75" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageCarousel;
