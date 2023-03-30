// contact  and mesaages reducers....
import { ContactsFetching, MessageAdding } from "../actions/actionTypes";
const initialState = {
  contacts: [],
};

// switch case for each action type....
export default function contacts(state = initialState, action) {
  switch (action.type) {
    case ContactsFetching:
      return {
        ...state,
        contacts: action.contacts,
      };
    case MessageAdding:
      const updatedcontacts = [...state.contacts];

      const user = updatedcontacts.find(
        (contact) => contact.id === action.userId
      );
      user.chatlog.push(action.message);
      return {
        ...state,
        contacts: [...updatedcontacts],
      };
    default:
      return state;
  }
}
