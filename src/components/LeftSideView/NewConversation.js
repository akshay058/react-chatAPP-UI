import React from "react";

function NewConversation(props) {
  let handleClick = () => {
    props.showNewConvoTab(true);
  };
  return (
    <div className="new-convo">
      <p>CONVERSATIONS</p>

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
