/* eslint-disable react/prop-types */
import SubNav from "../Navbar/SubNav.jsx";
import "./CarList.css";
import Car from '../Card/CarCard.jsx';
import cars from "../../json/carData.js";
import { CommonUtilities } from "../../util/common.utilities.js";

const CarList = () => {


  return (
    <>
      <SubNav componentsName={"Add Car"} />
      <div className="listpgWraper">
        <div className="container">
          {/* <div className="sortbybar">
            <div className="row">
              <div className="col-sm-4">
                {" "}
                <a
                  href="listing.html"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  className="listby"
                  data-original-title="Result by List View"
                >
                  <i className="fa fa-th-list" aria-hidden="true"></i>
                </a>{" "}
                <a
                  href="grid.html"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  className="listby"
                  data-original-title="Result by Gallery View"
                >
                  <i className="fa fa-th-large" aria-hidden="true"></i>
                </a>{" "}
              </div>
              <div className="col-sm-4">
                <div className="input-group">
                  {" "}
                  <span className="input-group-addon" id="basic-addon3">
                    Sort By
                  </span>
                  <select className="htmlForm-control">
                    <option>Most recent</option>
                    <option>Price: Rs Low to High</option>
                    <option>Price: Rs High to Low</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="found">
                  {" "}
                  235 results htmlFor Mathematic Tutors{" "}
                  <strong> Profile showing 1 to 10 out of 711 </strong>{" "}
                </div>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-md-3 col-sm-5">
              <div className="sidebar">
                <div className="widget">
                  <h4 className="widget-title">Search By Keyword</h4>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Keyword"
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                        Go!
                      </button>
                    </span>{" "}
                  </div>
                </div>

                <div className="widget">
                  <h4 className="widget-title">Price Range</h4>
                  <ul className="optionlist">
                    <li>
                      <input type="checkbox" name="checkname" id="price1" />
                      <label htmlFor="price1"></label>₹ 50,000 to ₹ 99,999{" "}
                      <span>12</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="price2" />
                      <label htmlFor="price2"></label>₹ 99,999 to ₹ 99,999{" "}
                      <span>41</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="price3" />
                      <label htmlFor="price3"></label>₹ 99,999 to₹ 99,999{" "}
                      <span>33</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="price4" />
                      <label htmlFor="price4"></label>₹ 99,999 to ₹ 99,999{" "}
                      <span>66</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="price5" />
                      <label htmlFor="price5"></label>₹ 99,999 to ₹ 99,999{" "}
                      <span>159</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="price6" />
                      <label htmlFor="price6"></label>
                      Above ₹ 99,999 <span>865</span>{" "}
                    </li>
                  </ul>
                  <div className="row">
                    <div className="col-md-6">
                      <select className="form-control">
                        <option>From</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select className="form-control">
                        <option>To</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="widget">
                  <h4 className="widget-title">Area</h4>
                  <ul className="optionlist">
                    <li>
                      <input type="checkbox" name="checkname" id="newyork" />
                      <label htmlFor="newyork"></label>
                      Kharadi <span>12</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="losangles" />
                      <label htmlFor="losangles"></label>
                      Hinjewadi <span>33</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="chicago" />
                      <label htmlFor="chicago"></label>
                      Yerwada <span>33</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="houston" />
                      <label htmlFor="houston"></label>
                      Aundh <span>12</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="sandiego" />
                      <label htmlFor="sandiego"></label>
                      Karve Nagar <span>555</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="sanjose" />
                      <label htmlFor="sanjose"></label>
                      Baner <span>44</span>{" "}
                    </li>
                  </ul>
                  <a href="#.">More Cities</a>{" "}
                </div>
                {/* <div className="widget">
                  <h4 className="widget-title">Register City</h4>
                  <ul className="optionlist">
                    <li>
                      <input type="checkbox" name="checkname" id="newyork" />
                      <label htmlFor="newyork"></label>
                      New York <span>12</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="losangles" />
                      <label htmlFor="losangles"></label>
                      Los Angeles <span>33</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="chicago" />
                      <label htmlFor="chicago"></label>
                      Chicago <span>33</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="houston" />
                      <label htmlFor="houston"></label>
                      Houston <span>12</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="sandiego" />
                      <label htmlFor="sandiego"></label>
                      San Diego <span>555</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="sanjose" />
                      <label htmlFor="sanjose"></label>
                      San Jose <span>44</span>{" "}
                    </li>
                  </ul>
                  <a href="#.">More Cities</a>{" "}
                </div> */}
                <div className="widget">
                  <h4 className="widget-title">Year Range</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <select className="form-control">
                        <option>From</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select className="form-control">
                        <option>To</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* <div className="widget">
                  <h4 className="widget-title">Type</h4>
                  <select className="form-control">
                    <option>New</option>
                    <option>Used Car</option>
                  </select>
                </div> */}

                <div className="widget">
                  <h4 className="widget-title">Make</h4>
                  <select className="form-control">
                    <option>Tata</option>
                    <option>Honda</option>
                    <option>Toyota</option>
                    <option>Suzuki</option>
                    <option>Hyundai</option>
                  </select>
                </div>

                <div className="widget">
                  <h4 className="widget-title">Model</h4>
                  <select className="form-control">
                    <option>Select Model</option>
                    <option>JIMNY DX MT</option>
                    <option>SUZUKI CIAZ GL AT</option>
                    <option>SWIFT AT</option>
                  </select>
                </div>

                <div className="widget">
                  <h4 className="widget-title">Transmission</h4>
                  <ul className="optionlist">
                    <li>
                      <input type="checkbox" name="checkname" id="auto" />
                      <label htmlFor="auto"></label>
                      Auto <span>12</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="Manual" />
                      <label htmlFor="Manual"></label>
                      Manual <span>33</span>{" "}
                    </li>
                  </ul>
                </div>

                <div className="widget">
                  <h4 className="widget-title">Engine Type</h4>
                  <ul className="optionlist">
                    <li>
                      <input type="checkbox" name="checkname" id="Petrol" />
                      <label htmlFor="Petrol"></label>
                      Petrol <span>12</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="Diesel" />
                      <label htmlFor="Diesel"></label>
                      Diesel <span>33</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="Electric" />
                      <label htmlFor="Electric"></label>
                      Electric <span>33</span>{" "}
                    </li>
                  </ul>
                </div>

                <div className="searchnt">
                  <button className="btn">
                    <i className="fa fa-search" aria-hidden="true"></i> Update
                    Results
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-sm-7">
              <ul className="searchList">
                {
                  cars.map((e) => {
                    return <Car key={CommonUtilities.randomString(50)} imageSrc={e.imageSrc} model={e.model} price={e.price} year={e.year} kilometersDriven={e.kilometersDriven} location={e.location} fuelType={e.fuelType} cc={e.cc} transmission={e.transmission} lastUpdated={e.lastUpdated} />
                  })
                }
              </ul>

              <div className="pagiWrap">
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <div className="showreslt">Showing 1-10</div>
                  </div>
                  <div className="col-md-8 col-sm-8 text-right">
                    <ul className="pagination">
                      <li className="active">
                        <a href="#.">1</a>
                      </li>
                      <li>
                        <a href="#.">2</a>
                      </li>
                      <li>
                        <a href="#.">3</a>
                      </li>
                      <li>
                        <a href="#.">4</a>
                      </li>
                      <li>
                        <a href="#.">5</a>
                      </li>
                      <li>
                        <a href="#.">6</a>
                      </li>
                      <li>
                        <a href="#.">7</a>
                      </li>
                      <li>
                        <a href="#.">8</a>
                      </li>
                    </ul>
                  </div>
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
