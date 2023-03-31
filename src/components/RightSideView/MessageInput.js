import React, { useEffect, useState } from "react";
import { toast } from "react-toastify"; // import for Toast notification
import "react-toastify/dist/ReactToastify.css";

import { Row, Col } from "react-bootstrap";
function MessageInput(props) {
  const { newMessageHandler } = props;
  const [message, setMessage] = useState("");
  useEffect(() => {
    // reset input value when contact component changes
    setMessage("");
  }, [setMessage, props]);
  let handleInputChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  let handleSubmit = () => {
    if (message) {
      newMessageHandler(message);

      // added toast for notification...........
      toast.success("Message Sent", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000, // hide toast after 3 seconds
      });
    } else {
      alert("Please Type Something!");
    }
    setMessage("");

    // scroll to the bottom
  };
  return (
    <>
      <Row className="message-input">
        <Col xs={5} lg={10}>
          <input
            type="text"
            placeholder="Type your message here"
            value={message}
            onChange={handleInputChange}
          />
        </Col>

        <Col xs={1} lg={2}>
          <div className="send-button ">
            <i
              style={{
                fontSize: "25px",
                color: "#f9fafb",
                marginLeft: "15px",
                marginTop: "8px",
              }}
              className="fas fa-paper-plane "
              onClick={handleSubmit}
            ></i>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default MessageInput;
