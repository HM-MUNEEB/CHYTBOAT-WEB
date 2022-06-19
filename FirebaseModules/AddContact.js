import { db, dbRT } from "../Config/firebase";
import { ref, set, update } from "firebase/database";
import { uid } from "uid";

export function AddContact(currentUserName, targetUserName, setLoading) {
  //add reference to the current user
  var taskCompleted = 0;
  const UUID = uid(32);
  try {
    set(ref(dbRT, "users/" + currentUserName + "/data/friends/"), {
      [`${targetUserName}`]: {
        UUID,
      },
    });
    taskCompleted++;
    if (taskCompleted == 2) {
      setLoading(false);
    }
  } catch (e) {
    console.log("Error Adding to realtime DB:  ", e);
  }
  try {
    set(ref(dbRT, "users/" + targetUserName + "/data/friends/"), {
      [`${currentUserName}`]: {
        UUID,
      },
    });
    taskCompleted++;
    if (taskCompleted == 2) {
      setLoading(false);
    }
  } catch (e) {
    console.log("Error Adding to realtime DB:  ", e);
  }
}
