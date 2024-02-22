
import noComment from "../../assets/noCom.png"
import "./AssignedComments.css"
const AssignedComments = () => {
    return (
        <div className="AssignedComments">
            <div className="title-O"><h3>Assigned Comments</h3></div>
             <div className="comments">
                <img src={noComment} alt="" />
             </div>
        </div>
    );
}

export default AssignedComments;
