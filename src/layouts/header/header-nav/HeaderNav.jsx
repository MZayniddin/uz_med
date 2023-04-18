import { Link } from "react-router-dom";
import { useState } from "react";

// ICONS
import { FiChevronDown } from "react-icons/fi";

// STYLE
import "./HeaderNav.scss";

function HeaderNav() {
    const [aboutListState, setAboutListState] = useState(false);
    const [activitiesListState, setActivitiesListState] = useState(false);

    return (
        <nav className="header__nav">
            <ul className="header__nav-list">
                <li className="header__nav-list-item">
                    <Link to="/" className="header__nav-link">
                        Home
                    </Link>
                </li>
                <li
                    className="header__nav-list-item"
                    onClick={() => setAboutListState((state) => !state)}
                >
                    <span className="header__nav-link">About</span>
                    <FiChevronDown
                        className="down-arrow"
                        style={
                            aboutListState
                                ? { transform: "rotate(180deg)" }
                                : null
                        }
                    />
                    <ul
                        className={`header__nav__sub-list ${
                            aboutListState ? "active" : ""
                        }`}
                        onDoubleClick={() =>
                            setAboutListState((state) => !state)
                        }
                    >
                        <li className="header__nav__sub-list-item">
                            <Link
                                className="header__nav__sub-link"
                                to="/meetings"
                            >
                                Meetings
                            </Link>
                        </li>
                        <li className="header__nav__sub-list-item">
                            <Link
                                className="header__nav__sub-link"
                                to="/partner"
                            >
                                Partner
                            </Link>
                        </li>
                        <li className="header__nav__sub-list-item">
                            <Link
                                className="header__nav__sub-link"
                                to="/meetings"
                            >
                                Gallery
                            </Link>
                        </li>
                        <li className="header__nav__sub-list-item">
                            <Link
                                className="header__nav__sub-link"
                                to="/meetings"
                            >
                                Tenders
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="header__nav-list-item">
                    <Link to="#" className="header__nav-link">
                        News
                    </Link>
                </li>
                <li
                    className="header__nav-list-item"
                    onClick={() => setActivitiesListState((state) => !state)}
                >
                    <span className="header__nav-link">Activities</span>
                    <FiChevronDown
                        className="down-arrow"
                        style={
                            activitiesListState
                                ? { transform: "rotate(180deg)" }
                                : null
                        }
                    />

                    <ul
                        className={`header__nav__sub-list ${
                            activitiesListState ? "active" : ""
                        }`}
                        onDoubleClick={() =>
                            setActivitiesListState((state) => !state)
                        }
                    >
                        <li className="header__nav__sub-list-item">
                            <Link
                                className="header__nav__sub-link"
                                to="/management"
                            >
                                Management
                            </Link>
                        </li>
                        <li className="header__nav__sub-list-item">
                            <Link
                                className="header__nav__sub-link"
                                to="/training"
                            >
                                Training
                            </Link>
                        </li>
                        <li className="header__nav__sub-list-item">
                            <Link
                                className="header__nav__sub-link"
                                to="/development"
                            >
                                Development
                            </Link>
                        </li>
                        <li className="header__nav__sub-list-item">
                            <Link
                                className="header__nav__sub-link"
                                to="/establishment"
                            >
                                Establishment
                            </Link>
                        </li>
                        <li className="header__nav__sub-list-item">
                            <Link
                                className="header__nav__sub-link"
                                to="/quality-plan"
                            >
                                Quality Plan
                            </Link>
                        </li>
                        <li className="header__nav__sub-list-item">
                            <Link
                                className="header__nav__sub-link"
                                to="/dissemination"
                            >
                                Dissemination
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="header__nav-list-item">
                    <Link to="#" className="header__nav-link">
                        eLearning
                    </Link>
                </li>
                <li className="header__nav-list-item">
                    <Link to="#" className="header__nav-link">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderNav;
