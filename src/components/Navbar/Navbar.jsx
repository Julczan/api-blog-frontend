import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/signup"}>Sign up</Link>
      <Link to={"/login"}>Login</Link>
    </nav>
  );
}

export default Navbar;
