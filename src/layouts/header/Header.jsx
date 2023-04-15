// TOOLS
import { Link } from "react-router-dom";

// COMPONENETS
import HeaderNav from "./header-nav/HeaderNav";

// IMAGES
import EUlogo from "../../assets/logos/EU-logo.svg";
import logo from "../../assets/logos/logo.svg";

// STYLE
import "./Header.scss";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="header__logos">
                        <img src={EUlogo} alt="EU Co-Funded logo" />
                        <Link to="/">
                            <img src={logo} alt="UZ Med logo" />
                        </Link>
                    </div>
                    <HeaderNav />
                </div>
            </div>
        </header>
    );
}
