
import SubNav from "../Navbar/SubNav";
import { useSelector } from "react-redux";

import { CommonUtilities } from "../../util/common.utilities";
import { useState } from "react";

const CarDetails = () => {
  
  const userInfo = useSelector((state)=>state.auth.userInfo)

  const [largePreview, setLargePreview] = useState(null);




  const dummyImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Kuebelwagen_1.jpg/400px-VW_Kuebelwagen_1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg/400px-2014_Porsche_Cayenne_%2892A_MY14%29_GTS_wagon_%282015-08-07%29_01.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG/400px-Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg/400px-Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ford_Crown_Victoria_LX.jpg/400px-Ford_Crown_Victoria_LX.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Plymouth_Superbird.jpg/400px-Plymouth_Superbird.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2nd-Saab-9000-hatch.jpg/400px-2nd-Saab-9000-hatch.jpg",
  ];

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
                    {largePreview && (
                      <img
                        style={{ width: "100%" }}
                        src={largePreview}
                        alt=""
                      />
                    )}
                    {!largePreview && (
                      <img src="../../../images/cars/01.jpg" alt="" />
                    )}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                        marginTop: "2em",
                        overflowX: "auto",
                      }}
                    >
                      {dummyImages.map((image) => {
                        return (
                          <div
                            onClick={() => {
                              setLargePreview(() => image);
                            }}
                            key={CommonUtilities.randomString(16)}
                            style={{
                              overflow: "hidden",
                              flexShrink: "0",
                              margin: "1em",
                              height: "8em",
                              width: "10em",
                              backgroundColor: "red",
                              cursor: "pointer",
                            }}
                          >
                            <img src={image} style={{ height: "8em" }} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <h3>Car Features</h3>
                  <ul className="row carfeature">
                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img src="images/icons/minisplit.png" alt="" /> Air
                        Conditioning
                      </span>
                    </li>

                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img src="images/icons/radio.png" alt="" /> Music
                      </span>
                    </li>
                    <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img
                          src="../../../images/icons/rearcamera-copy.png"
                          alt=""
                          style={{ height: "30px" }}
                        />{" "}
                        Rear Parking Camera
                      </span>
                    </li>
                    {/* <li className="col-md-4 col-sm-6">
                      <span className="feat">
                        <img src="images/icons/disc-brake.png" alt="" /> ABS
                      </span>
                    </li> */}
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
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  Kharadi, Pune
                </div>
                <div className="clearfix"></div>
                <div className="adButtons" >
                  
                  <a href="#." className="btn apply">
                    <i className="fa fa-phone" aria-hidden="true"  ></i>{userInfo ? 999999999 :<span>please login</span> } 
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
                  {/* <li className="row">
                    <div className="col-md-6 col-xs-6">Assembly</div>
                    <div className="col-md-6 col-xs-6">
                      <span>Imported</span>
                    </div>
                  </li> */}
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
                  {/* <li className="row">
                    <div className="col-md-6 col-xs-6">Last Updated</div>
                    <div className="col-md-6 col-xs-6">
                      <span>Aug 24, 2017</span>
                    </div>
                  </li> */}
                  {/* <li className="row">
                    <div className="col-md-6 col-xs-6">Ad Ref #</div>
                    <div className="col-md-6 col-xs-6">
                      <span>2043936</span>
                    </div>
                  </li> */}
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
