import React from "react";
import { Grid } from "semantic-ui-react";
import SidePanel from "./components/SidePanel/SidePanel";

const App = () => {
  

  return (
    <Grid columns="2" style={{ background: "#eee", height: "110vh" }}>
      <Grid.Row>
        <Grid.Column width={3}>
          <SidePanel />
        </Grid.Column>

        <Grid.Column style={{ background: "#fff" }} width={13}>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default App;

