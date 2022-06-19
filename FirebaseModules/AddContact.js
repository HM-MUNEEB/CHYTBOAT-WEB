import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../Config/firebase";

export async function AddCotent(data) {
  let docRef;
  try {
    docRef = await setDoc(doc(db, "users_info/" + data.userName), {
      name: data.name,
      userName: data.userName,
      email: data.email,
      avatar: "defualt",
      userCreated: Timestamp.fromDate(new Date()),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  return docRef;
}
