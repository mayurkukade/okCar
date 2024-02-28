import { Link } from "react-router-dom";
import "./avtar.css";
import AvtarModal from "./AvtarModal";
import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
const Navbar = () => {
  const lastScrollTop = useRef(0);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var pageYOffset = window.scrollY;
        if (pageYOffset > lastScrollTop.current) {
          // downward scroll
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          // upward scroll
          setIsNavbarVisible(true);
        } // else was horizontal scroll
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);
  
  const token = Cookies.get('cookie')
  console.log(token)
const decoded = jwt_decode(token)
console.log(decoded.roles.includes('ADMIN'))


  let roleNav;
  if (decoded.roles.includes('ADMIN')) {
    roleNav = (
      <div className={`header ${isNavbarVisible ? "visible" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-3 col-xs-12">
              <Link className="logo" to="/">
                <img src="../../../images/logo.png" alt="logo" />
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
                  <li>
                        <Link to="/adddealer">
                          <button>Add Dealer</button>
                        </Link>
                      </li>
                    {/* <li className="dropdown active">
                <a>Home</a>
              </li>
              <li>
                <Link to="/Carlist">Used Cars</Link>
              </li>
              <li>
                <a href="listing.html">New Cars</a>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li> */}
                    <li className="postad">
                      <AvtarModal />
                    </li>
                  </ul>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }else if(decoded.roles.includes('USER')){
    roleNav = (
      <div className={`header ${isNavbarVisible ? "visible" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-3 col-xs-12">
              <Link className="logo" to="/">
                <img src="../../../images/logo.png" alt="logo" />
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
                    {/* <li>
                      <Link to={'/dealer'}> <span>Dealer Manegment</span>  </Link>
                    </li> */}
                    {/* <li className="dropdown active">
                <a>Home</a>
              </li>
              <li>
                <Link to="/Carlist">Used Cars</Link>
              </li>
              <li>
                <a href="listing.html">New Cars</a>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li> */}
              {
                <li><Link to='/dealer/userrequestlist'>User Request</Link></li>
              }
                    <li className="postad">
                      <AvtarModal />
                    </li>
                  </ul>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  } else {
    roleNav = (
      <div className={`header ${isNavbarVisible ? "visible" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-3 col-xs-12">
              <Link to="/" className="logo">
                <img src="../../../images/logo.png" alt="logo" />
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
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/carlist">Buy Cars</Link>
                    </li>
                    {/* <li>
                      <a href="listing.html">New Cars</a>
                    </li> */}
                    <li>
                      <Link to="/Contact">Contact Us</Link>
                    </li>

                    {/* <li className="" style={{ backgroundColor: "white" }}>
                      {user ? (

                        <AvtarModal />

                      ) : (
                        <Link to={"/signup"}>Sign Up</Link>
                      )}
                    </li> */}
                       <li>
                        {
                          !user ? <Link to={"/signup"}>Sign Up</Link> :""
                        }
                      
                    </li>
                  </ul>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {roleNav}

      <hr />
    </>
  );
};

export default Navbar;
