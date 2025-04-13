import React from "react";
import "./CSS/Mail.css";
import { IconButton } from "@mui/material";
import {
  ArrowBack,
  CheckCircle,
  Delete,
  Error,
  ExitToApp,
  LabelImportant,
  LabelImportantOutline,
  MailOutline,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOpenMail } from "./mailSlice";

function Mail() {
  const navigate = useNavigate();
  
  const selectedMail = useSelector(selectOpenMail);

  return (
    <div className="mail">
      <div className="mail_tools">
        <div className="mail_toolsLeft">
          <IconButton
            onClick={function () {
              navigate("/");
            }}
          >
            <ArrowBack fontSize="small" />
          </IconButton>

          <IconButton>
            <MoveToInbox fontSize="small" />
          </IconButton>

          <IconButton>
            <Error fontSize="small" />
          </IconButton>

          <IconButton>
            <Delete fontSize="small" />
          </IconButton>

          <IconButton>
            <WatchLater fontSize="small" />
          </IconButton>

          <IconButton>
            <MailOutline fontSize="small" />
          </IconButton>

          <IconButton>
            <CheckCircle fontSize="small" />
          </IconButton>

          <IconButton>
            <LabelImportant fontSize="small" />
          </IconButton>

          <IconButton>
            <MoreVert fontSize="small" />
          </IconButton>
        </div>
        <div className="mail_toolsRight">
          <IconButton>
            <UnfoldMore fontSize="small" />
          </IconButton>

          <IconButton>
            <Print fontSize="small" />
          </IconButton>

          <IconButton>
            <ExitToApp fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div className="mail_body">
        <div className="mail_bodyHeader">
          <h2> {selectedMail?.subject} </h2>
          <LabelImportantOutline className="mail_important" />
          <p>{selectedMail?.title}</p>
          <p className="mail_time">{selectedMail?.time}</p>
        </div>

        <div className="mail_message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
