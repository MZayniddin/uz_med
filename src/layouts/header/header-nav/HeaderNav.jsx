// TOOLS
import { useEffect, useRef, useState } from "react";

// ICONS
import { FiChevronDown } from "react-icons/fi";

// COMPONENTS
import HeaderNavItem from "./HeaderNavItem";
import HeaderNavSubListItem from "./HeaderNavSubListItem";

// STYLE
import "./HeaderNav.scss";

function HeaderNav() {
  const [aboutListState, setAboutListState] = useState(false);
  const [activitiesListState, setActivitiesListState] = useState(false);
  const activitiesListRef = useRef();
  const aboutListRef = useRef();

  const handleChangeStateAbout = () => setAboutListState((state) => !state);
  const handleChangeStateActivities = () =>
    setActivitiesListState((state) => !state);

  const handleActivitiesListClick = (e) => {
    if (!activitiesListRef.current.contains(e.target)) {
      setActivitiesListState(false);
    }
  };

  const handleAboutListClick = (e) => {
    if (!aboutListRef.current.contains(e.target)) {
      setAboutListState(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleActivitiesListClick);
    return () =>
      document.removeEventListener("mousedown", handleActivitiesListClick);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleAboutListClick);
    return () =>
      document.removeEventListener("mousedown", handleAboutListClick);
  }, []);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <HeaderNavItem name="Home" link="/" />

        <li
          ref={aboutListRef}
          className="header__nav-list-item"
          onClick={handleChangeStateAbout}
        >
          <span className="header__nav-link">About</span>
          <FiChevronDown
            className="down-arrow"
            style={aboutListState ? { transform: "rotate(180deg)" } : null}
          />
          <ul
            className={`header__nav__sub-list ${
              aboutListState ? "active" : ""
            }`}
          >
            <HeaderNavSubListItem name="Meetings" link="/meetings" />
            <HeaderNavSubListItem name="Partner" link="/partner" />
            <HeaderNavSubListItem name="Gallery" link="/gallery" />
            <HeaderNavSubListItem name="Tenders" link="/tenders" />
          </ul>
        </li>

        <HeaderNavItem name="News" link="#" />

        <li
          ref={activitiesListRef}
          className="header__nav-list-item"
          onClick={handleChangeStateActivities}
        >
          <span className="header__nav-link">Activities</span>
          <FiChevronDown
            className="down-arrow"
            style={activitiesListState ? { transform: "rotate(180deg)" } : null}
          />

          <ul
            className={`header__nav__sub-list ${
              activitiesListState ? "active" : ""
            }`}
          >
            <HeaderNavSubListItem name="Management" link="/management" />
            <HeaderNavSubListItem name="Training" link="/training" />
            <HeaderNavSubListItem name="Development" link="/development" />
            <HeaderNavSubListItem name="Establishment" link="/establishment" />
            <HeaderNavSubListItem name="Quality Plan" link="/quality-plan" />
            <HeaderNavSubListItem name="Dissemination" link="/dissemination" />
          </ul>
        </li>

        <HeaderNavItem name="eLearning" link="#" />
        <HeaderNavItem name="Contact Us" link="#" />
      </ul>
    </nav>
  );
}

export default HeaderNav;
