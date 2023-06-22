import { Link } from "react-router-dom";

const HeaderNavItem = ({ name, link }) => {
  return (
    <li className="header__nav-list-item">
      <Link to={link} className="header__nav-link">
        {name}
      </Link>
    </li>
  );
};

export default HeaderNavItem;
