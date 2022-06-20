import { ref, onValue } from "firebase/database";
import { dbRT } from "../Config/firebase";
import { useUserData } from "../context/userData/userDataContext";

export function ReadContactList(user) {
  const { setUserData } = useUserData();
  try {
    const starCountRef = ref(dbRT, "users/" + user + "/data/friends");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setUserData(data);
    });
  } catch (e) {
    console.log("Error Reading friends to realtime DB:  ", e);
  }
}
