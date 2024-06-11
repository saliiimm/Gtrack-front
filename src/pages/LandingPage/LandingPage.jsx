import Collaboration from "../../components/Collaboration/Collaboration";
import FriendlyTolls from "../../components/FriendlyTools/FriendlyTolls";
import Home from "../../components/Home/Home";
import Footer from "../../components/Footer/Footer";
import PerfectFit from "../../components/PerfectFit/PerfectFit";
import Navi from "../../components/NavBar/Navi";
import Partener from "../../components/Partener/Partener";

const LandingPage = () => {
  return (
    <div>
      <Navi />
      <Home />
     
      <Collaboration />
      <Partener/>
      <FriendlyTolls />
      <PerfectFit />
      <Footer />
    </div>
  );
};

export default LandingPage;
