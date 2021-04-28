import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyANWIAc83RkgSj0GSnWsKMaq7lhbmaWR6I",
    authDomain: "fir-react-image-d6fee.firebaseapp.com",
    projectId: "fir-react-image-d6fee",
    storageBucket: "fir-react-image-d6fee.appspot.com",
    messagingSenderId: "638631261307",
    appId: "1:638631261307:web:59e14eff706d17d1179ede"
  };

  firebase.initializeApp(config)

  export default firebase