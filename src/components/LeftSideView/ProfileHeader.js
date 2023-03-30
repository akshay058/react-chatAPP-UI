import React from "react";

// showing profile pic person whom we chatting.........
function ProfileHeader({ user }) {
  return (
    <>
      <div className="header">
        <img className="avatar" src={user.image} alt="profile-pic" />
        <p>{user.name}</p>
      </div>
    </>
  );
}

export default ProfileHeader;
