import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_SLANG_API_KEY,
  authDomain: process.env.REACT_APP_SLANG_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_SLANG_DATABASE_URL,
  projectId: process.env.REACT_APP_SLANG_PROJECT_ID,
  storageBucket: process.env.REACT_APP_SLANG_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SLANG_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_SLANG_APP_ID,
  measurementId: process.env.REACT_APP_SLANG_MEASUREMENT_ID,
};

// Firebase アプリの初期化
const app_slang = initializeApp(firebaseConfig, 'slang');

const db_slang = getDatabase(app_slang)

export { app_slang, db_slang };
