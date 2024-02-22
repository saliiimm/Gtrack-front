import "./PerfectFit.css";
import calendar from "../../assets/calendar.svg";
import edit from "../../assets/edit.svg";
import terminal from "../../assets/terminal.svg";
import monitor from "../../assets/monitor.svg";
import message from "../../assets/message-circle.svg"; // Assuming correct filename

const PerfectFit = () => {
  const teamData = [
    { svg: calendar, text: "PMO" },
    { svg: edit, text: "Agencies" },
    { svg: terminal, text: "Engeneering" },
    { svg: monitor, text: "Product" },
    { svg: message, text: "Marketing" },
  ];

  return (
    <section className="perfectFit-section">
      <h2>Perfect fit for every team</h2>
      <p>Get started fast with out-of-the-box solutions.</p>
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
