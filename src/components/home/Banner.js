import React from "react";
import Pattern from "./Particles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Banner() {
  return (
    <section id="banner">
      <div id="pattern-container">
        <Pattern />
      </div>
      <div className="flex" id="banner-inner-container">
        <h1 id="banner-name">Amit Deka</h1>
        <div id="sm-icons-header">
          <a
            href="https://www.linkedin.com/in/meet-amit-deka/"
            className="sm-icons"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/adamitdeka" className="sm-icons">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <nav id="banner-nav">
          <ul id="banner-menu">
            <li className="banner-menu-item menu-item">
              <a href="#about">About</a>
            </li>
            <li className="banner-menu-item menu-item">
              <a href="#work">Portfolio</a>
            </li>
            <li className="banner-menu-item menu-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
