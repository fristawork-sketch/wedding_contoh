import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Ganti nilai di bawah ini dengan konfigurasi project Firebase kamu.
// Ambil dari: Firebase Console > Project Settings > General > Your apps > SDK setup and configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJcy27Jgx-Qp8BIuDUy15p2jMvECwhqfs",
  authDomain: "wedding-alda-bara.firebaseapp.com",
  projectId: "wedding-alda-bara",
  storageBucket: "wedding-alda-bara.firebasestorage.app",
  messagingSenderId: "949496324706",
  appId: "1:949496324706:web:43d43f5f409c3e9bd8e73b",
  measurementId: "G-7BH18YM4GE",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
