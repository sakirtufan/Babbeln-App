import React, { useState } from "react";
import {
  Button,
  Comment,
  Form,
  Header,
  Icon,
  Input,
  Segment,
} from "semantic-ui-react";

const ChatPanel = ({ currentChannel }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [content,setContent] = useState("");
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
        ></Comment.Group>
      </Segment>

      {/* Send New Message */}
      <Segment
        style={{ position: "fixed", bottom: 0, width: "85%", display: "flex" }}
      >
        <Button icon>
          <Icon name="add" />
        </Button>
        <Form style={{flex:1}}>
          <Input fluid name="message" value={content}  onChange={event => setContent(event.target.value)} labelPosition="left" placeholder={`Nachricht an ${currentChannel.name}`} />
        </Form>
      </Segment>
    </>
  );
};

export default ChatPanel;
