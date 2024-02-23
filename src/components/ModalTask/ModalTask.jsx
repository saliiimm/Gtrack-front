import Box from "@mui/material/Box";
import "./ModalTask.css";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FiFile, FiPlus } from "react-icons/fi";
const ModalTask = ({ handleClose, open }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "858px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    height: "436px",
    borderRadius: "25px",
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ fontSize: "24px", fontFamily: "Outfit, sans-serif" }}
        >
          Add take title
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{
            fontSize: "20px",
            fontFamily: "Outfit, sans-serif",
            color: "#6A6A6A",
            mt: 2,
          }}
        >
          My task title is ...
        </Typography>
        <div className="desc">
          <FiFile />
          <input type="text" placeholder="Add description" />
          <FiPlus />
        </div>
        <div className="btns">
          <button className="to-do"> TO DO</button>
          <button className="btn-rest">Assignee</button>
          <button className="btn-rest">Due date</button>
          <button className="btn-rest">Priority</button>
          <button className="btn-rest">Image</button>
        </div>
        <div className="sub">
          <button>Create Task</button>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalTask;
