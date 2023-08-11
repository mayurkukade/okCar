import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
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
        <div className="col-md-12 col-sm-7">
          <ul className="searchList">
            <li>
              <div className="row">
                <div className="col-md-9 col-sm-8">
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
                          <i
                            className="fa fa-tachometer"
                            aria-hidden="true"
                          ></i>
                          <span>{fetchData.kmDriven} km</span>
                        </div>
                        <div className="location">
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>{" "}
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
       
      </div>
     

   

      
    </>
  );
};

export default CarRequest;
