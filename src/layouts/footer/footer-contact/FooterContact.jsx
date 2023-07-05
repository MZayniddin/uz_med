import { Fragment } from "react";
import "./FooterContact.scss";

// ICONS
import YouTube from "../../../assets/ui-icons/YouTube.svg";
import Instagram from "../../../assets/ui-icons/Instagram.svg";
import Telegram from "../../../assets/ui-icons/Telegram.svg";
import Twitter from "../../../assets/ui-icons/Twitter.svg";

const FooterContact = () => {
  return (
    <Fragment>
      <h5 className="footer-title">Contact Us</h5>
      <a className="contact-tel text" href="tel:+99899999999">
        +99899999999
      </a>
      <address className="contact-address text">
        ул. Усмана Насыра, 156, 100121 Ташкент
      </address>
      <div className="socials">
        <a target="_blank" rel="noreferrer" href="https://youtube.com">
          <img src={YouTube} alt="" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com">
          <img src={Twitter} alt="" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://instagram.com">
          <img src={Instagram} alt="" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://t.me/">
          <img src={Telegram} alt="" />
        </a>
      </div>
    </Fragment>
  );
};

export default FooterContact;
