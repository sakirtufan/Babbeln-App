import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Segment, Message } from "semantic-ui-react";
import styles from "./login.module.css";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      className={styles.container}
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <h1 className={styles.formHeader}>
          Babbeln
          <span>.io</span>
        </h1>
        <Form size="large" className={styles.form} onSubmit={handleSubmit}>
          <Segment>
            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              name="email"
              type="email"
              placeholder="Email Adresse"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              name="password"
              type="password"
              placeholder="Passwort"
            />
            <Button color="purple" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          Bist du neu ? <Link to="/signup">Erstmalig Anmelden</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
