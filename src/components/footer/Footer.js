import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <section id="footer">
      <div id="footer-inner-container">
        <div id="footer-icons" className="flex">
          <p>&copy; 2022 Amit Deka</p>
          <div id="sm-icons-footer">
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
        </div>
        <p id="footer-note">
          Made with{" "}
          <span id="react-icon">
            <FontAwesomeIcon icon={faReact} /> React
          </span>
        </p>
      </div>
    </section>
  );
}

export default Footer;
