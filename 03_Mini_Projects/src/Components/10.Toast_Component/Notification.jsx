import React from "react";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";
import "./notification.css";

const icons = {
  success: <AiOutlineCheck  style={{marginRight:"10px"}}/>,
  info: <AiOutlineInfoCircle style={{marginRight:"10px"}}/>,
  warning: <AiOutlineWarning style={{marginRight:"10px"}}/>,
  error: <AiOutlineCloseCircle style={{marginRight:"10px"}}/>,
};

function Notification({ type = "info", message, onClose = () => {} }) {
  return (
    <div className={`notification ${type}`}>
      {/* icons */}
      {icons[type]}
      {/* message */}
      {message}
      {/* Close Button  */}
      <AiOutlineClose
        size="16px"
        color="White"
        className="closeBtn"
        onClick={() => onClose()}
      />
    </div>
  );
}

export default Notification;
