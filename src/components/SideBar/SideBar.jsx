import { FiHome, FiInbox, FiPieChart, FiArchive } from "react-icons/fi";
import "./SideBar.css";
import { Link } from "react-router-dom";
const SideBar = ({ choix }) => {
  return (
    <div className="sidebar">
      <ul>
        <Link to="/WorkSpace">
          {" "}
          <li className={choix == 1 ? "active-Page" : ""}>
            <FiHome /> <span>Home</span>{" "}
          </li>
        </Link>
        <Link to="/inbox">
          {" "}
          <li className={choix == 2 ? "active-Page" : ""}>
            <FiInbox />
            <span>Inbox</span>
          </li>
        </Link>
        <Link to="/Dashboard">
          {" "}
          <li className={choix == 3 ? "active-Page" : ""}>
            <FiPieChart /> <span>Dashboard</span>
          </li>
        </Link>
        <Link>
          {" "}
          <li className={choix == 4 ? "active-Page" : ""}>
            <FiArchive /> <span>Project</span>
          </li>
        </Link>
      </ul>
      <hr />
    </div>
  );
};

export default SideBar;
