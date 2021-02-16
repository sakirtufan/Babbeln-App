import React from "react";
import moment from "moment";
import styles from "./message.module.css";
import { Comment } from "semantic-ui-react";

const Message = ({ message }) => {
  const timeFromNow = (timestamp) => moment(timestamp).fromNow();
  return (
    <Comment>
      <Comment.Avatar src={message.user.avatar} />
      <Comment.Content>
        <Comment.Author as="a">{message.user.name}</Comment.Author>
        <Comment.Metadata>{timeFromNow(message.timestamp)}</Comment.Metadata>
        <Comment.Text>
          {message.content}
        </Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default Message;
