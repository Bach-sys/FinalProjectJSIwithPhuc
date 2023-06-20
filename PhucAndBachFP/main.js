import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#navbar").innerHTML = `
<a href="#" class="link-logo"><img src="logo.png" alt="" class="logo"></a>
<div class="nav-child">
    <a class="btn" href="#">Home</a>
    <a class="btn" href="#">About us</a>
    <a class="btn" href="#">Contact</a>
    <a class="btn" href="#">Book tour</a>
</div>
<div class="register">
    <a class="btn-log" href="#">Log in</a>
    <a class="btn-si" href="#">Sign up</a>
</div>
`;
document.querySelector(
  "#login"
).innerHTML = ` <img src="https://i.pinimg.com/564x/60/04/2b/60042bd77056155bd25412fa223c8eeb.jpg" alt="" class="login-img">
<div class="form-container">
  <div class="logo-container">
    Log In
  </div>
  <div class="line"></div>
  <div class="form">
    <div class="form-group">
      <label for="email">Email</label>
      <input required placeholder="Enter your email" name="email" id="email" type="text">
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input required name="password" placeholder="Enter your password" id="password" type="password">
    </div>

    <button type="submit" class="form-submit-btn" id = "btn_comfirm">Log in</button>
  </div>
  <p class="signup-link">
    Don't have an account?
    <a class="signup-link link" href="#"> Sign up now</a>
  </p>
</div>`;
