import React from "react";
import ContactTab from "./ContactTab";

// tab which show all available contacts.............
function NewConversationTab({ contacts, showNewConvoTab }) {
  let handleClose = () => {
    showNewConvoTab(false);
  };
  return (
    <>
      <div className="new-convo-tab">
        <div className="nct-header">
          <p>Available</p>
          <span onClick={handleClose}>
            <i className="fas fa-2x fa-times-circle"></i>
          </span>
        </div>

        {/* showing all contacts list available for chat */}
        <div className="nct-list" onClick={handleClose}>
          {contacts.map((contact, index) => (
            <ContactTab contact={contact} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default NewConversationTab;
