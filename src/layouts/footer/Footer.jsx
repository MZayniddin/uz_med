import { Link } from "react-router-dom";

// IMAGE
import logo from "../../assets/logos/logo.svg";
import EU_logo from "../../assets/logos/EU-logo.svg";

// STYLE
import "./Footer.scss";
import NavSublistItem from "./nav-sublist-item/NavSublistItem";
import FooterContact from "./footer-contact/FooterContact";

// COMPONENT

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer-inner">
          <div className="footer-logos">
            <Link to="/">
              <img className="uz-med__logo" src={logo} alt="Logo" />
            </Link>
            <img className="eu-logo" src={EU_logo} alt="Logo" />
          </div>
          <div className="footer-box">
            <h5 className="footer-title">Navigation</h5>
            <nav className="footer-nav">
              <ul className="footer-nav__list">
                <li className="footer-nav__list-item">
                  <span className="footer-nav-link">About</span>
                  <ul className="footer-nav__sublist">
                    <NavSublistItem link="/meetings" name="Meetings" />
                    <NavSublistItem link="/gallery" name="Gallery" />
                    <NavSublistItem link="/tenders" name="Tenders" />
                  </ul>
                </li>
                <li className="footer-nav__list-item">
                  <Link className="footer-nav-link" to="/e-learning">
                    eLearning
                  </Link>
                </li>
                <li className="footer-nav__list-item">
                  <Link className="footer-nav-link" to="/news">
                    News
                  </Link>
                </li>
              </ul>
              <ul className="footer-nav__list">
                <li className="footer-nav__list-item">
                  <span className="footer-nav-link">Activites</span>
                  <ul className="footer-nav__sublist">
                    <NavSublistItem link="/management" name="Management" />
                    <NavSublistItem link="/development" name="Development" />
                    <NavSublistItem
                      link="/establishment"
                      name="Establishment"
                    />
                    <NavSublistItem link="/quality-plan" name="Quality Plan" />
                    <NavSublistItem
                      link="/dissemination"
                      name="Dissemination"
                    />
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-box">
            <FooterContact />
          </div>
        </div>
      </div>
      <p className="footer-copyright">UzMedEn © 2023</p>
    </footer>
  );
}
