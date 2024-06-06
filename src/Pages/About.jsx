const skills = [
  "JavaScript",
  "React.js",
  "Node.js",
  "HTML",
  "CSS",
  "SASS",
  "Bootstrap",
  "Git",
  "Tailwind Css",
  "Figma",
];

function DeveloperProfile() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <img
          src="profilbilde.jpg"
          alt="Profile"
          className="rounded-full w-48 h-48 border-4 mx-auto mb-4 shadow-lg"
        />
        <h1 className="text-4xl font-thin text-white mb-2">Mikaela Joelsen</h1>
        <p className="text-lg text-white">Front End Developer</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
        <ul className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-white text-black font-medium py-1 px-2 rounded-md text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
      <p className="mb-3  text-white dark:text-white text-xs font-thin">
        I have 2 years of experince in HTML, CSS and Javascript. I use these
        tools to bring my webpages to life. However, my interests extend beyond
        coding. I am equally passionate about design and prototyping, having
        honed my skills in tools like Photoshop and Figma. By combining these
        skills, I am able to create websites that stand out and deliver
        fantastic user experiences.
      </p>
      <p className="mb-3 font-thin text-white dark:text-white text-xs">
        The expertise I`ve developed in JavaScript, CSS, and HTML allows me to
        build functional and visually appealing sites, while my proficiency in
        design tools like Photoshop, Figma, and Adobe XD adds an extra layer of
        creativity. This holistic approach ensures that the websites I create
        not only look great but also provide users with a seamless and enjoyable
        browsing experience.
      </p>
    </div>
  );
}

export default DeveloperProfile;
