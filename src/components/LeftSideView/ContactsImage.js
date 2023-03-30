import React from "react";

// images rendering on left side of contact list tabs......
function ContactsImage({ image }) {
  return (
    <div>
      <img src={image} alt="user-avatar" className="avatar" />
    </div>
  );
}

export default ContactsImage;
