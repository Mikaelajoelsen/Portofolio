function Card() {
  return (
    <div className="flex justify-center m-10">
      <a
        href="#"
        className="flex flex-col items-center h-96  border border-black  shadow md:flex-row md:max-w-2xl "
      >
        <img
          className="object-cover w-full h-full md:w-64 rounded-lg drop-shadow-full shadow-2xl"
          src="profilbilde.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
            I´m a 25 year old front end developer from Norway.
          </h1>
          <p className="mb-3  text-white dark:text-white text-xs font-thin">
            I have 2 years of experince in HTML, CSS and Javascript. I use these
            tools to bring my webpages to life. However, my interests extend
            beyond coding. I am equally passionate about design and prototyping,
            having honed my skills in tools like Photoshop and Figma. By
            combining these skills, I am able to create websites that stand out
            and deliver fantastic user experiences.
          </p>
          <p className="mb-3 font-thin text-white dark:text-white text-xs">
            The expertise I`ve developed in JavaScript, CSS, and HTML allows me
            to build functional and visually appealing sites, while my
            proficiency in design tools like Photoshop, Figma, and Adobe XD adds
            an extra layer of creativity. This holistic approach ensures that
            the websites I create not only look great but also provide users
            with a seamless and enjoyable browsing experience.
          </p>
        </div>
      </a>
    </div>
  );
}

export default Card;
