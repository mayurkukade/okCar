// import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="topbar-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="tpinfo">
                <a href="#">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  1-800-123-4567
                </a>
                <a href="#">
                  <i className="fa fa-map-marker" aria-hidden="true"></i> 123 X
                  4TH Street, San Jose, CA 123456
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="toplinks">
                <a href="register.html">Sign Up</a> <a href="#">Sign In</a>
                <a href="#">Connect with Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-3 col-xs-12">
              <a href="index.html" className="logo">
                <img src="images/logo.png" alt="" />
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
                      <a href="index.html">
                        Home <span className="caret"></span>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="active">
                          <a href="index.html">Home Static Image</a>
                        </li>
                        <li>
                          <a href="index2.html">Home With Slider</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="listing.html">Used Cars</a>
                    </li>
                    <li>
                      <a href="listing.html">New Cars</a>
                    </li>
                    <li className="dropdown">
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
                    </li>
                    <li className="dropdown">
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

      <div
        className="searchwrap"
        style={{ border: "2px solid black", backgroundColor: "black" }}
      >
        <div className="container">
          <h3>Find Used Cars In Pune</h3>
          <p>
            Search from over 99,00,000 Active ads &amp; Post free unlimited
            classNameifieds ads!
          </p>
          <div className="searchbar">
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Car Make or Model"
                />
              </div>
              <div className="col-md-2">
                <select className="form-control">
                  <option>Price</option>
                  <option>$500 - $999</option>
                  <option>$1000 - $1099</option>
                  <option>$2000 - $2499</option>
                  <option>$2500 - $2999</option>
                  <option>$3000 - $3499</option>
                  <option>$3500 - $3999</option>
                  <option>About $4000</option>
                </select>
              </div>
              <div className="col-md-2">
                <select className="form-control">
                  <option>Area</option>
                  <option>Kharadi</option>
                  <option>Viman Nagar</option>
                  <option>Koreagaon</option>
                  <option>Hinjewadi</option>
                </select>
              </div>
              <div className="col-md-2">
                <input type="submit" className="btn" value="Search" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="titleTop">
            <h3>
              Featured <span>Used</span> Cars
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              varius, orci id facilisis egestas, neque purus sagittis arcu, nec
              maximus quam odio nec elit Pellentesque eget ipsum mattis
            </p>
          </div>

          <ul className="gridlist itemgrid">
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$184,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <div className="ribbon_3 popular">
                  <span>Featured</span>
                </div>
                <a href="detail.html">
                  <img src="images/cars/01.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                {" "}
                <a href="detail.html" className="readmore">
                  View Details{" "}
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>{" "}
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$120,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <div className="ribbon_3 popular">
                  <span>Featured</span>
                </div>
                <a href="detail.html">
                  <img src="images/cars/02.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                {" "}
                <a href="detail.html" className="readmore">
                  View Details{" "}
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>{" "}
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$99,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <div className="ribbon_3 popular">
                  <span>Featured</span>
                </div>
                <a href="detail.html">
                  <img src="images/cars/03.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                {" "}
                <a href="detail.html" className="readmore">
                  View Details{" "}
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>{" "}
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$59,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <div className="ribbon_3 popular">
                  <span>Featured</span>
                </div>
                <a href="detail.html">
                  <img src="images/cars/04.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                {" "}
                <a href="detail.html" className="readmore">
                  View Details{" "}
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>{" "}
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$69,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <div className="ribbon_3 popular">
                  <span>Featured</span>
                </div>
                <a href="detail.html">
                  <img src="images/cars/05.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                {" "}
                <a href="detail.html" className="readmore">
                  View Details{" "}
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>{" "}
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$58,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <div className="ribbon_3 popular">
                  <span>Featured</span>
                </div>
                <a href="detail.html">
                  <img src="images/cars/06.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                {" "}
                <a href="detail.html" className="readmore">
                  View Details{" "}
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>{" "}
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$184,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <div className="ribbon_3 popular">
                  <span>Featured</span>
                </div>
                <a href="detail.html">
                  <img src="images/cars/07.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                {" "}
                <a href="detail.html" className="readmore">
                  View Details{" "}
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>{" "}
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$89,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <div className="ribbon_3 popular">
                  <span>Featured</span>
                </div>
                <a href="detail.html">
                  <img src="images/cars/08.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                {" "}
                <a href="detail.html" className="readmore">
                  View Details{" "}
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>{" "}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="about-wrap">
        <div className="col-md-6">
          <div className="about-image"></div>
        </div>
        <div className="col-md-6">
          <div className="aboutinfo">
            <div className="title">
              <span>World&apos;s Leading Used Cars</span>
              <h1>
                <span>Welcome to</span> Auto Car
              </h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sapien metus, consectetur et efficitur ut, mattis et nisl. Etiam
              aliquet erat lorem, sed rhoncus justo hendrerit ac. Donec vel
              lacus tincidunt, sagittis lorem sed, ultricies magna. Suspendisse
              gravida massa sit amet urna faucibus, fermentum fringilla tellus
              congue. Integer lacinia iaculis dolor, in convallis metus laoreet
              quis. Vestibulum pulvinar, felis sit amet dignissim feugiat, est
              urna congue orci, nec mattis felis nunc sed nulla.
            </p>
            <ul>
              <li>Nam rutrum tortor eget lorem mattis mattis.</li>
              <li>Duis fermentum sem nec lorem sodales egestas.</li>
              <li>
                Duis mattis diam et ante tempor, quis tristique quam sagittis.
              </li>
              <li>Cras blandit ante ac hendrerit sodales.</li>
              <li>Duis non massa id nisl imperdiet iaculis.</li>
            </ul>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>

      <div className="section whitebg">
        <div className="container">
          <div className="titleTop">
            <h3>
              Search Cars By <span>Make</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              varius, orci id facilisis egestas, neque purus sagittis arcu, nec
              maximus quam odio nec elit Pellentesque eget ipsum mattis
            </p>
          </div>
          <div className="topsearchwrap">
            <ul className="row makelist">
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="images/make/01.jpg" alt="" />
                  <strong>Car Brand</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="images/make/02.jpg" alt="" />
                  <strong>Car Brand</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="images/make/03.jpg" alt="" />
                  <strong>Car Brand</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="images/make/04.jpg" alt="" />
                  <strong>Car Brand</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="images/make/05.jpg" alt="" />
                  <strong>Car Brand</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="images/make/06.jpg" alt="" />
                  <strong>Car Brand</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="images/make/07.jpg" alt="" />
                  <strong>Car Brand</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="images/make/08.jpg" alt="" />
                  <strong>Car Brand</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="images/make/09.jpg" alt="" />
                  <strong>Car Brand</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="images/make/10.jpg" alt="" />
                  <strong>Car Brand</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="images/make/11.jpg" alt="" />
                  <strong>Car Brand</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="images/make/12.jpg" alt="" />
                  <strong>Car Brand</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="images/make/13.jpg" alt="" />
                  <strong>Car Brand</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="images/make/14.jpg" alt="" />
                  <strong>Car Brand</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="images/make/15.jpg" alt="" />
                  <strong>Car Brand</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="images/make/16.jpg" alt="" />
                  <strong>Car Brand</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="images/make/17.jpg" alt="" />
                  <strong>Car Brand</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="images/make/18.jpg" alt="" />
                  <strong>Car Brand</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="titleTop">
            <h3>
              Popular <span>Used</span> Cars
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              varius, orci id facilisis egestas, neque purus sagittis arcu, nec
              maximus quam odio nec elit Pellentesque eget ipsum mattis
            </p>
          </div>

          <ul className="gridlist itemgrid">
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$184,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <a href="detail.html">
                  <img src="images/cars/09.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                <a href="detail.html" className="readmore">
                  View Details
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$120,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <a href="detail.html">
                  <img src="images/cars/10.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                <a href="detail.html" className="readmore">
                  View Details
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$99,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <a href="detail.html">
                  <img src="images/cars/03.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                <a href="detail.html" className="readmore">
                  View Details
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$59,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <a href="detail.html">
                  <img src="images/cars/04.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                <a href="detail.html" className="readmore">
                  View Details
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$69,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <a href="detail.html">
                  <img src="images/cars/05.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                <a href="detail.html" className="readmore">
                  View Details
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$58,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <a href="detail.html">
                  <img src="images/cars/06.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                <a href="detail.html" className="readmore">
                  View Details
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$184,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <a href="detail.html">
                  <img src="images/cars/07.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                <a href="detail.html" className="readmore">
                  View Details
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$89,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <a href="detail.html">
                  <img src="images/cars/08.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                <a href="detail.html" className="readmore">
                  View Details
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="section whitebg">
        <div className="container">
          <div className="titleTop">
            <h3>
              Used Cars By <span>Cities</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              varius, orci id facilisis egestas, neque purus sagittis arcu, nec
              maximus quam odio nec elit Pellentesque eget ipsum mattis
            </p>
          </div>
          <div className="topsearchwrap">
            <ul className="row catelist">
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  London <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  New York <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Atlanta <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Andalusia <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Anchorage <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Fairbanks <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Haines <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Flagstaff <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Prescott <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Arkadelphia <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Batesville <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Camden <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Forrest City <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Hot Springs <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Little Rock <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Alameda <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Arcadia <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Barstow <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Daly City <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Downey <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Huntington Beach <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Laguna Beach <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Modesto <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Rancho Cucamonga <span>(96)</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="wideBanner margintop40">
            <img src="images/google-ad-wide.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="taglinewrap">
        <div className="container">
          <h2>Get Started Today</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            aliquet, massa ac ornare feugiat, nunc dui auctor ipsum, sed posuere
            eros sapien id quam.
          </p>
          <a href="#">
            Do You Want To Buy a Car?
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </a>
          <a href="#" className="buy">
            Do You Want To Sell a Car?
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </a>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="titleTop">
            <h3>
              Latest <span>Used</span> Cars
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              varius, orci id facilisis egestas, neque purus sagittis arcu, nec
              maximus quam odio nec elit Pellentesque eget ipsum mattis
            </p>
          </div>

          <ul className="gridlist itemgrid">
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$184,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <a href="detail.html">
                  <img src="images/cars/01.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                <a href="detail.html" className="readmore">
                  View Details
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$120,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <a href="detail.html">
                  <img src="images/cars/02.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                <a href="detail.html" className="readmore">
                  View Details
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$99,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <a href="detail.html">
                  <img src="images/cars/03.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                <a href="detail.html" className="readmore">
                  View Details
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$59,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <a href="detail.html">
                  <img src="images/cars/04.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                <a href="detail.html" className="readmore">
                  View Details
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$69,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <a href="detail.html">
                  <img src="images/cars/09.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                <a href="detail.html" className="readmore">
                  View Details
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$58,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <a href="detail.html">
                  <img src="images/cars/06.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                <a href="detail.html" className="readmore">
                  View Details
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$184,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <a href="detail.html">
                  <img src="images/cars/10.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                <a href="detail.html" className="readmore">
                  View Details
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </li>
            <li className="item">
              <div className="innerad">
                <h3>
                  <a href="detail.html">Car Name 2016</a>
                </h3>
                <div className="price">$89,900</div>
                <div className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  Atlanta, GA
                </div>
              </div>
              <div className="adimg">
                <a href="detail.html">
                  <img src="images/cars/08.jpg" alt="" />
                </a>
              </div>
              <div className="innerad">
                <a href="detail.html" className="readmore">
                  View Details
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="section whitebg howitwrap">
        <div className="container">
          <ul className="howlist row">
            <li className="col-md-4 col-sm-4">
              <div className="iconcircle">
                <img src="images/avatar.png" alt="" />
              </div>
              <h4>Create a Free Account</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidid ut labore et dolore magna aliqua.
              </p>
            </li>

            <li className="col-md-4 col-sm-4">
              <div className="iconcircle">
                <img src="images/car.png" alt="" />
              </div>
              <h4>Post your Free Car</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidid ut labore et dolore magna aliqua.
              </p>
            </li>

            <li className="col-md-4 col-sm-4">
              <div className="iconcircle">
                <img src="images/sell-icon.png" alt="" />
              </div>
              <h4>Sold or Buy</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidid ut labore et dolore magna aliqua.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="titleTop">
            <h3>
              Happy <span>Customers</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              varius, orci id facilisis egestas, neque purus sagittis arcu, nec
              maximus quam odio nec elit Pellentesque eget ipsum mattis.
            </p>
          </div>

          <ul className="testimonialsList">
            <li>
              <div className="testinner">
                <div className="testimg">
                  <img src="images/coment-avatar-1.jpg" alt="" />
                </div>
                <div className="clientname">Garry Miller Jr (Tutor)</div>
                <div className="clientinfo">London, United Kingdom</div>
                <p>
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum viverra id nunc at finibus. Etiam sollicitudin
                  faucibus cursus. Proin luctus cursus nulla sed iaculis.
                  Quisque vestibulum augue nec aliquet aliquet.&quot;
                </p>
              </div>
            </li>
            <li>
              <div className="testinner">
                <div className="testimg">
                  <img src="images/coment-avatar-2.jpg" alt="" />
                </div>
                <div className="clientname">David Jackson (Student)</div>
                <div className="clientinfo">London, United Kingdom</div>
                <p>
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum viverra id nunc at finibus. Etiam sollicitudin
                  faucibus cursus. Proin luctus cursus nulla sed iaculis.
                  Quisque vestibulum augue nec aliquet aliquet.&quot;
                </p>
              </div>
            </li>
            <li>
              <div className="testinner">
                <div className="testimg">
                  <img src="images/coment-avatar-1.jpg" alt="" />
                </div>
                <div className="clientname">Garry Miller Jr (Tutor)</div>
                <div className="clientinfo">London, United Kingdom</div>
                <p>
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum viverra id nunc at finibus. Etiam sollicitudin
                  faucibus cursus. Proin luctus cursus nulla sed iaculis.
                  Quisque vestibulum augue nec aliquet aliquet.&quot;
                </p>
              </div>
            </li>
            <li>
              <div className="testinner">
                <div className="testimg">
                  <img src="images/coment-avatar-2.jpg" alt="" />
                </div>
                <div className="clientname">David Jackson (Student)</div>
                <div className="clientinfo">London, United Kingdom</div>
                <p>
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum viverra id nunc at finibus. Etiam sollicitudin
                  faucibus cursus. Proin luctus cursus nulla sed iaculis.
                  Quisque vestibulum augue nec aliquet aliquet.&quot;
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="appwraper">
        <div className="container">
          <div className="titleTop">
            <h3>Download Our App</h3>
          </div>
          <div className="subtitle2">A world market in your hand</div>
          <p>
            Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac
            condimentum. Vestibulum congue posuere lacus, id tincidunt nisi
            porta sit amet. Suspendisse et sapien varius, pellentesque dui non,
            semper orci.
          </p>
          <div className="appbtn">
            <a
              href="#"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Download From Play Store"
            >
              <i className="fa fa-android" aria-hidden="true"></i> Download
            </a>
            <a
              href="#"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Download From App Store"
            >
              <i className="fa fa-apple" aria-hidden="true"></i> Download
            </a>
            <a
              href="#"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Download From Windows Store"
            >
              <i className="fa fa-windows" aria-hidden="true"></i> Download
            </a>
          </div>
        </div>
      </div>

      <div className="section whitebg">
        <div className="container">
          <div className="titleTop">
            <h3>
              Latest From <span>Blog</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              varius, orci id facilisis egestas, neque purus sagittis arcu, nec
              maximus quam odio nec elit Pellentesque eget ipsum mattis
            </p>
          </div>
          <ul className="blogGrid row">
            <li className="col-md-4 col-sm-4">
              <div className="int">
                <div className="postimg">
                  <img src="images/blog/1.jpg" alt="Blog Title" />
                </div>

                <div className="post-header">
                  <h4>
                    <a href="#.">Duis ultricies aliquet mauris</a>
                  </h4>
                  <div className="postmeta">
                    By : <span>Jhon Doe </span> Category :
                    <a href="#.">Job Search </a>
                  </div>
                  <div className="date">17 SEP 2017</div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem
                  vel neque rhoncus dignissim. Ut et eros rhoncus...
                </p>
                <a href="blog-detail.html" className="readmore">
                  Read More
                </a>
              </div>
            </li>
            <li className="col-md-4 col-sm-4">
              <div className="int">
                <div className="postimg">
                  <img src="images/blog/2.jpg" alt="Blog Title" />
                </div>

                <div className="post-header">
                  <h4>
                    <a href="#.">Duis ultricies aliquet mauris</a>
                  </h4>
                  <div className="postmeta">
                    By : <span>Jhon Doe </span> Category :
                    <a href="#.">Job Search </a>
                  </div>
                  <div className="date">17 SEP 2017</div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem
                  vel neque rhoncus dignissim. Ut et eros rhoncus...
                </p>
                <a href="blog-detail.html" className="readmore">
                  Read More
                </a>
              </div>
            </li>
            <li className="col-md-4 col-sm-4">
              <div className="int">
                <div className="postimg">
                  <img src="images/blog/3.jpg" alt="Blog Title" />
                </div>

                <div className="post-header">
                  <h4>
                    <a href="#.">Duis ultricies aliquet mauris</a>
                  </h4>
                  <div className="postmeta">
                    By : <span>Jhon Doe </span> Category :
                    <a href="#.">Job Search </a>
                  </div>
                  <div className="date">17 SEP 2017</div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris eu nulla eget nisl dapibus finibus. Maecenas quis sem
                  vel neque rhoncus dignissim. Ut et eros rhoncus...
                </p>
                <a href="blog-detail.html" className="readmore">
                  Read More
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="subscribe">
        <div className="container">
          <h6>Submit Newsletters</h6>
          <p>
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy sanctus est Lorem ipsum
            dolor sit amet.
          </p>
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    Subscrbe
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerWrap">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-4">
              <h5>Cars By Make</h5>
              <ul className="quicklinks">
                <li>
                  <a href="#.">Daihatsu Cars for Sale</a>
                </li>
                <li>
                  <a href="#.">Honda Cars for Sale</a>
                </li>
                <li>
                  <a href="#.">Hyundai Cars for Sale</a>
                </li>
                <li>
                  <a href="#.">Mitsubishi Cars for Sale</a>
                </li>
                <li>
                  <a href="#.">Suzuki Cars for Sale</a>
                </li>
                <li>
                  <a href="#.">Toyota Cars for Sale</a>
                </li>
                <li>
                  <a href="#.">BMW Cars for Sale</a>
                </li>
                <li>
                  <a href="#.">Nissan Cars for Sale</a>
                </li>
                <li>
                  <a href="#.">Mercedes Cars for Sale</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-sm-4">
              <h5>Cars By City</h5>
              <ul className="quicklinks">
                <li>
                  <a href="#.">Cars in New York</a>
                </li>
                <li>
                  <a href="#.">Cars in Atlanta</a>
                </li>
                <li>
                  <a href="#.">Cars in Los Angeles</a>
                </li>
                <li>
                  <a href="#.">Cars in Chicago</a>
                </li>
                <li>
                  <a href="#.">Cars in San Diego</a>
                </li>
                <li>
                  <a href="#.">Cars in Las Vegas</a>
                </li>
                <li>
                  <a href="#.">Cars in Fresno</a>
                </li>
                <li>
                  <a href="#.">Cars in Mesa</a>
                </li>
                <li>
                  <a href="#.">Cars in Miami</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-sm-4">
              <h5>Explore Us</h5>
              <ul className="quicklinks">
                <li>
                  <a href="#.">Used Cars</a>
                </li>
                <li>
                  <a href="#.">Used Bikes</a>
                </li>
                <li>
                  <a href="#.">New Cars</a>
                </li>
                <li>
                  <a href="#.">Cool Rides</a>
                </li>
                <li>
                  <a href="#.">Membership Cards</a>
                </li>
                <li>
                  <a href="#.">Forums</a>
                </li>
                <li>
                  <a href="#.">Autoshow</a>
                </li>
                <li>
                  <a href="#.">Sitemap</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-sm-4">
              <h5>Quick Links</h5>
              <ul className="quicklinks">
                <li>
                  <a href="#.">About Us </a>
                </li>
                <li>
                  <a href="#.">Careers</a>
                </li>
                <li>
                  <a href="#.">Advertise</a>
                </li>
                <li>
                  <a href="#.">Contact Us</a>
                </li>
                <li>
                  <a href="#.">Post an Ad</a>
                </li>
                <li>
                  <a href="#.">Privacy Policy</a>
                </li>
                <li>
                  <a href="#.">FAQs</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 col-sm-4">
              <h5>Help Center</h5>
              <ul className="quicklinks">
                <li>
                  <a href="#.">Help &amp; Support</a>
                </li>
                <li>
                  <a href="#.">FAQs</a>
                </li>
                <li>
                  <a href="#.">Account Issue</a>
                </li>
                <li>
                  <a href="#.">Fake Ads</a>
                </li>
                <li>
                  <a href="#.">Buy Membership</a>
                </li>
                <li>
                  <a href="#.">Terms of Services</a>
                </li>
                <li>
                  <a href="#.">History</a>
                </li>
              </ul>
              <div className="clear"></div>
            </div>
          </div>
          <div className="social">
            <a href="#." target="_blank">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a href="#." target="_blank">
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </a>
            <a href="#." target="_blank">
              <i className="fa fa-google-plus-square" aria-hidden="true"></i>
            </a>
            <a href="#." target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="#." target="_blank">
              <i className="fa fa-youtube-square" aria-hidden="true"></i>
            </a>
          </div>
          <div className="note">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            suscipit, ante in bibendum placerat, tortor magna varius ex, vel
            efficitur leo massa eleifend enim. Morbi fermentum neque eget lacus
            tristique, ut laoreet arcu tempor. Proin justo dui, finibus et
            hendrerit vitae, pharetra nec libero. Mauris sagittis, justo ut
            sollicitudin porttitor, tortor augue dictum purus.
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
