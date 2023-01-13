import React from "react";
// import Nav from "../Nav";

function Header(props) {
  // const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Bhavika Mevada's Portfolio</h1>
          </div>
          {/* <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div> */}
          {props.children}
        </header>
      </section>
      <section className="hero mainStyle">
        <div className="hero-cta">

          <h2>Welcome to my Coding Bootcamp Portfolio</h2>
          <p>
            Add information -  Examples of my completed projects in Bootcamp can be found here
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;