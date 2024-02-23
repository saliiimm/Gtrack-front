import { isMobile } from "react-device-detect";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import WorkSpaceContain from "../../components/WorkSpaceContain/WorkSpaceContain";
import BetterExp from "../../components/BetterExp/BetterExp";

const WorkSpace = () => {
  if (isMobile) {
    return <BetterExp />;
  }

  return (
    <>
      <NavBar />
      <div style={{ display: "flex", width: "100%", height: "90vh" }}>
        <SideBar choix={1} />
        <WorkSpaceContain />
      </div>
    </>
  );
};

export default WorkSpace;
