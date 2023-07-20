import "./style.css";
import { returnData } from "./script";
import {
  mainPageRender,
  bookTourRender,
  aboutUsRender,
  contactRender,
  signupRender,
  loginRender,
  TNPDrender,
  footerRender,
  navRender,
  navImghomeRender,
  navImgtourRender,
  navImgsigninRender,
  navImgsignupRender,
  navImgaboutusRender,
  navImgcontactRender,
} from "./Font";
let userEmail;
import {
  lichtrinhRender,
  chuanbiRender,
  gioithieuRender,
} from "./btnAddenvent";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let nav = document.querySelector("#nav");
let mainPage = document.querySelector("#mainPage");
let shoppingPage = document.querySelector("#shopping");
navRender(nav);
let navImg = document.querySelector("#nav-img");
navImghomeRender(navImg);
let btnlog = document.querySelector("#btn-nav-log");
let btnsign = document.querySelector("#btn-nav-sign");
let btnhome = document.querySelector("#home");
let btnbooktour = document.querySelector("#bookTour");
let btnaboutus = document.querySelector("#aboutus");
let btncontact = document.querySelector("#contact");
let btncart = document.querySelector("#cart");
let alertP = document.querySelector(".alert");
btnbooktour.style.display = "none";
btnaboutus.style.display = "none";
btncontact.style.display = "none";
mainPageRender(mainPage);
let footer = document.querySelector("#footer");
footerRender(footer);

// Chức năng click của từng button

btnlog.addEventListener("click", () => {
  loginRender(mainPage);
  navImgsigninRender(navImg);
  footerRender(footer);
});
btnsign.addEventListener("click", () => {
  signupRender(mainPage);
  navImgsignupRender(navImg);
  footerRender(footer);
});
btnhome.addEventListener("click", () => {
  mainPageRender(mainPage);
  navImghomeRender(navImg);
});
btnbooktour.addEventListener("click", () => {
  bookTourRender(mainPage, data);
  navImgtourRender(navImg);
  footerRender(footer);
  let btnEvent = document.querySelectorAll(".btnTNPD");
  let book = document.querySelector("#book");
  for (let index = 0; index < btnEvent.length; index++) {
    btnEvent[index].addEventListener("click", (e) => {
      console.log(btnEvent[index].id);
      for (let i of data) {
        if (btnEvent[index].id == i.id) {
          console.log(true);
          TNPDrender(mainPage, i);
          document.querySelector("#email").value = userEmail;
          let note = document.querySelector("#note");
          note.value = "Thanks For The service"
          let btnSubmit = document.querySelector("#book");
          let informPage = document.querySelector("#informPage");
          let btnlt = document.querySelector("#lt");
          let btngt = document.querySelector("#gt");
          let btncb = document.querySelector("#cb");
          btnlt.addEventListener("click", () => {
            lichtrinhRender(informPage, i);
          });
          btnSubmit.addEventListener("click", () => {
            let name = document.querySelector("#name").value;
            let phoneNumber = document.querySelector("#phone").value;
            let amountPerson = document.querySelector("#ticket").value;
            if (name == "") {
              alert("name is undifined");
            } else if (phoneNumber == "") {
              alert("Phone number is undifined");
            } else if (amountPerson == "" || amountPerson >= 5) {
              alert("The ticket is undifined or your selection is much than 4");
            } else {
                let date = new Date();
                setDoc(doc(db, "BookTour", `Book_${name}`), {
                  name: `${name}`,
                  Tour: `${document.querySelector("#TitleH2")}`,
                  PhoneNumber: `${phoneNumber}`,
                  TicketAmount: `${amountPerson}`,
                  note : `${note.value}`,
                  Time : `${date}`
                });
                alert("Booked Successfully");
                bookTourRender(mainPage, data);
                navImgtourRender(navImg);
                footerRender(footer);
            }
          });
          btngt.addEventListener("click", () => {
            gioithieuRender(informPage, i);
          });
          btncb.addEventListener("click", () => {
            chuanbiRender(informPage, i);
          });
          lichtrinhRender(informPage, i);
          footerRender(footer);
        }
      }
    });
  }
});

btnaboutus.addEventListener("click", () => {
  aboutUsRender(mainPage);
  navImgaboutusRender(navImg);
  footerRender(footer);
});
btncontact.addEventListener("click", () => {
  contactRender(mainPage);
  navImgcontactRender(navImg);
  footerRender(footer);
});

// Navbar effect

window.addEventListener("scroll", () => {
  let items = document.querySelectorAll(".item");
  let navbar = document.querySelector("header");
  let tab = document.querySelector("#tab");
  let scrollValue = window.scrollY;
  if (scrollValue > 10) {
    navbar.classList.add("BgcNav");
    // tab.classList.add('BgcNav')
  } else {
    navbar.classList.remove("BgcNav");
    // tab.classList.remove('BgcNav')
  }
  items.forEach((item) => {
    if (item.offsetTop - window.scrollY < 750) {
      item.classList.add("active");
    }
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
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
const db = getFirestore(app); // database
//Initialize variable
let email;
let password;
let ComfirmPass;
let SignUp = document.querySelector("#btn-nav-sign");

// when the doom are loaded then do the click to submit function
window.addEventListener("DOMContentLoaded", (event) => {
  if (SignUp) {
    //add event listener
    SignUp.addEventListener("click", () => {
      let btnComfirm = document.querySelector("#btn-SignUpComF");
      email = document.querySelector("#email");
      password = document.querySelector("#password");
      ComfirmPass = document.querySelector("#confirm-password");
      let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      btnComfirm.addEventListener("click", () => {
        console.log("cannot get btn");
        if (email.value.length > 7) {
          if (regex.test(email.value)) {
            if (password.value == ComfirmPass.value) {
              createUserWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                  const user = userCredential.user;
                  userEmail = user.email;
                  btnlog.style.display = "none";
                  btnsign.style.display = "none";
                  mainPageRender(mainPage);
                  navImghomeRender(navImg);
                  btnbooktour.style.display = "block";
                  btnaboutus.style.display = "block";
                  btncontact.style.display = "block";
                  btncart.style.display = "block";
                  alertP.style.display = "none";
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorMessage);
                  alert(errorMessage);
                });
            } else {
              alert("Password does not match");
            }
            //! here is finnish the authentication
          } else {
            alert("email is invalid");
          }
        } else {
          alert("email mush be 7 chareacters");
        }
        // ! condition to accesss the acAcount
        //! pass all condition
      });
    });
  }
});

window.addEventListener("DOMContentLoaded", () => {
  btnlog.addEventListener("click", () => {
    console.log("btn");
    email = document.querySelector("#email");
    password = document.querySelector("#password");
    let btncomfirmSignin = document.querySelector("#btn-signIn-submit");
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    btncomfirmSignin.addEventListener("click", () => {
      console.log("btn");
      if (email.value.length > 7) {
        if (regex.test(email.value)) {
          if (password.value.length > 6) {
            signInWithEmailAndPassword(auth, email.value, password.value)
              .then((userCredential) => {
                // Signed in
                console.log("Success");
                const user = userCredential.user;
                userEmail = user.email;
                btnlog.style.display = "none";
                btnsign.style.display = "none";
                mainPageRender(mainPage);
                navImghomeRender(navImg);
                btnbooktour.style.display = "block";
                btnaboutus.style.display = "block";
                btncontact.style.display = "block";
                alertP.style.display = "none";
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
              });
          } else {
            alert("Password does not match");
          }
          //! here is finnish the authentication
        } else {
          alert("email is invalid");
        }
      } else {
        alert("email mush be 7 chareacters");
      }
    });
  });
});

let data = returnData(db)
  .then((result) => {
    data = result;
  })
  .catch((err) => {
    console.log(err);
  });
