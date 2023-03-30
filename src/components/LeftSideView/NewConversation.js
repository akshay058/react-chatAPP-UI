import React from "react";

// create button of pop up window to show available conversation...
function NewConversation(props) {
  let handleClick = () => {
    props.showNewConvoTab(true);
  };
  return (
    <div className="new-convo">
      <p>CONVERSATIONS</p>

      {/* icon of add .. used to check all contacts for conversation */}
      <span>
        {" "}
        <i
          style={{ fontSize: "25px" }}
          onClick={handleClick}
          className="fas fa-plus-circle"
          aria-hidden="true"
        ></i>
      </span>
    </div>
  );
}

export default NewConversation;
