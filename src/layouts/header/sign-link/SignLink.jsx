import { Link } from "react-router-dom";
import "./SignLink.scss";

const SignBtn = () => {
  return (
    <Link className="header__sign-link" to="#">
      Sign in
    </Link>
  );
};

export default SignBtn;
