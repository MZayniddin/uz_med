import { Link } from "react-router-dom";
import "./NavSublistItem.scss";

const NavSublistItem = ({ link, name }) => {
  return (
    <li className="footer-nav__sublist-item">
      <Link to={link}>● {name}</Link>
    </li>
  );
};

export default NavSublistItem;
