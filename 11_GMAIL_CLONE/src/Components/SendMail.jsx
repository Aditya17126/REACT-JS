import React from "react";
import "./CSS/Send_Mail.css";
import { Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./mailSlice";
import { db } from "./Firebase";
import {collection, addDoc, serverTimestamp } from "firebase/firestore";

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
 
  const dispatch = useDispatch();

  const onSubmit = async function (formdata) {
    console.log(formdata);
  try {
      await addDoc(collection(db ,'emails') ,
        {
          recipients : formdata.recipients,
          subject : formdata.subject,
          message : formdata.message,
          timestamp : serverTimestamp(),
        });
      dispatch(closeSendMessage());
    }
  catch(error){
    console.error("Error Adding Document :" , error);
  }
  };
  
  return (
    <div className="sendMail">
      <div className="sendMail_Header">
        <h3>New Message</h3>
        <Close onClick={() => dispatch(closeSendMessage())} className="sendMail_close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("recipients", { required: "Recipients Email is Required ." })}
          placeholder="Recipients"
          type="text"
        />
        {errors.recipients && (
          <p className="sendMail_error">{errors.recipients.message}</p>
        )}

        <input
          {...register("subject", { required: "Subject is Required" })}
          placeholder="Subject"
          type="text"
        />

        {errors.subject && (
          <p className="sendMail_error">{errors.subject.message}</p>
        )}

        <input
          {...register("message", { required: "Message is Required" })}
          placeholder="Message"
          type="text"
          className="sendMail_message"
        />
        {errors.message && (
          <p className="sendMail_error">{errors.message.message}</p>
        )}

        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            SEND
          </Button>
        </div>

      </form>
    </div>
  );
}

export default SendMail;
