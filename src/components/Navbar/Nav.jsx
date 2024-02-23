import { useEffect, useState } from "react";
import "./Nav.css";
import Logo from "../../assets/logoGhack.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

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
      <Link to="/">
        <div className="nav-left">
          <img src={Logo} /> <p>Track</p>
        </div>
      </Link>

      <div
        className="menu"
        onClick={() => {
          setMenu(true);
        }}
      >
        {" "}
        <FiMenu />
      </div>
      <div className={menu ? "items-container open-menu" : "items-container"}>
        <div
          className="close"
          onClick={() => {
            setMenu(false);
          }}
        >
          <FiX />
        </div>
        <ul>
          <HashLink to="#home" smooth scroll={(el) => scrollWithOffset(el, 0)}>
            <li>Home</li>
          </HashLink>
          <HashLink
            to="#collaboration"
            smooth
            scroll={(el) => scrollWithOffset(el, 70)}
          >
            {" "}
            <li>Solution</li>
          </HashLink>
          <HashLink
            to="#pricing"
            smooth
            scroll={(el) => scrollWithOffset(el, 70)}
          >
            {" "}
            <li>Pricing</li>
          </HashLink>
          <HashLink
            to="#about-us"
            smooth
            scroll={(el) => scrollWithOffset(el, 70)}
          >
            {" "}
            <li>About Us</li>
          </HashLink>
        </ul>
        <div className="nav-right">
          <Link to="/signup">
            <button>Register</button>
          </Link>
          <Link to="/signin">
            <button className="gradient">Log In</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
