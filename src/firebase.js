
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCZ4KGuA8lMofcPAkuRe9Lcoa43b8sPb7Y",
  authDomain: "contactus-d52db.firebaseapp.com",
  projectId: "contactus-d52db",
  storageBucket: "contactus-d52db.appspot.com",
  messagingSenderId: "847506463305",
  appId: "1:847506463305:web:1c352461c6d93754747d98",
  measurementId: "G-G7KP3JQEFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;