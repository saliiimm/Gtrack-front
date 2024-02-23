import { useEffect, useState } from "react";
import "./Nav.css";
import Logo from "../../assets/logoGhack.svg";
import { FiMenu ,FiX } from "react-icons/fi";
const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
 const [menu, setMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (menu) {
      document.body.classList.add("stop");
    } else {
      document.body.classList.remove("stop");
    }
  }, [menu]);

  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <div className="nav-left">
        <img src={Logo} /> <p>Track</p>
      </div>
    <div className="menu" onClick={()=>{setMenu(true)}}>  <FiMenu/></div>
    <div className={menu?"items-container open-menu":"items-container"}>
   <div className="close" onClick={()=>{setMenu(false)}}><FiX/></div>
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
    </div>
    </nav>
  );
};

export default Nav;
