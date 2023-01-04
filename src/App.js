import React, { useState } from "react";
import Header from "./components/Header";
import Page from "./components/Page";

import Navigation from "./components/Navigation";
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

  // const [currentTab, setTabChange] = useState("About");
  // const renderTab = () => {
  //   if (currentTab === "About Me") {
  //     return <About />;
  //   }
  //   if (currentTab === "Contact") {
  //     return <Contact />;
  //   }
  //   if (currentTab === "Portfolio") {
  //     return <Portfolio />;
  //   }
  //   if (currentTab === "Resume") {
  //     return <Resume />;
  //   }
  //   return <About />;
  // };
  // const handlePageChange = (page) => setTabChange (page);
  const [currentTab, setTabChange] = useState(pages[0])

  return (
    <>
      <Helmet>
        <title>{`Bhavika's Portfolio | {currentTab}`}</title>
      </Helmet>
      ;
      <Header>
        <Navigation
          pages={pages}
          setTabChange={setTabChange}
          currentTab={currentTab}
        ></Navigation>
      </Header>
      <main>
        <Page currentTab={currentTab}></Page>
      </main>
      <Footer />
    </>
  );
}

export default App;
