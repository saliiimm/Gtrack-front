import "./Collaboration.css";
import CollabImg from "../../assets/CollabImg.svg";
const Collaboration = () => {
  return (
    <section className="collaboration-section">
      <div className="part-text">
        <h2>Improve Collaboration</h2>{" "}
        <p>
          <span>
            {" "}
            Get your teams working together more closely, even if they’re far
            apart.
          </span>
          Centralize project-related communications in one place, brainstorm
          ideas with Whiteboards, and draft plans together with collaborative
          Docs.
        </p>
      </div>
      <div className="part-img">
        <div className="bg"></div>
        <img src={CollabImg} alt="" />
      </div>
    </section>
  );
};

export default Collaboration;
