import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

// DATA
import footerData from "../../data/footer-data.json";

// IMAGE
import logo from "../../assets/logos/logo.svg";

// STYLE
import "./Footer.scss";

// COMPONENT
import LinksBox from "./links-box/LinksBox";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer__logo">
                        <Link to="/">
                            <img src={logo} alt="Uz Med En logo" />
                        </Link>
                    </div>
                    {footerData.map(({ links, title }) => (
                        <LinksBox key={uuidv4()} links={links} title={title} />
                    ))}
                </div>
            </div>
            <p className="footer__copyright">© UzMedEn - 2023</p>
        </footer>
    );
}
