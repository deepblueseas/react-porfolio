const About = () => {
  return (
    <section className="about-me">
      <div className="profile-pic-container">
        {/* <img src={img} alt="Profile" className="profile-pic" /> */}
      </div>
      <div className="bio">
        <h2>About Me</h2>
        <p>
          Hello! My name is Tess, and I am currently completing the Case Western Reserve University Coding Bootcamp.
        </p>
        <p>
          I am gaining experience in HTML, CSS, Javascript, NodeJS/Express, SQL, Mongoose, React, and have worked on command-line apps using Inquirer and Jest.  For our second and 
          third group projects, we used third-party APIS, and I have some experience with turning things into a PWA.
        </p>
      </div>
    </section>
  );
};

export default About;