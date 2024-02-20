import "./userrequestlist.css";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useGetDealerCarsDealerManegmentPageQuery } from "../../api/dealersManegmentApiSlice";
const UserRequestList = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const dealerId = Number(userInfo.dealerId);
  console.log(Number(dealerId));
  const [currentPage, setCurrentPage] = useState(0);
  console.log(currentPage);
  console.log(currentPage);
  const {
    data: fetchAllCars,
    isLoading,
    isError,
  } = useGetDealerCarsDealerManegmentPageQuery({ dealerId, currentPage });
  console.log(fetchAllCars);
  const fetchData = fetchAllCars?.list;
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>Error</p>;
  } else if (fetchAllCars) {
    content = fetchData.map((data, index) => (
      <>
        <div className="col-md-12 col-sm-7" key={index}>
          <ul className="searchList">
            <li>
              <div className="row">
                <div className="col-md-9 col-sm-8">
                  <div className="jobinfo">
                    <div className="row">
                      <p>{data.date}</p>
                      <div className="col-md-8 col-sm-7">
                        <h3>
                          <a>
                            {data.brand} {data.model}
                          </a>
                        </h3>
                        <div className="location">
                          <i className="fa fa-calendar" aria-hidden="true"></i>
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

                        <div className="vinfo">
                          <span>{data.transmission}</span>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <div className="col-md-4 col-sm-5 text-right">
                        <div className="adprice">₹{data.price}</div>
                        <div className="listbtn">
                          <Link to={`/carrequest/${data.carId}`}>
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
      </>
    ));
  }

  return (
    <>
      <div className="contact-dealer-container">
        <div className="contact-title">
          <h3>User Request</h3>
        </div>
        <div className="car-deatails-container">
          <div className="car-details-list">
            <h3>Car Details</h3>
          </div>
        </div>
        {content}
      </div>

      <div className="nextButton">
        <Link to="/mycarbooking">
          <Button>Next</Button>
        </Link>
      </div>
    </>
 
  );
};

export default UserRequestList;
