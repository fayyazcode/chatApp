import React from "react";
import "./Chat.css";
import MyAppBar from "../../components/Appbar"
import ChatBody from "./chatBody/ChatBody";
import { Container, Row, Col } from "react-bootstrap";
function Chat() {
  return (
    <Container>
    <MyAppBar title="Chat"/>
    <div className="__main">
      <ChatBody />
    </div>
    </Container>
  );
}

export default Chat;
