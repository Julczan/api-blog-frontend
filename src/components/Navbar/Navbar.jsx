import { Link } from "react-router";

function Navbar() {
  return (
    <navigation>
      <Link to={"/"}>Home</Link>
      <Link to={"signup"}>Sign up</Link>
      <Link to={"login"}>Login</Link>
    </navigation>
  );
}

export default Navbar;
