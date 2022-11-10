// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAczC57lH02s5HAaUNMpIf4xRD5Q7CIeA4",
  authDomain: "fitbazz-731e4.firebaseapp.com",
  projectId: "fitbazz-731e4",
  storageBucket: "fitbazz-731e4.appspot.com",
  messagingSenderId: "58224935713",
  appId: "1:58224935713:web:7cf449ffb3618965683460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app