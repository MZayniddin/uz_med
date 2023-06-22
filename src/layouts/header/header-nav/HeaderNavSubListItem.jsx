import { Link } from "react-router-dom";

const HeaderNavSubListItem = ({name, link}) => {
  return (
    <li className="header__nav__sub-list-item">
      <Link className="header__nav__sub-link" to={link}>
        {name}
      </Link>
    </li>
  );
};

export default HeaderNavSubListItem;
