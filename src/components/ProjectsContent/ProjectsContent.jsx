import "./ProjectsContent.css";

const ProjectsContent = () => {
  return (
    <div className="WSC">
      <div className="title">
        <h1>Project Name</h1>
      </div>

      <div className="project-content">
        <div className="not-joined">
          <div className="join-session">
            <h2>Join Project Name</h2>
            <p>
              Caution: once you join the work session make sure you don’t have
              any privet thing open because the app will take screenshots of
              your screen at random moment during you’re working hours{" "}
            </p>
            <button className="btn-join">Join session</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
