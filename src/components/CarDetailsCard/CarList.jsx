/* eslint-disable react/prop-types */
import SubNav from "../Navbar/SubNav.jsx";
import { useState, useEffect } from "react";
import CarListCard from "./CarListCard.jsx";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { Card,CardBody,CardFooter } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { baseUrl } from "../../api/apiSlice.js";
import {
  useGetAllCarsQuery,
  // useFilterCarQueryQuery,
} from "../../api/carApiSlice.js";
import CardShimmer from "./CardShimmer.jsx";

import { calcLength } from "framer-motion";
import { Image } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { ButtonGroup } from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import './grid.css'
const CarList = () => {
  const cardCount = 10;
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
  const [currentPage, setCurrentPage] = useState(0);
  const [filterPage, setFilterPage] = useState(0);

  // for fetching all cars
  const { data: v, isLoading, isError } = useGetAllCarsQuery(currentPage);
  console.log(v)
  const [responseData, setResponseData] = useState([]);
  const onChangeFormHandler = (e) => {
    const { name, value } = e.target;
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
      const url = `${baseUrl}/cars/mainFilter/${filterPage}?${queryParams}`;
      console.log(url);
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

  // for years
  const startYear = 2000;
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = startYear; year <= currentYear; year++) {
    years.push(year);
  }
console.log(responseData)
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
                  <div className="widget">
                    <h4 className="widget-title">Area</h4>
                    {/* <input
                      type="text"
                      name="area"
                      value={inputFilter.area}
                      className="form-control"
                      placeholder="Area"
                      onChange={onChangeFormHandler}
                    /> */}
                    <select
                      className="form-control"
                      name="area"
                      value={inputFilter.area}
                      onChange={onChangeFormHandler}
                    >
                      <option>Select Area</option>
                      <option>Wagholi</option>
                      <option>Kharadi</option>
                      <option>Chandannagar</option>
                      <option>Hadapsar</option>
                      <option>Vimannagar</option>
                      <option>Pimpri</option>
                      <option>Chinchwad</option>
                      <option>Dighi</option>
                      <option>Khadki</option>
                    </select>
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
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
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

            {isLoading ? (
              <>
                {Array.from({ length: cardCount }, (_, index) => (
                  <CardShimmer key={index} />
                ))}
              </>
            ) : (
              <div className="col-md-9 col-sm-7">
                <div
                  className="card-container-wrapper"
                  style={{ height: "880px", overflowY: "auto",display:"flex",padding:"5px" }}
                >
                  <div className="parent" >
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
                      
                        return(
                          <div key={index} >
                          
                          <Card maxW='sm' style={{marginBottom:"15px"}} >
      <CardBody>
        <Image
          src='https://imgd.aeplcdn.com/1200x900/n/cw/ec/40087/thar-exterior-right-front-three-quarter-35.jpeg?isig=0&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{carDetails.year} {carDetails.brand} {carDetails.model}</Heading>
          <Text>
            {carDetails.kmDriven} {carDetails.fuelType} {carDetails.transmission}
          </Text>
          <Text color='blue.600' fontSize='lg'>
            ₹{carDetails.price}
          </Text>
          <Text color='blue.600' fontSize='lg'>
            EMIs from ₹2000/month
          </Text>
          <Text color='blue.600' fontSize='lg'>
            Free Test Drive {carDetails.area}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button color={'green.400'} bg={'green.500'} textColor={'white'} className="listbtn">
            <Link to={`/carDetails/${carDetails.carId}`}>
              View Details{" "}
              <i
                className="fa fa-arrow-circle-right"
                aria-hidden="true"
              ></i>
            </Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
                        
                          </div>
                        ) 
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
                      <Button
                        onClick={goToPreviousPage}
                        isDisabled={currentPage === 1}
                        colorScheme="teal"
                        variant="outline"
                        size="sm"
                        w="150px"
                        // isDisabled={currentPage < 0 ? "true" : "false"}
                      >
                        <span style={{ marginRight: "2px", padding: "5px" }}>
                          <ArrowLeftIcon />
                        </span>
                        Previous Page
                      </Button>
                    </li>

                    <li style={{ marginLeft: "20px" }}>
                      {/* {!isError && ( */}
                      <Button
                        onClick={goToNextPage}
                        colorScheme="teal"
                        variant="outline"
                        size="sm"
                        w="150px"
                        isDisabled={isError}
                      >
                        <span style={{ marginLeft: "5px", padding: "5px" }}>
                          Next Page <ArrowRightIcon />
                        </span>
                      </Button>
                      {/* )} */}
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