import { useEffect, useState } from "react";
import "./Navi.css"
import Logo from "../../assets/Component 4.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navi = () => {
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
          <img src={Logo} /> 
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
          <HashLink to="/#home" smooth scroll={(el) => scrollWithOffset(el, 0)}>
            <li>Accueil</li>
          </HashLink>
          <HashLink
            to="/#collaboration"
            smooth
            scroll={(el) => scrollWithOffset(el, 70)}
          >
            {" "}
            <li>Solution</li>
          </HashLink>
          <HashLink
            to="/#Partener"
            smooth
            scroll={(el) => scrollWithOffset(el, 70)}
          >
            {" "}
            <li>Nos Partenaires</li>
          </HashLink>
          <HashLink
            to="/#pricing"
            smooth
            scroll={(el) => scrollWithOffset(el, 70)}
          >
            {" "}
            <li>Info</li>
          </HashLink>
          <HashLink
            to="/#about-us"
            smooth
            scroll={(el) => scrollWithOffset(el, 70)}
          >
            {" "}
            <li>À propos de nous</li>
          </HashLink>
        </ul>
        <div className="nav-right">
       
          <Link to="/Contact">
            <button className="gradient">Contact</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navi;
