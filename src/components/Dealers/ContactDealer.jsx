import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { selectAskingPriceDetails } from "../../api/bookingStoreSlice";
import "./contactdealer.css";
import { useSelector } from "react-redux";
const ContactDealer = () => {

  const selectAskingPrices = useSelector(
    (state) => state.askingPriceStore.value
  );
 
  const mapSelectAskingPrice = selectAskingPrices.map((data) => {
  
    return (
      <>
        <div className="col-md-12 col-sm-7">
          <ul className="searchList" key={data.carId}>
            <li>
              <div className="row">
                <div className="col-md-9 col-sm-8">
                  <div className="jobinfo">
                    <div className="row">
                      <div className="col-md-8 col-sm-7">
                        <h3>
                          <a>{data.model}</a>
                        </h3>
                        <div className="location">
                          <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                          <span>{data.year}</span>
                        </div>
                        <div className="location">
                          <i
                            className="fa fa-tachometer"
                            aria-hidden="true"
                          ></i>{" "}
                          <span>{data.kmDriven}km</span>
                        </div>
                        <div className="location">
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>{" "}
                          <span>{data.area}</span>
                        </div>
                        <div className="clearfix"></div>



                        <div className="vinfo">
                          <span>{data.fuelType}</span>
                        </div>
                        <div className="vinfo">
                          <span>{data.transmission}</span>
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
<p>Name:{data?.dealerDetails?.firstName}</p>
<p>Location:{data?.dealerDetails?.address}</p>
<p>contact number:{data?.dealerDetails?.mobileNo}</p>
</div>
<Button>
          <Link to={'/mycarbooking'}>Next</Link>
        </Button>
      </>
    );
  });

  let content;
  let dealer;
  if (selectAskingPrices.length) {
    content = mapSelectAskingPrice

  } else {
    content = <p>please go to next page</p>;
  }
  return (
    <>
      <div className="contact-dealer-container">
        <div className="contact-title">
          <h3>Contact Dealer</h3>
        </div>
        <div className="car-deatails-container">
          <div className="car-details-list">
            <h3>Car Details</h3>

            {content}
            {dealer}
            
          </div>
        </div>

       
      </div>
    </>
  );
};

export default ContactDealer;
