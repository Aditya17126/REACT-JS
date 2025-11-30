import React from "react";
import Notification from "./Notification";
import "./notification.css";
import UseNotification from "./Hooks/UseNotification";

function ToastNotification() {
  const { NotificationComponent, triggerNotification } =
    UseNotification("bottom-left");
  return (
    <div className="toastNotification">
      <h1>Toast Component</h1>

      <div className="toastButton-group">
       
        <button
          className="toastbtn success-btn"
          onClick={() =>
            triggerNotification({
              type: "success",
              message: "File Sent Successfully",
              duration: 3000,
            })
          }
        >
          Show Success
        </button>

        <button
          className="toastbtn error-btn"
          onClick={() =>
            triggerNotification({
              type: "error",
              message: "File Sent Failed",
              duration: 3000,
            })
          }
        >
          Show Error
        </button>
         
         <button
          className="toastbtn info-btn"
          onClick={() =>
            triggerNotification({
              type: "info",
              message: "This is an Info message !!",
              duration: 3000,
            })
          }
        >
          Show Info
        </button>
      </div>

      {NotificationComponent}
    </div>
  );
}

export default ToastNotification;
