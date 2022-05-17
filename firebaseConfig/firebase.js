import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpv1o3NjVf0eylynlnQL_XOTH1DCGZJGU",
  authDomain: "chytboat.firebaseapp.com",
  projectId: "chytboat",
  storageBucket: "chytboat.appspot.com",
  messagingSenderId: "134925447764",
  appId: "1:134925447764:web:45ef805ea3915e92dbb3c1",
  measurementId: "G-28PSDC9XCT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
