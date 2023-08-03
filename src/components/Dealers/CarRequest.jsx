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
import { Link } from "react-router-dom";
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
const CarRequest = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <div className="calender-form">
        <input type="date" />
        <input type="date" />
      </div>
      <div className="car-container">
        <div className="contact-dealer-container">
          <div className="contact-title">
            <h3>User Request</h3>
          </div>
          <div className="car-deatails-container">
            <div className="car-details-list">
              <h3>Car Details</h3>
              <div className="col-md-12 col-sm-7">
                <p>Date:10/5/2021</p>
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
                                ></i>
                                <span>2021</span>
                              </div>
                              <div className="location">
                                <i
                                  className="fa fa-tachometer"
                                  aria-hidden="true"
                                ></i>
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
                                {/* <Link to={`/carrequest/`}>
                                  View All Request
                                  <i
                                    className="fa fa-arrow-circle-right"
                                    aria-hidden="true"
                                  ></i>
                                </Link> */}
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
      

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>User Name</Th>
              <Th>Car Id</Th>
              <Th>Car Details</Th>
              <Th>status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>5/2/2021</Td>
              <Td>1254</Td>
              <Td>
                <Button>User Details</Button>
              </Td>
              <Td>
                <Button onClick={onOpen}>Open Modal</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <p>Text</p>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                <Button>View All Request</Button>
              </Td>
            </Tr>
            <Tr>
              <Td>8/5/2022</Td>
              <Td>5684</Td>
              <Td>
                <Button>Car Details</Button>
              </Td>
              <Td>
                <Button>View All Request</Button>
              </Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td>
                <Button>Car Details</Button>
              </Td>

              <Td>
                <Button>View All Request</Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <div className="nextButton">
        <Link to="/mycarbooking">
          <Button>Next</Button>
        </Link>
      </div>
    </>
  );
};

export default CarRequest;
