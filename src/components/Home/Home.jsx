import { FaArrowRight } from "react-icons/fa6";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="home-section" id="home">
      <button className="newsletter">
        Suscribe to NewsLetter <FaArrowRight />
      </button>
      <h2>Get everyone working in a single platform</h2>
      <p>Designed to manage any type of work</p>
      <Link to="/Dashboard">
        {" "}
        <button className="get-started">Get started for free </button>
      </Link>
      <a href="">Contact Sales For More Info</a>
    </section>
  );
};

export default Home;
