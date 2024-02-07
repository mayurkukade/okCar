import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import { Button } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { Text } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import "./carrequest.css";
import { useGetCarByIdQuery } from "../../api/carApiSlice";
import AllUserRequest from "./AllUserRequest";

const CarRequest = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const { id } = useParams();
  console.log(id);
  const {
    data: fetchGetCarData,
    isLoading,
    isError,
    isFetching,
  } = useGetCarByIdQuery(id);
  console.log(fetchGetCarData?.object);
  const fetchData = fetchGetCarData?.object;
  console.log(fetchData);
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>Error</p>;
  } else if (fetchGetCarData) {
    content = (
      <div>
        <ul className="searchList ">
          <li>
            <div className="row">
              <div className="col-md-9 col-sm-8 col-lg-12">
                <div className="jobinfo">
                  <div className="row">
                    <p>{fetchData.date}</p>
                    <div className="col-md-8 col-sm-7">
                      <h3>
                        <a>
                          {fetchData.brand} {fetchData.model}
                        </a>
                      </h3>
                      <div className="location">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <span>{fetchData.year}</span>
                      </div>
                      <div className="location">
                        <i className="fa fa-tachometer" aria-hidden="true"></i>
                        <span>{fetchData.kmDriven} km</span>
                      </div>
                      <div className="location">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                        <span>{fetchData.area}</span>
                      </div>
                      <div className="clearfix"></div>
                      <div className="vinfo">
                        <span>{fetchData.fuelType}</span>
                      </div>

                      <div className="vinfo">
                        <span>{fetchData.transmission}</span>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="col-md-4 col-sm-5 text-right">
                      <div className="adprice">₹{fetchData.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
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
            {content}
          </div>
        </div>

        <h3>Requests</h3>
        <ul className="searchList ">
          <li>
            <div className="row">
              <div className="col-md-9 col-sm-8 col-lg-12">
                <div className="jobinfo">
                  <div className="row">
                    <p></p>
                    <div className="col-md-8 col-sm-7">
                      <h3>
                        <a>Request 1</a>
                      </h3>
                      <h3>
                        <a>User name:</a>
                      </h3>
                      <h3>
                        <a>Location:</a>
                      </h3>
                      <h3>
                        <a>Contact no:</a>
                      </h3>

                      <div className="vinfo"></div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="listbtn">
                      <Button
                        onClick={() => {
                          setOverlay(<OverlayOne />);
                          onOpen();
                        }}
                      >
                       Get Deal
                      </Button>
                      <Modal isCentered isOpen={isOpen} onClose={onClose}>
                        {overlay}
                        <ModalContent>
                          <ModalHeader>Actual Booking</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <Text>Requested by</Text>
                            <Text>Username:</Text>
                            <Text>Location:</Text>
                            <Text>Contact no:</Text>
                            <Text marginTop={"1rem"}>Requested to:</Text>
                            <Text>Dealer Details:</Text>
                            <Text>Name:</Text>
                            <Text>Location:</Text>
                            <Text marginTop={"1rem"}>Requested for car:</Text>
                            <Text>Car id: car details link</Text>
                            <Text>2021 | Brand Name | Model Name</Text>
                            <Text>Fuel | Transmission</Text>
                            <Text>54633km | owner | MH-12</Text>
                            <Text>Car Safety</Text>
                          </ModalBody>
                          <ModalFooter>
                            <Button onClick={onClose} marginRight={"0.8rem"}>
                              Confirm Booking
                            </Button>
                            <Button onClick={onClose}>Close</Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CarRequest;
