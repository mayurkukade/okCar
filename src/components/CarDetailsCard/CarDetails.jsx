import SubNav from "../Navbar/SubNav";
import { useSelector,useDispatch } from "react-redux";

import { CommonUtilities } from "../../util/common.utilities";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Flex, Input } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import { askingPriceDetails } from "../../api/bookingStoreSlice";
import {
  
  useLazyGetCarByIdQuery,
} from "../../api/carApiSlice";
import { usePendingCarBookingMutation } from "../../api/bookingSlice";
import CardDetailsShimmer from "./CardDetailsShimmer";
import { Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const CarDetails = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const navigate = useNavigate();
  const [askingPricePost] = usePendingCarBookingMutation();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [largePreview, setLargePreview] = useState(null);
  const [askingPrice, setAskingPrice] = useState();
  
  const dispatch = useDispatch()

  const [dummyImages] = useState(
    JSON.parse(localStorage.getItem("images")) ?? []
  );
  
  let { id } = useParams();
  
  const [getCarById, { data, isLoading, isError }] = useLazyGetCarByIdQuery(id);

console.log(data)

  const [showComponent1, setShowComponent1] = useState(true);

  
  const askingPriceSubmitHandler = async (e) => {
 
    e.preventDefault()
    if(!userInfo){
      return navigate('/signin')
    }
    if (!askingPrice) {
      return toast({
        title: "Enter value ",
        description: "please add asking price in rupees",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    try {
      const res = await askingPricePost({
        
          "date" : new Date(),
          "price" : 43334,
          askingPrice,
          "status":"PENDING",
          "carId":1,
          "userId":1052
      
      }).unwrap();
    
   dispatch(askingPriceDetails(res))
      if(res){
         toast({
          title: "Successful",
          description: "asking price send to the dealer",
          status: "success",
          duration: 9000,
          isClosable: true,
        });


    
      }
      navigate("/contactdealer");
    } catch (error) {
      toast({
        title: error,
        description: error,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

 
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent1(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (id) getCarById(id);
  }, []);
  if (data && !isLoading && !isError) {
    const responseData = data.object
    return (
      <div>
        {showComponent1 ? (
          <CardDetailsShimmer />
        ) : (
          <>
            <SubNav componentsName={responseData.brand} />
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
                          {responseData.acFeature && (
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

                          {responseData.musicFeature && (
                            <li className="col-md-4 col-sm-6">
                              <span className="feat">
                                <img
                                  src="../../../images/icons/radio.png"
                                  alt=""
                                />{" "}
                                Music
                              </span>
                            </li>
                          )}

                          {responseData.rearParkingCameraFeature && (
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

                          {responseData.powerWindowFeature && (
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

                        <p>{responseData.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="jbside">
                      <div className="adsalary">
                        Price{" "}
                        <strong>
                          {" "}
                          ₹ {Number(responseData.price).toLocaleString("en-IN")}
                        </strong>
                      </div>

                      <div className="ptext">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        {responseData.area}, {responseData.city}
                      </div>

                      <div className="clearfix"></div>
                      <div className="adButtons" onClick={onOpen}>
                        <a className="btn apply" >
                          <Flex>
                            <i className="fa fa-phone" aria-hidden="true" />
                            <p>request</p>
                          </Flex>

                          <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                              <ModalHeader textAlign={"center"}>
                                Buy Car
                              </ModalHeader>
                              <ModalCloseButton />
                              <ModalBody textAlign={"center"}>
                                {!userInfo ? (
                                  <h6>Please sign in to send buying request</h6>
                                ) : (
                                  <Input
                                    placeholder="asking price in Rs"
                                    type="number"
                                    onChange={(e) => {
                                      setAskingPrice(e.target.value);
                                    }}
                                    value={askingPrice}
                                  />
                                )}
                              </ModalBody>

                              <ModalFooter textAlign={"center"} onClick={askingPriceSubmitHandler} >
                                <Button
                                  colorScheme="blue"
                                  mr={3}
                                  onClick={onClose}
                                >
                                  Close
                                </Button>

                                <Button
                                 colorScheme="blue"
                                 mr={3}
                          
                      
                                >

                                  {
                                    !userInfo ? "SignIn" : "Ask Price"
                                  }
                                  
                                </Button>
                              </ModalFooter>
                            </ModalContent>
                          </Modal>
                      
                        </a>{" "}
                      </div>
                    </div>

                    <div className="jbside">
                      <h3>About This Car</h3>
                      <ul className="jbdetail">
                        <li className="row">
                          <div className="col-md-6 col-xs-6">
                            Registered City
                          </div>
                          <div className="col-md-6 col-xs-6">
                            <span>{responseData.city}</span>
                          </div>
                        </li>
                        <li className="row">
                          <div className="col-md-6 col-xs-6">Color</div>
                          <div className="col-md-6 col-xs-6">
                            <span>{responseData.color}</span>
                          </div>
                        </li>
                        <li className="row">
                          <div className="col-md-6 col-xs-6">Body Type</div>
                          <div className="col-md-6 col-xs-6">
                            <span>{responseData.bodyType}</span>
                          </div>
                        </li>
                        <li className="row">
                          <div className="col-md-6 col-xs-6">Model</div>
                          <div className="col-md-6 col-xs-6">
                            <span>{responseData.model}</span>
                          </div>
                        </li>
                        <li className="row">
                          <div className="col-md-6 col-xs-6">KM Driven</div>
                          <div className="col-md-6 col-xs-6">
                            <span>{responseData.kmDriven} km</span>
                          </div>
                        </li>

                        <li className="row">
                          <div className="col-md-6 col-xs-6">Fuel</div>
                          <div className="col-md-6 col-xs-6">
                            <span>{responseData.fuelType}</span>
                          </div>
                        </li>
                        <li className="row">
                          <div className="col-md-6 col-xs-6">Transmission</div>
                          <div className="col-md-6 col-xs-6">
                            <span>{responseData.transmission}</span>
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
                            Deal with people in your area by meeting face to
                            face to see the item.
                          </li>
                          <li>
                            Never provide your personal or banking information.
                          </li>
                          <li>
                            See our Safety tips regarding vehicle buying and
                            selling.
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
        )}
      </div>
    );
  } else if (isError) return <>Something went wrong</>;
  return <div style={{ minHeight: "80vh" }}></div>;
};

export default CarDetails;
