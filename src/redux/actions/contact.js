import { ContactsFetching, MessageAdding } from "./actionTypes";
// Redux actions .....
export function updateContacts(contacts) {
  return {
    type: ContactsFetching,
    contacts: contacts,
  };
}

export function addNewMessage(message, userId) {
  return { type: MessageAdding, message, userId };
}
