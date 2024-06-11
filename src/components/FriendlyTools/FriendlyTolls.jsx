import { Link } from "react-router-dom";
import "./FriendlyTools.css";

const FriendlyTolls = () => {
  const boardData = [
    {
      title: "+70%",
      description: "De temps gagné grâce à l'automatisation de la gestion de tâches et des statistiques ",
    },
    {
      title: "4x",
      description: "Les employés sont 4 fois plus productifs quauparavant grâce à l'application mobile Oiko ",
    },
    {
      title: "+10H",
      description: "Gagnés en temps de vérification d'avancement des équipes, notre serveur s'en occupe pour vous",
    },
    {
      title: "+5",
      description: 'compagnies Nous font confiance',
    },
    {
      title: "5 tâches réalisés par minute",
      description: "",
    },
    {
      title: "500000 Da",
      description: "Économisés en consommation de papier en moyenne par nos entreprises partenaires ayant fait le bond vers notre solution",
    },
  ];

  return (
    <section className="board" id="pricing">
      <div className="title-board">
        <h2>Décollage imminent</h2>
      </div>
      <div className="grid-board">
        {boardData.map((item, index) => (
          <div key={index} className="borad-box">
            <hr />
            <span>
              <h2>{item.title}</h2>
            </span>
            <p>{item.description}</p>
            <span>
             <Link to='/Contact'> <button>Contact Nous</button></Link>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FriendlyTolls;
