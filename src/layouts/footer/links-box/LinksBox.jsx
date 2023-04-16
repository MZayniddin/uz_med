import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

// STYLE
import "./LinksBox.scss";

export default function LinksBox({ links, title }) {
    return (
        <div className="footer__box">
            <div className="footer__box-title">
                <strong>{title}</strong>
            </div>

            <ul className="footer__links-list">
                {links.map((link) => (
                    <li key={uuidv4()} className="footer__links-list__item">
                        <Link className="footer__link">{link}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
