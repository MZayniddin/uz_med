import { v4 as uuidv4 } from "uuid"

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
                        <img src={logo} alt="Uz Med En logo" />
                    </div>
                    {footerData.map(({ links, title }) => (
                        <LinksBox key={uuidv4()} links={links} title={title} />
                    ))}
                </div>
            </div>
        </footer>
    );
}
