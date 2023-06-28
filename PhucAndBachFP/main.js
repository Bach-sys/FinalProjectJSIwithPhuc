import "./style.css";
import javascriptLogo from "./javascript.svg";

let nav = document.querySelector("#nav");
let mainPage = document.querySelector("#mainPage");

// Render Navbar

let navRender = () => {
  nav.innerHTML = `
  <header>
  <a href="#" class="nav-logo-link"><img class="nav-logo" src="./img/logo.PNG" alt=""></a>
  <div class="nav-main-child">
    <button class="btn-nav" id ="home" >Home</button>
    <button class="btn-nav">About us</button>
    <button class="btn-nav">Contact</button>
    <button class="btn-nav">Book tour</button>
    <button class="btn-nav"id="btn-nav-log">Sign In</button>
    <button class="btn-nav"id="btn-nav-sign">Sign Up</button>
  </div>
</header>
<div id="nav-img"></div>
  `
};
navRender();


// Render ảnh navbar

let navImg = document.querySelector('#nav-img')
let navImghomeRender = () => {
  navImg.innerHTML = `
  <div id="nav-main-img">
    <p>TREKKING</p>
  </div>
  `
}
navImghomeRender()

let navImgsigninRender = () => {
  navImg.innerHTML = `
  <div id="nav-main-img1">
    <p>Sign In</p>
  </div>
  `
};

let navImgsignupRender = () => {
  navImg.innerHTML = `
  <div id="nav-main-img2">
    <p>Sign Up</p>
  </div>
  `
};

let btnlog = document.querySelector("#btn-nav-log");
let btnsign = document.querySelector("#btn-nav-sign");
let btnhome = document.querySelector("#home");

// Render mainPage làdiv  bao gồm tất cả các page

// let mainPageRender = () => {
//   mainPage.innerHTML=`
//   <div id="homePage">
//     <div id="page">
//     <div class="introduce-page">
//   <div class="introduce">
//   <div class="introduce-child">
//     <div class="introduce-des">
//     <h1>Tour Trekking</h1>
//     <h2>TÀ NĂNG PHAN DŨNG</h2>
//       <p class="des">Không dễ dàng để Tà Năng được biết đến với cái tên: Cung đường Trekking đẹp nhất miền Nam. Vẻ đẹp trữ tình khiến bao người khao khát một lần được đặt chân đến đây và tận mắt chiêm ngưỡng. Cung đường trekking băng qua những triền đồi xanh mướt, phóng tầm mắt thưởng thức núi rừng xanh biếc và cảm nhận không khí trong trẻo khiến ta quên hết những vội vã thường nhật. 
//       </p>
//     <div class="inform">
//     <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"/></svg>    
//     <p>35KM</p>
//     <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M396.6 6.5L235.8 129.1c9.6 1.8 18.9 5.8 27 12l168 128c13.2 10.1 22 24.9 24.5 41.4l6.2 41.5H608c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128c-11.5-8.7-27.3-8.7-38.8 0zm-153.2 160c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S22.7 512 32 512H224V352l96 160h96c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z"/></svg>
//     <p>2N-2Đ</p>
//     <button class="detail">GIỚI THIỆU</button>
//     </div>
//     </div>
//     <div class="TNPD">
//     <img class="des-img" src="./img/TNPD.jpg" alt="">
//     <img class="des-img" src="./img/TNPD2.jpg" alt="">
//     <img class="des-img" src="./img/TNPD3.jpg" alt="">
//     </div>
//   </div>
// </div>
// </div>
//     </div>
//     <div id="page1">
//     <div class="introduce-page1">
//     <div class="introduce">
//     <div class="introduce-child">
//       <div class="TNPD">
//       <img class="des-img" src="./img/TD1.jpg" alt="">
//       <img class="des-img" src="./img/TD2.png" alt="">
//       <img class="des-img" src="./img/TD3.jpg" alt="">
//       </div>
//       <div class="introduce-des">
//       <h1>Tour Trekking</h1>
//       <h2>TÀ ĐÙNG</h2>
//         <p class="des">Vịnh Hạ Long của Tây Nguyên đã làm xao xuyến bao nhiêu tâm hồn lữ khách. Nơi bình yên gõ cửa tâm hồn và bao muộn phiền dần tan biến trong màn sương mai. Con thuyền nhỏ đưa bạn dạo trên mặt hồ xanh biếc khám phá những nét đẹp êm đềm. Giấc mơ về chốn thần tiên nay đã gần ngay trước mắt bạn.
//         </p>
//       <div class="inform">
//       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"/></svg>    
//       <p>14KM</p>
//       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M396.6 6.5L235.8 129.1c9.6 1.8 18.9 5.8 27 12l168 128c13.2 10.1 22 24.9 24.5 41.4l6.2 41.5H608c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128c-11.5-8.7-27.3-8.7-38.8 0zm-153.2 160c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S22.7 512 32 512H224V352l96 160h96c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z"/></svg>
//       <p>2N-2Đ</p>
//       <button class="detail">GIỚI THIỆU</button>
//       </div>
//       </div>
//     </div>
//   </div>
//   </div>
//     </div>
//     <div id="page2">  <div class="introduce-page2">
//     <div class="introduce">
//     <div class="introduce-child">
//       <div class="introduce-des">
//       <h1>Tour Trekking</h1>
//       <h2>PHƯỚC BÌNH - TÀ GIANG</h2>
//         <p class="des">Nâng cấp trải nghiệm với hành trình Bidoup – Phước Bình – Tà Giang – Cung đường đẹp bậc nhất miền Nam cùng The happy trip và những người bạn vui tính.
//         Quãng đường trekking 28km, xuyên qua 3 tỉnh Lâm Đồng – Ninh Thuận – Khánh Hoà là mục tiêu chinh phục của những trekkers thực thụ.
//         </p>
//       <div class="inform">
//       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"/></svg>    
//       <p>28KM</p>
//       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M396.6 6.5L235.8 129.1c9.6 1.8 18.9 5.8 27 12l168 128c13.2 10.1 22 24.9 24.5 41.4l6.2 41.5H608c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128c-11.5-8.7-27.3-8.7-38.8 0zm-153.2 160c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S22.7 512 32 512H224V352l96 160h96c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z"/></svg>
//       <p>2N-2Đ</p>
//       <button class="detail">GIỚI THIỆU</button>
//       </div>
//       </div>
//       <div class="TNPD">
//       <img class="des-img" src="./img/PBTG1.jpg" alt="">
//       <img class="des-img" src="./img/PBTG2.jpg" alt="">
//       <img class="des-img" src="./img/PBTG3.jpg" alt="">
//       </div>
//     </div>
//   </div>
//   </div></div>
//     <div id="page3">
//     <div class="introduce-page3">
//     <div class="introduce">
//     <div class="introduce-child">
//       <div class="TNPD">
//       <img class="des-img" src="./img/HS1.jpg" alt="">
//       <img class="des-img" src="./img/HS2.jpg" alt="">
//       <img class="des-img" src="./img/HS3.jpg" alt="">
//       </div>
//       <div class="introduce-des">
//       <h1>Tour Trekking</h1>
//       <h2>HÒN SƠN</h2>
//         <p class="des">Hành trình là sự kết hợp các trải nghiệm biển đảo đa dạng: khám phá hòn đảo xinh đẹp bằng xe máy, trekking chinh phục đỉnh Ma Thiên Lãnh, ngắm toàn cảnh Đảo Hòn Sơn từ bãi đá tiên.
//         </p>
//       <div class="inform">
//       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"/></svg>    
//       <p>14KM</p>
//       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M396.6 6.5L235.8 129.1c9.6 1.8 18.9 5.8 27 12l168 128c13.2 10.1 22 24.9 24.5 41.4l6.2 41.5H608c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128c-11.5-8.7-27.3-8.7-38.8 0zm-153.2 160c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S22.7 512 32 512H224V352l96 160h96c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z"/></svg>
//       <p>2N-2Đ</p>
//       <button class="detail">GIỚI THIỆU</button>
//       </div>
//       </div>
//     </div>
//   </div>
//   </div>
//     </div>
//     <div id="page4">
//     <div class="img-settime">
//     <div class="settime">
//       <div class="settime-des">
//         <h1 class="settime-des-h1">TƯ VẤN TREKKING</h1>
//       <p class="settime-des-p">Bạn lần đầu đi trekking hoặc chỉ đang cần thêm thông tin về hành trình để tham khảo, đội ngũ The happy trip sẵn sàng hỗ trợ bạn thêm thông tin để dễ hình dung nhất. Hãy chọn khung giờ phù hợp, chúng tôi sẽ liên hệ với bạn nhé!</p>
//       </div>
//       <div class="settime-form">
//         <div class="settime-form-top">
//           <input type="text" placeholder="Họ và tên">
//           <input type="phone" placeholder="Số điện thoại">
//         </div>
//         <div class="settime-form-bottom">
//           <input type="text" placeholder="Hẹn giờ">
//           <input type="phone" placeholder="Ghi chú (nếu có)">
//         </div>
//         <button class="settime-btn">TƯ VẤN</button>
//       </div>
//     </div>
//   </div>
//     </div>
//     <div id="footer-page">
//       <footer class="footer">
//   <div class="ft-tour">
//     <button class="ft-tour-btn">TÀ NĂNG PHAN DŨNG</button>
//     <button class="ft-tour-btn">TÀ ĐÙNG</button>
//     <button class="ft-tour-btn">PHƯỚC BÌNH - TÀ GIANG</button>
//     <button class="ft-tour-btn">HÒN SƠN</button>
//   </div>
//   <div class="ft-contact">
//     <div class="ft-contact-child">
//       <i class="bi bi-telephone-fill"></i>
//       <p>0906785477</p>
//     </div>
//     <div class="ft-contact-child">
//       <i class="bi bi-telephone-fill"></i>
//       <p>0906785477</p>
//     </div>
//     <div class="ft-contact-child">
//       <i class="bi bi-envelope-fill"></i>
//       <p>nhoangphuc960@gmail.com</p>
//     </div>
//     <div class="ft-contact-child">
//       <i class="bi bi-envelope-fill"></i>
//       <p>nhoangphuc960@gmail.com</p>
      
//     </div>
//   </div>
// </footer>
//     </div>
//   </div>
//   `
// }
// mainPageRender()


// Render trang Sign in, Sign up

let signupRender = () => {
  mainPage.innerHTML = `
  <div class="register">
  <img src="./img/signin.jpg" alt="" class="login-img">
  <div class="form-container">
    <div class="logo-container">
      Sign Up
    </div>
    <div class="line"></div>
    <div class="form">
      <div class="form-group">
        <label for="email">Email</label>
        <input placeholder="Enter your email" name="email" id="email" type="text">
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input name="password" placeholder="Enter your password" id="password" type="password">
      </div>

      <div class="form-group">
        <label for="password">Confirm Password</label>
        <input name="password" placeholder="Enter your password agian" id="confirm-password" type="password">
      </div>

      <button type="submit" class="form-submit-btn">Sign up</button>
    </div>
    <p class="ques-link">
      Have an account?
      <button class="register-link link"> Log In now</button>
    </p>
  </div>
</div>`;
};
let loginRender = () => {
  mainPage.innerHTML = `
  <div class="register">
  <img src="./img/signin.jpg" alt="" class="login-img">
  <div class="form-container">
    <div class="logo-container">
      Sign In
    </div>
    <div class="line"></div>
    <div class="form">
      <div class="form-group">
        <label for="email">Email</label>
        <input placeholder="Enter your email" name="email" id="email" type="text">
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input name="password" placeholder="Enter your password" id="password" type="password">
      </div>

      <button type="submit" class="form-submit-btn">Log In</button>
    </div>
    <p class="ques-link">
      Don't have an account?
      <button class="register-link link" href="#" id="sLog"> Sign up now</button>
    </p>
  </div>
  </div>`;
};

// Chức năng click của từng button

btnlog.addEventListener("click", () => {
  loginRender();
  navImgsigninRender()
});
btnsign.addEventListener("click", () => {
  signupRender();
  navImgsignupRender()
});
btnhome.addEventListener("click", () => {
mainPageRender()
navImghomeRender()
});

// Navbar effect

// window.addEventListener("scroll", () => {
//   let navbar = document.querySelector("header");
//   let scrollValue = window.scrollY;
//   if (scrollValue > 10) {
//     navbar.classList.add("BgcNav");
//   } else {
//     navbar.classList.remove("BgcNav");
//   }
// });
