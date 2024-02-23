import "./TopNav.css"
import { FiSearch,FiSettings } from "react-icons/fi";
import Avatar from '@mui/material/Avatar';
import logo from "../../assets/Logo.png"
const TopNav = () => {
    return (
        <div className="topnav">
             <div className="logo">
             <img src={logo} alt="" />
        
             </div>
             <div className="search">
                <FiSearch/>
  <input type="search" name="" id="" placeholder="Search ..."/>
             </div>
             <div className="profilMenu">
             <FiSettings/>
         <Avatar sx={{ bgcolor:"#0066FF" }}>
            M
          </Avatar>
             </div>
        </div>
    );
}

export default TopNav;
