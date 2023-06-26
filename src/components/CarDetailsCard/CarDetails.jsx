// import { Link } from "react-router-dom";
import SubNav from "../Navbar/SubNav";

const CarDetails = () => {
  return (
    <>
      <SubNav componentsName={"Mercedez C180 Elegance 2008 "} />
      <div className="listpgWraper">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="advert-header">
                <div className="contentbox">
                  <div className="adimages">
                    {/* <div id="adslider" className="flexslider">
                    <ul className="slides">
                      <li>
                        {" "}
                        <img src="images/cars/01.jpg" alt="" />{" "}
                      </li>
                      <li>
                        {" "}
                        <img src="images/cars/02.jpg" alt="" />{" "}
                      </li>
                      <li>
                        {" "}
                        <img src="images/cars/03.jpg" alt="" />{" "}
                      </li>
                      <li>
                        {" "}
                        <img src="images/cars/04.jpg" alt="" />{" "}
                      </li>
                      <li>
                        {" "}
                        <img src="images/cars/05.jpg" alt="" />{" "}
                      </li>
                      <li>
                        {" "}
                        <img src="images/cars/06.jpg" alt="" />{" "}
                      </li>
                    </ul>
                  </div> */}
                    <div id="carousel" className="flexslider">
                      <ul className="slides">
                        {/* <li>
                        {" "}
                        <img src="images/cars/01.jpg" alt="" />{" "}
                      </li>
                      <li>
                        {" "}
                        <img src="images/cars/02.jpg" alt="" />{" "}
                      </li>
                      <li>
                        {" "}
                        <img src="images/cars/03.jpg" alt="" />{" "}
                      </li>
                      <li>
                        {" "}
                        <img src="images/cars/04.jpg" alt="" />{" "}
                      </li>
                      <li>
                        {" "}
                        <img src="images/cars/05.jpg" alt="" />{" "}
                      </li> */}
                        <li>
                          {" "}
                          <img src="../../../images/cars/06.jpg" alt="" />{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h3>Car Features</h3>
                  <ul className="row carfeature">
                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img src="images/icons/disc-brake.png" alt="" /> ABS
                      </span>
                    </li>
                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img src="images/icons/radio.png" alt="" /> AM/FM Radio
                      </span>
                    </li>
                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img src="images/icons/air-bags.png" alt="" /> Air Bags
                      </span>
                    </li>
                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img src="images/icons/minisplit.png" alt="" /> Air
                        Conditioning
                      </span>
                    </li>
                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img src="images/icons/rim.png" alt="" /> Alloy Rims
                      </span>
                    </li>
                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img src="images/icons/cd-player.png" alt="" /> CD
                        Player
                      </span>
                    </li>
                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img src="images/icons/cassette.png" alt="" /> Cassette
                        Player
                      </span>
                    </li>
                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img src="images/icons/cruise.png" alt="" /> Cruise
                        Control
                      </span>
                    </li>
                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img src="images/icons/dvd-player.png" alt="" /> DVD
                        Player
                      </span>
                    </li>
                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img src="images/icons/key.png" alt="" /> Immobilizer
                        Key
                      </span>
                    </li>
                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img src="images/icons/key-less.png" alt="" /> Keyless
                        Entry
                      </span>
                    </li>
                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img src="images/icons/power-lock.png" alt="" /> Power
                        Locks
                      </span>
                    </li>
                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img src="images/icons/mirror.png" alt="" /> Power
                        Mirrors
                      </span>
                    </li>
                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img src="images/icons/steering.png" /> Power Steering
                      </span>
                    </li>
                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img src="images/icons/power-window.png" alt="" /> Power
                        Windows
                      </span>
                    </li>
                  </ul>
                  <h3>Seller Comments</h3>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    pellentesque massa vel lorem fermentum fringilla.
                    Pellentesque id est et neque blandit ornare malesuada a
                    mauris. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed sagittis, quam a fringilla congue, turpis turpis
                    molestie ligula, ut laoreet elit arcu sed nulla. Sed at quam
                    commodo, egestas turpis eget, fringilla dui. Etiam sit amet
                    nulla metus. Etiam iaculis lobortis ultricies.{" "}
                    <strong>
                      Maecenas maximus magna a metus consectetur, vel fermentum
                      nisl ultrices
                    </strong>
                    . Quisque eget ante id dui posuere ullamcorper ut molestie
                    eros. Aliquam ultrices lacinia risus, at lacinia ante
                    vehicula id. Nulla in lectus dignissim, egestas purus sit
                    amet, mattis libero. Maecenas ullamcorper rutrum porta.{" "}
                  </p>
                </div>
              </div>

              {/* <div className="advert-header">
                <div className="contentbox">
                  <h3>Car Inspection is Important Before buy a Used Car</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed pellentesque massa vel lorem fermentum fringilla.
                        Pellentesque id est et neque blandit ornare malesuada a
                        mauris. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed sagittis, quam a fringilla congue,
                        turpis turpis molestie ligula, ut laoreet elit arcu sed
                        nulla.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img src="images/car-inspection.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* 
              <div className="relatedJobs">
                <h3>Related Ads</h3>
                <ul className="searchList">
                  <li>
                    <div className="row">
                      <div className="col-md-3 col-sm-4">
                        <div className="adimg">
                          <img src="images/cars/04.jpg" alt="Ad Name" />
                        </div>
                      </div>
                      <div className="col-md-9 col-sm-8">
                        <div className="jobinfo">
                          <div className="row">
                            <div className="col-md-8 col-sm-7">
                              <h3>
                                <a href="#.">Sue gate F 1.0 for Sale</a>
                              </h3>
                              <div className="location">
                                <i
                                  className="fa fa-calendar"
                                  aria-hidden="true"
                                ></i>{" "}
                                <span>2014</span>
                              </div>
                              <div className="location">
                                <i
                                  className="fa fa-tachometer"
                                  aria-hidden="true"
                                ></i>{" "}
                                <span>38,000 km</span>
                              </div>
                              <div className="location">
                                <i
                                  className="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>{" "}
                                <span>New York</span>
                              </div>
                              <div className="clearfix"></div>
                              <div className="vinfo">
                                <span>Petrol</span>
                              </div>
                              <div className="vinfo">
                                <span>1300 cc</span>
                              </div>
                              <div className="vinfo">
                                <span>Automatic</span>
                              </div>
                              <div className="clearfix"></div>
                              <div className="date">
                                Last Updated: 1 day ago
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-5 text-right">
                              <div className="adprice">$456.00</div>
                              <div className="listbtn">
                                <Link to="/cardetails">
                                  View Details{" "}
                                  <i
                                    className="fa fa-arrow-circle-right"
                                    aria-hidden="true"
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="row">
                      <div className="col-md-3 col-sm-4">
                        <div className="adimg">
                          <img src="images/cars/05.jpg" alt="Ad Name" />
                        </div>
                      </div>
                      <div className="col-md-9 col-sm-8">
                        <div className="jobinfo">
                          <div className="row">
                            <div className="col-md-8 col-sm-7">
                              <h3>
                                <a href="#.">Sue gate F 1.0 for Sale</a>
                              </h3>
                              <div className="location">
                                <i
                                  className="fa fa-calendar"
                                  aria-hidden="true"
                                ></i>{" "}
                                <span>2014</span>
                              </div>
                              <div className="location">
                                <i
                                  className="fa fa-tachometer"
                                  aria-hidden="true"
                                ></i>{" "}
                                <span>38,000 km</span>
                              </div>
                              <div className="location">
                                <i
                                  className="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>{" "}
                                <span>New York</span>
                              </div>
                              <div className="clearfix"></div>
                              <div className="vinfo">
                                <span>Petrol</span>
                              </div>
                              <div className="vinfo">
                                <span>1300 cc</span>
                              </div>
                              <div className="vinfo">
                                <span>Automatic</span>
                              </div>
                              <div className="clearfix"></div>
                              <div className="date">
                                Last Updated: 1 day ago
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-5 text-right">
                              <div className="adprice">$456.00</div>
                              <div className="listbtn">
                                <Link to="/cardetails">
                                  View Details{" "}
                                  <i
                                    className="fa fa-arrow-circle-right"
                                    aria-hidden="true"
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="row">
                      <div className="col-md-3 col-sm-4">
                        <div className="adimg">
                          <img src="images/cars/06.jpg" alt="Ad Name" />
                        </div>
                      </div>
                      <div className="col-md-9 col-sm-8">
                        <div className="jobinfo">
                          <div className="row">
                            <div className="col-md-8 col-sm-7">
                              <h3>
                                <a href="#.">Sue gate F 1.0 for Sale</a>
                              </h3>
                              <div className="location">
                                <i
                                  className="fa fa-calendar"
                                  aria-hidden="true"
                                ></i>{" "}
                                <span>2014</span>
                              </div>
                              <div className="location">
                                <i
                                  className="fa fa-tachometer"
                                  aria-hidden="true"
                                ></i>{" "}
                                <span>38,000 km</span>
                              </div>
                              <div className="location">
                                <i
                                  className="fa fa-map-marker"
                                  aria-hidden="true"
                                ></i>{" "}
                                <span>New York</span>
                              </div>
                              <div className="clearfix"></div>
                              <div className="vinfo">
                                <span>Petrol</span>
                              </div>
                              <div className="vinfo">
                                <span>1300 cc</span>
                              </div>
                              <div className="vinfo">
                                <span>Automatic</span>
                              </div>
                              <div className="clearfix"></div>
                              <div className="date">
                                Last Updated: 1 day ago
                              </div>
                            </div>
                            <div className="col-md-4 col-sm-5 text-right">
                              <div className="adprice">$456.00</div>
                              <div className="listbtn">
                                <Link to="/cardetails">
                                  View Details{" "}
                                  <i
                                    className="fa fa-arrow-circle-right"
                                    aria-hidden="true"
                                  ></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}
            </div>

            <div className="col-md-4">
              <div className="jbside">
                <div className="adsalary">
                  Price <strong>₹ 5,00,000</strong>
                </div>
                <div className="ptext">
                  <i className="fa fa-clock-o" aria-hidden="true"></i> 7 Jan
                  10:10 pm
                </div>
                <div className="ptext">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  Kharadi, Pune
                </div>
                <div className="clearfix"></div>
                <div className="adButtons">
                  {" "}
                  <a href="#." className="btn apply">
                    <i className="fa fa-phone" aria-hidden="true"></i> 555 456
                    46679
                  </a>{" "}
                  {/* <a href="#." className="btn">
                    <i className="fa fa-envelope" aria-hidden="true"></i> Send A
                    Message
                  </a>{" "} */}
                  {/* <a href="#." className="btn">
                    <i className="fa fa-print" aria-hidden="true"></i> Print
                    this Ad
                  </a>{" "} */}
                  {/* <a href="#." className="btn">
                    <i className="fa fa-floppy-o" aria-hidden="true"></i> Save
                    This Ad
                  </a>{" "}
                  <a href="#." className="btn">
                    <i
                      className="fa fa-exclamation-triangle"
                      aria-hidden="true"
                    ></i>{" "}
                    Report Abuse
                  </a>{" "} */}
                </div>
              </div>

              <div className="jbside">
                <h3>About This Car</h3>
                <ul className="jbdetail">
                  <li className="row">
                    <div className="col-md-6 col-xs-6">Registered City</div>
                    <div className="col-md-6 col-xs-6">
                      <span>Pune</span>
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-md-6 col-xs-6">Color</div>
                    <div className="col-md-6 col-xs-6">
                      <span>Pearl White</span>
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-md-6 col-xs-6">Assembly</div>
                    <div className="col-md-6 col-xs-6">
                      <span>Imported</span>
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-md-6 col-xs-6">Engine Capacity</div>
                    <div className="col-md-6 col-xs-6">
                      <span>1800 cc</span>
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-md-6 col-xs-6">Body Type</div>
                    <div className="col-md-6 col-xs-6">
                      <span>Mini Van</span>
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-md-6 col-xs-6">Last Updated</div>
                    <div className="col-md-6 col-xs-6">
                      <span>Aug 24, 2017</span>
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-md-6 col-xs-6">Ad Ref #</div>
                    <div className="col-md-6 col-xs-6">
                      <span>2043936</span>
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-md-6 col-xs-6">Model</div>
                    <div className="col-md-6 col-xs-6">
                      <span>2017</span>
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-md-6 col-xs-6">KM Driven</div>
                    <div className="col-md-6 col-xs-6">
                      <span>165,000 km</span>
                    </div>
                  </li>

                  <li className="row">
                    <div className="col-md-6 col-xs-6">Fuel</div>
                    <div className="col-md-6 col-xs-6">
                      <span>Petrol</span>
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-md-6 col-xs-6">Transmission</div>
                    <div className="col-md-6 col-xs-6">
                      <span>Automatic</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* <div className="jbside">
                <h3>Contact This Seller</h3>
                <div className="formpanel">
                  <div className="formrow">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="formrow">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="formrow">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="formrow">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="formrow">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <input type="submit" className="btn" value="Submit" />
                </div>
              </div> */}

              <div className="jbside">
                <h3>Stay Safe</h3>
                <div className="gmap">
                  <ul className="unorderlist">
                    <li>Avoid deals that are too good to be true.</li>
                    <li>
                      Deal with people in your area by meeting face to face to
                      see the item.
                    </li>
                    <li>Never provide your personal or banking information.</li>
                    <li>
                      See our Safety tips regarding vehicle buying and selling.
                    </li>
                    <li>How to spot scam ads?</li>
                    <li>How to protect yourself?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
