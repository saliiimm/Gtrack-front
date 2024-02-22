import Agenda from "../Agenda/Agenda";
import AssignedComments from "../AssignedComments/AssignedComments";
import MyWork from "../MyWork/MyWork";
import Resents from "../Resents/Resents";
import "./Outils.css"

const Outils = () => {
    return (
        <div className="outils">
           <div className="left">
           <Resents/>
           <MyWork/>
           </div>
         <div className="right">
         <Agenda/>
         <AssignedComments/>
         </div>
        </div>
    );
}

export default Outils;
