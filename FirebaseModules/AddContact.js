import { db, dbRT } from "../Config/firebase";
import { ref, set, update, push } from "firebase/database";
import { uid } from "uid";

export function AddContact(currentUserName, targetUserName, setLoading) {
  //add reference to the current user
  var taskCompleted = 0;
  const UUID = uid(32);
  try {
    const userRef = ref(dbRT, "users/" + targetUserName + "/data/friends");
    const locUserRef = push(userRef);
    set(locUserRef, {
      name: currentUserName,
      UUID,
    });
    taskCompleted++;
    if (taskCompleted == 2) {
      setLoading(false);
    }
  } catch (e) {
    console.log("Error Adding to realtime DB:  ", e);
  }
  try {
    const userRef1 = ref(dbRT, "users/" + currentUserName + "/data/friends");
    const locUserRef1 = push(userRef1);
    set(locUserRef1, {
      name: targetUserName,
      UUID,
    });
    taskCompleted++;
    if (taskCompleted == 2) {
      setLoading(false);
    }
  } catch (e) {
    console.log("Error Adding to realtime DB:  ", e);
  }
}
