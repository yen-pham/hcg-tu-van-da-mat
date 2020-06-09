
import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyBVDYVc_oxXHavwTzfX55BIrAPrCSNYetk",
  authDomain: "tu-van-da-mat.firebaseapp.com",
  databaseURL: "https://tu-van-da-mat.firebaseio.com",
  projectId: "tu-van-da-mat",
  storageBucket: "tu-van-da-mat.appspot.com",
  messagingSenderId: "583401978392",
  appId: "1:583401978392:web:20829a948a5aad5c49a16d",
  measurementId: "G-J5YJLPL48Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
var sanPham = firebase.database();
// .ref('tu-van-da-mat')
export default sanPham;