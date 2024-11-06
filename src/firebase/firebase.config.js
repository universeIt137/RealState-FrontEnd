// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEQyUTNNeksqa0r-b5J82_jj3iWUDA970",
    authDomain: "amerthikana-f4780.firebaseapp.com",
    projectId: "amerthikana-f4780",
    storageBucket: "amerthikana-f4780.firebasestorage.app",
    messagingSenderId: "758382697677",
    appId: "1:758382697677:web:fdb7cf3b875127e2249d84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;