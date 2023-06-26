import HomeCarousel from "../carousel/HomeCarousel";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-3 col-xs-12">
              <a className="logo">
                <Link to="/">
                  <img src="../../../images/logo.png" alt="logo" />
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
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/carlist">Used Cars</Link>
                    </li>
                    {/* <li>
                      <a href="listing.html">New Cars</a>
                    </li> */}
                    <li>
                      <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/signin">Sign In</Link>
                    </li>

                    <li className="postad"></li>
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
            Search from over 1,00,000 Active Cars
            {/* &amp; Post free unlimited
            classNameifieds ads! */}
          </p>
          <div className="searchbar">
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Car Brand or Model"
                />
              </div>
              <div className="col-md-2">
                <select className="form-control">
                  <option>Price</option>
                  <option>₹50,000 - ₹99,999</option>
                  <option>₹1,00,000 - ₹1,49,999</option>
                  <option>₹1,50,000 - ₹1,99,999</option>
                  <option>₹2,00,000 - ₹2,49,999</option>
                  {/* <option>₹ - ₹3499</option>
                  <option>₹3500 - ₹3999</option>
                  <option>About ₹4000</option> */}
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
      <HomeCarousel />
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
              Search Cars By <span>Brand</span>
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
                  <img src="../../../images/logo/tata.png" alt="" />
                  <strong>Tata Motors</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="../../../images/logo/suzuki.png" alt="" />
                  <strong>Maruti Suzuki</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="../../../images/logo/hyundai.png" alt="" />
                  <strong>Hyundai</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="../../../images/logo/Mahindra.png" alt="" />
                  <strong>Mahindra</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="../../../images/logo/honda.png" alt="" />
                  <strong>Honda</strong>
                </a>
              </li>
              <li className="col-md-2 col-sm-3 col-xs-6">
                <a href="listing.html">
                  <img src="../../../images/logo/toyota.png" alt="" />
                  <strong>Toyota</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="section whitebg">
        <div className="container">
          <div className="titleTop">
            <h3>
              Used Cars By <span>Area</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              varius, orci id facilisis egestas, neque purus sagittis arcu, nec
              maximus quam odio nec elit Pellentesque eget ipsum mattis
            </p>
          </div> */}
      {/* <div className="topsearchwrap">
            <ul className="row catelist">
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  9 Drd <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  A.r. Shala<span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Afmc <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Akurdi <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Ammunition Factory Khadki <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Anandnagar (pune) <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Armament <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Aundh T.s. <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Bajirao Road <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Baner Road <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Bhavani Peth <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Bhosari I.e. <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Bhosarigoan <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Chinchwad East <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Dukirkline<span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  East Khadki <span>(96)</span>
                </a>
              </li>
              <li className="col-md-3 col-sm-6 col-xs-6">
                <a href="#">
                  Ghorpuri Bazar <span>(96)</span>
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
          {/* <div className="wideBanner margintop40">
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
      {/* <div className="section">
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
      </div> */}
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
      {/* <div className="section">
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
      </div> */}
      {/* <div className="appwraper">
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
        </div> */}
      {/* <div className="subscribe">
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
        </div> */}
    </div>
  );
};

export default Home;
