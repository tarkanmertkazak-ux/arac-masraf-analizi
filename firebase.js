import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDkC-dOqoVN4gAgOesLokgc-aZoiRyuhyM",
  authDomain: "arac-masraf-analizi.firebaseapp.com",
  projectId: "arac-masraf-analizi",
  storageBucket: "arac-masraf-analizi.firebasestorage.app",
  messagingSenderId: "881899264432",
  appId: "1:881899264432:web:5de1809538e4a36dca1e75",
  measurementId: "G-S8MC5R6CLZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 🔴 BU SATIR YOKTU → HER ŞEY BU YÜZDEN ÇALIŞMIYORDU
export const db = getFirestore(app);