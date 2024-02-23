import monitor from "../../assets/monitor.svg";
import "./BetterExp.css";
const BetterExp = () => {
  return (
    <div className="better-container">
      <div className="better-item">
        <img src={monitor} alt="monitor" />
        <h3>For a better experience use Desktop</h3>
      </div>
      <button className="get-back">Go Back</button>
    </div>
  );
};

export default BetterExp;
