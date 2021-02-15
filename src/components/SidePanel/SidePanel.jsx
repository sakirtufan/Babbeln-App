import React, { useState } from "react";
import { Icon, Popup, Menu } from "semantic-ui-react";
import CreateChannelForm from "../Channels/CreateChannelForm";


const SidePanel = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("#22194d");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Menu
        vertical
        inverted
        secondary
        fixed="left"
        style={{
          width: "346px",
          fontSize: "1.2rem",
          background: color,
          height: "100vh",
        }}
      >
        <Menu.Item>
          <Menu.Header>
            Channels
            <span style={{ float: "right" }}>
              <Popup
                content="Channels hinzufügen"
                trigger={<Icon name="add" onClick={(event) => handleOpen()} />}
              />
            </span>
          </Menu.Header>
          {/* Channels */}
          {[...new Array(10)].map((prop, index) => (
            <Menu.Item key={index} name="A" as="a" icon="hashtag" />
          ))}
        </Menu.Item>
      </Menu>

      <CreateChannelForm
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
      />
    </>
  );
};
export default SidePanel;
