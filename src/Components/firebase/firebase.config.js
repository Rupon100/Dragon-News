 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyAAqe6rGBlzXbiX7NNloBZqr0o6OI07mSI",
  authDomain: "dragon-news-813d4.firebaseapp.com",
  projectId: "dragon-news-813d4",
  storageBucket: "dragon-news-813d4.firebasestorage.app",
  messagingSenderId: "577121646672",
  appId: "1:577121646672:web:297ad19bbd919814673955"
};

 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;