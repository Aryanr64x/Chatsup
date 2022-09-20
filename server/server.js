import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoxwITlF5kcwYamqcbS91n6wBkrmN1msw",
  authDomain: "chatsup-9d160.firebaseapp.com",
  projectId: "chatsup-9d160",
  storageBucket: "chatsup-9d160.appspot.com",
  messagingSenderId: "774473964101",
  appId: "1:774473964101:web:02cd6d4fc56f9d6873612c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export default app;
