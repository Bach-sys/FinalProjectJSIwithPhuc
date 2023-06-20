import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

let Register = document.querySelector("#register")
let btnlog = document.querySelector("#Login")
let btnsign = document.querySelector("#Signup")
document.querySelector("#navbar").innerHTML = `
<a href="#" class="link-logo"><img src="logo.png" alt="" class="logo"></a>
<div class="nav-child">
    <a class="btn" href="#">Home</a>
    <a class="btn" href="#">About us</a>
    <a class="btn" href="#">Contact</a>
    <a class="btn" href="#">Book tour</a>
</div>
<div class="register">
    <button class="btn-re" id="Login" >Log in</button>
    <button class="btn-re" id="Signup">Sign up</button>
</div>
`;
let signupRender = () => {
    Register.innerHTML=`
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
    </div>`
}
let loginRender = () => {
  Register.innerHTML=`
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
      Have an account?
      <button class="register-link link" href="#"> Sign up now</button>
    </p>
  </div>`
}
btnlog.addEventListener("click", () => {
  loginRender()
})
btnsign.addEventListener("click", () => {
  signupRender()
})