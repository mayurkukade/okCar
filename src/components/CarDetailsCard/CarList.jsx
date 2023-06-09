/* eslint-disable react/prop-types */
import SubNav from "../Navbar/SubNav.jsx";
import "./CarList.css";
import { useState, useEffect } from "react";
import CarListCard from "./CarListCard.jsx";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import {
  Button,
  // SliderTrack,
  // Slider,
  // SliderFilledTrack,
  // SliderThumb,
  // Box,
} from "@chakra-ui/react";
import { baseUrl } from "../../api/apiSlice.js";

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
  const { data: v, isLoading } = useGetAllCarsQuery(currentPage);

  const [responseData, setResponseData] = useState([]);

  // on form change handler added
  // const onChangeFormHandler = (e) => {
  //   setInputFilter((previousValue) => {
  //     return {
  //       ...previousValue,
  //       [e.target.name]: e.target.value,
  //     };
  //   });
  // };

  const onChangeFormHandler = (e) => {
    const { name, value } = e.target;

    // Check if the selected option is "Select Year"
    // If yes, set the value to an empty string
    // const updatedValue = value === "Select Year" ? "" : value;

    const updatedValue =
      value === "Select Year" ||
      value === "Select Brand" ||
      value === "Fuel Type" ||
      value === "Transmission" ||
      value === "Area"
        ? ""
        : value;

    setInputFilter((previousValue) => ({
      ...previousValue,
      [name]: updatedValue,
    }));
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
      console.log(`baseurl is ${baseUrl}`);
      const queryParams = new URLSearchParams(inputFilter).toString();
      const url = `${baseUrl}/cars/mainFilter/1?${queryParams}`;
      const response = await fetch(url);
      const data = await response.json();
      setResponseData(data?.list);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // clear filter
  const clearFilters = () => {
    setInputFilter({
      year: "",
      fuelType: "",
      transmission: "",
      brand: "",
      model: "",
      area: "",
      maxPrice: "",
      minPrice: "",
    });
  };

  // const handleChange = (value) => {
  //   console.log("Slider value:", value);
  //   // Perform any desired actions with the slider value
  // };

  // const clearFilters = () => {
  //   setInputFilter((previousValue) => ({
  //     ...previousValue,
  //     minPrice: "",
  //     maxPrice: "",
  //   }));
  // };

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
                          value={inputFilter.minPrice}
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
                          value={inputFilter.maxPrice}
                          className="form-control"
                          placeholder="Max Value"
                          onChange={onChangeFormHandler}
                          pattern="[0-9]*"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Slider */}

                  {/* <Slider
                    defaultValue={0}
                    min={0}
                    max={1000000}
                    onChange={handleChange}
                    name="maxPrice"
                    // value={inputFilter.maxPrice}
                  >
                    <SliderTrack bg="gray.200">
                      <SliderFilledTrack bg="teal.500" />
                    </SliderTrack>
                    <SliderThumb boxSize={6}>
                      <Box color="teal.500" />
                    </SliderThumb>
                  </Slider> */}

                  <div className="widget">
                    <h4 className="widget-title">Area</h4>
                    <select
                      className="form-control"
                      name="area"
                      value={inputFilter.area}
                      onChange={onChangeFormHandler}
                    >
                      <option>Area</option>
                      <option>Kharadi</option>
                      <option>Wagholi</option>
                      <option>Chandanagar</option>
                      <option>Hadapsar</option>
                      <option>Vimannagar</option>
                      <option>Pimpri</option>
                      <option>Chinchwad</option>
                      <option>Dighi</option>
                      <option>Khadki</option>
                    </select>
                    {/* <input
                      type="text"
                      name="area"
                      value={inputFilter.area}
                      className="form-control"
                      placeholder="Area"
                      onChange={onChangeFormHandler}
                    /> */}
                  </div>

                  <div className="widget">
                    <h4 className="widget-title">Year </h4>
                    <select
                      className="form-control"
                      name="year"
                      value={inputFilter.year}
                      onChange={onChangeFormHandler}
                    >
                      <option>Select Year</option>
                      <option>2023</option>
                      <option>2022</option>
                      <option>2021</option>
                      <option>2020</option>
                      <option>2019</option>
                      <option>2018</option>
                      <option>2017</option>
                      <option>2016</option>
                      <option>2015</option>
                      <option>2014</option>
                      <option>2013</option>
                      <option>2012</option>
                      <option>2011</option>
                      <option>2010</option>
                      <option>2009</option>
                      <option>2008</option>
                      <option>2007</option>
                      <option>2006</option>
                      <option>2005</option>
                      <option>2004</option>
                      <option>2003</option>
                      <option>2002</option>
                      <option>2001</option>
                      <option>2000</option>
                    </select>
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
                      <option>Mahindra</option>
                      <option>Hyundai</option>
                      <option>Kia</option>
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

                  {/* <div className="widget">
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
                  </div> */}

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

                  <div className="searchnt">
                    <button className="btn" onClick={onSubmitHandler}>
                      <i className="fa fa-search" aria-hidden="true"></i> Update
                      Results
                    </button>
                    <button
                      className="btn"
                      style={{ marginTop: "20px" }}
                      onClick={clearFilters}
                    >
                      <i className="fa fa-search" aria-hidden="true"></i> Clear
                      Filter
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Car Details Card */}

            {/* {data.length === 0 ? <CarNotFound /> : <CarListCard />} */}

            {/* <div className="cardcontaier" style={{ height: "100px" }}> */}

            {isLoading ? (
              <h1
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "70vh",
                }}
              >
                Loading ...
              </h1>
            ) : (
              <div className="col-md-9 col-sm-7">
                <div
                  className="card-container-wrapper"
                   style={{ height: "880px", overflowY: "auto",overflowX:"hidden" }}
                  // style={{ overflow: "hidden", maxHeight: "880px" }}
                >
                  <div className="card-container" style={{  width: "950px",height: "100px" }}>
                    {/* <div className="card-container" ref={cardContainerRef}> */}

                    {responseData === null ? (
                      <h1
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minHeight: "70vh",
                        }}
                      >
                        No car Found
                      </h1>
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
            )}

            <div className="pagiWrap">
              <div className="row">
                <div className="col-md-4 col-sm-4"></div>
                <div className="col-md-8 col-sm-8 text-right">
                  <ul className="pagination" style={{ marginTop: "2em" }}>
                    <li>
                      {/* <div className="col-md-12 col-sm-12 text-center"> */}

                      <button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1}
                        // style={{ backgroundColor: "#5dc302", color: "white" ,borderRadius: "5px"}}
                        //  className="ArrowLeftIcon"
                        //  style={{ paddingRight: "10px" }}
                      >
                        <Button
                          colorScheme="teal"
                          variant="outline"
                          size="sm"
                          w="150px"
                        >
                          <span style={{ marginRight: "2px", padding: "5px" }}>
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
                        <Button
                          colorScheme="teal"
                          variant="outline"
                          size="sm"
                          w="150px"
                        >
                          <span style={{ marginLeft: "5px", padding: "5px" }}>
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
