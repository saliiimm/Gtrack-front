import { isMobile, MobileView } from "react-device-detect";
import NavBar from "../../components/NavBar/NavBar";

import SideBar from "../../components/SideBar/SideBar";

import DndContent from "../../components/DndContent/DndContent";
import BetterExp from "../../components/BetterExp/BetterExp";

function Projects() {
  // create state

  if (isMobile || MobileView) {
    return <BetterExp />;
  }

  return (
    <>
      <NavBar />
      <div style={{ display: "flex", width: "100%", height: "90vh" }}>
        <SideBar choix={4} />
        <DndContent />
      </div>
    </>
  );
}

export default Projects;
