import { Link } from "react-router";
import Logo from "../assets/pokemon-logo.png";

function Header() {
  return (
    <header className="w-full flex justify-center py-4 px-10">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-[100px]" />
      </Link>
    </header>
  );
}

export default Header;
