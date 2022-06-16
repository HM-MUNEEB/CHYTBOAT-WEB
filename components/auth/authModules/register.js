import React from "react";
import styles from "../authentication.module.css";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../../context/authContext/authContext";
import { async } from "@firebase/util";
import { useLoading } from "../../../context/loadingContext/loadingContext";

export default function Register(props) {
  const { user, signup } = useAuth();
  const { btnClickProcessing } = useLoading();
  const [registrationUserData, setRegistrationUserData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });

  const handleRegistration = (e) => {
    e.preventDefault();
    //console.log(registrationUserData);
    const signupReturn = signup(registrationUserData);
    if (signupReturn) {
      props.signIn(true);
    }
  };
  function handleRegistrationName(e) {
    setRegistrationUserData({ ...registrationUserData, name: e.target.value });
  }
  function handleRegistrationEmail(e) {
    setRegistrationUserData({ ...registrationUserData, email: e.target.value });
  }
  function handleRegistrationUserName(e) {
    setRegistrationUserData({
      ...registrationUserData,
      userName: e.target.value,
    });
  }
  function handleRegistrationPassword(e) {
    setRegistrationUserData({
      ...registrationUserData,
      password: e.target.value,
    });
  }
  return (
    <div className={styles.RegisterAuthModule}>
      <Head>
        <title>ChytBoat: Register</title>
        <meta
          name="description"
          content="This project is a messaging system with end-to-end encyption!"
        />
      </Head>
      <div>
        <h1 className={styles.authHeader}>Register</h1>
      </div>
      <form>
        <div className={styles.Block}>
          <label className={styles.labelField} htmlFor="name">
            Name
          </label>
          <br />
          <input
            className={styles.inputField}
            type="text"
            name="name"
            placeholder="Enter your name"
            autoComplete="off"
            onChange={handleRegistrationName}
          />
        </div>
        <div className={styles.Block}>
          <label className={styles.labelField} htmlFor="email">
            Email Address
          </label>
          <br />
          <input
            className={styles.inputField}
            type="email"
            name="email"
            placeholder="Enter your email address"
            autoComplete="off"
            onChange={handleRegistrationEmail}
          />
        </div>
        <div className={styles.Block}>
          <label className={styles.labelField} htmlFor="Username">
            Username
          </label>
          <br />
          <input
            className={styles.inputField}
            type="text"
            name="username"
            placeholder="only alphanumeric allowed [a-z, A-Z, 0-9]"
            autoComplete="off"
            onChange={handleRegistrationUserName}
          />
          <p className={styles.Description}>
            Once set, username cannot be changed
          </p>
        </div>
        <div className={styles.Block}>
          <label className={styles.labelField} htmlFor="password">
            Password
          </label>
          <br />
          <input
            className={styles.inputField}
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleRegistrationPassword}
          />
        </div>
        <p className={styles.registerDescription}>
          By clicking register you are agreeing to all the user terms and
          service!
        </p>
        <button
          className={styles.btn}
          type="submit"
          onClick={handleRegistration}
          disabled={btnClickProcessing}
        >
          Register
        </button>
      </form>
    </div>
  );
}
