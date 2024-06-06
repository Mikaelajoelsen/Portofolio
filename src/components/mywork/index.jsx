function ImageCard() {
  return (
    <div className=" flex  flex-row flex-wrap justify-center overflow-hidden m-6 ">
      <div className="absolute inset-0 bg-center dark:bg-black "></div>
      <div className="group relative m-10 flex  h-full w-full md:h-72 md:w-72   shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
        <div className="z-10 h-full w-full overflow-hidden  border rounded-full border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
          <img
            src="Holidaze.jpg"
            className="animate-fade-in block h-full w-full  scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
            alt=""
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-center dark:bg-black "></div>
      <div className="group relative m-10 flex   h-full w-full md:h-72 md:w-72  shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
        <div className="z-10 h-full w-full overflow-hidden  border rounded-full border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
          <img
            src="Group 2.png"
            className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
            alt=""
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-center dark:bg-black "></div>
      <div className="group relative m-10 flex h-full w-full md:h-72 md:w-72  shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
        <div className="z-10 h-full w-full overflow-hidden rounded-full border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
          <img
            src="ecommerce.png"
            className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
