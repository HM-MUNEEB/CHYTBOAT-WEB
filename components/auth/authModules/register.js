import React, { useState } from "react";
import styles from "../authentication.module.css";
import Head from "next/head";
import { useAuth } from "../../../context/authContext/authContext";
import { useLoading } from "../../../context/loadingContext/loadingContext";
import { RegistrationValidation } from "../../../Validations/FormValidations";
import ErrorValidator from "../../ErrorValidator/ErrorValidator";

export default function Register(props) {
  const { user, signup } = useAuth();
  const [error, setError] = useState(null);
  const { btnClickProcessing } = useLoading();
  const [registrationUserData, setRegistrationUserData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    address: "",
    dob: "",
    phone: "",
    confirm: "",
  });
  const handleRegistration = (e) => {
    e.preventDefault();
    const check = RegistrationValidation(
      registrationUserData.email,
      registrationUserData.password,
      registrationUserData.userName,
      registrationUserData.phone
    );
    if (registrationUserData.password != registrationUserData.confirm) {
      setError("Please confirm the same password!");
      setRegistrationUserData({ ...registrationUserData, confirm: "" });
    } else if (!check.pass) {
      setRegistrationUserData({
        ...registrationUserData,
        password: "",
        confirm: "",
      });
      setError(
        "Password is not Valid! Please use combination of atleast 8 characters, one UpperCase & one symbol"
      );
    }
    if (check.email && check.pass && check.userName && check.phone) {
      setError(null);
      console.log(registrationUserData);
      const signupReturn = signup(registrationUserData);
      if (signupReturn) {
        props.signIn(true);
      }
    } else {
      if (!check.email) {
        setRegistrationUserData({ ...registrationUserData, email: "" });
        setError("Email is not Valid! Please use Correct structure of Email.");
      } else if (!check.userName) {
        setRegistrationUserData({ ...registrationUserData, userName: "" });
        setError("UserName must be unique and atleast 6 characters long!");
      } else if (!check.phone) {
        setRegistrationUserData({ ...registrationUserData, phone: "" });
        setError("Invalid Phone Number");
      }
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
  function handleRegistrationPhone(e) {
    setRegistrationUserData({
      ...registrationUserData,
      phone: e.target.value,
    });
  }
  function handleRegistrationDOB(e) {
    setRegistrationUserData({
      ...registrationUserData,
      dob: e.target.value,
    });
  }
  function handleRegistrationAddress(e) {
    setRegistrationUserData({
      ...registrationUserData,
      address: e.target.value,
    });
  }
  function handleRegistrationPassword(e) {
    setRegistrationUserData({
      ...registrationUserData,
      password: e.target.value,
    });
  }
  function handleRegistrationConfirmPassword(e) {
    setRegistrationUserData({
      ...registrationUserData,
      confirm: e.target.value,
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
            value={registrationUserData.name}
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
            value={registrationUserData.email}
          />
        </div>
        <div className={styles.Block}>
          <label className={styles.labelField} htmlFor="Phone Number">
            Phone Number
          </label>
          <br />
          <input
            className={styles.inputField}
            type="phone number"
            name="phone number"
            placeholder="Enter your Phone Number"
            autoComplete="off"
            onChange={handleRegistrationPhone}
            value={registrationUserData.phone}
          />
        </div>
        <div className={styles.Block}>
          <label className={styles.labelField} htmlFor="DOB">
            DOB
          </label>
          <br />
          <input
            className={styles.inputField}
            type="text"
            name="dob"
            placeholder="Enter your Date of birth"
            autoComplete="off"
            onChange={handleRegistrationDOB}
            value={registrationUserData.dob}
          />
        </div>
        <div className={styles.Block}>
          <label className={styles.labelField} htmlFor="address">
            Address
          </label>
          <br />
          <input
            className={styles.inputField}
            type="text"
            name="address"
            placeholder="Enter your Address"
            autoComplete="off"
            onChange={handleRegistrationAddress}
            value={registrationUserData.address}
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
            value={registrationUserData.userName}
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
            value={registrationUserData.password}
          />
        </div>
        <div className={styles.Block}>
          <label className={styles.labelField} htmlFor="password">
            Confirm Password
          </label>
          <br />
          <input
            className={styles.inputField}
            type="password"
            name="password"
            placeholder="Confirm your password"
            onChange={handleRegistrationConfirmPassword}
            value={registrationUserData.confirm}
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
      <div className={styles.errorLog}>
        {error ? <ErrorValidator error={error} setError={setError} /> : ""}
      </div>
    </div>
  );
}
