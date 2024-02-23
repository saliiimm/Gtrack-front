import "./FriendlyTools.css";

const FriendlyTolls = () => {
  const boardData = [
    {
      title: "+70%",
      description: "de taches realisees en respectant les temps",
    },
    {
      title: "4x",
      description: "Plus de temps gagne en organisation",
    },
    {
      title: "+50%",
      description: "d'efficacite supplmentaire chez les employes",
    },
    {
      title: "+40000",
      description: "Entreprises satisfaites par le produit",
    },
    {
      title: "4 RDV pris toutes les secondes",
      description: "> 5 Milliards $ de benefice",
    },
    {
      title: "+90%",
      description: "Taux de satisfaction client",
    },
  ];

  return (
    <section className="board" id="pricing">
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
              <button>Take a look</button>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FriendlyTolls;
