import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./contactdealer.css";
const ContactDealer = () => {
  return (
    <>
      <div className="contact-dealer-container">
        <div className="contact-title">
          <h3>Contact Dealer</h3>
        </div>
        <div className="car-deatails-container">
          <div className="car-details-list">
            <h3>Car Details</h3>
            <div className="col-md-12 col-sm-7">
              <ul className="searchList">
                <li>
                  <div className="row">
                    <div className="col-md-3 col-sm-4">
                    
                      <div className="adimg">
                        {/* <img src={imageSrc} alt="Ad Name" /> */}
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-8">
                      <div className="jobinfo">
                        <div className="row">
                          <div className="col-md-8 col-sm-7">
                            <h3>
                              <a>Suzuki Swift</a>
                            </h3>
                            <div className="location">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>2021</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-tachometer"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>25000 km</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>Kharadi</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="vinfo">
                              <span>Petrol</span>
                            </div>
                            {/* <div className="vinfo">
                      <span>{cc} cc</span>
                    </div> */}
                            <div className="vinfo">
                              <span>Automatic</span>
                            </div>
                            <div className="clearfix"></div>
                          </div>
                          <div className="col-md-4 col-sm-5 text-right">
                            <div className="adprice">₹5,00,000</div>
                            <div className="listbtn">
                              <Link to={`/carDetails/${1}`}>
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
            </div>

            <div className="dealer-details-container">
              <h5>Dealer Details</h5>
              <p>Name:</p>
              <p>Location:</p>
              <p>contact number:</p>
            </div>
          </div>
        </div>

        <Button>
          <Link to="/mycarbooking">Next</Link>{" "}
        </Button>
      </div>
    </>
  );
};

export default ContactDealer;
