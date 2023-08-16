import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { CommonUtilities } from "../../util/common.utilities";
import { useGetCarByIdQuery } from "../../api/carApiSlice";
import { useParams } from "react-router-dom";
import BuyRequest from "./BuyRequest";
import CardDetailsShimmer from "./CardDetailsShimmer";
const CarDetails2 = () => {
  const [dummyImages] = useState(
    JSON.parse(localStorage.getItem("images")) ?? []
  );
  const [largePreview, setLargePreview] = useState(null);
  const { id } = useParams();

  const {
    data: fetchCarById,
    isLoading,
    isError,
    isFetching,
  } = useGetCarByIdQuery(id);
  console.log(fetchCarById);
  const userInfo = localStorage.getItem("userInfo")
 
  const userId = JSON.parse(userInfo)
  let content;
  if (isLoading) {
    content = (<CardDetailsShimmer/>)
  } else if (isError) {
    content = <p>Error</p>;
  } else if (isFetching) {
    content = <p>Fetching data</p>;
  } else if (fetchCarById) {
    const fetchedDataCar = fetchCarById?.object;
    console.log(fetchedDataCar);
    content = (
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
                    {!largePreview && <img src={dummyImages[0]} alt="" />}
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
                    {fetchedDataCar.acFeature && (
                      <li className="col-md-4 col-sm-6">
                        <span className="feat">
                          <img
                            src="../../../images/icons/minisplit.png"
                            alt=""
                          />{" "}
                          Air Conditioning
                        </span>
                      </li>
                    )}

                    {fetchedDataCar.musicFeature && (
                      <li className="col-md-4 col-sm-6">
                        <span className="feat">
                          <img src="../../../images/icons/radio.png" alt="" />{" "}
                          Music
                        </span>
                      </li>
                    )}

                    {fetchedDataCar.rearParkingCameraFeature && (
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
                    )}

                    {fetchedDataCar.powerWindowFeature && (
                      <li className="col-md-4 col-sm-6">
                        <span className="feat">
                          <img
                            src="../../../images/icons/power-window.png"
                            alt=""
                          />{" "}
                          Power Windows
                        </span>
                      </li>
                    )}
                  </ul>
                  <h3>Seller Comments</h3>

                  <p>{fetchedDataCar.description}</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="jbside">
                <div className="adsalary">
                  Price <strong> ₹ {Number(fetchedDataCar.price).toLocaleString("en-IN")}</strong>
                </div>

                <div className="ptext">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  {fetchedDataCar.area}, {fetchedDataCar.city}
                </div>

               
                      <BuyRequest price={fetchedDataCar.price} id = {id}/>
                 
         
              </div>

              <div className="jbside">
                <h3>About This Car</h3>
                <ul className="jbdetail">
                  <li className="row">
                    <div className="col-md-6 col-xs-6">Registered City</div>
                    <div className="col-md-6 col-xs-6">
                      <span>{fetchedDataCar.city}</span>
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-md-6 col-xs-6">Color</div>
                    <div className="col-md-6 col-xs-6">
                      <span>{fetchedDataCar.color}</span>
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-md-6 col-xs-6">Body Type</div>
                    <div className="col-md-6 col-xs-6">
                      <span>{fetchedDataCar.bodyType}</span>
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-md-6 col-xs-6">Model</div>
                    <div className="col-md-6 col-xs-6">
                      <span>{fetchedDataCar.model}</span>
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-md-6 col-xs-6">KM Driven</div>
                    <div className="col-md-6 col-xs-6">
                      <span>{fetchedDataCar.kmDriven}</span>
                    </div>
                  </li>

                  <li className="row">
                    <div className="col-md-6 col-xs-6">Fuel</div>
                    <div className="col-md-6 col-xs-6">
                      <span>{fetchedDataCar.fuelType}</span>
                    </div>
                  </li>
                  <li className="row">
                    <div className="col-md-6 col-xs-6">Transmission</div>
                    <div className="col-md-6 col-xs-6">
                      <span>{fetchedDataCar.transmission}</span>
                    </div>
                  </li>
                </ul>
              </div>

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
    );
  }
  return <>{content}</>;
};

export default CarDetails2;
