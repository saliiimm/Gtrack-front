
import "./Resents.css"
import { FiArrowRight } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
const Resents = () => {
    return (
        <div className="resents">
            <div className="title-O"><h3>Resents</h3></div>
            <ul>
                <li style={{backgroundColor:"#e6f0ff"}}> <span>Project name 1</span>  <div className="icon"> <FiSettings/> <FiArrowRight style={{backgroundColor:"#0066FF"}}/></div></li>
                <li  style={{backgroundColor:"#ffe6e6"}}> <span>Project name 2</span>  <div className="icon"> <FiSettings/> <FiArrowRight style={{backgroundColor:"#FF0000"}}/></div></li>
                <li style={{backgroundColor:"#e6ffe8"}}> <span>Project name 3</span>  <div className="icon"> <FiSettings/> <FiArrowRight style={{backgroundColor:"#00FF1A"}}/></div></li>
            
            </ul>
        </div>
    );
}

export default Resents;
