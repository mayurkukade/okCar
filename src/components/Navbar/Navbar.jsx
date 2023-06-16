import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="topbar-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="tpinfo">
                <a>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  1-800-123-4567
                </a>
                <a>
                  <i className="fa fa-map-marker" aria-hidden="true"></i> 123 X
                  4TH Street, San Jose, CA 123456
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="toplinks">
                <Link to="/signup">
                  <a>Sign Up</a>
                </Link>
                <Link to="/signin">
                  <a>Sign In</a>
                </Link>
                {/* <a href="#">Connect with Facebook</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-3 col-xs-12">
             <Link to='/'>
              <a  className="logo">
                
                <img src="images/logo.png" alt="" />
              </a>
              </Link>
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>{" "}
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="col-md-10 col-sm-12 col-xs-12">
              <div className="navbar navbar-default" role="navigation">
                <div className="navbar-collapse collapse" id="nav-main">
                  <ul className="nav navbar-nav">
                    <li className="dropdown active">
                      <a href="index.html">Home</a>
                      {/* <span className="caret"></span>  */}
                      {/* <ul className="dropdown-menu">
                          <li className="active">
                            <a href="index.html">Home Static Image</a>
                          </li>
                          <li>
                            <a href="index2.html">Home With Slider</a>
                          </li>
                        </ul> */}
                    </li>
                    <li>
                      <Link to="/Cardetails">
                        <a>Used Cars</a>
                      </Link>
                    </li>
                    <li>
                      <a href="listing.html">New Cars</a>
                    </li>
                    {/* <li className="dropdown">
                        <a href="#.">
                          Pages <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="about-us.html">About Us</a>
                          </li>
                          <li>
                            <a href="listing.html">Ad Listing</a>
                          </li>
                          <li>
                            <a href="detail.html">Ad Detail</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                          <li>
                            <a href="register.html">Register</a>
                          </li>
                          <li>
                            <a href="forgot-password.html">Forgot Password</a>
                          </li>
                          <li>
                            <a href="change-password.html">Change Password</a>
                          </li>
                          <li>
                            <a href="dashboard.html">Dashboard</a>
                          </li>
                          <li>
                            <a href="active-ads.html">Active Ads</a>
                          </li>
                          <li>
                            <a href="pending-ads.html">Pending Ads</a>
                          </li>
                          <li>
                            <a href="edit-profile.html">Edit Profile</a>
                          </li>
                          <li>
                            <a href="ad-post.html">Ad Post</a>
                          </li>
                          <li>
                            <a href="packages.html">Packages</a>
                          </li>
                          <li>
                            <a href="faqs.html">FAQs</a>
                          </li>
                          <li>
                            <a href="404.html">404 Page</a>
                          </li>
                          <li>
                            <a href="typography.html">Typography</a>
                          </li>
                        </ul>
                      </li> */}
                    {/* <li className="dropdown">
                        <a href="blog.html">
                          Blog <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="blog.html">Blog List</a>
                          </li>
                          <li>
                            <a href="blog-detail.html">Blog Detail</a>
                          </li>
                          <li>
                            <a href="blog-grid.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-full-width.html">
                              Blog Grid Full Width
                            </a>
                          </li>
                        </ul>
                      </li> */}
                    <li>
                      <a href="contact-us.html">Contact</a>
                    </li>
                    <li className="postad">
                      <a href="ad-post.html">Post an Ad</a>
                    </li>
                  </ul>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </>
  )}

  export default Navbar