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
                  
                    <div id="carousel" className="flexslider">
                      <ul className="slides">
                      
                        <li>
                          
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

             
            </div>

            <div className="col-md-4">
              <div className="jbside">
                <div className="adsalary" >
                  Price <strong> ₹ 5,00,000</strong>
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
