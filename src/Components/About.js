import React from "react";
// import profileImage from "";
// To do: Add a profile image for introduction - include an "Assets" folder for all images



function About() {
// const aboutIntro = {margin: '0 0 0 40px'}


  return (
    <section id="about-me" className="intro">
      <div className="flex-row">
        {/* <h1 id="about" className="section-title primary-border">
          About Me
        </h1> */}
      </div>
      <div className="flex-row">
        <div className="intro-info">
          {/* <div className="">
            Add image
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div> */}
          <p>
            Introduction about myself; what I currently do; why I am doing coding bootcamp and what I want to achieve
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;