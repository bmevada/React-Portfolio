import React, { useState } from "react";
import Header from "../src/components/Header"
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Footer from "../src/components/Footer";
import { Helmet } from "react-helmet";
import './App.css';

// Render various buttons 

const renderTab = () => {
  if (currentTab === "About") {
    return <About />;
  }
  if (currentTab === "Contact") {
    return <Contact />;
  }
  if (currentTab === "Portfolio") {
    return <Portfolio />;
  }
  if (currentTab === "Resume") {
    return <Resume />;
  }
  return <About />;
};


function App() {
  const [currentTab, handleTabChange] = useState("about");


  return (
    <>
      <Helmet>
        <title>Bhavika's Portfolio | {currentTab} </title>
      </Helmet>
      ;
      <Header
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      ></Header>
      <main>{renderTab()}</main>
      <Footer></Footer>
    </>
  );
}

export default App;
