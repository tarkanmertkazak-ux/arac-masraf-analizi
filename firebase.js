
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDkC-dOqoVN4gAgOesLokgc-aZoiRyuhyM",
    authDomain: "arac-masraf-analizi.firebaseapp.com",
    projectId: "arac-masraf-analizi",
    storageBucket: "arac-masraf-analizi.firebasestorage.app",
    messagingSenderId: "881899264432",
    appId: "1:881899264432:web:5de1809538e4a36dca1e75",
    measurementId: "G-S8MC5R6CLZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const db = getFirestore(app);
