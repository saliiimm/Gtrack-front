import Collaboration from "../../components/Collaboration/Collaboration";
import FriendlyTolls from "../../components/FriendlyTools/FriendlyTolls";
import Home from "../../components/Home/Home";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/NavBar/Nav";
import PerfectFit from "../../components/PerfectFit/PerfectFit";

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Home />
      <Collaboration />
      <FriendlyTolls />
      <PerfectFit />
      <Footer />
    </div>
  );
};

export default LandingPage;
