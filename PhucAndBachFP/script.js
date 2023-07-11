import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZNxTHPNkJM1tX2n0fUVYzKMh1VYnQxL8",
  authDomain: "finalproject-4227e.firebaseapp.com",
  projectId: "finalproject-4227e",
  storageBucket: "finalproject-4227e.appspot.com",
  messagingSenderId: "928682874879",
  appId: "1:928682874879:web:a5526cfe1a50acf96139ca",
  measurementId: "G-8XR793HVFL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//khởi tạo biến xác thực firebase gồm phần giả lập và hệ thống đăng nhập
const db = getFirestore(app); // database
export async function returnData(db) {
  let Firestore = [];
  const querySnapshot = await getDocs(collection(db, "Product"));
  querySnapshot.forEach((doc) => {
    Firestore.push(doc.data());
  });
  return Firestore;
}



// const accessKey = '416aa0d1-867e-4810-a913-72d6e6f3826f';

// const headers = {
//     'X-Meteum-API-Key': accessKey
// };

// fetch('https://api.meteum.ai/v1/forecast?lat=52.37125&lon=4.89388', { headers })
//     .then(response => response.json())
//     .then(json => console.log(json));
