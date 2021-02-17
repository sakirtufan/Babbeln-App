import React, { useState } from "react";
import { Icon, Popup, Menu } from "semantic-ui-react";
import ChannelList from "../Channels/ChannelList";
import CreateChannelForm from "../Channels/CreateChannelForm";
import UserPanel from "../UserPanel/UserPanel";
import { TwitterPicker } from "react-color";
import styles from "./sidePanel.modul.css"


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
          width: "18.75%",
          fontSize: "1.2rem",
          background: color,
          height: "100vh",
        }}
      >
        <Menu.Item>
          <TwitterPicker              
            color={color}
            onChangeComplete={(color) => setColor(color.hex)}
          />
        </Menu.Item>
        <Menu.Item>
          {/* UserPanel */}
          <UserPanel />
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>
            Channels
            <span style={{ float: "right" }}>
              <Popup
                content="Channel hinzufügen"
                trigger={<Icon name="add" onClick={(event) => handleOpen()} />}
              />
            </span>
          </Menu.Header>
          {/* Channels */}
          <ChannelList />
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
