import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Segment, Message } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import styles from "./login.module.css";

const Login = () => {
  const { register, errors, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register({ name: "email" }, { required: true });
    register({ name: "password" }, { required: true, minLength: 6 });
  }, [register]);

  const onSubmit = (data, e) => {
    console.log(data);
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
        <Form
          size="large"
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Segment>
            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              name="email"
              onChange={(event, { name, value }) => {
                setValue(name, value);
              }}
              type="email"
              error={errors.email ? true : false}
              placeholder="Email Adresse"
            />
            {errors.email && (
              <div class="ui negative message">
                Tragen Sie eine gültige E-Mail-Adresse ein
              </div>
            )}
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              name="password"
              onChange={(event, { name, value }) => {
                setValue(name, value);
              }}
              type="password"
              error={errors.password ? true : false}
              placeholder="Passwort"
            />
            {errors.password && (
              <div class="ui negative message">
                Das Passwort muss mindestens 6 Zeichen lang sein
              </div>
            )}
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
