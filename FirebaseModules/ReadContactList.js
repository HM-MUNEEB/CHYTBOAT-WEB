import { ref, onValue } from "firebase/database";
import { dbRT } from "../Config/firebase";

export function ReadContactList(user) {
  try {
    const starCountRef = ref(dbRT, "users/" + user + "/data/friends");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      return data;
    });
  } catch (e) {
    console.log("Error Reading friends to realtime DB:  ", e);
  }
}
