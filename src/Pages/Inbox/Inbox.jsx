import InboxContent from "../../components/InboxContent/InboxContent";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";


const Inbox = () => {
    return (
        <>
         <NavBar />
      <div style={{ display: "flex", width: "100%" ,height:"90vh"}}>
        <SideBar choix={2}/>
         <InboxContent/>
      </div>
        </>
    );
}

export default Inbox;
