// firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDw8-WxV_7fmB320LDZdeuVtllguiPFfCY",
  authDomain: "awesome-garden.firebaseapp.com",
  databaseURL: "https://awesome-garden-default-rtdb.firebaseio.com",
  projectId: "awesome-garden",
  storageBucket: "awesome-garden.appspot.com",
  messagingSenderId: "827388913322",
  appId: "1:827388913322:web:a5bce6bffa9d9f953492d3",
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const database = getDatabase(app);

export { database };
