import { doc, getDoc } from "firebase/firestore";
import { db } from "../Config/firebase.js";

//change chytboat_register to users_info

export async function GetCurrentUserInfo(user, setUserInfoCheck, setUserInfo) {
  const docRef = doc(db, "users_info/" + user);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    setUserInfo(docSnap.data());
    setUserInfoCheck(true);
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    setUserInfoCheck(false);
  }
}
