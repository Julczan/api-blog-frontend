import { Link } from "react-router";

function Navbar() {
  const token = localStorage.getItem("Authorization");

  if (token) {
    return (
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/signout"}>Sign Out</Link>
      </nav>
    );
  }

  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/signup"}>Sign up</Link>
      <Link to={"/login"}>Login</Link>
    </nav>
  );
}

export default Navbar;
