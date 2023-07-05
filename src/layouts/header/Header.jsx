// TOOLS
import { Link } from "react-router-dom";

// COMPONENETS
import HeaderNav from "./header-nav/HeaderNav";
import SignLink from "./sign-link/SignLink";

// IMAGES
import logo from "../../assets/logos/logo.svg";

// STYLE
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="UZ Med logo" />
          </Link>
        </div>
        <HeaderNav />
      </div>
    </header>
  );
}
