import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUMkGUOL1g6d71TLxhUVLtVQkbIVxlxv4",
  authDomain: "signal-messaging-application.firebaseapp.com",
  projectId: "signal-messaging-application",
  storageBucket: "signal-messaging-application.appspot.com",
  messagingSenderId: "276672527441",
  appId: "1:276672527441:web:debf5caf08470462390c70",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
