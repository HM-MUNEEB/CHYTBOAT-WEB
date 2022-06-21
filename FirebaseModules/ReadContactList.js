import { ref, onValue } from "firebase/database";
import { dbRT } from "../Config/firebase";

export function ReadContactList(user, setLoading, setUserData) {
  try {
    const starCountRef = ref(dbRT, "users/" + user + "/data/friends");
    onValue(starCountRef, (snapshot) => {
      console.log("Contact List (1): " + snapshot.val());
      setUserData(snapshot.val());
    });
  } catch (e) {
    console.log("Error Reading friends to realtime DB:  ", e);
  }
}
