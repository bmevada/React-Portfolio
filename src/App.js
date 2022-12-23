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


function App() {
  const [currentTab, setTabChange] = useState("About");
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
  const handlePageChange = (page) => setTabChange (page);


  return (
    <>
      <Helmet>
        <title>Bhavika's Portfolio | {currentTab} </title>
      </Helmet>
      ;
      <Header
        currentTab={currentTab}
        handlePageChange={handlePageChange}
      ></Header>
      <main>{renderTab()}</main>
      <Footer/>
    </>
  );
}

export default App;
