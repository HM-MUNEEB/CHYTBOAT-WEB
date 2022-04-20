import React, { useState } from "react";
import Image from "next/image";
import img from "./assets/logo.svg";
import Signin from "./authModules/signin";
import Register from "./authModules/register";
import styles from "./authentication.module.css";
import { motion } from "framer-motion";

export default function Auth() {
  const [signin, setSignin] = useState(true);

  return (
    <div className={styles.Main}>
      <div className={styles.authLogo}>
        <Image src={img} />
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
    </div>
  );
}
