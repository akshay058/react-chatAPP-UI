import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

import { Route, Routes } from "react-router-dom";

import { data } from "../Data/users";
import { updateContacts } from "../redux/actions/contact";

import "./styles/App.css";
import "./styles/LeftSideView.css";
import SearchBar from "./LeftSideView/SearchBar";
import ContactList from "./LeftSideView/ContactList";
import ConversationList from "./RightSideView/ConversationList";
import NoConvo from "./RightSideView/NoConvo";
import NewConversation from "./LeftSideView/NewConversation";
import NewConversationTab from "./LeftSideView/NewConversationTab";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchfield, setSearchField] = useState("");
  const [newConvoTab, showNewConvoTab] = useState(false);
  const stateContacts = useSelector((state) => state.contacts);

  const dispatch = useDispatch();
  // fetch contacts from
  useEffect(() => {
    // dispatch action to store contacts in state
    dispatch(updateContacts(data.profile.contacts));
    setContacts(stateContacts.contacts);
  }, [dispatch, stateContacts.contacts]);
  //handle search change
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  // filter results
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

                {/* <Col>
                  <ProfileHeader user={user} />
                </Col> */}
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
