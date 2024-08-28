import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKXvwxgAd6l5CF8etT6cHQhubPQsQl2o8",
  authDomain: "jsis-3d59d.firebaseapp.com",
  projectId: "jsis-3d59d",
  storageBucket: "jsis-3d59d.appspot.com",
  messagingSenderId: "631938260328",
  appId: "1:631938260328:web:6cf6694dd7218237fecadd",
  measurementId: "G-7E85W3NH2T"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
