import "./userrequestlist.css";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useGetAllDealerQuery } from "../../api/dealersManegmentApiSlice";
import { useGetDealerCarsDealerManegmentPageQuery } from "../../api/dealersManegmentApiSlice";
const UserRequestList = () => {
  const {
    data: fetchAllCars,
    isLoading,
    isError,
  } = useGetDealerCarsDealerManegmentPageQuery(7);
  console.log(fetchAllCars);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>Error</p>;
  } else if (fetchAllCars) {
    content = fetchAllCars.list.map((data, index) => (
      <div className="user-container" key={index}>
        <div className="user-container">
          <div className="contact-dealer-container">
            <div className="car-deatails-container">
              <div className="car-details-list">
                <div className="col-md-12 col-sm-7">
                
                  <ul className="searchList">
                    <li>
                      <div className="row">
                      <p>Date:{data.date}</p>
                        {/* <div className="col-md-3 col-sm-4">
                        <div className="adimg">
                          <img src={imageSrc} alt="Ad Name" />
                        </div>
                      </div> */}
                        <div className="col-md-9 col-sm-8">
                          <div className="jobinfo">
                            <div className="row">
                              <div className="col-md-8 col-sm-7">
                                <h3>
                                  <a>
                                    {data.brand} {data.model}
                                  </a>
                                </h3>
                                <div className="location">
                                  <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                  ></i>
                                  <span>{data.year}</span>
                                </div>
                                <div className="location">
                                  <i
                                    className="fa fa-tachometer"
                                    aria-hidden="true"
                                  ></i>
                                  <span>{data.kmDriven} km</span>
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
                                {/* <div className="vinfo">
                      <span>{cc} cc</span>
                    </div> */}
                                <div className="vinfo">
                                  <span>{data.transmission}</span>
                                </div>
                                <div className="clearfix"></div>
                              </div>
                              <div className="col-md-4 col-sm-5 text-right">
                                <div className="adprice">₹{data.price}</div>
                                <div className="listbtn">
                                  <Link to={`/carrequest/`}>
                                    View All Request
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
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <>
      <div className="contact-title">
        <h3>User Request</h3>
      </div>

      <div className="calender-container">
        <input type="date" />
        <input type="date" />
      </div>

      {content}
      <div className="nextButton">
        <Link to="/mycarbooking">
          <Button>Next</Button>
        </Link>
      </div>
      {/* <div className="dealer-details-container">
                <h5>Dealer Details</h5>
                <p>Name:</p>
                <p>Location:</p>
                <p>contact number:</p>
              </div>
    </> */}
    </>
  );
};

export default UserRequestList;
