
import { Link } from "react-router-dom";
import "./avtar.css";
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-3 col-xs-12">
              <a className="logo">
                <Link to="/">
                  <img src="images/logo.png" alt="" />
                </Link>
              </a>
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
                    </li>
                    <li>
                      <Link to="/Cardetails">
                        <a>Used Cars</a>
                      </Link>
                    </li>
                    <li>
                      <a href="listing.html">New Cars</a>
                    </li>

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
  );
};

export default Navbar;
