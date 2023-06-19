import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
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

