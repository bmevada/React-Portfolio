import React, { useState } from "react";
import Header from "./components/Header"
import Page from "./components/Page"
import Nav from "./components/Navigation"
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Portfolio from "./components/Portfolio";
// import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import './App.css';

// Render various buttons 


function App() {
  
  const [pages] = useState([
    {
      name: "about me"
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: "resume"
    }
  ]);
  // const handlePageChange = (page) => setTabChange(page);
const [currentTab, setTabChange] = useState(pages[0])
const mainStyle = {maxWidth: '88%'}

  return (
    <>
      <Helmet>
        <title>{`Bhavika's Portfolio | {currentTab}`}</title>
      </Helmet>
      ;
      <Header>
        <Nav
          pages={pages}
          setTabChange={setTabChange}
          currentTab={currentTab}
        ></Nav>
      </Header>
      <main style={mainStyle} >
        <Page  currentTab={currentTab}></Page>
      </main>
      <Footer />
    </>
  );
}

export default App;
