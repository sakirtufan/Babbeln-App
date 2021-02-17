import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Button, Form, Grid, Segment, Message } from "semantic-ui-react";
import { useForm } from "react-hook-form"
import { useFirebase } from "react-redux-firebase"
import styles from "./signup.module.css"

const Signup = () => {
  const firebase = useFirebase();
  const [firebaseErrors, setFirebaseErrors] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const { register, errors, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register({ name: "username" }, { required: true, minLength: 3 });
    register({ name: "email" }, { required: true });
    register({ name: "password" }, { required: true, minLength: 6 });
  }, [register]);

  const onSubmit = ({ email, password, username }, e) => {
    setSubmitting(true);
    setFirebaseErrors([]);

    const [firstName, lastName] = username.split(" ");

    firebase
      .createUser(
        { email, password },
        {
          name: username,
          avatar: `https://eu.ui-avatars.com/api/?name=${firstName}+${lastName}&background=0D8ABC&color=fff`,
        }
      )
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        setFirebaseErrors([{ message: error.message}])
      }).finally(() => {
        setSubmitting(false);
      })
  };

  const displayErrors = () => {
    return firebaseErrors.map((error,index) => <p key={index}>{error.message}</p>)
  }

  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      className={styles.container}
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <h1 className={styles.formHeader}>
          Geveze
          <span>`io`</span>
        </h1>
        <Form
          size="large"
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Segment>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              name="username"
              onChange={(event, { name, value }) => {
                setValue(name, value);
              }}
              type="text"
              error={errors.username ? true : false}
              placeholder="Nutzername"
            />
            {errors.username && (
              <div class="ui negative message">
                Melden Sie sich bei einem gültigen Benutzername an
              </div>
            )}

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
            <Button color="purple" fluid size="large" disabled={submitting}>
              Anmeldung durchführen
            </Button>
          </Segment>
        </Form>
        {
          firebaseErrors.length > 0 && (
            <Message error>{displayErrors()}</Message>
          )
        }
        <Message>
          Hast du bereits ein Konto ? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Signup;
