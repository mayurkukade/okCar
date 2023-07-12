/* eslint-disable react/prop-types */
import SubNav from "../Navbar/SubNav.jsx";
import "./CarList.css";
import { useState, useEffect } from "react";
import CarListCard from "./CarListCard.jsx";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

// import { baseQuery } from "../../api/apiSlice";
import {
  useGetAllCarsQuery,
  // useFilterCarQueryQuery,
} from "../../api/carApiSlice.js";

const CarList = () => {
  // use State for input fields
  const [inputFilter, setInputFilter] = useState({
    year: "",
    fuelType: "",
    transmission: "",
    brand: "",
    model: "",
    area: "",
    maxPrice: "",
    minPrice: "",
  });
  // useState for pagination
  const [currentPage, setCurrentPage] = useState(1);
  // for fetching all cars
  const { data: v } = useGetAllCarsQuery(currentPage);
  // const { data: filterData,  } =
  //   useFilterCarQueryQuery(
  //     currentPage,
  //     inputFilter.year,
  //     inputFilter.fuelType,
  //     inputFilter.transmission,
  //     inputFilter.brand,
  //     inputFilter.model,
  //     inputFilter.area,
  //     inputFilter.maxPrice,
  //     inputFilter.minPrice
  //   );
  // console.log("filterData", filterData);

  const [responseData, setResponseData] = useState([]);

  // on form change handler added
  const onChangeFormHandler = (e) => {
    setInputFilter((previousValue) => {
      return {
        ...previousValue,
        [e.target.name]: e.target.value,
      };
    });
  };

  // form submit handler
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(inputFilter);
    fetchData();
  };

  useEffect(() => {
    if (v) {
      setResponseData(v?.list);
    }
  }, [v]);

  // Page handler
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // using fetch

  const fetchData = async () => {
    try {
      const queryParams = new URLSearchParams(inputFilter).toString();
      const url = `https://23ff-144-48-178-178.ngrok-free.app/cars/mainFilter/1?${queryParams}`;
      const response = await fetch(url);
      const data = await response.json();
      setResponseData(data?.list);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log("use Stata data", responseData);
  // console.log("filter data", filterData1);
  // if (responseData === null) {
  //   return <p>No car found</p>;
  // }
  return (
    <>
      <div className="sticky">
        <SubNav componentsName={"Car List"} />
      </div>

      <div className="listpgWraper" style={{ display: "flex" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-5">
              {/* <Container > */}
              <form onSubmit={onSubmitHandler}>
                <div
                  className="sidebar"
                  style={{ height: "var(--sidebar-height)" }}
                >
                  {/* <div className="sidebar" style={{ height: "1580px" }}>     */}

                  {/* <div className="sidebar" style={{ display: "flex", flexDirection: "column" }}> */}

                  {/* <div className="sidebar"  style={{ height: "fit-content", display: "flex", flexDirection: "column", gap: "10px" }}> */}

                  {/* <div className="sidebar" style={{ flex: "0 0 30%", height: "400%" }}>  */}

                  <div className="widget">
                    <h4 className="widget-title">Transmission</h4>
                    <select
                      className="form-control"
                      name="transmission"
                      value={inputFilter.transmission}
                      onChange={onChangeFormHandler}
                    >
                      <option>Transmission</option>
                      <option>Automatic</option>
                      <option>Manual</option>
                    </select>
                  </div>

                  {/* <div className="widget">
                   <h4 className="widget-title">Search By Keyword</h4>
                   <div className="input-group">
                     <input
                       type="text"
                       className="form-control"
                       placeholder="Keyword"
                       name="keyword"
                     />
                     <span className="input-group-btn">
                       <button className="btn btn-default" type="button">
                         Go!
                       </button>
                     </span>{" "}
                   </div>
                 </div> */}

                  <div className="widget">
                    <h4 className="widget-title">Price Range</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="number"
                          name="minPrice"
                          className="form-control"
                          placeholder="Min Value"
                          onChange={onChangeFormHandler}
                          pattern="[0-9]*"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="number"
                          name="maxPrice"
                          className="form-control"
                          placeholder="Max Value"
                          onChange={onChangeFormHandler}
                          pattern="[0-9]*"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="widget">
                    <h4 className="widget-title">Area</h4>
                    {/* <select
                     className="form-control"
                     name="area"
                     value={inputFilter.area}
                     onChange={onChangeFormHandler}
                   >
                     <option>Area</option>
                     <option>Kharadi</option>
                     <option>Hinjewadi</option>
                     <option>Baner</option>
                     <option>Wagholi</option>
                     <option>Karve Nagar</option>
                   </select> */}
                    <input
                      type="text"
                      name="area"
                      value={inputFilter.area}
                      className="form-control"
                      placeholder="Area"
                      onChange={onChangeFormHandler}
                    />
                  </div>

                  <div className="widget">
                    <h4 className="widget-title">Year </h4>
                    <input
                      type="number"
                      name="year"
                      className="form-control"
                      placeholder="Year"
                      onChange={onChangeFormHandler}
                      pattern="[0-9]*"
                    />
                  </div>

                  <div className="widget">
                    <h4 className="widget-title">Brand</h4>
                    <select
                      className="form-control"
                      name="brand"
                      value={inputFilter.brand}
                      onChange={onChangeFormHandler}
                    >
                      <option>Select Brand</option>
                      <option>Tata</option>
                      <option>Honda</option>
                      <option>Toyota</option>
                      <option>Suzuki</option>
                      <option>Hyundai</option>
                    </select>
                  </div>

                  <div className="widget">
                    <h4 className="widget-title">Model</h4>
                    {/* <select
                     className="form-control"
                     name="model"
                     value={inputFilter.model}
                     onChange={onChangeFormHandler}
                   >
                     <option>Select Model</option>
                     <option>JIMNY DX MT</option>
                     <option>SUZUKI CIAZ GL AT</option>
                     <option>SWIFT AT</option>
                   </select> */}
                    <input
                      type="text"
                      name="model"
                      value={inputFilter.model}
                      className="form-control"
                      placeholder="Model"
                      onChange={onChangeFormHandler}
                    />
                  </div>

                  <div className="widget">
                    <h4 className="widget-title">Transmission</h4>
                    <select
                      className="form-control"
                      name="transmission"
                      value={inputFilter.transmission}
                      onChange={onChangeFormHandler}
                    >
                      <option>Transmission</option>
                      <option>Auto</option>
                      <option>Manual</option>
                    </select>
                  </div>

                  <div className="widget">
                    <h4 className="widget-title">Fuel Type</h4>
                    <select
                      className="form-control"
                      name="fuelType"
                      value={inputFilter.fuelType}
                      onChange={onChangeFormHandler}
                    >
                      <option>Fuel Type</option>
                      <option>Petrol</option>
                      <option>Diesel</option>
                      <option>Electric</option>
                    </select>
                  </div>

                  {/* <div className="widget">
                   <h4 className="widget-title">Transmission</h4>
                   <ul className="optionlist">
                     <li>
                       <input
                         type="checkbox"
                         name="auto"
                         value={inputFilter.transmission}
                         id="auto"
                       />
                       <label htmlFor="auto"></label>
                       Auto
                     </li>
                     <li>
                       <input
                         type="checkbox"
                         name="manual"
                         value={inputFilter.transmission}
                         id="manual"
                       />
                       <label htmlFor="Manual"></label>
                       Manual
                     </li>
                   </ul>
                 </div>

                 <div className="widget">
                   <h4 className="widget-title">Fuel Type</h4>
                   <ul className="optionlist">
                     <li>
                       <input type="checkbox" name="fuelType" id="Petrol" />
                       <label htmlFor="Petrol"></label>
                       Petrol
                     </li>
                     <li>
                       <input type="checkbox" name="fuelType" id="Diesel" />
                       <label htmlFor="Diesel"></label>
                       Diesel
                     </li>
                     <li>
                       <input type="checkbox" name="checkname" id="Electric" />
                       <label htmlFor="Electric"></label>
                       Electric
                     </li>
                   </ul>
                 </div> */}

                  <div className="searchnt">
                    <button className="btn">
                      <i className="fa fa-search" aria-hidden="true"></i> Update
                      Results
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Car Details Card */}

            {/* {data.length === 0 ? <CarNotFound /> : <CarListCard />} */}

            {/* <div className="cardcontaier" style={{ height: "100px" }}> */}

            <div className="col-md-9 col-sm-7">
              <div
                className="card-container-wrapper"
                style={{ height: "950px", overflowY: "auto" }}
              >
                <div className="card-container" style={{ height: "100px" }}>
                  {/* <div className="card-container" ref={cardContainerRef}> */}

                  {responseData === null ? (
                    // <h3
                    //   style={{
                    //     display: "flex",
                    //     justifyContent: "center",
                    //     alignItems: "center",
                    //     height: "80vh",
                    //   }}
                    // >
                    <h3>No car Found</h3>
                  ) : responseData.length === 0 ? (
                    <h3
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "80vh",
                      }}
                    >
                      Something Went Wrong Can&apos;t fetch Car list
                    </h3>
                  ) : (
                    responseData.map((carDetails, index) => {
                      return <CarListCard key={index} {...carDetails} />;
                    })
                  )}
                </div>
              </div>
            </div>

            <div className="pagiWrap">
              <div className="row">
                <div className="col-md-4 col-sm-4"></div>
                <div className="col-md-8 col-sm-8 text-right">
                  <ul className="pagination">
                    <li>
                      {/* <div className="col-md-12 col-sm-12 text-center"> */}

                      <button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                        // style={{ backgroundColor: "#5dc302", color: "white" ,borderRadius: "5px"}}
                        //  className="ArrowLeftIcon"
                        //  style={{ paddingRight: "10px" }}
                      >
                        <Button colorScheme="teal" variant="outline" size="sm">
                          <span style={{ marginRight: "5px" }}>
                            <ArrowLeftIcon />
                          </span>
                          Previous Page
                        </Button>
                      </button>

                      {/* </div> */}
                    </li>

                    <li style={{ marginLeft: "20px" }}>
                      <button
                        onClick={goToNextPage}
                        //  style={{ backgroundColor: "#5dc302", color: "white",borderRadius: "5px", }}
                        // className="ArrowRightIcon"
                        // style={{ paddingLeft: "10px" }}
                      >
                        <Button colorScheme="teal" variant="outline" size="sm">
                          <span style={{ marginLeft: "5px" }}>
                            Next Page <ArrowRightIcon />
                          </span>
                        </Button>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarList;
