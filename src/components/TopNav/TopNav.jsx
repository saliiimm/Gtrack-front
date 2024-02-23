import "./TopNav.css";
import { FiSearch, FiSettings } from "react-icons/fi";
import Avatar from "@mui/material/Avatar";
import Logo from "../../assets/logoGhack.svg";
import { Link } from "react-router-dom";
const TopNav = () => {
  return (
    <div className="topnav">
      <Link to="/">
        <div className="nav-left logo">
          <img src={Logo} /> <p>Track</p>
        </div>
      </Link>
      <div className="search">
        <FiSearch />
        <input type="search" name="" id="" placeholder="Search ..." />
      </div>
      <div className="profilMenu">
        <FiSettings />
        <Avatar sx={{ bgcolor: "#0066FF" }}>M</Avatar>
      </div>
    </div>
  );
};

export default TopNav;
