import { useState } from "react";

const images = ["frontpage.png", "works.png", "shows1.png", "shows2.png"];

function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="relative w-2/3 rounded-sm md:w-1/2">
          <div className="relative h-64 overflow-hidden rounded-sm md:h-96">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`image-${index}`}
                className={`absolute top-0 left-0 w-full h-full object-fit transition-opacity duration-500  ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="absolute left-0 flex justify-center w-full space-x-2 rounded-sm bottom-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`text-white text-lg bg-black bg-opacity-50 px-2 py-1 rounded-sm focus:outline-none ${
                  index === currentImage ? "bg-opacity-75" : ""
                } rounded-sm`}
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
