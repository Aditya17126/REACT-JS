import "./CSS/EmailList.css";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Refresh,
  Settings,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import Section from "./Section";
import Email_Rows from "./Email_Rows";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "./Firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(function () {
    const q = query(collection(db, "emails"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="emailList">
      <div className="emailList_settings">
        <div className="emailList_settingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Refresh />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList_settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList_sections">
        <Section Icon={Inbox} title="Primary" color="Blue" selected />
        <Section Icon={People} title="Social" color="Red" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>

      <div className="emailList_list">
        {emails.map(
          ({ id, data: { recipients, subject, message, timestamp } }) => (
            <Email_Rows
              id={id}
              key={id}
              title={recipients}
              subject={subject}
              description={message}
              time={new Date(timestamp?.seconds * 1000).toUTCString()}
            />
          )
        )}
        <Email_Rows
          title="Twitch"
          subject="Hey Fellow Streamer !!!"
          description="This is a test"
          time="10pm"
        />
        <Email_Rows
          title="Twitch"
          subject="Hey Fellow Streamer !!!"
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ipsa eligendi velit quam culpa facilis ea unde aut accusantium non. "
          time="10pm"
        />
        <Email_Rows
          title="Twitch"
          subject="Hey Fellow Streamer !!!"
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ipsa eligendi velit quam culpa facilis ea unde aut accusantium non. "
          time="10pm"
        />
        <Email_Rows
          title="Twitch"
          subject="Hey Fellow Streamer !!!"
          description="This is a test"
          time="10pm"
        />
        <Email_Rows
          title="Twitch"
          subject="Hey Fellow Streamer !!!"
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ipsa eligendi velit quam culpa facilis ea unde aut accusantium non. "
          time="10pm"
        />
        <Email_Rows
          title="Twitch"
          subject="Hey Fellow Streamer !!!"
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ipsa eligendi velit quam culpa facilis ea unde aut accusantium non. "
          time="10pm"
        />{" "}
        <Email_Rows
          title="Twitch"
          subject="Hey Fellow Streamer !!!"
          description="This is a test"
          time="10pm"
        />
        <Email_Rows
          title="Twitch"
          subject="Hey Fellow Streamer !!!"
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ipsa eligendi velit quam culpa facilis ea unde aut accusantium non. "
          time="10pm"
        />
        <Email_Rows
          title="Twitch"
          subject="Hey Fellow Streamer !!!"
          description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ipsa eligendi velit quam culpa facilis ea unde aut accusantium non. "
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
