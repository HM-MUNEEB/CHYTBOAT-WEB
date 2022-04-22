import React from "react";
import styles from "../authentication.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Register(props) {
  return (
    <div className={styles.RegisterAuthModule}>
      <Head>
        <title>Sign In</title>
        <meta
          name="description"
          content="Message in the most most secure way possible with ent-to-end encription!"
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
          />
        </div>
        <p className={styles.registerDescription}>
          By clicking register you are agreeing to all the user terms and
          service!
        </p>
        <Link href="../app-console">
          <button className={styles.btn} type="submit">
            Register
          </button>
        </Link>
      </form>
    </div>
  );
}
