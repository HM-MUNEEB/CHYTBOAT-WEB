import { ref, onValue } from "firebase/database";
import { dbRT } from "../Config/firebase";

export function ReadContactList(user, setLoading, setUserData) {
  try {
    const starCountRef = ref(dbRT, "users/" + user + "/data/friends");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Contact List FN Module: ");
      console.log(snapshot.val());
      setUserData(data);
    });
  } catch (e) {
    console.log("Error Reading friends to realtime DB:  ", e);
  }
}
