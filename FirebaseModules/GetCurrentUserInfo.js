import { doc, getDoc } from "firebase/firestore";
import { db } from "../Config/firebase.js";

export async function GetCurrentUserInfo(user, setLoading) {
  const docRef = doc(db, "users_info", user.displayName);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    setLoading(false);
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}
