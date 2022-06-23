import React, { useEffect } from "react";
import styles from "../authentication.module.css";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../../../context/authContext/authContext";
import { LayoutGroupContext } from "framer-motion";
import { useRouter } from "next/router";
import { useLoading } from "../../../context/loadingContext/loadingContext";
import { LoginValidation } from "../../../Validations/FormValidations";
import ErrorValidator from "../../ErrorValidator/ErrorValidator";

export default function Signin(props) {
  const { user, login } = useAuth();
  const { btnClickProcessing, setBtnClickProcessing } = useLoading();
  const [error, setError] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (userEmail === "" || userPassword === "") {
      setBtnClickProcessing(true);
      console.log(btnClickProcessing);
    } else {
      setError(null);
      setBtnClickProcessing(false);
      console.log(btnClickProcessing);
    }
  }, [userEmail, userPassword]);

  const signInAuthResponse = (e) => {
    e.preventDefault();
    const check = LoginValidation(userEmail, userPassword);
    if (check.email && check.pass) {
      login(userEmail, userPassword);
      console.log("Login: " + user);
      setError(null);
    } else {
      if (!check.email) {
        setUserEmail("");
        setUserPassword("");
        setError("Email is not Valid! Please use Correct structure of Email.");
      } else {
        setUserEmail("");
        setUserPassword("");
        setError(
          "Password is not Valid! Please use combination of atleast 8 characters, one UpperCase & one symbol"
        );
      }
    }
  };

  return (
    <div className={styles.SignInAuthModule}>
      <Head>
        <title>ChytBoat: Sign In</title>
        <meta
          name="description"
          content="This project is a messaging system with end-to-end encyption!"
        />
      </Head>
      <div>
        <h1 className={styles.authHeader}>Sign In</h1>
      </div>
      <form>
        <div className={styles.Block}>
          <label className={styles.labelField} htmlFor="name">
            Email/UserName
          </label>
          <br />
          <input
            className={styles.inputField}
            onChange={(e) => setUserEmail(e.target.value)}
            type="text"
            name="name/email"
            value={userEmail}
            autoComplete="off"
          />
        </div>
        <div className={styles.Block}>
          <label className={styles.labelField} htmlFor="password">
            Password
          </label>
          <br />
          <input
            className={styles.inputField}
            onChange={(e) => setUserPassword(e.target.value)}
            type="password"
            value={userPassword}
            name="password"
          />
        </div>
        <p className={styles.Description}>Forgot your Password?</p>
        <button
          className={styles.btn}
          type="submit"
          onClick={signInAuthResponse}
          disabled={btnClickProcessing}
        >
          Sign In
        </button>
      </form>
      <div className={styles.errorLog}>
        {error ? <ErrorValidator error={error} setError={setError} /> : ""}
      </div>
    </div>
  );
}
