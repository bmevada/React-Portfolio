import React from "react";
import Nav from "../Navigation";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Bhavika Mevada's Portfolio</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">

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