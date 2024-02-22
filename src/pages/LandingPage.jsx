import Collaboration from "../components/Collaboration/Collaboration";
import FriendlyTolls from "../components/FriendlyTools/FriendlyTolls";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Nav";
import PerfectFit from "../components/PerfectFit/PerfectFit";
import Footer from "../components/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Collaboration />
      <FriendlyTolls />
      <PerfectFit />
      <Footer />
    </div>
  );
};

export default LandingPage;
