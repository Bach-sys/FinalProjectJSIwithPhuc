import "./style.css";
import javascriptLogo from "./javascript.svg";


let Register = document.querySelector("#register");
let nav = document.querySelector("#nav")
let home = document.querySelector("#home-page")
let navRender = () => {
  nav.innerHTML=`
  <div id="nav-main-img">
  <div class="nav-main">
    <a href="#" class="nav-logo-link"><img class="nav-logo" src="logo.PNG" alt=""></a>
    <div class="nav-main-child">
      <button class="btn-nav" id ="home" >Home</button>
      <button class="btn-nav">About us</button>
      <button class="btn-nav">Contact</button>
      <button class="btn-nav">Book tour</button>
      <button class="btn-nav"id="btn-nav-log">Sign In</button>
      <button class="btn-nav"id="btn-nav-sign">Sign Up</button>
    </div>
  </div>
  <p>TREKKING</p>
</div>
  `
}
navRender()
let btnlog = document.querySelector("#btn-nav-log");
let btnsign = document.querySelector("#btn-nav-sign");
let btnhome = document.querySelector("#home")
let homeRender = () =>{
  home.innerHTML=`
  <div class="introduce">
  <div class="introduce-child">
    <div class="introduce-des">
      <img class="img-introduce" src="logo.png" alt="">
      <p class="des">Sâu thẳm từ bên trong mỗi chúng ta đều có “những tiếng gọi” từ thiên nhiên hoang dã. Chúng đánh thức bạn đến với sự khát khao được tự do, khám phá về thế giới xung quanh, về thiên nhiên và cội nguồn. Tinh thần hoang dại đó sẽ khiến bạn cảm nhận cuộc sống này sống động hơn, mãnh liệt hơn và thúc đẩy bạn tận hưởng từng cảm xúc ngay khoảnh khắc hiện tại. The Happy Trip là nơi hội tụ những con người yêu núi rừng với đội ngũ giàu kinh nghiệm cùng các chuyên gia về kỹ năng, kiến thức trong lĩnh vực du lịch mạo hiểm. Chúng tôi dành nhiều ngày liền sống trong rừng để hiểu địa hình, cảm nhận văn hóa địa phương và thiết kế những cuộc phiêu lưu độc nhất. Chúng tôi đến để “đứa trẻ” bên trong bạn được tắm gội với núi rừng, hít thở khí trời và trưởng thành với những trải nghiệm mạo hiểm từ thiên nhiên một cách an toàn, chuyên nghiệp và bền vững. Bạn sẽ đi, chinh phục, khám phá, tận hưởng, tự do và “được sống” nhiều hơn. Với sứ mệnh đó, The Happy Trip tin rằng tinh thần hoang dại của bạn cùng với kinh nghiệm và kiến thức chuyên môn của chúng tôi sẽ tạo nên những trải nghiệm độc nhất dành riêng cho bạn. 
        THE BEST TRIP THE BEST PERSON
        </p>
    </div>
    <img class="des-img" src="img-product.jpg" alt="">
  </div>
</div>
  `
}
homeRender();
let signupRender = () => {
  Register.innerHTML = `
    <img src="https://i.pinimg.com/564x/60/04/2b/60042bd77056155bd25412fa223c8eeb.jpg" alt="" class="login-img">
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
    </div>`;
};
let loginRender = () => {
  Register.innerHTML = `
  <img src="https://i.pinimg.com/564x/60/04/2b/60042bd77056155bd25412fa223c8eeb.jpg" alt="" class="login-img">
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
  </div>`;
};
  btnlog.addEventListener("click", () => {
    loginRender();
  });
  btnsign.addEventListener("click", () => {
    signupRender();
  });
  btnhome.addEventListener("click", () => {
    navRender()
    homeRender()
  });