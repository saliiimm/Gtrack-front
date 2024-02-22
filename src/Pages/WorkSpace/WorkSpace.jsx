import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import WorkSpaceContain from "../../components/WorkSpaceContain/WorkSpaceContain";

const WorkSpace = () => {
  return (
    <>
      <NavBar />
      <div style={{ display: "flex", width: "100%" }}>
        <SideBar />
        <WorkSpaceContain />
      </div>
    </>
  );
};

export default WorkSpace;
