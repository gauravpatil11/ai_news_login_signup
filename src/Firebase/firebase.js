// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBylqgSYrcU6l-7VE8USnYlfm-hHjl_R80",
  authDomain: "auth-react-f4e5d.firebaseapp.com",
  projectId: "auth-react-f4e5d",
  storageBucket: "auth-react-f4e5d.appspot.com",
  messagingSenderId: "854432099294",
  appId: "1:854432099294:web:310a283f19c3491f52cb4f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp
