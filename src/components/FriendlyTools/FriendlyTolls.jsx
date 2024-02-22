import "./FriendlyTools.css";

const FriendlyTolls = () => {
  const boardData = [
    {
      title: "+50%",
      description: "de frequence sur les rdvs pris en ligne",
    },
    {
      title: "4x",
      description: "Moins d'oubli avec les rappels sms des rendez-vous",
    },
    {
      title: "+50%",
      description: "des rdvs en ligne pris en dehors des horaires d'ouverture",
    },
    {
      title: "+40000",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "4 RDV pris toutes les secondes",
      description: "> 5 Milliards $ de rendez-vous vendus",
    },
    {
      title: "+50%",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="board">
      <div className="title-board">
        <h2>User Friendly Tools</h2>
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
              <button>add somthing</button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendlyTolls;
