import "./Collaboration.css";
import CollabImg from "../../assets/Capture d’écran 2024-06-09 203526.jpg";
import phone from "../../assets/iPhone 12 Pro Max.png";
const Collaboration = () => {
  return (
    <section className="collaboration-section" id="collaboration">
      <div className="part-text">
        <h2>Optimisez vos communications </h2>{" "}
        <p>
          <span>
            {" "}
            Fini les quiproquo avec Oiko!Grâce aux logiciel GMAO 
            {" "} 
          </span>
           les communications entre vos différentes équipes ne peuvent être plus clair et concises.Plus de mauvaise surprises, chaque employé reçoit ce qu'il doit faire en un éclair
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
