import React from "react";
import "./CSS/Email_Rows.css";
import { Checkbox, IconButton } from "@mui/material";
import { LabelImportantOutline, StarBorderOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Mail from "./Mail";
import { selectMail } from "./mailSlice";

function Email_Rows({ id, title, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    navigate("/Mail");
  };

  return (
    <div
      onClick={openMail}
      className="emailRow"
    >
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutline />
        </IconButton>
      </div>

      <div className="emailRow_title">{title}</div>
      <div className="emailRow_message">
        <h4>
          {subject}
          <span className="emailRow_description">{description}</span>
        </h4>
      </div>
      <div className="emailRow_time">{time}</div>
    </div>
  );
}

export default Email_Rows;
