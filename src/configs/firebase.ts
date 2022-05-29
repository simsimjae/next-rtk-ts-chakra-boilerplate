import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

export const firebaseApp = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp({
      apiKey: 'AIzaSyBBvNaegBO3flnkCgBuxFYr04hAN24k5-o',
      authDomain: 'thread19-c83ba.firebaseapp.com',
      databaseURL: 'https://thread19-c83ba.firebaseio.com',
      projectId: 'thread19-c83ba',
      storageBucket: 'thread19-c83ba.appspot.com',
      messagingSenderId: '332090734682',
      appId: '1:332090734682:web:5777e140d4b01d428cc063',
      measurementId: 'G-MP1C5G2WYR',
    });

const firestore = firebaseApp.firestore();
const firestorage = firebaseApp.storage();

if (process.env.NODE_ENV === 'development') {
  firestore.settings({
    host: 'localhost:8080',
    ssl: false,
  });
}

export { firestore, firestorage };
