import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCa47PArVKGNEJcyrz3Fj35WNQu28RQiUs",
    authDomain: "feed-branford-kids-plan.firebaseapp.com",
    databaseURL: "https://feed-branford-kids-plan.firebaseio.com",
    projectId: "feed-branford-kids-plan",
    storageBucket: "feed-branford-kids-plan.appspot.com",
    messagingSenderId: "435746481458",
    appId: "1:435746481458:web:fcede12f9bca85b6c1632b",
    measurementId: "G-C4B2Q128VG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;