import React from "react";
import { Button, IconButton } from "@mui/material";
import "./CSS/SideBar.css";
import SideBarOptions from "./SideBarOptions";
import {
  Add as AddIcon,
  Create as CreateIcon,
  Inbox as InboxIcon,
  Star as StarIcon,
  AccessTime as AccessTimeIcon,
  NearMe as NearMeIcon,
  ExpandMore as ExpandMoreIcon,
  Note as NoteIcon,
  LabelImportant as LabelImportantIcon,
  Person as PersonIcon,
  Duo as DuoIcon,
  Phone as PhoneIcon,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./mailSlice";

function SideBar() {
  const dispatch = useDispatch();

  return (
    <div className="sideBar">
      <Button
        startIcon={<CreateIcon fontSize="large" style={{ color: "Black" }} />}
        className="sidebar_compose"
        onClick={()=>{ dispatch(openSendMessage());
        }}
      >
        compose
      </Button>

      <SideBarOptions
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SideBarOptions Icon={StarIcon} title="Starred" number={54} />
      <SideBarOptions Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <SideBarOptions Icon={LabelImportantIcon} title="Important" number={54} />
      <SideBarOptions Icon={NearMeIcon} title="Sent" number={54} />
      <SideBarOptions Icon={NoteIcon} title="Drafts" number={54} />
      <SideBarOptions Icon={ExpandMoreIcon} title="More" number={54} />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>

          <IconButton>
            <DuoIcon />
          </IconButton>

          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
