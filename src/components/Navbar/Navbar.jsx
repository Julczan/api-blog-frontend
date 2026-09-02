import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <Link to={"signup"}>Sign up</Link>
      <Link to={"login"}>Login</Link>
    </>
  );
}

export default Navbar;
