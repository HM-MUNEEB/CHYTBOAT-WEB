import React from "react";
import styles from "../authentication.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Signin(props) {
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
            type="text"
            name="name/email"
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
            type="password"
            name="password"
          />
        </div>
        <p className={styles.Description}>Forgot your Password?</p>
        <Link href="../app-console">
          <button className={styles.btn} type="submit">
            Sign In
          </button>
        </Link>
      </form>
    </div>
  );
}
