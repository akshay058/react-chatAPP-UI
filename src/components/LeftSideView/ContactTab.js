import React from "react";
import ContactsImage from "./ContactsImage";
import ContactLastMessage from "./ContactLastMessage";
import ContactName from "./ContactName";
import { Link } from "react-router-dom";
function ContactTab(props) {
  const { image, name, chatlog, id } = props.contact;

  // finding chats and seeing is chat available or not....
  let length = chatlog.length;

  const noMessage = {
    text: " No message",
  };
  return (
    // Linking with ids on each contact click for showing data.......
    <Link to={`/conversations/${id}`} className="link-tag">
      <div className="contact-tab">
        <div>
          {" "}
          <ContactsImage image={image} />
        </div>

        <div style={{ marginLeft: "16px" }}>
          <ContactName name={name} />
          {/* if there any chatlogs then show chat last data  else no message will be shown  on left bar*/}
          <ContactLastMessage
            chatlog={length > 0 ? chatlog[length - 1] : noMessage}
          />
        </div>
      </div>
    </Link>
  );
}

export default ContactTab;
