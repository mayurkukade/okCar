// import React from "react";
import "./MainFooter.css";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";



const MainFooter = () => (
<div class="mt-5 pt-5 pb-5 footer">
<div class="container">
  <div class="row">
    <div class="col-lg-5 col-xs-12 about-company">
    <Link className="logo" to="/">
                  <img src="../../../images/logo.png" alt="logo" />
                </Link>
      {/* <h2>Autocar</h2> */}
      <p class="pr-5 text-white-50">Auotcar is the most trusted way of buying and selling used cars. Choose from over 5000 fully inspected second-hand car models. Select online and book a test drive at your home or at a Autocar Hub near you. Get a no-questions-asked 5-day money back guarantee and a free one-year comprehensive service warranty with Assured Resale Value on every Autocar Assured® car.

</p>
    </div>
    <div class="col-lg-2 col-xs-12 links">
      <h4 class="mt-lg-0 mt-sm-3">Links</h4>
        <ul class="m-0 p-0" style={{fontSize:"1rem"}}>
          {/* <li>- <a href="#">Home</a></li> */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          {/* <li>- <a href="#">Nam mauris velit</a></li>
          <li>- <a href="#">Etiam vitae mauris</a></li>
          <li>- <a href="#">Fusce scelerisque</a></li>
          <li>- <a href="#">Sed faucibus</a></li>
          <li>- <a href="#">Mauris efficitur nulla</a></li> */}
        </ul>
    </div>
    <div class="col-lg-4 col-xs-12 location">
      <h4 class="mt-lg-0 mt-sm-4">Location</h4>
      <p>314, 315, Gera’s Imperium Alpha, Eon Free Zone Rd, Rajaram Patil Nagar,Kharadi, Pune, Maharashtra 411014</p>
      <p class="mb-0"><i class="fa fa-phone mr-3"></i>  (+91) 89996 13069</p>
      <p><i class="fa fa-envelope-o mr-3"></i>info@opticalarc.com</p>
    </div>
    
  </div>
  <hr />
  <div className="copyright">
        <div className="container">
          <div className="bttxt">
            Copyright &copy; 2023 Optical Arc. All Rights Reserved. Design by :
            Optical Arc Team
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MainFooter;
