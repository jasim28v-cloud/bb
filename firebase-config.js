
// تهئية Firebase باستخدام Compat Mode
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth-compat.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database-compat.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage-compat.js";

// بيانات Firebase الجديدة
const firebaseConfig = {
  apiKey: "AIzaSyAxtEkrEgl0C9djPkxKKX-sENtOzPEbHB8",
  authDomain: "tope-e5350.firebaseapp.com",
  databaseURL: "https://tope-e5350-default-rtdb.firebaseio.com/",
  projectId: "tope-e5350",
  storageBucket: "tope-e5350.appspot.com",
  messagingSenderId: "187788115549",
  appId: "1:187788115549:web:5012a1053d2ff7dced97b4",
  measurementId: "G-V1XM95PMQC"
};

// تهئية Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

// بيانات Cloudinary
const CLOUD_NAME = 'dnmpmysk6';
const UPLOAD_PRESET = 'rsxdfdgw';

// تصدير المتغيرات لاستخدامها في ملف `script.js`
window.auth = auth;
window.db = db;
window.storage = storage;
window.ref = firebase.database.ref;
window.set = firebase.database.set;
window.onValue = firebase.database.onValue;
window.get = firebase.database.get;
window.remove = firebase.database.remove;
window.push = firebase.database.push;
window.update = firebase.database.update;
window.CLOUD_NAME = CLOUD_NAME;
window.UPLOAD_PRESET = UPLOAD_PRESET;

console.log('✅ TOPE System Ready');
