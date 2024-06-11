import "./PerfectFit.css";
import setting from "../../assets/settings.png";
import calender from "../../assets/Vector.png";
import Team from "../../assets/Team.png";
import Robot from "../../assets/Robot Arm.png";
import Chart from "../../assets/Line Chart.png"; // Assuming correct filename

const PerfectFit = () => {
  const teamData = [
    { svg: setting, text: "Gestion de taches" },
    { svg: calender, text: "Suivi Continu" },
    { svg: Team, text: "Gestion d’equipe" },
    { svg: Robot, text: "Gestion des Machines" },
    { svg: Chart, text: "Auto Statistiques " },
  ];

  return (
    <section className="perfectFit-section">
      <h2>Ce qu'il y a de mieux pour votre effectif
      </h2>
      <p>Des outils puissants pour plus d'efficacité</p>
      <div className="teams">
        {teamData.map((item, index) => (
          <div className="team-item" key={index}>
            <img src={item.svg} alt={`Team icon: ${item.text}`} />
            <h3>{item.text}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerfectFit;
