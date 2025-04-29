import firebase from 'firebase'
import 'firebase/auth'
import  'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyDhPlm10HN4yw9Chuhi4N3VDhI2wiEtDZ4",
  authDomain: "olx-clone-6923f.firebaseapp.com",
  projectId: "olx-clone-6923f",
  storageBucket: "olx-clone-6923f.firebasestorage.app",
  messagingSenderId: "416547463568",
  appId: "1:416547463568:web:31d8999f58ce5615f31315"
};


 export default firebase.initializeApp(firebaseConfig)