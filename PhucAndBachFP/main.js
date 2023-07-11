import "./style.css";
import { returnData } from "./script";
import {
  mainPageRender,
  bookTourRender,
  aboutUsRender,
  contactRender,
  cartRender,
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
  navImgcartRender,
  navImgtnpdRender,
} from "./Font";

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
btncart.style.display = "none";
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
  bookTourRender(mainPage,data);
  let btnTNPD = document.querySelector("#TNPDpage");
  console.log(btnTNPD)
  navImgtourRender(navImg);
  footerRender(footer);
  btnTNPD.addEventListener("click", () => {
    TNPDrender(mainPage);
    let informPage = document.querySelector("#informPage");
    let btnlt = document.querySelector("#lt");
    let btngt = document.querySelector("#gt");
    let btncb = document.querySelector("#cb");
    btnlt.addEventListener("click", () => {
      lichtrinhRender();
    });
    btngt.addEventListener("click", () => {
      gioithieuRender();
    });
    btncb.addEventListener("click", () => {
      chuanbiRender();
    });
    let lichtrinhRender = () => {
      informPage.innerHTML = `
      <h1>LỊCH TRÌNH TOUR TREKKING TÀ NĂNG PHAN DŨNG</h1>
      <div class="trekkingContenttour">
      <div class="trekkingContenttour-column">
              <h2>NGÀY 0: KHỞI HÀNH</h2>
              <p>20:30 Tập trung và điểm danh tại điểm hẹn ở TP. Hồ Chí Minh</p>
              <p>21:30 Xe bắt đầu di chuyển và đón các thành viên dọc đường (nếu có). Trên xe Hướng dẫn viên (HDV) tổ chức làm quen, kết nối các thành viên trước khi bắt đầu Hành Trình Trekking Tour Tà Năng Phan Dũng vào sáng mai.</p>
              <p>23:30 Ghé trạm dừng chân tại Đồng Nai để khách đi vệ sinh. Ngủ đêm trên xe.</p>
            </div>
            <div class="trekkingContenttour-column">
              <h2>NGÀY 1: TREKKING TÀ NĂNG</h2>
              <p>05:00 – 06:00 Đoàn dừng chân tại điểm ăn sáng thuộc Đức Trọng – Lâm Đồng. Tại đây có bố trí khu vực vệ sinh cá nhân, quý khách chuẩn bị hành lý cá nhân, ăn sáng, uống cà phê trong khí trời se lạnh của Lâm Đồng.</p>
              <p>06:30 Trải nghiệm đi xe công nông di chuyển vào rừng bìa rừng. Xe di chuyển đến bìa rừng, tại đây khách hàng được phổ biến quy tắt đi rừng, đảm bảo an toàn suốt hành trình, bảo vệ môi trường và kỹ năng trekking cơ bản. Đoàn thực hiện khởi động theo hướng dẫn của HDV trước khi bắt đầu hành trình</p>
              <p>07:30 – 11:00 Bắt đầu Hành Trình Trekking Tà Năng, lắng nghe và cảm nhận vẻ đẹp của núi rừng. Đoạn đường trekking đưa quý khách đi qua nhiều địa hình rừng, đồi thoai thoải khác nhau, từng thảm thực vật cũng thay đổi theo độ cao, quý khách được nghe chia sẻ nhiều thông tin về các loại cây rừng và thảm thực vật đặc biệt tại đây.</p>
              <p>11:00 Checkin cột mốc Tà Năng – Phan Dũng, nơi giáp ranh giữa 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận. Ngắm toàn cảnh đẹp đặc trưng của đồi cỏ theo mùa.</p>
              <p>1:30 – 12:30 Đoàn trải nghiệm bữa trưa giữa núi rừng Tà Năng. Có thời gian nghỉ ngơi tại chỗ, lắng nghe tiếng thiên nhiên.</p>
              <p>12:30 Đoàn được tiếp nước và tiếp tục hành trình qua những sườn đồi để về điểm cắm trại. Tuỳ vào mỗi mùa, đoạn đường trekking này sẽ mãn nhãn được du khách bởi cảnh đẹp hùng vĩ của núi đồi bao la, trùng điệp những đồi cỏ dài nối tiếp nhau. Đây cũng chính là đoạn trekking đẹp nhất khiến quý khách phải nao lòng khi rời khỏi.</p>
              <p>16:00 Đến điểm cắm trại, quý khách nhận lều, vệ sinh cá nhân và ngắm hoàng hôn tuyệt đẹp trên đồi.</p>
              <p>18:00 Trong không khí se lạnh của núi rừng Tây Nguyên, quý khách trải nghiệm bữa tối BBQ kết hợp cùng đêm nhạc acoustic được thiết kế đặc biệt dành riêng kết nối những người bạn mới. Quý khách dùng bữa tối, ca hát quay quần bên nhau.</p>
              <p>22:00 Kết thúc ngày sinh hoạt, quý khách quay về lều nghỉ ngơi.</p>
            </div>
            <div class="trekkingContenttour-column">
              <h2>NGÀY 2: ĐÓN BÌNH MINH TẠI PHAN DŨNG</h2>
              <p>05:00 Đoàn dậy sớm, đón bình minh trên đồi. Dùng điểm tâm sáng, nhâm nhi ly cà phê, trà nóng trong không khí se lạnh trên đồi Tà Năng.</p>
              <p>06:30 – 10:00 Tiếp tục hành trình trekking rừng Phan Dũng, đoạn đường trekking dài 18km. Đoạn đường trekking đưa quý khách hạ đồ cao dần xuống đồng bằng, với thảm thực vật cũng thay đổi phong phú từ những mảng rừng lá kim đến các tán rừng già nguyên sinh trù phú. Nếu may mắn quý khách còn được ngắm nhìn rất nhiều hoa nghệ rừng, hoa gạo, hoa sâm bố chính nở rực cả một mảng rừng tuyệt đẹp.</p>
              <p>10:00 Đến bờ suối Phan Dũng, đoàn dừng nghỉ ngơi, ngâm chân bên bờ suối và ăn nhẹ trái cây, khoai luộc. Sau đó tiếp tục hành trình.</p>
              <p>12:00 Kết thúc hành trình tại xã Phan Dũng – Bình Thuận. Đoàn được bố trí khu vực vệ sinh cá nhân, sắp xếp lại hành lý và dùng cơm trưa do người địa phương chuẩn bị.</p>
              <p>14:00 Xe đón đoàn, bắt đầu di chuyển về lại TP Hồ Chí Minh.</p>
              <p>17:00 Đoàn ghé ăn tối tại khu vực Phan Thiết. Trên đường về HDV sẽ tổng kết hành trình, ôn lại kỷ niệm trong suốt chuyến đi, và chia tay đoàn.</p>
              <p>22:00 Xe về đến TP. Hồ Chí Minh, kết thúc hành trình Trekking Tà Năng – Phan Dũng.</p>
              <p>*Lưu ý: Lịch trình có thể thay đổi tuỳ vào tình hình thực tế như: thời tiết, trường hợp bất khả kháng nhằm đảm bảo an toàn tối đa cho khách hàng và sẽ được thông báo đến khách hàng khi có thay đổi</p>
            </div>
          </div>`;
    };
    lichtrinhRender();
    let gioithieuRender = () => {
      informPage.innerHTML = `
      <div class="trekkingContent-GioiThieu">
              <h1>GIỚI THIỆU TOUR TREKKING TÀ NĂNG PHAN DŨNG</h1>
              <div class="trekkingContenttour">
              <div class="trekkingContenttour-column-gioithieu">
                      <h2>TỔNG QUAN TOUR TÀ NĂNG PHAN DŨNG</h2>
                      <p>Cung đường Trekking Tà Năng – Phan Dũng đi xuyên qua ranh giới 3 tỉnh Lâm Đồng – Ninh Thuận – Bình Thuận với tổng chiều dài 35km. Khung cảnh nơi đây hoàn toàn là rừng và mang nét đẹp hoang sơ, hùng vĩ.</p>
                      <p>Khi tham gia tour Tà Năng Phan Dũng cùng 52Hz du khách sẽ được trải nghiệm săn mây, đi qua nhiều địa hình rừng, đồi thoai thoải khác nhau, từng thảm thực vật cũng thay đổi theo độ cao và đặc biệt tham gia đêm nhạc Acoustic cùng The Happy Trip giúp kết nối các thành viên trong đoàn.</p>
                      <div class="trekkingContenttour-inform">
                        <div class="trekkingContenttour-inform-child">
                          <h4>Độ Khó</h4>
                          <p>7/10</p>
                        </div>
                        <div class="trekkingContenttour-inform-child">
                          <h4>Điểm Đến</h4>
                          <p>Xã Tà Năng – huyện Đức Trọng – tỉnh Lâm Đồng</p>
                        </div>
                        <div class="trekkingContenttour-inform-child">
                          <h4>Điểm Khởi Hành</h4>
                          <p>TP. Hồ Chí Minh</p>
                        </div>
                        <div class="trekkingContenttour-inform-child">
                          <h4>Thời Gian Xuất Phát</h4>
                          <p>21:30 Thứ Sáu</p>
                        </div>
                        <div class="trekkingContenttour-inform-child">
                          <h4>Thời Gian Kết Thúc</h4>
                          <p>22:00 – Chủ Nhật</p>
                        </div>
                        <div class="trekkingContenttour-inform-child">
                          <h4>Thời Lượng Tour</h4>
                          <p>2 Ngày 2 Đêm</p>
                        </div>
                        <div class="trekkingContenttour-inform-child">
                          <h4>Số Lượng Khách</h4>
                          <p>25 – 30 khách</p>
                        </div>
                        <div class="trekkingContenttour-inform-child">
                          <h4>Hotline</h4>
                          <p>0906785477</p>
                        </div>
                        <div class="trekkingContenttour-inform-child">
                          <h4>Giá Tour</h4>
                          <button>3.500.000 VNĐ</button>
                        </div>
                      </div>
              </div>
                    <div class="trekkingContenttour-column-gioithieu">
                      <h2>GIÁ TOUR TREKKING TÀ NĂNG BAO GỒM:</h2>
                      <div class="trekkingContenttour-price">
                        <div class="trekkingContenttour-price-detail">
                          <i class="bi bi-check-lg"></i>
                          <p>Xe giường nằm (xe riêng hoặc vé xe 2 chiều)</p>
                        </div>
                        <div class="trekkingContenttour-price-detail">
                          <i class="bi bi-check-lg"></i>
                          <p>Ăn uống:</p>
                        </div>
                        <div class="include">
                          <div class="trekkingContenttour-price-detail">
                            <i class="bi bi-check-circle-fill"></i>
                            <p>Bao gồm 06 bữa chính, 01 bữa ăn nhẹ</p>
                          </div>
                          <div class="trekkingContenttour-price-detail">
                            <i class="bi bi-check-circle-fill"></i>
                            <p>Thực đơn chay (theo yêu cầu)</p>
                          </div>
                          <div class="trekkingContenttour-price-detail">
                            <i class="bi bi-check-circle-fill"></i>
                            <p>Bao gồm nước suối uống (tiếp nước suốt hành trình).</p>
                          </div>
                        </div>
                        <div class="trekkingContenttour-price-detail">
                          <i class="bi bi-check-lg"></i>
                          <p>Trang thiết bị: Lều tiêu chuẩn Châu Âu phong cách vintage (bố trí 3 khách/ lều), túi ngủ giữ ấm Natural Hike (1 khách/ túi), tấm cách nhiệt.</p>
                        </div>
                        <div class="trekkingContenttour-price-detail">
                          <i class="bi bi-check-lg"></i>
                          <p>Trang thiết bị: Lều tiêu chuẩn Châu Âu phong cách vintage (bố trí 3 khách/ lều), túi ngủ giữ ấm Natural Hike (1 khách/ túi), tấm cách nhiệt.</p>
                        </div>
                        <div class="trekkingContenttour-price-detail">
                          <i class="bi bi-check-lg"></i>
                          <p>Áo mưa (được trang bị vào mùa mưa)</p>
                        </div>
                        <div class="trekkingContenttour-price-detail">
                          <i class="bi bi-check-lg"></i>
                          <p>Trải nghiệm xe máy cày</p>
                        </div>
                        <div class="trekkingContenttour-price-detail">
                          <i class="bi bi-check-lg"></i>
                          <p>Grab rừng đoạn cuối Phan Dũng (nếu khách có nhu cầu sử dụng)</p>
                        </div>
                        <div class="trekkingContenttour-price-detail">
                          <i class="bi bi-check-lg"></i>
                          <p>Đêm nhạc acoustic: bao gồm loa nhạc, Guitarist.</p>
                        </div>
                        <div class="trekkingContenttour-price-detail">
                          <i class="bi bi-check-lg"></i>
                          <p>Đội hậu cần, setup ăn uống, lều trại: 4 – 7 người hỗ trợ</p>
                        </div>
                        <div class="trekkingContenttour-price-detail">
                          <i class="bi bi-check-lg"></i>
                          <p>Đội ngũ chăm sóc đoàn:</p>
                        </div>
                        <div class="include">
                          <div class="trekkingContenttour-price-detail">
                            <i class="bi bi-check-circle-fill"></i>
                            <p>1 Hướng dẫn viên chính</p>
                          </div>
                          <div class="trekkingContenttour-price-detail">
                            <i class="bi bi-check-circle-fill"></i>
                            <p>1 Hướng dẫn viên phụ</p>
                          </div>
                          <div class="trekkingContenttour-price-detail">
                            <i class="bi bi-check-circle-fill"></i>
                            <p>1 Chụp ảnh suốt hành trình</p>
                          </div>
                          <div class="trekkingContenttour-price-detail">
                            <i class="bi bi-check-circle-fill"></i>
                            <p>1 Nhân viên chăm sóc y tế</p>
                          </div>
                        </div>
                        <div class="trekkingContenttour-price-detail">
                          <i class="bi bi-check-lg"></i>
                          <p>Nước nóng tắm tại khu trại (10 – 15L/ khách). Có khu vực vệ sinh riêng</p>
                        </div>
                        <div class="trekkingContenttour-price-detail">
                          <i class="bi bi-check-lg"></i>
                          <p>Bảo hiểm du lịch suốt hành trình (gói đi rừng) tối đa 30.000.000đ.</p>
                        </div>
                      </div>
                      <div class="trekkingContenttour-notprice">
                        <h2>Giá chưa bao gồm :</h2>
                        <div class="trekkingContenttour-price-detail">
                          <i class="bi bi-x"></i>
                          <p>Chi phí cá nhân ngoài chương trình</p>
                        </div>
                        <div class="trekkingContenttour-price-detail">
                          <i class="bi bi-x"></i>
                          <p>Phụ thu lễ, tết (nếu có)</p>
                        </div>
                        <div class="trekkingContenttour-price-detail">
                          <i class="bi bi-x"></i>
                          <p>Phụ thu lều đơn 1 khách (nếu khách yêu cầu): 200.000/ lều</p>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>`;
    };
    let chuanbiRender = () => {
      informPage.innerHTML = `
      <div class="trekkingContent-ChuanBi">
      <h1>CHUẨN BỊ CHO TOUR TREKKING TÀ NĂNG PHAN DŨNG</h1>
      <div class="trekkingContent-ChuanBi-child">
        <div class="trekkingContenttour-cb-detail">
          <i class="bi bi-check-circle-fill"></i>
          <p>Quần áo dễ vận động, thoáng mồ hôi (1 bộ mặc và 2 bộ để thay)</p>
        </div>
        <div class="trekkingContenttour-cb-detail">
          <i class="bi bi-check-circle-fill"></i>
          <p>1 đôi giày đế cao su bám tốt (đề xuất)</p>
        </div>
        <div class="trekkingContenttour-cb-detail">
          <i class="bi bi-check-circle-fill"></i>
          <p>Balo gọn nhẹ (ưu tiên có đai trợ lực)</p>
        </div>
        <div class="trekkingContenttour-cb-detail">
          <i class="bi bi-check-circle-fill"></i>
          <p>Áo khoác giữ nhiệt tốt, áo mưa</p>
        </div>
        <div class="trekkingContenttour-cb-detail">
          <i class="bi bi-check-circle-fill"></i>
          <p>Nón, 2 đôi vớ, găng tay chống nắng</p>
        </div>
        <div class="trekkingContenttour-cb-detail">
          <i class="bi bi-check-circle-fill"></i>
          <p>Đồ dùng cá nhân (kem chống nắng, khăn, bàn chải, khăn giấy, thuốc cá nhân, sạc dự phòng,…)</p>
        </div>
        <div class="trekkingContenttour-cb-detail">
          <i class="bi bi-check-circle-fill"></i>
          <p>Bình đựng nước</p>
        </div>
        <div class="trekkingContenttour-cb-detail">
          <i class="bi bi-check-circle-fill"></i>
          <p>Đồ ăn nhẹ (chocolate, bánh, kẹo,…)</p>
        </div>
        <div class="trekkingContenttour-cb-detail">
          <i class="bi bi-check-circle-fill"></i>
          <p>1 đôi dép gọn nhẹ (đề xuất dép tổ ong, có thể thay thế giày khi đau chân)</p>
        </div>
      </div>
    </div>`;
    };
    footerRender(footer);
  });
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
btncart.addEventListener("click", () => {
  cartRender(mainPage);
  navImgcartRender(navImg);
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

let data = returnData(db);
data
  .then((result) => {
    data = result;
  })
  .catch((err) => {
    console.log(err);
  });
