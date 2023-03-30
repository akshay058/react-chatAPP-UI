import React from "react";
import "../styles/RightSideView.css";
import { useSelector } from "react-redux";
function NoConvo() {
  const user = useSelector((state) => state.user);

  // by default when we open local host this default page will show
  // default login user show here
  return (
    <>
      <div
        className="no-chat-background"
        style={{
          textAlign: "center",
          margin: "0",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <div className="header">
          <h4 style={{ color: "rgb(49, 98, 143)", marginRight: "20px" }}>
            Welcome
          </h4>
          <img className="avatar" src={user.image} alt="profile-pic" />
          <p>{user.name}</p>
        </div>
      </div>
    </>
  );
}

export default NoConvo;
