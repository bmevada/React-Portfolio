import React, { useState } from "react";
import Header from "../src/components/Header.js"
import About from "./components/Resume.js";
import Contact from "../src/components/Contact.js";
import Portfolio from "../src/components/Portfolio.js";
import Resume from "./components/About.js";
import Footer from "../src/components/Footer.js";
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
