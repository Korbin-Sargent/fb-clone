import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

//Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyB2HJF6mD1ThvPkN-CtzwulZPZtJE7d988",
  authDomain: "socialfeed-25541.firebaseapp.com",
  projectId: "socialfeed-25541",
  storageBucket: "socialfeed-25541.appspot.com",
  messagingSenderId: "1062047771459",
  appId: "1:1062047771459:web:7ab319ee08959d0f26ddf6",
};

// initialize firebase

const app = initializeApp(firebaseConfig);

// Initilaize cloud firestore and get a reference to storage
export const storage = getStorage(app);
export const storageRef = getFirestore(app);
