import React from "react";
import ContactsImage from "./ContactsImage";
import ContactLastMessage from "./ContactLastMessage";
import ContactName from "./ContactName";
import { Link } from "react-router-dom";
function ContactTab(props) {
  const { image, name, chatlog, id } = props.contact;

  let length = chatlog.length;

  const noMessage = {
    text: " No message",
  };
  return (
    <Link to={`/conversations/${id}`} className="link-tag">
      <div className="contact-tab">
        <div>
          {" "}
          <ContactsImage image={image} />
        </div>

        <div style={{ marginLeft: "16px" }}>
          <ContactName name={name} />

          <ContactLastMessage
            chatlog={length > 0 ? chatlog[length - 1] : noMessage}
          />
        </div>
      </div>
    </Link>
  );
}

export default ContactTab;
