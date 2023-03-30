import React from "react";
import "../styles/RightSideView.css";
import { useParams } from "react-router";
import MessageBox from "./MessageBox";

//here we are finding conversation from the global state
// rendering data to message box
function ConversationList(props) {
  const { contacts } = props;
  const { id } = useParams();
  const userId = parseInt(id);
  const user = contacts.find((contact) => contact.id === userId);

  return <>{user && <MessageBox user={user} />}</>;
}

export default ConversationList;
