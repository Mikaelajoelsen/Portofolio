function AboutMeCard() {
  return (
    <div className="flex justify-center m-10">
      <div className="max-w-md mx-auto overflow-hidden shadow-md md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0 drop-shadow-lg ">
            <img
              className="object-cover w-full mt-12 shadow-xl h-36 md:h-96 md:w-64 rounded-xl drop-shadow-2xl"
              src="profilbilde.jpg"
              alt="Mikaela Joelsen"
            />
          </div>
          <div className="p-8">
            <div className="text-xl font-thin tracking-wide text-gray-200 uppercase">
              About Me
            </div>
            <p className="mt-2 font-thin text-gray-300">
              I have a couple years of experince in HTML, CSS and Javascript. I
              use these tools to bring my webpages to life. However, my
              interests extend beyond coding. I am equally passionate about
              design and prototyping, having honed my skills in tools like
              Photoshop and Figma. By combining these skills, I am able to
              create websites that stand out and deliver fantastic user
              experiences.
            </p>
            <p className="mt-2 font-thin text-gray-300">
              The expertise I`ve developed in JavaScript, CSS, and HTML allows
              me to build functional and visually appealing sites, while my
              proficiency in design tools like Photoshop, Figma, and Adobe XD
              adds an extra layer of creativity. This holistic approach ensures
              that the websites I create not only look great but also provide
              users with a seamless and enjoyable browsing experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeCard;
