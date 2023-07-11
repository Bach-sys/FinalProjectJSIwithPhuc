export function navRender(nav) {
  nav.innerHTML = `
    <header>
    <a href="#" class="nav-logo-link"><img class="nav-logo" src="./img/logo.PNG" alt=""></a>
    <div class="nav-main-child">
    <p class="alert">Please SignIn or Signup for the best experiment</p>
      <button><a  class="btn-nav" href="#" id="home">Home</a></button>
      <button><a  class="btn-nav" id="aboutus" href="#">About us</a></button>
      <button><a  class="btn-nav" id="contact" href="#">Contact</a></button>
      <button><a  class="btn-nav" id="bookTour" href="#">Book tour</a></button>
      <button><a  class="btn-nav" id="btn-nav-log" href="#">Sign In</a></button>
      <button><a class="btn-nav" id="btn-nav-sign" href="#">Sign Up</a></button>
      <button><a  class="btn-nav-cart" id="cart" href="#">
      <i class="bi bi-bag-fill"></i>
      <p>0</p>
      </a></button>
    </div>
  </header>
  <div id="nav-img"></div>
    `;
}
export function navImghomeRender(navImg) {
  navImg.innerHTML = `
    <div id="nav-main-img">
      <p>TREKKING</p>
    </div>
    `;
}
export function navImgtourRender(navImg) {
  navImg.innerHTML = `
    <div id="nav-main-img3">
      <p>Book Tour</p>
    </div>
    `;
}
export function navImgsigninRender(navImg) {
  navImg.innerHTML = `
    <div id="nav-main-img1">
      <p>Sign In</p>
    </div>
    `;
}
export function navImgsignupRender(navImg) {
  navImg.innerHTML = `
    <div id="nav-main-img2">
      <p>Sign Up</p>
    </div>
    `;
}
export function navImgaboutusRender(navImg) {
  navImg.innerHTML = `
    <div id="nav-main-img4">
      <p>About Us</p>
    </div>
    `;
}
export function navImgcontactRender(navImg) {
  navImg.innerHTML = `
    <div id="nav-main-img5">
      <p>Contact</p>
    </div>
    `;
}
export function navImgcartRender(navImg) {
  navImg.innerHTML = `
    <div id="nav-main-img6">
      <p>SUBCRISED</p>
    </div>
    `;
}
export function navImgtnpdRender(navImg) {
  navImg.innerHTML = `
    <div id="nav-main-img7">
      <p>TÀ NĂNG PHAN DŨNG</p>
    </div>
    `;
}

export function mainPageRender(mainPage) {
  mainPage.style.display = "block";
  mainPage.innerHTML = `
  <div id="homePage">
  <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/img-trekk3.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./img/img-trekk.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./img/book-tour.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./img/about-us.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./img/contact-page.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
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
  `;
}

export function bookTourRender(mainPage,data) {
  mainPage.style.display = "flex";
  mainPage.style.flexDirection = "row";
  mainPage.style.justifyContent = "space-between";
  mainPage.style.flexWrap = "wrap";
  let render = data.map((data) => {
    return `
   <div class="tourProduct" style ="gap:100px;">
   <img src="${data.img}" alt="" class="tourProductimg">
   <div class="tourProductdes">
     <h2>${data.Title}</h2>
     <p>Hành Trình: ${data.Tongquan}}</p>
     <div class="tourProductdes-child">
       <i class="bi bi-pin-map-fill"></i>
       <p>Nơi khởi hành: ${data.startPlace}}</p>
     </div>
     <div class="tourProductdes-child">
       <i class="bi bi-clock-fill"></i>
       <p>Thời gian:${data.Thoigian}</p>
     </div>
     <div class="tourProductdes-child">
       <i class="bi bi-trophy-fill"></i>
       <p>Độ khó: ${data.Level}</p>
     </div>
   </div>
   <div class="tourProductsubmit">
     <p>Giá: ${data.Price} VNĐ</p>
     <button class="tourProduct-btn" id="TNPDpage">XEM CHI TIẾT</button>
   </div>
  </div>
  `;
  });
  mainPage.innerHTML = render.join("");
}

export function aboutUsRender(mainPage) {
  mainPage.style.display = "block";
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
      </div>`;
}

export function contactRender(mainPage) {
  mainPage.style.display = "block";
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
  `;
}

export function cartRender(mainPage) {
  mainPage.style.display = "block";
  mainPage.innerHTML = `
  <div id="cart">
  <div class="cartContainer item">
    <h1 class="showtotop" >SUBCRISED</h1>
    <div class="cartProduct item">
      <div class="productSubcrised item showtotop delay-02">
        <img src="./img/about-us.jpg" alt="">
        <div class="subProduct-inform">
          <h2>Tà năng phan dũng</h2>
          <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35km</p>
          <div class="subProduct-child">
            <i class="bi bi-pin-map-fill"></i>
            <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
          </div>
          <div class="subProduct-child">
            <i class="bi bi-clock-fill"></i>
            <p>Thời gian: 2 ngày 2 đêm</p>
          </div>
          <div class="subProduct-child">
            <i class="bi bi-trophy-fill"></i>
            <p>Độ khó: 7/10</p>
          </div>
          <h3>Đã đăng ký</h3>
        </div>
      </div>
      <div class="productSubcrised item showtotop delay-04">
        <img src="./img/about-us.jpg" alt="">
        <div class="subProduct-inform">
          <h2>Tà năng phan dũng</h2>
          <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35km</p>
          <div class="subProduct-child">
            <i class="bi bi-pin-map-fill"></i>
            <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
          </div>
          <div class="subProduct-child">
            <i class="bi bi-clock-fill"></i>
            <p>Thời gian: 2 ngày 2 đêm</p>
          </div>
          <div class="subProduct-child">
            <i class="bi bi-trophy-fill"></i>
            <p>Độ khó: 7/10</p>
          </div>
          <h3>Đã đăng ký</h3>
        </div>
      </div>
      <div class="productSubcrised item showtotop delay-06">
        <img src="./img/about-us.jpg" alt="">
        <div class="subProduct-inform">
          <h2>Tà năng phan dũng</h2>
          <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35km</p>
          <div class="subProduct-child">
            <i class="bi bi-pin-map-fill"></i>
            <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
          </div>
          <div class="subProduct-child">
            <i class="bi bi-clock-fill"></i>
            <p>Thời gian: 2 ngày 2 đêm</p>
          </div>
          <div class="subProduct-child">
            <i class="bi bi-trophy-fill"></i>
            <p>Độ khó: 7/10</p>
          </div>
          <h3>Đã đăng ký</h3>
        </div>
      </div>
      <div class="productSubcrised item showtotop delay-08">
        <img src="./img/about-us.jpg" alt="">
        <div class="subProduct-inform">
          <h2>Tà năng phan dũng</h2>
          <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35km</p>
          <div class="subProduct-child">
            <i class="bi bi-pin-map-fill"></i>
            <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
          </div>
          <div class="subProduct-child">
            <i class="bi bi-clock-fill"></i>
            <p>Thời gian: 2 ngày 2 đêm</p>
          </div>
          <div class="subProduct-child">
            <i class="bi bi-trophy-fill"></i>
            <p>Độ khó: 7/10</p>
          </div>
          <h3>Đã đăng ký</h3>
        </div>
      </div>
      <div class="productSubcrised item showtotop delay-10">
        <img src="./img/about-us.jpg" alt="">
        <div class="subProduct-inform">
          <h2>Tà năng phan dũng</h2>
          <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35km</p>
          <div class="subProduct-child">
            <i class="bi bi-pin-map-fill"></i>
            <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
          </div>
          <div class="subProduct-child">
            <i class="bi bi-clock-fill"></i>
            <p>Thời gian: 2 ngày 2 đêm</p>
          </div>
          <div class="subProduct-child">
            <i class="bi bi-trophy-fill"></i>
            <p>Độ khó: 7/10</p>
          </div>
          <h3>Đã đăng ký</h3>
        </div>
      </div>
      <div class="productSubcrised item showtotop delay-12">
        <img src="./img/about-us.jpg" alt="">
        <div class="subProduct-inform">
          <h2>Tà năng phan dũng</h2>
          <p>Hành Trình: Xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận tổng chiều dài 35km</p>
          <div class="subProduct-child">
            <i class="bi bi-pin-map-fill"></i>
            <p>Nơi khởi hành: TP. Hồ Chí Minh</p>
          </div>
          <div class="subProduct-child">
            <i class="bi bi-clock-fill"></i>
            <p>Thời gian: 2 ngày 2 đêm</p>
          </div>
          <div class="subProduct-child">
            <i class="bi bi-trophy-fill"></i>
            <p>Độ khó: 7/10</p>
          </div>
          <h3>Đã đăng ký</h3>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
}

export function signupRender(mainPage) {
  mainPage.style.display = "block";
  mainPage.innerHTML = `
  <div class="register item">
  <img src="./img/sign-up.jpg" alt="" class="login-img ">
  <div class="form-container item">
    <div class="logo-container ">
      Sign Up
    </div>
    <div class="line"></div>
    <div class="form item">
      <div class="form-group item">
        <label for="email" class=" delay-02" >Email</label>
        <input  placeholder="Enter your email" name="email" id="email" type="text">
      </div>

      <div class="form-group item">
        <label for="password" class=" delay-06">Password</label>
        <input  name="password" placeholder="Enter your password" id="password" type="password">
      </div>

      <div class="form-group item">
        <label  for="password">Confirm Password</label>
        <input  name="password" placeholder="Enter your password agian" id="confirm-password" type="password">
      </div>

      <button type="submit" class="form-submit-btn " id="btn-SignUpComF" >Sign up</button>
    </div>
    <p class="ques-link">
      Have an account?
      <button class="register-link link"> Log In now</button>
    </p>
  </div>
</div>
`;
}

export function loginRender(mainPage) {
  mainPage.style.display = "block";
  mainPage.innerHTML = `
  <div class="register ">
  <img src="./img/sign-in.jpg" alt="" class="login-img ">
  <div class="form-container ">
    <div class="logo-container ">
      Sign In
    </div>
    <div class="line"></div>
    <div class="form ">
      <div class="form-group ">
        <label class=" " for="email">Email</label>
        <input class=" " placeholder="Enter your email" name="email" id="email" type="text">
      </div>

      <div class="form-group ">
        <label class=" " for="password">Password</label>
        <input class=" " name="password" placeholder="Enter your password" id="password" type="password">
      </div>

      <button type="submit" class="form-submit-btn  " id="btn-signIn-submit">Log In</button>
    </div>
    <p class="ques-link  ">
      Don't have an account?
      <button class="register-link link" href="#" id="sLog"> Sign up now</button>
    </p>
  </div>
  </div>
  `;
}

export function TNPDrender(mainPage) {
  mainPage.style.display = "block";
  mainPage.innerHTML = `
  <div class="trekkingPage">
  <div class="trekkingContainer">
    <div class="trekkingDiv">
      <h3>Tour trekking: Tà năng phan dũng</h3>
      <h2>TOUR TREKKING</h2>
      <h1>TÀ NĂNG PHAN DŨNG</h1>
      <p>Khám phá Tà Năng Phan Dũng cùng những người bạn độc thân. Một hành trình đặc biệt chinh phục những ngọn đồi trùng điệp, kéo dài hút tầm mắt. Phía xa là thung lũng, đồi cỏ xanh mướt khiến người bộ hành phải xuýt xoa, xiêu lòng như gặp người tình trong mộng lần đầu tiên. </p>
      <p>Sự tươi trẻ, tràn đầy sức sống của núi rừng xanh biếc sẽ làm dịu tâm hồn bạn vốn đã vướng bận bao bộn bề chốn Sài Thành. </p>
      <p>rên hành trình khám phá vùng đất mới, chúng ta những người độc thân chung một tần số, cởi mở, chân thành và nồng nhiệt sẵn sàng chia sẻ và kết nối. </p>
    </div>
    <img src="./img/TNPD.jpg" alt="">
  </div>
</div>
<div class="trekkingIcon">
  <div class="trekkingIcon-child">
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 18V23C30 23.7956 29.6839 24.5587 29.1213 25.1213C28.5587 25.6839 27.7956 26 27 26H26C26 27.0609 25.5786 28.0783 24.8284 28.8284C24.0783 29.5786 23.0609 30 22 30H10C8.93913 30 7.92172 29.5786 7.17157 28.8284C6.42143 28.0783 6 27.0609 6 26H5C4.20435 26 3.44129 25.6839 2.87868 25.1213C2.31607 24.5587 2 23.7956 2 23V18C2 17.2044 2.31607 16.4413 2.87868 15.8787C3.44129 15.3161 4.20435 15 5 15H6V6C6 5.73478 6.10536 5.48043 6.29289 5.29289C6.48043 5.10536 6.73478 5 7 5H25C25.2652 5 25.5196 5.10536 25.7071 5.29289C25.8946 5.48043 26 5.73478 26 6V15H27C27.7956 15 28.5587 15.3161 29.1213 15.8787C29.6839 16.4413 30 17.2044 30 18Z" fill="#fff"/>
      <path d="M6 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20C3 19.7348 3.10536 19.4804 3.29289 19.2929C3.48043 19.1054 3.73478 19 4 19H6C6.26522 19 6.51957 19.1054 6.70711 19.2929C6.89464 19.4804 7 19.7348 7 20C7 20.2652 6.89464 20.5196 6.70711 20.7071C6.51957 20.8946 6.26522 21 6 21Z" fill="#F5F5F5"/>
      <path d="M28 21H26C25.7348 21 25.4804 20.8946 25.2929 20.7071C25.1054 20.5196 25 20.2652 25 20C25 19.7348 25.1054 19.4804 25.2929 19.2929C25.4804 19.1054 25.7348 19 26 19H28C28.2652 19 28.5196 19.1054 28.7071 19.2929C28.8946 19.4804 29 19.7348 29 20C29 20.2652 28.8946 20.5196 28.7071 20.7071C28.5196 20.8946 28.2652 21 28 21Z" fill="#000"/>
      <path d="M26 6V12.41L23.29 15.12C22.7279 15.6828 21.9654 15.9993 21.17 16H10.83C10.0346 15.9993 9.27207 15.6828 8.71 15.12L6 12.41V6C6 5.73478 6.10536 5.48043 6.29289 5.29289C6.48043 5.10536 6.73478 5 7 5H25C25.2652 5 25.5196 5.10536 25.7071 5.29289C25.8946 5.48043 26 5.73478 26 6Z" fill="#000"/>
      <path d="M18.59 26H13.41C12.8804 25.9978 12.3734 25.7856 12 25.41L10.59 24C10.4028 23.8139 10.2543 23.5927 10.1531 23.349C10.0518 23.1053 9.99979 22.8439 10 22.58V20C10 19.4696 10.2107 18.9609 10.5858 18.5858C10.9609 18.2107 11.4696 18 12 18H20C20.5304 18 21.0391 18.2107 21.4142 18.5858C21.7893 18.9609 22 19.4696 22 20V22.58C22.0002 22.8439 21.9482 23.1053 21.8469 23.349C21.7457 23.5927 21.5972 23.8139 21.41 24L20 25.41C19.6267 25.7856 19.1196 25.9978 18.59 26ZM12 20V22.58L13.41 24H18.59L20 22.58V20H12Z" fill="#000"/>
      <path d="M19 7C18.7348 7 18.4804 6.89464 18.2929 6.70711C18.1054 6.51957 18 6.26522 18 6V5C18 4.73478 17.8946 4.48043 17.7071 4.29289C17.5196 4.10536 17.2652 4 17 4H15C14.7348 4 14.4804 4.10536 14.2929 4.29289C14.1054 4.48043 14 4.73478 14 5V6C14 6.26522 13.8946 6.51957 13.7071 6.70711C13.5196 6.89464 13.2652 7 13 7C12.7348 7 12.4804 6.89464 12.2929 6.70711C12.1054 6.51957 12 6.26522 12 6V5C12 4.20435 12.3161 3.44129 12.8787 2.87868C13.4413 2.31607 14.2044 2 15 2H17C17.7956 2 18.5587 2.31607 19.1213 2.87868C19.6839 3.44129 20 4.20435 20 5V6C20 6.26522 19.8946 6.51957 19.7071 6.70711C19.5196 6.89464 19.2652 7 19 7Z" fill="#000"/>
      <path d="M7 5C6.73478 5 6.48043 5.10536 6.29289 5.29289C6.10536 5.48043 6 5.73478 6 6V15H5C4.20435 15 3.44129 15.3161 2.87868 15.8787C2.31607 16.4413 2 17.2044 2 18V23C2 23.7956 2.31607 24.5587 2.87868 25.1213C3.44129 25.6839 4.20435 26 5 26H6C6 27.0609 6.42143 28.0783 7.17157 28.8284C7.92172 29.5786 8.93913 30 10 30H16V5H7Z" fill="#fff"/>
      <path d="M6 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20C3 19.7348 3.10536 19.4804 3.29289 19.2929C3.48043 19.1054 3.73478 19 4 19H6C6.26522 19 6.51957 19.1054 6.70711 19.2929C6.89464 19.4804 7 19.7348 7 20C7 20.2652 6.89464 20.5196 6.70711 20.7071C6.51957 20.8946 6.26522 21 6 21Z" fill="#000"/>
      <path d="M7 5C6.73478 5 6.48043 5.10536 6.29289 5.29289C6.10536 5.48043 6 5.73478 6 6V12.41L8.71 15.12C9.27207 15.6828 10.0346 15.9993 10.83 16H16V5H7Z" fill="#000"/>
      <path d="M13.44 24L12 22.59V20H16V18H12C11.4696 18 10.9609 18.2107 10.5858 18.5858C10.2107 18.9609 10 19.4696 10 20V22.59C10.005 22.8543 10.0624 23.1151 10.1688 23.3571C10.2752 23.5991 10.4286 23.8176 10.62 24L12 25.42C12.375 25.7919 12.8819 26.0004 13.41 26H16V24H13.44Z" fill="#000"/>
      <path d="M15 2C14.2044 2 13.4413 2.31607 12.8787 2.87868C12.3161 3.44129 12 4.20435 12 5V6C12 6.26522 12.1054 6.51957 12.2929 6.70711C12.4804 6.89464 12.7348 7 13 7C13.2652 7 13.5196 6.89464 13.7071 6.70711C13.8946 6.51957 14 6.26522 14 6V5C14 4.73478 14.1054 4.48043 14.2929 4.29289C14.4804 4.10536 14.7348 4 15 4H16V2H15Z" fill="#000"/>
      <path d="M27 15H26V6C26 5.73478 25.8946 5.48043 25.7071 5.29289C25.5196 5.10536 25.2652 5 25 5H20C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2H15C14.2044 2 13.4413 2.31607 12.8787 2.87868C12.3161 3.44129 12 4.20435 12 5H7C6.73478 5 6.48043 5.10536 6.29289 5.29289C6.10536 5.48043 6 5.73478 6 6V15H5C4.20435 15 3.44129 15.3161 2.87868 15.8787C2.31607 16.4413 2 17.2044 2 18V23C2 23.7956 2.31607 24.5587 2.87868 25.1213C3.44129 25.6839 4.20435 26 5 26H6C6 27.0609 6.42143 28.0783 7.17157 28.8284C7.92172 29.5786 8.93913 30 10 30H22C23.0609 30 24.0783 29.5786 24.8284 28.8284C25.5786 28.0783 26 27.0609 26 26H27C27.7956 26 28.5587 25.6839 29.1213 25.1213C29.6839 24.5587 30 23.7956 30 23V18C30 17.2044 29.6839 16.4413 29.1213 15.8787C28.5587 15.3161 27.7956 15 27 15ZM15 4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5H14C14 4.73478 14.1054 4.48043 14.2929 4.29289C14.4804 4.10536 14.7348 4 15 4ZM5 24C4.73478 24 4.48043 23.8946 4.29289 23.7071C4.10536 23.5196 4 23.2652 4 23V18C4 17.7348 4.10536 17.4804 4.29289 17.2929C4.48043 17.1054 4.73478 17 5 17H6V24H5ZM24 26C24 26.5304 23.7893 27.0391 23.4142 27.4142C23.0391 27.7893 22.5304 28 22 28H10C9.46957 28 8.96086 27.7893 8.58579 27.4142C8.21071 27.0391 8 26.5304 8 26V7H24V26ZM28 23C28 23.2652 27.8946 23.5196 27.7071 23.7071C27.5196 23.8946 27.2652 24 27 24H26V17H27C27.2652 17 27.5196 17.1054 27.7071 17.2929C27.8946 17.4804 28 17.7348 28 18V23Z" fill="#000"/>
      </svg>
      <h4>Thời gian</h4>
      <p>2 ngày 2 đêm</p>
  </div>
  <div class="trekkingIcon-child">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bus-front" viewBox="0 0 16 16">
      <path d="M5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm1-6c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9c1.876 0 3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44.303 44.303 0 0 0 8 4Zm0-1c-1.837 0-3.353.107-4.448.22a.5.5 0 1 1-.104-.994A44.304 44.304 0 0 1 8 2c1.876 0 3.426.109 4.552.226a.5.5 0 1 1-.104.994A43.306 43.306 0 0 0 8 3Z"/>
      <path d="M15 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1V2.64c0-1.188-.845-2.232-2.064-2.372A43.61 43.61 0 0 0 8 0C5.9 0 4.208.136 3.064.268 1.845.408 1 1.452 1 2.64V4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v3.5c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2V8ZM8 1c2.056 0 3.71.134 4.822.261.676.078 1.178.66 1.178 1.379v8.86a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V2.64c0-.72.502-1.301 1.178-1.379A42.611 42.611 0 0 1 8 1Z"/>
    </svg>
    <h4>Số Lượng</h4>
    <p>25 - 30 khách</p>
  </div>
  <div class="trekkingIcon-child">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
      <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
    </svg>
    <h4>Tính chất tour</h4>
    <p>Hành trình kết nối</p>
  </div>
</div>
<div class="trekkingInformtour">
  <div class="trekkingInformtour-Container">
    <div class="trekkingTab" id="tab">
      <button id="lt">LỊCH TRÌNH</button>
      <button id="gt">GIỚI THIỆU</button>
      <button id="cb">CHUẨN BỊ</button>
    </div>
    <div class="trekkingContent-details" id="informPage">
            
    </div>
  </div>
</div>
  `;
}

export function footerRender(footer) {
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
      <p>0838673979</p>
    </div>
    <div class="ft-contact-child">
      <i class="bi bi-envelope-fill"></i>
      <p>nhoangphuc960@gmail.com</p>
    </div>
    <div class="ft-contact-child">
      <i class="bi bi-envelope-fill"></i>
      <p>Bachloppho1202@gmail.com</p>
    </div>
  </div>
</footer>
  `;
}
