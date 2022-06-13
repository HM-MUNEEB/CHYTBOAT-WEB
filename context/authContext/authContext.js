import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, doc, addDoc, setDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig/firebase";
import { useRouter } from "next/router";
import { async } from "@firebase/util";

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/app-console");
    }
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
        //console.log(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe();
  }, []);

  async function userInitialization(data) {
    let docRef;
    try {
      docRef = await setDoc(doc(db, "users_info/" + data.userName), {
        name: data.name,
        userName: data.userName,
        email: data.email,
        avatar: "defualt",
        userCreated: Timestamp.fromDate(new Date("December 10, 1815")),
        friends: [],
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    return docRef;
  }
  const signup = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        console.log("Signup UID: " + userCredential.uid);

        const docRef = userInitialization(data);
        console.log(docRef);

        if (user && docRef) {
          logout();
          login(data.email, data.password);
          //console.log(user);
        } else if (docRef) {
          login(data.email, data.password);
          //console.log(user);
        }
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser({
          uid: userCredential.uid,
          email: userCredential.email,
          displayName: userCredential.displayName,
        });
        //console.log("login: " + user);
        // if (user) {
        //   router.push("/app-console");
        // }
        return true;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
        //console.log(user);
        router.push("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        return error;
      });
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
