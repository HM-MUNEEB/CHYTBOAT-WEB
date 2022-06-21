import { ref, onValue, set, push } from "firebase/database";
import { dbRT } from "../Config/firebase";

export function ReadMessages(CHATID, setMessages) {
  try {
    const messagesRef = ref(dbRT, "chatStack/" + CHATID);
    onValue(messagesRef, (snapshot) => {
      console.log("Messages: " + snapshot.val());
      setMessages(snapshot.val());
    });
  } catch (e) {
    console.log("Error Reading Messages to realtime DB:  ", e);
  }
}
export function SendMessages(CHATID, MESSAGE, USER) {
  try {
    const messageRef = ref(dbRT, "chatStack/" + CHATID);
    const messageRef1 = push(messageRef);
    set(messageRef1, {
      Message: MESSAGE,
      Sender: USER,
    }).then(console.log("Message: " + MESSAGE + " to : " + CHATID));
  } catch (e) {
    console.log("Error Adding to realtime DB:  ", e);
  }
}
