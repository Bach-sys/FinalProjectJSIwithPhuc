import "./style.css";
import javascriptLogo from "./javascript.svg";

let nav = document.querySelector("#nav");
let mainPage = document.querySelector('#mainPage')
// Render Navbar

let navRender = () => {
  nav.innerHTML = `
  <header>
  <a href="#" class="nav-logo-link"><img class="nav-logo" src="./img/logo.PNG" alt=""></a>
  <div class="nav-main-child">
    <button class="btn-nav" id ="home" >Home</button>
    <button class="btn-nav" id="aboutus" >About us</button>
    <button class="btn-nav" id="contact" >Contact</button>
    <button class="btn-nav" id="bookTour" >Book tour</button>
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


let navImgtourRender = () => {
  navImg.innerHTML = `
  <div id="nav-main-img3">
    <p>Book Tour</p>
  </div>
  `
};
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
let navImgaboutusRender = () => {
  navImg.innerHTML = `
  <div id="nav-main-img4">
    <p>About Us</p>
  </div>
  `
};
let navImgcontactRender = () => {
  navImg.innerHTML = `
  <div id="nav-main-img5">
    <p>Contact</p>
  </div>
  `
};

let btnlog = document.querySelector("#btn-nav-log");
let btnsign = document.querySelector("#btn-nav-sign");
let btnhome = document.querySelector("#home");
let btnbooktour = document.querySelector("#bookTour")
let btnaboutus = document.querySelector("#aboutus")
let btncontact =document.querySelector("#contact")



// Render mainPage là div bao gồm tất cả các page

let mainPageRender = () => {
  mainPage.innerHTML=`
  <div id="homePage">
    <div id="page">
    <div class="introduce-page">
  <div class="introduce">
  <div class="introduce-child item">
    <div class="introduce-des">
    <h1 class="showtotop delay-02" >Tour Trekking</h1>
    <h2 class="showtotop delay-04">TÀ NĂNG PHAN DŨNG</h2>
      <p class="des showtotop delay-06">Không dễ dàng để Tà Năng được biết đến với cái tên: Cung đường Trekking đẹp nhất miền Nam. Vẻ đẹp trữ tình khiến bao người khao khát một lần được đặt chân đến đây và tận mắt chiêm ngưỡng. Cung đường trekking băng qua những triền đồi xanh mướt, phóng tầm mắt thưởng thức núi rừng xanh biếc và cảm nhận không khí trong trẻo khiến ta quên hết những vội vã thường nhật. 
      </p>
    <div class="inform showtotop delay-08">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"/></svg>    
    <p>35KM</p>
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M396.6 6.5L235.8 129.1c9.6 1.8 18.9 5.8 27 12l168 128c13.2 10.1 22 24.9 24.5 41.4l6.2 41.5H608c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128c-11.5-8.7-27.3-8.7-38.8 0zm-153.2 160c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S22.7 512 32 512H224V352l96 160h96c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z"/></svg>
    <p>2N-2Đ</p>
    <button class="detail showtotop delay-10">GIỚI THIỆU</button>
    </div>
    </div>
    <div class="TNPD">
    <img class="des-img showtotop delay-12" src="./img/TNPD.jpg" alt="">
    <img class="des-img showtotop delay-14" src="./img/TNPD2.jpg" alt="">
    <img class="des-img showtotop delay-16" src="./img/TNPD3.jpg" alt="">
    </div>
  </div>
</div>
</div>
    </div>
    <div id="page1">
    <div class="introduce-page1">
    <div class="introduce">
    <div class="introduce-child item">
      <div class="TNPD">
      <img class="des-img showtotop delay-12" src="./img/TD1.jpg" alt="">
      <img class="des-img showtotop delay-14" src="./img/TD2.png" alt="">
      <img class="des-img showtotop delay-18" src="./img/TD3.jpg" alt="">
      </div>
      <div class="introduce-des">
      <h1 class="showtotop delay-02">Tour Trekking</h1>
      <h2 class="showtotop delay-04">TÀ ĐÙNG</h2>
        <p class="des showtotop">Vịnh Hạ Long của Tây Nguyên đã làm xao xuyến bao nhiêu tâm hồn lữ khách. Nơi bình yên gõ cửa tâm hồn và bao muộn phiền dần tan biến trong màn sương mai. Con thuyền nhỏ đưa bạn dạo trên mặt hồ xanh biếc khám phá những nét đẹp êm đềm. Giấc mơ về chốn thần tiên nay đã gần ngay trước mắt bạn.
        </p>
      <div class="inform showtotop delay-08">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"/></svg>    
      <p>14KM</p>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M396.6 6.5L235.8 129.1c9.6 1.8 18.9 5.8 27 12l168 128c13.2 10.1 22 24.9 24.5 41.4l6.2 41.5H608c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128c-11.5-8.7-27.3-8.7-38.8 0zm-153.2 160c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S22.7 512 32 512H224V352l96 160h96c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z"/></svg>
      <p>2N-2Đ</p>
      <button class="detail showtotop delay-10">GIỚI THIỆU</button>
      </div>
      </div>
    </div>
  </div>
  </div>
    </div>
    <div id="page2">  
    <div class="introduce-page2">
    <div class="introduce">
    <div class="introduce-child item">
      <div class="introduce-des">
      <h1 class="showtotop delay-02">Tour Trekking</h1>
      <h2 class="showtotop delay-04">PHƯỚC BÌNH - TÀ GIANG</h2>
        <p class="des showtotop delay-06">Nâng cấp trải nghiệm với hành trình Bidoup – Phước Bình – Tà Giang – Cung đường đẹp bậc nhất miền Nam cùng The happy trip và những người bạn vui tính.
        Quãng đường trekking 28km, xuyên qua 3 tỉnh Lâm Đồng – Ninh Thuận – Khánh Hoà là mục tiêu chinh phục của những trekkers thực thụ.
        </p>
      <div class="inform showtotop delay-08">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"/></svg>    
      <p>28KM</p>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M396.6 6.5L235.8 129.1c9.6 1.8 18.9 5.8 27 12l168 128c13.2 10.1 22 24.9 24.5 41.4l6.2 41.5H608c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128c-11.5-8.7-27.3-8.7-38.8 0zm-153.2 160c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S22.7 512 32 512H224V352l96 160h96c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z"/></svg>
      <p>2N-2Đ</p>
      <button class="detail showtotop delay-10">GIỚI THIỆU</button>
      </div>
      </div>
      <div class="TNPD">
      <img class="des-img showtotop delay-12" src="./img/PBTG1.jpg" alt="">
      <img class="des-img showtotop delay-14" src="./img/PBTG2.jpg" alt="">
      <img class="des-img showtotop delay-16" src="./img/PBTG3.jpg" alt="">
      </div>
    </div>
  </div>
  </div></div>
    <div id="page3">
    <div class="introduce-page3">
    <div class="introduce">
    <div class="introduce-child item">
      <div class="TNPD">
      <img class="des-img showtotop delay-12" src="./img/HS1.jpg" alt="">
      <img class="des-img showtotop delay-14" src="./img/HS2.jpg" alt="">
      <img class="des-img showtotop delay-16" src="./img/HS3.jpg" alt="">
      </div>
      <div class="introduce-des">
      <h1 class="showtotop delay-02">Tour Trekking</h1>
      <h2 class="showtotop delay-04">HÒN SƠN</h2>
        <p class="des showtotop delay-06">Hành trình là sự kết hợp các trải nghiệm biển đảo đa dạng: khám phá hòn đảo xinh đẹp bằng xe máy, trekking chinh phục đỉnh Ma Thiên Lãnh, ngắm toàn cảnh Đảo Hòn Sơn từ bãi đá tiên.
        </p>
      <div class="inform showtotop delay-08">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"/></svg>    
      <p>14KM</p>
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M396.6 6.5L235.8 129.1c9.6 1.8 18.9 5.8 27 12l168 128c13.2 10.1 22 24.9 24.5 41.4l6.2 41.5H608c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128c-11.5-8.7-27.3-8.7-38.8 0zm-153.2 160c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S22.7 512 32 512H224V352l96 160h96c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z"/></svg>
      <p>2N-2Đ</p>
      <button class="detail showtotop delay-10">GIỚI THIỆU</button>
      </div>
      </div>
    </div>
  </div>
  </div>
    </div>
    <div id="page4">
    <div class="img-settime">
    <div class="settime item">
      <div class="settime-des">
        <h1 class="settime-des-h1">TƯ VẤN TREKKING</h1>
      <p class="settime-des-p">Bạn lần đầu đi trekking hoặc chỉ đang cần thêm thông tin về hành trình để tham khảo, đội ngũ The happy trip sẵn sàng hỗ trợ bạn thêm thông tin để dễ hình dung nhất. Hãy chọn khung giờ phù hợp, chúng tôi sẽ liên hệ với bạn nhé!</p>
      </div>
      <div class="settime-form">
        <div class="settime-form-top">
          <input type="text" placeholder="Họ và tên">
          <input type="phone" placeholder="Số điện thoại">
        </div>
        <div class="settime-form-bottom">
          <input type="text" placeholder="Hẹn giờ">
          <input type="phone" placeholder="Ghi chú (nếu có)">
        </div>
        <button class="settime-btn">TƯ VẤN</button>
      </div>
    </div>
  </div>
    </div>
  </div>
  `
}
mainPageRender()





// Render trang Book Tour 

let bookTourRender = () => {
  mainPage.innerHTML = `
  <div id="tourPage">
  <h1 class="showtotop" >HÀNH TRÌNH TREKKING CÙNG THE HAPPY TRIP</h1>
  <div class="bookTour item">
    <div class="tourContainer">
      <div class="tourProduct showtotop delay-02">
        <img src="./img/TNPD.jpg" alt="" class="tourProductimg">
        <div class="tourProductdes">
          <h2>Tà năng phan dũng</h2>
          <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35kms</p>
          <div class="tourProductdes-child">
            <i class="bi bi-pin-map-fill"></i>
            <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
          </div>
          <div class="tourProductdes-child">
            <i class="bi bi-clock-fill"></i>
            <p>Thời gian: 2 ngày 2 đêm</p>
          </div>
          <div class="tourProductdes-child">
            <i class="bi bi-trophy-fill"></i>
            <p>Độ khó: 7/10</p>
          </div>
        </div>
        <div class="tourProductsubmit">
          <p>Giá: 3.500.000 VNĐ</p>
          <button class="tourProduct-btn">XEM CHI TIẾT</button>
        </div>
      </div>
      <div class="tourProduct showtotop delay-04">
        <img src="./img/TNPD.jpg" alt="" class="tourProductimg">
        <div class="tourProductdes">
          <h2>Tà năng phan dũng</h2>
          <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35kms</p>
          <div class="tourProductdes-child">
            <i class="bi bi-pin-map-fill"></i>
            <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
          </div>
          <div class="tourProductdes-child">
            <i class="bi bi-clock-fill"></i>
            <p>Thời gian: 2 ngày 2 đêm</p>
          </div>
          <div class="tourProductdes-child">
            <i class="bi bi-trophy-fill"></i>
            <p>Độ khó: 7/10</p>
          </div>
        </div>
        <div class="tourProductsubmit">
          <p>Giá: 3.500.000 VNĐ</p>
          <button class="tourProduct-btn">XEM CHI TIẾT</button>
        </div>
      </div>
      <div class="tourProduct showtotop delay-06">
      <img src="./img/TNPD.jpg" alt="" class="tourProductimg">
      <div class="tourProductdes">
        <h2>Tà năng phan dũng</h2>
        <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35kms</p>
        <div class="tourProductdes-child">
          <i class="bi bi-pin-map-fill"></i>
          <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
        </div>
        <div class="tourProductdes-child">
          <i class="bi bi-clock-fill"></i>
          <p>Thời gian: 2 ngày 2 đêm</p>
        </div>
        <div class="tourProductdes-child">
          <i class="bi bi-trophy-fill"></i>
          <p>Độ khó: 7/10</p>
        </div>
      </div>
      <div class="tourProductsubmit">
        <p>Giá: 3.500.000 VNĐ</p>
        <button class="tourProduct-btn">XEM CHI TIẾT</button>
      </div>
    </div>
    <div class="tourProduct showtotop delay-08">
      <img src="./img/TNPD.jpg" alt="" class="tourProductimg">
      <div class="tourProductdes">
        <h2>Tà năng phan dũng</h2>
        <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35kms</p>
        <div class="tourProductdes-child">
          <i class="bi bi-pin-map-fill"></i>
          <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
        </div>
        <div class="tourProductdes-child">
          <i class="bi bi-clock-fill"></i>
          <p>Thời gian: 2 ngày 2 đêm</p>
        </div>
        <div class="tourProductdes-child">
          <i class="bi bi-trophy-fill"></i>
          <p>Độ khó: 7/10</p>
        </div>
      </div>
      <div class="tourProductsubmit">
        <p>Giá: 3.500.000 VNĐ</p>
        <button class="tourProduct-btn">XEM CHI TIẾT</button>
      </div>
    </div>
    <div class="tourProduct showtotop delay-10">
    <img src="./img/TNPD.jpg" alt="" class="tourProductimg">
    <div class="tourProductdes">
      <h2>Tà năng phan dũng</h2>
      <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35kms</p>
      <div class="tourProductdes-child">
        <i class="bi bi-pin-map-fill"></i>
        <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
      </div>
      <div class="tourProductdes-child">
        <i class="bi bi-clock-fill"></i>
        <p>Thời gian: 2 ngày 2 đêm</p>
      </div>
      <div class="tourProductdes-child">
        <i class="bi bi-trophy-fill"></i>
        <p>Độ khó: 7/10</p>
      </div>
    </div>
    <div class="tourProductsubmit">
      <p>Giá: 3.500.000 VNĐ</p>
      <button class="tourProduct-btn">XEM CHI TIẾT</button>
    </div>
  </div>
  <div class="tourProduct showtotop delay-12">
  <img src="./img/TNPD.jpg" alt="" class="tourProductimg">
  <div class="tourProductdes">
    <h2>Tà năng phan dũng</h2>
    <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35kms</p>
    <div class="tourProductdes-child">
      <i class="bi bi-pin-map-fill"></i>
      <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
    </div>
    <div class="tourProductdes-child">
      <i class="bi bi-clock-fill"></i>
      <p>Thời gian: 2 ngày 2 đêm</p>
    </div>
    <div class="tourProductdes-child">
      <i class="bi bi-trophy-fill"></i>
      <p>Độ khó: 7/10</p>
    </div>
  </div>
  <div class="tourProductsubmit">
    <p>Giá: 3.500.000 VNĐ</p>
    <button class="tourProduct-btn">XEM CHI TIẾT</button>
  </div>
</div>
<div class="tourProduct showtotop delay-12">
  <img src="./img/TNPD.jpg" alt="" class="tourProductimg">
  <div class="tourProductdes">
    <h2>Tà năng phan dũng</h2>
    <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35kms</p>
    <div class="tourProductdes-child">
      <i class="bi bi-pin-map-fill"></i>
      <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
    </div>
    <div class="tourProductdes-child">
      <i class="bi bi-clock-fill"></i>
      <p>Thời gian: 2 ngày 2 đêm</p>
    </div>
    <div class="tourProductdes-child">
      <i class="bi bi-trophy-fill"></i>
      <p>Độ khó: 7/10</p>
    </div>
  </div>
  <div class="tourProductsubmit">
    <p>Giá: 3.500.000 VNĐ</p>
    <button class="tourProduct-btn">XEM CHI TIẾT</button>
  </div>
</div>
<div class="tourProduct showtotop delay-14">
<img src="./img/TNPD.jpg" alt="" class="tourProductimg">
<div class="tourProductdes">
  <h2>Tà năng phan dũng</h2>
  <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35kms</p>
  <div class="tourProductdes-child">
    <i class="bi bi-pin-map-fill"></i>
    <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
  </div>
  <div class="tourProductdes-child">
    <i class="bi bi-clock-fill"></i>
    <p>Thời gian: 2 ngày 2 đêm</p>
  </div>
  <div class="tourProductdes-child">
    <i class="bi bi-trophy-fill"></i>
    <p>Độ khó: 7/10</p>
  </div>
</div>
<div class="tourProductsubmit">
  <p>Giá: 3.500.000 VNĐ</p>
  <button class="tourProduct-btn">XEM CHI TIẾT</button>
</div>
</div>
<div class="tourProduct showtotop delay-16">
<img src="./img/TNPD.jpg" alt="" class="tourProductimg">
<div class="tourProductdes">
  <h2>Tà năng phan dũng</h2>
  <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35kms</p>
  <div class="tourProductdes-child">
    <i class="bi bi-pin-map-fill"></i>
    <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
  </div>
  <div class="tourProductdes-child">
    <i class="bi bi-clock-fill"></i>
    <p>Thời gian: 2 ngày 2 đêm</p>
  </div>
  <div class="tourProductdes-child">
    <i class="bi bi-trophy-fill"></i>
    <p>Độ khó: 7/10</p>
  </div>
</div>
<div class="tourProductsubmit">
  <p>Giá: 3.500.000 VNĐ</p>
  <button class="tourProduct-btn">XEM CHI TIẾT</button>
</div>
</div>
      <div class="tourProduct showtotop delay-18">
        <img src="./img/TNPD.jpg" alt="" class="tourProductimg">
        <div class="tourProductdes">
          <h2>Tà năng phan dũng</h2>
          <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35kms</p>
          <div class="tourProductdes-child">
            <i class="bi bi-pin-map-fill"></i>
            <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
          </div>
          <div class="tourProductdes-child">
            <i class="bi bi-clock-fill"></i>
            <p>Thời gian: 2 ngày 2 đêm</p>
          </div>
          <div class="tourProductdes-child">
            <i class="bi bi-trophy-fill"></i>
            <p>Độ khó: 7/10</p>
          </div>
        </div>
        <div class="tourProductsubmit">
          <p>Giá: 3.500.000 VNĐ</p>
          <button class="tourProduct-btn">XEM CHI TIẾT</button>
        </div>
      </div>
      <div class="tourProduct">
      <img src="./img/TNPD.jpg" alt="" class="tourProductimg">
      <div class="tourProductdes">
        <h2>Tà năng phan dũng</h2>
        <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35kms</p>
        <div class="tourProductdes-child">
          <i class="bi bi-pin-map-fill"></i>
          <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
        </div>
        <div class="tourProductdes-child">
          <i class="bi bi-clock-fill"></i>
          <p>Thời gian: 2 ngày 2 đêm</p>
        </div>
        <div class="tourProductdes-child">
          <i class="bi bi-trophy-fill"></i>
          <p>Độ khó: 7/10</p>
        </div>
      </div>
      <div class="tourProductsubmit">
        <p>Giá: 3.500.000 VNĐ</p>
        <button class="tourProduct-btn">XEM CHI TIẾT</button>
      </div>
    </div>
    <div class="tourProduct">
        <img src="./img/TNPD.jpg" alt="" class="tourProductimg">
        <div class="tourProductdes">
          <h2>Tà năng phan dũng</h2>
          <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35kms</p>
          <div class="tourProductdes-child">
            <i class="bi bi-pin-map-fill"></i>
            <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
          </div>
          <div class="tourProductdes-child">
            <i class="bi bi-clock-fill"></i>
            <p>Thời gian: 2 ngày 2 đêm</p>
          </div>
          <div class="tourProductdes-child">
            <i class="bi bi-trophy-fill"></i>
            <p>Độ khó: 7/10</p>
          </div>
        </div>
        <div class="tourProductsubmit">
          <p>Giá: 3.500.000 VNĐ</p>
          <button class="tourProduct-btn">XEM CHI TIẾT</button>
        </div>
      </div>
      <div class="tourProduct">
      <img src="./img/TNPD.jpg" alt="" class="tourProductimg">
      <div class="tourProductdes">
        <h2>Tà năng phan dũng</h2>
        <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35kms</p>
        <div class="tourProductdes-child">
          <i class="bi bi-pin-map-fill"></i>
          <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
        </div>
        <div class="tourProductdes-child">
          <i class="bi bi-clock-fill"></i>
          <p>Thời gian: 2 ngày 2 đêm</p>
        </div>
        <div class="tourProductdes-child">
          <i class="bi bi-trophy-fill"></i>
          <p>Độ khó: 7/10</p>
        </div>
      </div>
      <div class="tourProductsubmit">
        <p>Giá: 3.500.000 VNĐ</p>
        <button class="tourProduct-btn">XEM CHI TIẾT</button>
      </div>
    </div>
    <div class="tourProduct">
        <img src="./img/TNPD.jpg" alt="" class="tourProductimg">
        <div class="tourProductdes">
          <h2>Tà năng phan dũng</h2>
          <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35kms</p>
          <div class="tourProductdes-child">
            <i class="bi bi-pin-map-fill"></i>
            <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
          </div>
          <div class="tourProductdes-child">
            <i class="bi bi-clock-fill"></i>
            <p>Thời gian: 2 ngày 2 đêm</p>
          </div>
          <div class="tourProductdes-child">
            <i class="bi bi-trophy-fill"></i>
            <p>Độ khó: 7/10</p>
          </div>
        </div>
        <div class="tourProductsubmit">
          <p>Giá: 3.500.000 VNĐ</p>
          <button class="tourProduct-btn">XEM CHI TIẾT</button>
        </div>
      </div>
      <div class="tourProduct">
      <img src="./img/TNPD.jpg" alt="" class="tourProductimg">
      <div class="tourProductdes">
        <h2>Tà năng phan dũng</h2>
        <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35kms</p>
        <div class="tourProductdes-child">
          <i class="bi bi-pin-map-fill"></i>
          <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
        </div>
        <div class="tourProductdes-child">
          <i class="bi bi-clock-fill"></i>
          <p>Thời gian: 2 ngày 2 đêm</p>
        </div>
        <div class="tourProductdes-child">
          <i class="bi bi-trophy-fill"></i>
          <p>Độ khó: 7/10</p>
        </div>
      </div>
      <div class="tourProductsubmit">
        <p>Giá: 3.500.000 VNĐ</p>
        <button class="tourProduct-btn">XEM CHI TIẾT</button>
      </div>
    </div>
      <div class="tourProduct">
      <img src="./img/TNPD.jpg" alt="" class="tourProductimg">
      <div class="tourProductdes">
        <h2>Tà năng phan dũng</h2>
        <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35kms</p>
        <div class="tourProductdes-child">
          <i class="bi bi-pin-map-fill"></i>
          <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
        </div>
        <div class="tourProductdes-child">
          <i class="bi bi-clock-fill"></i>
          <p>Thời gian: 2 ngày 2 đêm</p>
        </div>
        <div class="tourProductdes-child">
          <i class="bi bi-trophy-fill"></i>
          <p>Độ khó: 7/10</p>
        </div>
      </div>
      <div class="tourProductsubmit">
        <p>Giá: 3.500.000 VNĐ</p>
        <button class="tourProduct-btn">XEM CHI TIẾT</button>
      </div>
    </div>
    <div class="tourProduct">
    <img src="./img/TNPD.jpg" alt="" class="tourProductimg">
    <div class="tourProductdes">
      <h2>Tà năng phan dũng</h2>
      <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35kms</p>
      <div class="tourProductdes-child">
        <i class="bi bi-pin-map-fill"></i>
        <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
      </div>
      <div class="tourProductdes-child">
        <i class="bi bi-clock-fill"></i>
        <p>Thời gian: 2 ngày 2 đêm</p>
      </div>
      <div class="tourProductdes-child">
        <i class="bi bi-trophy-fill"></i>
        <p>Độ khó: 7/10</p>
      </div>
    </div>
    <div class="tourProductsubmit">
      <p>Giá: 3.500.000 VNĐ</p>
      <button class="tourProduct-btn">XEM CHI TIẾT</button>
    </div>
  </div>
  <div class="tourProduct">
  <img src="./img/TNPD.jpg" alt="" class="tourProductimg">
  <div class="tourProductdes">
    <h2>Tà năng phan dũng</h2>
    <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35kms</p>
    <div class="tourProductdes-child">
      <i class="bi bi-pin-map-fill"></i>
      <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
    </div>
    <div class="tourProductdes-child">
      <i class="bi bi-clock-fill"></i>
      <p>Thời gian: 2 ngày 2 đêm</p>
    </div>
    <div class="tourProductdes-child">
      <i class="bi bi-trophy-fill"></i>
      <p>Độ khó: 7/10</p>
    </div>
  </div>
  <div class="tourProductsubmit">
    <p>Giá: 3.500.000 VNĐ</p>
    <button class="tourProduct-btn">XEM CHI TIẾT</button>
  </div>
</div>
    </div>
  </div>
</div>
  `
}





// Render trang About Us

let aboutUsRender = () => {
  mainPage.innerHTML = `
  
  <div id="aboutUs">
        <div class="aboutUs-Container item">
          <h1 class="showtotop delay-02">GIỚI THIỆU VỀ THE HAPPY TRIP</h1>
          <p class="showtotop delay-04">
            The Happy Trip là đơn vị chuyên tổ chức các tour du lịch mạo hiểm ở Việt Nam gắn liền với trải nghiệm thiên nhiên. Hiện nay, The Happy Trip đang là đơn vị tổ chức các tour trekking, climbing, camping kết hợp với các môn thể thao mạo hiểm như leo vách đá, chèo thuyền hơi, chèo kayak, zipline và nhận được sự tin tưởng và yêu thích của các khách hàng hàng đầu miền Nam. 
          </p>
          <p class="showtotop delay-04">
            Với ba giá trị cốt lõi An toàn – Chuyên nghiệp – Bền Vững, The Happy Trip luôn tập trung vào xây dựng chất lượng chuyên môn của đội ngũ, để mang đến cho khách hàng những trải nghiệm đáng giá mà vẫn đảm bảo an toàn, kĩ thuật. Xem thiên nhiên là nguồn sống, Tổ Ong luôn kết hợp với các Vườn Quốc Gia và địa phương để cùng xây dựng cộng đồng bền vững với thiên nhiên và đời sống của người dân địa phương. 
          </p>
          <div class="aboutUs-child">
            
            <div class="aboutUs-inform showtotop delay-06">
              <h2>AN TOÀN</h2>
              <p>Giá trị an toàn được The Happy Trip đưa lên là kim chỉ nam của công ty. Mọi hoạt động với khách hàng đều phải đặt giá trị này làm trọng tâm. Chúng tôi quan niệm rằng, thiên nhiên kỳ vĩ luôn ẩn chứa những thách thức, vì vậy để được sống và làm bạn cùng thiên nhiên, ta phải trang bị những kiến thức sinh tồn và kĩ năng bảo vệ bản thân thật tốt. Để trải nghiệm của khách hàng được chỉnh chu nhất, để công việc của chúng tôi được trọn vẹn nhất, an toàn là yếu tố hàng đầu.
              </p>
            </div>
            <div class="aboutUs-inform showtotop delay-06">
              <h2>CHUYÊN NGHIỆP</h2>
              <p>
                Là một trong những đơn vị đầu tiên khai thác bài bản về du lịch trekking ở Miền Nam và định hướng trở thành công ty du lịch mạo hiểm hàng đầu. Chúng tôi nỗ lực trau dồi kiến thức, chuyên môn và nghiệp vụ mỗi ngày.
              </p>
            </div>
            <div class="aboutUs-inform showtotop delay-06">
              <h2>BỀN VỮNG</h2>
              <p>
                Tất cả những hoạt động của The Happy Trip đều gắn liền với thiên nhiên và con người. Vì vậy, song song với những hoạt động du lịch, chúng tôi luôn có những biện pháp và phương án bảo tồn thiên nhiên, nâng cao đời sống của người dân địa phương nơi chúng tôi làm việc.
              </p>
            </div>
          </div>
        </div>
        <div class="aboutUs-bg"></div>
      </div>`
}





//Render trang Contact
let contactRender = () =>{
  mainPage.innerHTML = `
  <div id="contactPage">
  <div class="contactContainer iten">
    <div class="formContact item">
      <h1 class="showtotop" >Contact Us</h1>
      <p class="showtotop delay-02">Họ</p>
      <input class="showtotop delay-04" type="text" placeholder="Họ">
      <p class="showtotop delay-06">Tên</p>
      <input class="showtotop delay-08" type="text" placeholder="Tên">
      <p class="showtotop delay-10">Email</p>
      <input class="showtotop delay-12" type="email" placeholder="Email">
      <p class="showtotop delay-14">Số điện thoại</p>
      <input class="showtotop delay-16" type="text" placeholder="Số điện thoại">
      <p class="showtotop delay-18">Lời nhắn</p>
      <input class="showtotop delay-20" type="text" id="message" placeholder="Nhắn gửi">
      <button class="showtotop delay-22">Gửi</button>
    </div>
    <div class="ourContact item">
      <div class="formOur item showtotop">
        <img class="showtotop delay-02" src="./img/sign-up.jpg" alt="">
        <div class="informContact">
          <p class="showtotop delay-04">Tên: Nguyễn Hoàng Phúc</p>
          <p class="showtotop delay-06">Email: nhoangphuc960@gmail.com</p>
          <p class="showtotop delay-08">Số điện thoại: 0906785477</p>
        </div>
      </div>
      <div class="formOur item showtotop">
        <img class="showtotop delay-12" src="./img/sign-in.jpg" alt="">
        <div class="informContact">
          <p class="showtotop delay-14">Tên: Lê Hoàng Bách</p>
          <p class="showtotop delay-16">Email: Bachloppho1202@gmail.com</p>
          <p class="showtotop delay-18">Số điện thoại: 0838673979</p>
        </div>
      </div>
      <div class="otherContact item">
        <h1 class="showtotop delay-20">Other way to contact us</h1>
        <div class="otherContact-child">
          <img class="showtotop delay-20"src="./img/sign-in.jpg" alt="">
          <img class="showtotop delay-20"src="./img/sign-in.jpg" alt="">
          <img class="showtotop delay-20"src="./img/sign-in.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
  <div class="contactBg"></div>
</div>
  `
}





// Render trang Sign in, Sign up

let signupRender = () => {
  mainPage.innerHTML = `
  <div class="register item">
  <img src="./img/sign-up.jpg" alt="" class="login-img showtotop">
  <div class="form-container item">
    <div class="logo-container showtotop">
      Sign Up
    </div>
    <div class="line"></div>
    <div class="form item">
      <div class="form-group item">
        <label for="email" class="showtotop delay-02" >Email</label>
        <input class="showtotop delay-04" placeholder="Enter your email" name="email" id="email" type="text">
      </div>

      <div class="form-group item">
        <label for="password" class="showtotop delay-06">Password</label>
        <input class="showtotop delay-08" name="password" placeholder="Enter your password" id="password" type="password">
      </div>

      <div class="form-group item">
        <label class="showtotop delay-10" for="password">Confirm Password</label>
        <input class="showtotop delay-12" name="password" placeholder="Enter your password agian" id="confirm-password" type="password">
      </div>

      <button type="submit" class="form-submit-btn showtotop delay-14">Sign up</button>
    </div>
    <p class="ques-link showtotop delay-16">
      Have an account?
      <button class="register-link link"> Log In now</button>
    </p>
  </div>
</div>
`;
};
let loginRender = () => {
  mainPage.innerHTML = `
  <div class="register item">
  <img src="./img/sign-in.jpg" alt="" class="login-img showtotop">
  <div class="form-container item">
    <div class="logo-container showtotop">
      Sign In
    </div>
    <div class="line"></div>
    <div class="form item">
      <div class="form-group item">
        <label class="showtotop delay-02" for="email">Email</label>
        <input class="showtotop delay-04" placeholder="Enter your email" name="email" id="email" type="text">
      </div>

      <div class="form-group item">
        <label class="showtotop delay-06" for="password">Password</label>
        <input class="showtotop delay-08" name="password" placeholder="Enter your password" id="password" type="password">
      </div>

      <button type="submit" class="form-submit-btn showtotop delay-10">Log In</button>
    </div>
    <p class="ques-link showtotop delay-12">
      Don't have an account?
      <button class="register-link link" href="#" id="sLog"> Sign up now</button>
    </p>
  </div>
  </div>
  `;
};




// Render footer
let footer = document.querySelector("#footer")
let footerRender = () => {
  footer.innerHTML = `
  <footer class="footer">
  <div class="ft-tour">
    <button class="ft-tour-btn">TÀ NĂNG PHAN DŨNG</button>
    <button class="ft-tour-btn">TÀ ĐÙNG</button>
    <button class="ft-tour-btn">PHƯỚC BÌNH - TÀ GIANG</button>
    <button class="ft-tour-btn">HÒN SƠN</button>
  </div>
  <div class="ft-contact">
    <div class="ft-contact-child">
      <i class="bi bi-telephone-fill"></i>
      <p>0906785477</p>
    </div>
    <div class="ft-contact-child">
      <i class="bi bi-telephone-fill"></i>
      <p>0906785477</p>
    </div>
    <div class="ft-contact-child">
      <i class="bi bi-envelope-fill"></i>
      <p>nhoangphuc960@gmail.com</p>
    </div>
    <div class="ft-contact-child">
      <i class="bi bi-envelope-fill"></i>
      <p>nhoangphuc960@gmail.com</p>
    </div>
  </div>
</footer>
  `
}
footerRender()



// Chức năng click của từng button

btnlog.addEventListener("click", () => {
  loginRender();
  navImgsigninRender()
  footerRender()
});
btnsign.addEventListener("click", () => {
  signupRender();
  navImgsignupRender()
  footerRender()
});
btnhome.addEventListener("click", () => {
  mainPageRender()
  navImghomeRender()
});
btnbooktour.addEventListener("click", () => {
  bookTourRender()
  navImgtourRender()
  footerRender()
  });
btnaboutus.addEventListener("click", () => {
  aboutUsRender()
  navImgaboutusRender()
  footerRender()
    });
btncontact.addEventListener("click", () => {
  contactRender();
  navImgcontactRender()
  footerRender()
})



// Navbar effect

window.addEventListener('scroll', () =>{
  let items = document.querySelectorAll('.item');
  let navbar = document.querySelector('header')
  let scrollValue = window.scrollY;
  if(scrollValue > 10){
    navbar.classList.add('BgcNav')

  }else{
    navbar.classList.remove('BgcNav')
  }    items.forEach(item =>{
    if(item.offsetTop - window.scrollY < 750){
        item.classList.add('active');
    }
})
})


