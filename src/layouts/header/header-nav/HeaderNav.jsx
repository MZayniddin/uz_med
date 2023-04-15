import React from "react";
import { Link } from "react-router-dom";

function HeaderNav() {
    return (
        <nav className="header__nav">
            <ul className="header__nav-list">
                <li className="header__nav-list-item">
                    <Link to="/" className="header__nav-link">
                        Home
                    </Link>
                </li>
                <li className="header__nav-list-item">
                    <span className="header__nav-link">About</span>
                    <ul className="header__nav__sub-list">
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
                <li className="header__nav-list-item">
                    <span to="#" className="header__nav-link">
                        Activities
                    </span>
                    <ul className="header__nav__sub-list">
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
