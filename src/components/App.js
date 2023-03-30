import React, { useEffect, useState } from "react";
import { data } from "../Data/users";

import { useSelector, useDispatch } from "react-redux";

import { Route, Routes } from "react-router-dom";

import { updateContacts } from "../redux/actions/contact";
import { Col, Container, Row } from "react-bootstrap";

import "./styles/App.css";
import "./styles/LeftSideView.css";
import ContactList from "./LeftSideView/ContactList";
import NoConvo from "./RightSideView/NoConvo";
import SearchBar from "./LeftSideView/SearchBar";
import NewConversation from "./LeftSideView/NewConversation";
import NewConversationTab from "./LeftSideView/NewConversationTab";
import ConversationList from "./RightSideView/ConversationList";

function App() {
  const [newConvoTab, showNewConvoTab] = useState(false);

  const [searchfield, setSearchField] = useState("");

  const [contacts, setContacts] = useState([]);

  const stateContacts = useSelector((state) => state.contacts);

  const dispatch = useDispatch();
  // using use effect to fetch contacts from fefault data
  useEffect(() => {
    // dispatch action to store contacts in state
    dispatch(updateContacts(data.profile.contacts));
    setContacts(stateContacts.contacts);
  }, [dispatch, stateContacts.contacts]);

  //Search box handling has been done from this handler..
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  // By word wise contacts are filtered by name here
  const filteredContacts = contacts.filter((contact) => {
    //this will return only the contacts whose name is same as searched input
    return contact.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="left-sidebar" xs={6} sm={5} md={4} lg={5} xl={4}>
            <Row className="left-sidebar-header">
              <Row
                className="d-flex align-items-center"
                style={{
                  margin: "auto",
                  paddingTop: "20px",
                }}
              >
                <SearchBar searchChange={onSearchChange} />
              </Row>
              <Row className="d-flex align-items-center">
                <Col>
                  {" "}
                  <NewConversation showNewConvoTab={showNewConvoTab} />
                </Col>
              </Row>
            </Row>
            <Row>
              <ContactList contacts={filteredContacts} />
            </Row>
          </Col>
          <Col className="right-sidebar" xs={6} sm={7} md={8} lg={7} xl={8}>
            <Routes>
              <Route path="/" element={<NoConvo />} />

              <Route
                path="conversations/:id"
                element={<ConversationList contacts={contacts} />}
              />
            </Routes>
            {newConvoTab && (
              <NewConversationTab
                contacts={contacts}
                showNewConvoTab={showNewConvoTab}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
