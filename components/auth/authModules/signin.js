import React from "react";
import styles from "../authentication.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Signin(props) {
  return (
    <div className={styles.SignInAuthModule}>
      <Head>
        <title>Sign In</title>
        <meta
          name="description"
          content="Message in the most most secure way possible with ent-to-end encription!"
        />
      </Head>
      <div>
        <h1 className={styles.authHeader}>Sign In</h1>
      </div>
      <form>
        <div className={styles.Block}>
          <label className={styles.labelField} for="name">
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
          <label className={styles.labelField} for="password">
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
