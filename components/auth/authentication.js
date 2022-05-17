import React, { useState } from "react";
import Image from "next/image";
import LogoPlaceHolder from "./assets/CHYT_BOAT_LOGO.png";
import Signin from "./authModules/signin";
import Register from "./authModules/register";
import styles from "./authentication.module.css";
import { motion } from "framer-motion";
import { useAuth } from "../../authContext/authContext";

export default function Auth() {
  const [signin, setSignin] = useState(true);
  const { user, logout } = useAuth();

  function userSignOut(e) {
    e.preventDefault();
    const logoutReturn = logout();
    console.log("SIGN IN: " + logoutReturn);
    console.log(user);
    console.log("LOGGED OUT!");
  }
  return (
    <div className={styles.authentication}>
      <div className={styles.Main}>
        <div className={styles.authLogo}>
          <Image
            src={LogoPlaceHolder}
            height={80}
            width={80}
            alt="Chyt Boat Logo"
          />
        </div>
        <motion.div
          className={styles.Wrapper}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.WrapperSwitch}>
            <h6>Authentication</h6>
            <div className={styles.SwitchCase}>
              <button
                className={signin ? styles.activeSwitch : styles.Switch}
                onClick={() => setSignin(true)}
              >
                Sign In
              </button>
              <button
                className={signin ? styles.Switch : styles.activeSwitch}
                onClick={() => setSignin(!signin)}
              >
                Register
              </button>
            </div>
          </div>
          {signin ? <Signin /> : <Register />}
        </motion.div>
        <button onClick={userSignOut}> logout</button>
      </div>
    </div>
  );
}
