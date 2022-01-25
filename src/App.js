import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/stylesCopy.css";
import Banner from "./components/home/Banner";
import About from "./components/about/About";
import Projects from "./components/work/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

//import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
