
import DashContent from "../../components/DashContent/DashContent";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";


const Dashboard = () => {
    return (
       <>
           <NavBar />
      <div style={{ display: "flex", width: "100%" ,height:"90vh"}}>
        <SideBar choix={3}/>
        <DashContent/>
      </div>
       </>
    );
}

export default Dashboard;
