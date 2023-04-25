import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAFxSPHU01qRtVROuRsaXPESVFtTS2cc2M",
    authDomain: "linkedin-clone-812d4.firebaseapp.com",
    projectId: "linkedin-clone-812d4",
    storageBucket: "linkedin-clone-812d4.appspot.com",
    messagingSenderId: "54360827723",
    appId: "1:54360827723:web:89add8cb4778819b3c2ace",
    measurementId: "G-3HFBKTJEL3"
  };

 const firebas=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();
  export {auth,provider,storage};
  export default db;