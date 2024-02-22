import { FaArrowRight } from "react-icons/fa6";
import "./Home.css";
const Home = () => {
  return (
    <section className="home-section">
      <button className="newsletter">
        Suscribe to NewsLetter <FaArrowRight />
      </button>
      <h2>Get everyone working in a single platform</h2>
      <p>Designed to manage any type of work</p>
      <button className="get-started">Get started for free </button>
      <a href="">Contact Sales For More Info</a>
    </section>
  );
};

export default Home;
