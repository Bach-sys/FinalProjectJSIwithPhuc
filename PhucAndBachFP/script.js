//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
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
const auth = getAuth(app);
console.log(app);
//Initialize variable
let email;
let password;
let btnComfirm = document.querySelector("#buttonLogin");
//when the doom are loaded then do the click to submit function
window.addEventListener("DOMContentLoaded", (event) => {
  if (btnComfirm) {
    //add event listener
    btnComfirm.addEventListener("click", () => {
      //take the email and pass
      email = document.querySelector("#email");
      password = document.querySelector("#password");
      emailCheck = email.value;
      let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      console.log(emailCheck.length);
      // if (email.value.length > 7) {
      //   console.log(btnComfirm);
      // } else {}
      if (email.value != "" && password.value != "") {
        createUserWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user.email);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });
      }
    });
  }
});
