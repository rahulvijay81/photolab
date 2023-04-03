import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyCIje__5hX8lLGvqG-sQI3oVWL6jxKl3Hs",
  authDomain: "photolab-dec79.firebaseapp.com",
  projectId: "photolab-dec79",
  storageBucket: "photolab-dec79.appspot.com",
  messagingSenderId: "874635489494",
  appId: "1:874635489494:web:7114a3329722e30b44d977",
  measurementId: "G-KTNKFKXNCE"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, firebase }
