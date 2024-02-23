import { useEffect, useState } from "react";
import "./Nav.css";
import Logo from "../../assets/logoGhack.svg";
const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Event listener for window scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <div className="nav-left">
        <img src={Logo} /> <p>Hack</p>
      </div>
      <ul>
        <li>Home</li>
        <li>Solution</li>
        <li>Pricing</li>
        <li>About Us</li>
      </ul>
      <div className="nav-right">
        <button>Register</button>
        <button className="gradient">Log In</button>
      </div>
    </nav>
  );
};

export default Nav;
