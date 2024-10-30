import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyABbCp2FgfKjlXZ5oprnQGwSORwcPuTUs8",
	authDomain: "twostagram.firebaseapp.com",
	projectId: "twostagram",
	storageBucket: "twostagram.appspot.com",
	messagingSenderId: "817945473969",
	appId: "1:817945473969:web:30c02e11b924cde3270390"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
