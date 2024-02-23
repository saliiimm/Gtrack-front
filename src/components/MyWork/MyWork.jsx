import { useState } from "react";
import "./MyWork.css";
import liste from "../../assets/liste.png"
import { MdPlayArrow } from "react-icons/md";

const MyWork = () => {
  const [clickedQuestions, setClickedQuestions] = useState([]);

  const handleClicked = (index) => {
    if (clickedQuestions.includes(index)) {
      setClickedQuestions(clickedQuestions.filter((item) => item !== index));
    } else {
      setClickedQuestions([...clickedQuestions, index]);
    }
  };

  const qst = [
    { qst: "Today", reponse: [{ liste: "sjsjsjjs" }, { liste: "hsh" }] },
    { qst: "Overdue", reponse: [{ liste: "sjsjsjjs" }, { liste: "hsh" }] },
    { qst: "Next", reponse: [{ liste: "sjsjsjjs" }, { liste: "hsh" }] },
    { qst: "Unscheduled", reponse: [{ liste: "sjsjsjjs" }, { liste: "hsh" }] },
  ];

  return (
    <div className="MyWork">
      <div className="title-O">
        <h3>My Work</h3>
      </div>
      <div className="todo">
        <div className="title-L">
          <h3>To do</h3>
        </div>
      </div>
      <div className="question-content">
        {qst.map((item, index) => (
          <div className="question" key={index}>
            <div className="tache" onClick={() => handleClicked(index)}>
            <span >
              <MdPlayArrow />
              <p>{item.qst}</p>
            </span>
            <div>{item.reponse.length}</div>
            </div>
            <div
              className={
                clickedQuestions.includes(index) ? "active-rep rep" : "rep"
              }
            >
              <ul>
                {item.reponse.map((response, responseIndex) => (
                  <li key={responseIndex}><img src={liste} alt="" />{response.liste}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
