import "./Collaboration.css";
import CollabImg from "../../assets/Capture d’écran 2024-06-09 203526.jpg";
import phone from "../../assets/iPhone 12 Pro Max.png";
const Collaboration = () => {
  return (
    <section className="collaboration-section" id="collaboration">
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
        <img className="CollabImg" src={CollabImg} alt="" />
        <img className="phone" src={phone} alt="" />
      </div>
    </section>
  );
};

export default Collaboration;
