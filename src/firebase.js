import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore"; // 1. Ներմուծում ենք Firestore-ը

const firebaseConfig = {
  apiKey: "AIzaSyD6_lLmCv0MEiLpYNXf3580B2nm7hx_cz8",
  authDomain: "evoca-70fb3.firebaseapp.com",
  projectId: "evoca-70fb3",
  storageBucket: "evoca-70fb3.firebasestorage.app",
  messagingSenderId: "710195586521",
  appId: "1:710195586521:web:086ad2fa25cb04841d65c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 2. Ստեղծում և export ենք անում db-ն
export const db = getFirestore(app);

export default app;