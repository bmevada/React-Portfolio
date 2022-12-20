import React, { useState } from "react";
import Header from "../src/components/Header"
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Footer from "../src/components/Footer";
import { Helmet } from "react-helmet";
import './App.css';

function App() {
  const [currentTab, handleTabChange] = useState("about");
}

function App() {
  return (
    <div>
      <main>
        <About>

        </About>
      </main>

    </div>
  );
}

export default App;
