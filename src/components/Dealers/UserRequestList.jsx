import "./userrequestlist.css";

import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const UserRequestList = () => {
  return (
    <>
      <div className="user-container">
        <div className="calender-container">
          <input type="date" />
          <input type="date" />
        </div>

        {/* <div className="card-container">
        <TableContainer>
          <Table variant="simple">
           
            <Thead>
              <Tr>
                <Th>Date</Th>
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
                  <Button>Car Details</Button>
                </Td>
                <Td>
                  <Button>View All Details</Button>
                </Td>
                
              </Tr>
              <Tr>
                <Td>8/5/2022</Td>
                <Td>5684</Td>
                <Td>
                  <Button>Car Details</Button>
                </Td>
                <Td>
                  <Button>View All Details</Button>
                </Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>
                  <Button>Car Details</Button>
                </Td>
                <Td>
                  <Link to='/carrequest'><Button>View All Details</Button></Link> 
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        </div> */}

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

              <div className="dealer-details-container">
                <h5>Dealer Details</h5>
                <p>Name:</p>
                <p>Location:</p>
                <p>contact number:</p>
              </div>
            </div>
          </div>

          <div className="nextButton">
            <Link to="/mycarbooking">
              <Button>Next</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRequestList;
