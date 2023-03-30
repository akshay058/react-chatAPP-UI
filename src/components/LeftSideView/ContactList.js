import React from "react";
import ContactTab from "./ContactTab";
// create contact list on left side bar....
// mapping Contact tab to render data ....

function ContactList({ contacts }) {
  return (
    <>
      <div style={styles.contactList} className="contactscreen">
        {contacts.map((contact, index) => (
          <ContactTab contact={contact} key={index} />
        ))}
      </div>
    </>
  );
}
const styles = {
  contactList: {
    overflowY: "scroll",
    height: "80vh",
    zIndex: "2",
    backgroundColor: "#ececec",
  },
};
export default ContactList;
