import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

let Register = document.querySelector("#register");
let navMain = document.querySelector("#navbar-main")
let navMainRender = () =>{
  navMain.innerHTML = `
`;
}
//!thay đổi ở đây
let btnlog = document.querySelector("#btn-nav-log");
let btnsign = document.querySelector("#btn-nav-sign");
let signupRender = () => {
  Register.innerHTML = `
    <img src="https://i.pinimg.com/564x/60/04/2b/60042bd77056155bd25412fa223c8eeb.jpg" alt="" class="login-img">
    <div class="form-container">
      <div class="logo-container">
        Sign up
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
      Log In
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


