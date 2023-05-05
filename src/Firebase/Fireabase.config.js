// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// console.log('environment variable', import.meta.env.VITE_PASS);
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSy45bLMhcpFMGZDx_JjBe-OCtiyPS_qg",
  authDomain: "assinment-5ef21.firebaseapp.com",
  projectId: "assinment-5ef21",
  storageBucket: "assinment-5ef21.appspot.com",
  messagingSenderId: "1024196632493",
  appId: "1:1024196632493:web:d3305493637a3f38634b24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;