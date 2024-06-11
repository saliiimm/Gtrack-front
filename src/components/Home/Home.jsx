

import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="home-section" id="home">
   
      <h2>L'ère du numérique vous attend
      Automatisez votre maintenance</h2>
     
      <Link to="/Dashboard">
        {" "}
        <button className="get-started">Demander une demo gratuite  </button>
      </Link>
      <a href="">Contactez nous pour plus d'info</a>
     
    </section>
  );
};

export default Home;
