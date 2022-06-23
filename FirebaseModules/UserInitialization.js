import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db, dbRT } from "../Config/firebase";
import { set, ref } from "firebase/database";

export async function userInitialization(data) {
  let docRef;
  try {
    docRef = await setDoc(doc(db, "users_info/" + data.userName), {
      name: data.name,
      userName: data.userName,
      email: data.email,
      avatar: "defualt",
      userCreated: Timestamp.fromDate(new Date()),
      friends: [],
      address: data.address,
      phone: data.phone,
      dob: data.dob,
    });
    initialUserData(data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  return docRef;
}

function initialUserData(data) {
  try {
    set(ref(dbRT, "users/" + data.userName), {
      data: {
        name: data.name,
        userName: data.userName,
        userCreated: Timestamp.fromDate(new Date()),
      },
    });
  } catch (e) {
    console.log("Error Adding to realtime DB:  ", e);
  }
}
