import { FiHome ,FiInbox,FiPieChart,FiArchive   } from "react-icons/fi";
import "./SideBar.css"
const SideBar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li className="active-Page"><FiHome/> <span>Home</span> </li>
                <li><FiInbox/><span>Inbox</span></li>
                <li><FiPieChart/> <span>Dashboard</span></li>
                <li><FiArchive/> <span>Project</span></li>
            </ul>
            <hr />
        </div>
    );
}

export default SideBar;
