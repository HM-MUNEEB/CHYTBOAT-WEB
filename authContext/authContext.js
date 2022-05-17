import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig/firebase";
import { useRouter } from "next/router";

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
        console.log(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe();
  }, []);

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("Signup UID: " + userCredential.uid);
        if (user) {
          logout();
          login(email, password);
          console.log(user);
        } else {
          login(email, password);
          console.log(user);
        }
        return true;
      })
      .catch((error) => {
        console.log(error);
        return error;
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
        console.log("login: " + user);
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
        console.log(user);
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
