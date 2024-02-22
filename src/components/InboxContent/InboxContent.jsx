
import "./InboxContent.css"
import { FiUser } from "react-icons/fi";

const InboxContent = () => {
    return (
        <div className="WSC">
      <div className="title">
        <h1>Inbox</h1>
      </div>
       
      <div className="contentI">

      <div className="title-O">
           <h4 style={{fontSize:"24px",fontWeight:"400"}}>Earlier this month</h4>
         </div>
         <ul className="messageList">
            <li><div className="titre"><span></span> <h4 >Here we write the title of the task </h4> </div> <div className="username"><FiUser/> <span>username</span></div>   <div className="date">Feb 11</div></li>
            <li><div className="titre"><span></span> <h4 >Here we write the title of the task </h4> </div> <div className="username"><FiUser/> <span>username</span></div>   <div className="date">Feb 11</div></li>
            <li><div className="titre"><span></span> <h4 >Here we write the title of the task </h4> </div> <div className="username"><FiUser/> <span>username</span></div>   <div className="date">Feb 11</div></li>
          
         </ul>
      </div>
        
    </div>
    );
}

export default InboxContent;
