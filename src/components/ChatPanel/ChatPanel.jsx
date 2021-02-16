import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFirebase, useFirestoreConnect } from "react-redux-firebase";
import { useFirebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import {
  Button,
  Comment,
  Form,
  Header,
  Icon,
  Input,
  Segment,
} from "semantic-ui-react";
import Message from "./Message";

const ChatPanel = ({ currentChannel }) => {

  useFirebaseConnect([{
    path: `/messages/${currentChannel.key}`,
    storeAs: "channelMessages"
  }]);

  const firebase = useFirebase();
  const profile = useSelector((state) => state.firebase.profile);
  const currentUserUid = useSelector((state) => state.firebase.auth.uid);
  const channelMessages = useSelector((state) => state.firebase.ordered.channelMessages);

  const [searchTerm, setSearchTerm] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (content !== "") {
      const message = {
        content,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: {
          id: currentUserUid,
          name: profile.name,
          avatar: profile.avatar,
        },
      };

      firebase.push(`messages/${currentChannel.key}`, message).then(() => {
        setContent("");
      });
    }
  };
  return (
    <>
      {/* Messages Header */}
      <Segment clearing>
        <Header as="h3" floated="left">
          <span>
            <Icon name="hashtag" />
            {currentChannel.name}
          </span>
        </Header>
        {/* Search Messages */}
        <Header as="h3" floated="right">
          <Input
            size="mini"
            icon="search"
            name="searchTerm"
            placeholder="Suche nach Nachrichten,Leute und mehr... "
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </Header>
      </Segment>

      {/* Messages */}
      <Segment style={{ position: "fixed", top: 55, bottom: 70, width: "81%" }}>
        <Comment.Group
          style={{ height: "80vh", overflowY: "auto", maxWidth: "100%" }}
        >
          {channelMessages && channelMessages.map(({ key, value }) => (
            <Message key={key} message={value} />
          ))}
        </Comment.Group>
      </Segment>

      {/* Send Message */}
      <Segment
        style={{ position: "fixed", bottom: 0, width: "80%", display: "flex" }}
      >
        <Button icon>
          <Icon name="add" />
        </Button>
        <Form onSubmit={handleSubmit} style={{ flex: 1 }}>
          <Input
            fluid
            name="message"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            labelPosition="left"
            placeholder={`Nachricht an #${currentChannel.name}`}
          />
        </Form>
      </Segment>
    </>
  );
};

export default ChatPanel;
