
// تهئية Firebase باستخدام الإصدار الحديث (v9+)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";

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
window.firebaseApp = app;
window.auth = auth;
window.db = db;
window.storage = storage;
window.CLOUD_NAME = CLOUD_NAME;
window.UPLOAD_PRESET = UPLOAD_PRESET;

console.log('✅ TOPE System Ready');
