/* eslint-disable react/prop-types */
import SubNav from "../Navbar/SubNav.jsx";
import { useState, useEffect } from "react";
import "./CardListDesign.css";
import CarListCard from "./CarListCard.jsx";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { baseUrl } from "../../api/apiSlice.js";
import {
  useGetAllCarsQuery,
  // useFilterCarQueryQuery,
} from "../../api/carApiSlice.js";
import CardShimmer from "./CardShimmer.jsx";
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
  // for fetching all cars
  const { data: v, isLoading } = useGetAllCarsQuery(currentPage);
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
      const url = `${baseUrl}/cars/mainFilter/${currentPage}?${queryParams}`;
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

  return (
    <>
      <div className="sticky">
        <SubNav componentsName={"Car List"} />
      </div>
      <div
        className="listpgWraper"
        style={{ display: "flex", width:"100%"}}
      >
        <div className="container" style={{ marginLeft: "5%",width:"100%" }}>
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
              <div className="main-card">
                <div className="card-container">
                  <div className="box">
                    <img
                      src="https://picsum.photos/300/200"
                      alt="Card Image"
                      className="card-img"
                    />
                    <h1 className="card-title">2021 Maruti S PRESSO VXI+</h1>
                    <div className="card-desc">
                      <div>12,450 KM</div>
                      <div>Petrol</div>
                      <div>Manual</div>
                    </div>
                    <div className="car-model-p">
                      <div className="car-model">Top Model</div>
                    </div>
                    <div className="car-price">
                      <div className="actualprice">
                        <i className="fa fa-inr"></i> 4.26 Lakh
                      </div>
                      <div className="discountprice">
                        <i className="fa fa-inr"></i> 4.77 Lakh
                      </div>
                      <div className="discount">(51k off)</div>
                    </div>
                    <div className="emioption">
                      EMIs from <i className="fa fa-inr"></i>8,328/month
                    </div>
                    <div className="test-drive">
                      Free Test Drive{" "}
                      <span className="span-color">Tomorrow</span> at{" "}
                      <span className="span-color">KW Pune 6,Kharadi</span>
                    </div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="box">
                    <img
                      src="https://picsum.photos/300/200"
                      alt="Card Image"
                      className="card-img"
                    />
                    <h1 className="card-title">2021 Maruti S PRESSO VXI+</h1>
                    <div className="card-desc">
                      <div>12,450 KM</div>
                      <div>Petrol</div>
                      <div>Manual</div>
                    </div>
                    <div className="car-model-p">
                      <div className="car-model">Top Model</div>
                    </div>
                    <div className="car-price">
                      <div className="actualprice">
                        <i className="fa fa-inr"></i> 4.26 Lakh
                      </div>
                      <div className="discountprice">
                        <i className="fa fa-inr"></i> 4.77 Lakh
                      </div>
                      <div className="discount">(51k off)</div>
                    </div>
                    <div className="emioption">
                      EMIs from <i className="fa fa-inr"></i>8,328/month
                    </div>
                    <div className="test-drive">
                      Free Test Drive{" "}
                      <span className="span-color">Tomorrow</span> at{" "}
                      <span className="span-color">KW Pune 6,Kharadi</span>
                    </div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="box">
                    <img
                      src="https://picsum.photos/300/200"
                      alt="Card Image"
                      className="card-img"
                    />
                    <h1 className="card-title">2021 Maruti S PRESSO VXI+</h1>
                    <div className="card-desc">
                      <div>12,450 KM</div>
                      <div>Petrol</div>
                      <div>Manual</div>
                    </div>
                    <div className="car-model-p">
                      <div className="car-model">Top Model</div>
                    </div>
                    <div className="car-price">
                      <div className="actualprice">
                        <i className="fa fa-inr"></i> 4.26 Lakh
                      </div>
                      <div className="discountprice">
                        <i className="fa fa-inr"></i> 4.77 Lakh
                      </div>
                      <div className="discount">(51k off)</div>
                    </div>
                    <div className="emioption">
                      EMIs from <i className="fa fa-inr"></i>8,328/month
                    </div>
                    <div className="test-drive">
                      Free Test Drive{" "}
                      <span className="span-color">Tomorrow</span> at{" "}
                      <span className="span-color">KW Pune 6,Kharadi</span>
                    </div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="box">
                    <img
                      src="https://picsum.photos/300/200"
                      alt="Card Image"
                      className="card-img"
                    />
                    <h1 className="card-title">2021 Maruti S PRESSO VXI+</h1>
                    <div className="card-desc">
                      <div>12,450 KM</div>
                      <div>Petrol</div>
                      <div>Manual</div>
                    </div>
                    <div className="car-model-p">
                      <div className="car-model">Top Model</div>
                    </div>
                    <div className="car-price">
                      <div className="actualprice">
                        <i className="fa fa-inr"></i> 4.26 Lakh
                      </div>
                      <div className="discountprice">
                        <i className="fa fa-inr"></i> 4.77 Lakh
                      </div>
                      <div className="discount">(51k off)</div>
                    </div>
                    <div className="emioption">
                      EMIs from <i className="fa fa-inr"></i>8,328/month
                    </div>
                    <div className="test-drive">
                      Free Test Drive{" "}
                      <span className="span-color">Tomorrow</span> at{" "}
                      <span className="span-color">KW Pune 6,Kharadi</span>
                    </div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="box">
                    <img
                      src="https://picsum.photos/300/200"
                      alt="Card Image"
                      className="card-img"
                    />
                    <h1 className="card-title">2021 Maruti S PRESSO VXI+</h1>
                    <div className="card-desc">
                      <div>12,450 KM</div>
                      <div>Petrol</div>
                      <div>Manual</div>
                    </div>
                    <div className="car-model-p">
                      <div className="car-model">Top Model</div>
                    </div>
                    <div className="car-price">
                      <div className="actualprice">
                        <i className="fa fa-inr"></i> 4.26 Lakh
                      </div>
                      <div className="discountprice">
                        <i className="fa fa-inr"></i> 4.77 Lakh
                      </div>
                      <div className="discount">(51k off)</div>
                    </div>
                    <div className="emioption">
                      EMIs from <i className="fa fa-inr"></i>8,328/month
                    </div>
                    <div className="test-drive">
                      Free Test Drive{" "}
                      <span className="span-color">Tomorrow</span> at{" "}
                      <span className="span-color">KW Pune 6,Kharadi</span>
                    </div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="box">
                    <img
                      src="https://picsum.photos/300/200"
                      alt="Card Image"
                      className="card-img"
                    />
                    <h1 className="card-title">2021 Maruti S PRESSO VXI+</h1>
                    <div className="card-desc">
                      <div>12,450 KM</div>
                      <div>Petrol</div>
                      <div>Manual</div>
                    </div>
                    <div className="car-model-p">
                      <div className="car-model">Top Model</div>
                    </div>
                    <div className="car-price">
                      <div className="actualprice">
                        <i className="fa fa-inr"></i> 4.26 Lakh
                      </div>
                      <div className="discountprice">
                        <i className="fa fa-inr"></i> 4.77 Lakh
                      </div>
                      <div className="discount">(51k off)</div>
                    </div>
                    <div className="emioption">
                      EMIs from <i className="fa fa-inr"></i>8,328/month
                    </div>
                    <div className="test-drive">
                      Free Test Drive{" "}
                      <span className="span-color">Tomorrow</span> at{" "}
                      <span className="span-color">KW Pune 6,Kharadi</span>
                    </div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="box">
                    <img
                      src="https://picsum.photos/300/200"
                      alt="Card Image"
                      className="card-img"
                    />
                    <h1 className="card-title">2021 Maruti S PRESSO VXI+</h1>
                    <div className="card-desc">
                      <div>12,450 KM</div>
                      <div>Petrol</div>
                      <div>Manual</div>
                    </div>
                    <div className="car-model-p">
                      <div className="car-model">Top Model</div>
                    </div>
                    <div className="car-price">
                      <div className="actualprice">
                        <i className="fa fa-inr"></i> 4.26 Lakh
                      </div>
                      <div className="discountprice">
                        <i className="fa fa-inr"></i> 4.77 Lakh
                      </div>
                      <div className="discount">(51k off)</div>
                    </div>
                    <div className="emioption">
                      EMIs from <i className="fa fa-inr"></i>8,328/month
                    </div>
                    <div className="test-drive">
                      Free Test Drive{" "}
                      <span className="span-color">Tomorrow</span> at{" "}
                      <span className="span-color">KW Pune 6,Kharadi</span>
                    </div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="box">
                    <img
                      src="https://picsum.photos/300/200"
                      alt="Card Image"
                      className="card-img"
                    />
                    <h1 className="card-title">2021 Maruti S PRESSO VXI+</h1>
                    <div className="card-desc">
                      <div>12,450 KM</div>
                      <div>Petrol</div>
                      <div>Manual</div>
                    </div>
                    <div className="car-model-p">
                      <div className="car-model">Top Model</div>
                    </div>
                    <div className="car-price">
                      <div className="actualprice">
                        <i className="fa fa-inr"></i> 4.26 Lakh
                      </div>
                      <div className="discountprice">
                        <i className="fa fa-inr"></i> 4.77 Lakh
                      </div>
                      <div className="discount">(51k off)</div>
                    </div>
                    <div className="emioption">
                      EMIs from <i className="fa fa-inr"></i>8,328/month
                    </div>
                    <div className="test-drive">
                      Free Test Drive{" "}
                      <span className="span-color">Tomorrow</span> at{" "}
                      <span className="span-color">KW Pune 6,Kharadi</span>
                    </div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="box">
                    <img
                      src="https://picsum.photos/300/200"
                      alt="Card Image"
                      className="card-img"
                    />
                    <h1 className="card-title">2021 Maruti S PRESSO VXI+</h1>
                    <div className="card-desc">
                      <div>12,450 KM</div>
                      <div>Petrol</div>
                      <div>Manual</div>
                    </div>
                    <div className="car-model-p">
                      <div className="car-model">Top Model</div>
                    </div>
                    <div className="car-price">
                      <div className="actualprice">
                        <i className="fa fa-inr"></i> 4.26 Lakh
                      </div>
                      <div className="discountprice">
                        <i className="fa fa-inr"></i> 4.77 Lakh
                      </div>
                      <div className="discount">(51k off)</div>
                    </div>
                    <div className="emioption">
                      EMIs from <i className="fa fa-inr"></i>8,328/month
                    </div>
                    <div className="test-drive">
                      Free Test Drive{" "}
                      <span className="span-color">Tomorrow</span> at{" "}
                      <span className="span-color">KW Pune 6,Kharadi</span>
                    </div>
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
                      <button onClick={goToNextPage}>
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
