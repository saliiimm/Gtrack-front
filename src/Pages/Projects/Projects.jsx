import { isMobile } from "react-device-detect";
import ProjectsContent from "../../components/ProjectsContent/ProjectsContent";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import BetterExp from "../../components/BetterExp/BetterExp";
const Projects = () => {
  if (isMobile) {
    return <BetterExp />;
  }

  return (
    <>
      <NavBar />
      <div style={{ display: "flex", width: "100%", height: "90vh" }}>
        <SideBar choix={4} />
        <ProjectsContent />
      </div>
    </>
  );
};

export default Projects;
