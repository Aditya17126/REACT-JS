import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBZtRTcTBJH3mWP9vrldBUuycs1cx1_RI8",
  authDomain: "clone-85176.firebaseapp.com",
  projectId: "clone-85176",
  storageBucket: "clone-85176.firebasestorage.app",
  messagingSenderId: "905858989973",
  appId: "1:905858989973:web:e0425f60ab9644548d409c",
  measurementId: "G-GPH2HP65JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//INTIALIZE FIRESTORE
const db = getFirestore(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {app , analytics , db, auth, provider};