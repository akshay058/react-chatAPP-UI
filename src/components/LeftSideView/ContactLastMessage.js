import React from "react";
// show last message from here..........
function ContactLastMessage(props) {
  return (
    <div className="contactText">
      <p> {props.chatlog.text}</p>
    </div>
  );
}

export default ContactLastMessage;
