import SubNav from "../Navbar/SubNav.jsx";

const CarCard = () => {
  return (
    <>
      <SubNav componentsName={"Add Car"} />
      <div className="listpgWraper">
        <div className="container">
          <div className="sortbybar">
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
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-5">
              <div className="sidebar">
                <div className="widget">
                  <h4 className="widget-title">Search By Keyword</h4>
                  <div className="input-group">
                    <input
                      type="text"
                      className="htmlForm-control"
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
                      <label htmlFor="price1"></label>0 to $100 <span>12</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="price2" />
                      <label htmlFor="price2"></label>
                      $100 to $199 <span>41</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="price3" />
                      <label htmlFor="price3"></label>
                      $199 to $499 <span>33</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="price4" />
                      <label htmlFor="price4"></label>
                      $499 to $999 <span>66</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="price5" />
                      <label htmlFor="price5"></label>
                      $999 to $4999 <span>159</span>{" "}
                    </li>
                    <li>
                      <input type="checkbox" name="checkname" id="price6" />
                      <label htmlFor="price6"></label>
                      Above $4999 <span>865</span>{" "}
                    </li>
                  </ul>
                  <div className="row">
                    <div className="col-md-6">
                      <select className="htmlForm-control">
                        <option>From</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select className="htmlForm-control">
                        <option>To</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="widget">
                  <h4 className="widget-title">City</h4>
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
                </div>

                <div className="widget">
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
                </div>

                <div className="widget">
                  <h4 className="widget-title">Year Range</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <select className="htmlForm-control">
                        <option>From</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select className="htmlForm-control">
                        <option>To</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="widget">
                  <h4 className="widget-title">Type</h4>
                  <select className="htmlForm-control">
                    <option>New</option>
                    <option>Used Car</option>
                  </select>
                </div>

                <div className="widget">
                  <h4 className="widget-title">Make</h4>
                  <select className="htmlForm-control">
                    <option>BMW</option>
                    <option>Honda</option>
                    <option>Toyota</option>
                    <option>Suzuki</option>
                  </select>
                </div>

                <div className="widget">
                  <h4 className="widget-title">Model</h4>
                  <select className="htmlForm-control">
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
                      <input type="checkbox" name="checkname" id="Diesel" />
                      <label htmlFor="Diesel"></label>
                      Electric<span>33</span>{" "}
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
                <li>
                  <div className="row">
                    <div className="col-md-3 col-sm-4">
                      <div className="ribbon_3 popular">
                        <span>Featured</span>
                      </div>
                      <div className="adimg">
                        <img src="images/cars/01.jpg" alt="Ad Name" />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-8">
                      <div className="jobinfo">
                        <div className="row">
                          <div className="col-md-8 col-sm-7">
                            <h3>
                              <a href="#.">Sue gate F 1.0 htmlFor Sale</a>
                            </h3>
                            <div className="location">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>2014</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-tachometer"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>38,000 km</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>New York</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="vinfo">
                              <span>Petrol</span>
                            </div>
                            <div className="vinfo">
                              <span>1300 cc</span>
                            </div>
                            <div className="vinfo">
                              <span>Automatic</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="date">Last Updated: 1 day ago</div>
                          </div>
                          <div className="col-md-4 col-sm-5 text-right">
                            <div className="adprice">$456.00</div>
                            <div className="listbtn">
                              <a href="detail.html">
                                View Details{" "}
                                <i
                                  className="fa fa-arrow-circle-right"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="row">
                    <div className="col-md-3 col-sm-4">
                      <div className="ribbon_3 popular">
                        <span>Featured</span>
                      </div>
                      <div className="adimg">
                        <img src="images/cars/02.jpg" alt="Ad Name" />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-8">
                      <div className="jobinfo">
                        <div className="row">
                          <div className="col-md-8 col-sm-7">
                            <h3>
                              <a href="#.">Sue gate F 1.0 htmlFor Sale</a>
                            </h3>
                            <div className="location">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>2014</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-tachometer"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>38,000 km</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>New York</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="vinfo">
                              <span>Petrol</span>
                            </div>
                            <div className="vinfo">
                              <span>1300 cc</span>
                            </div>
                            <div className="vinfo">
                              <span>Automatic</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="date">Last Updated: 1 day ago</div>
                          </div>
                          <div className="col-md-4 col-sm-5 text-right">
                            <div className="adprice">$456.00</div>
                            <div className="listbtn">
                              <a href="detail.html">
                                View Details{" "}
                                <i
                                  className="fa fa-arrow-circle-right"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="row">
                    <div className="col-md-3 col-sm-4">
                      <div className="ribbon_3 popular">
                        <span>Featured</span>
                      </div>
                      <div className="adimg">
                        <img src="images/cars/03.jpg" alt="Ad Name" />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-8">
                      <div className="jobinfo">
                        <div className="row">
                          <div className="col-md-8 col-sm-7">
                            <h3>
                              <a href="#.">Sue gate F 1.0 htmlFor Sale</a>
                            </h3>
                            <div className="location">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>2014</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-tachometer"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>38,000 km</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>New York</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="vinfo">
                              <span>Petrol</span>
                            </div>
                            <div className="vinfo">
                              <span>1300 cc</span>
                            </div>
                            <div className="vinfo">
                              <span>Automatic</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="date">Last Updated: 1 day ago</div>
                          </div>
                          <div className="col-md-4 col-sm-5 text-right">
                            <div className="adprice">$456.00</div>
                            <div className="listbtn">
                              <a href="detail.html">
                                View Details{" "}
                                <i
                                  className="fa fa-arrow-circle-right"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="row">
                    <div className="col-md-3 col-sm-4">
                      <div className="adimg">
                        <img src="images/cars/04.jpg" alt="Ad Name" />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-8">
                      <div className="jobinfo">
                        <div className="row">
                          <div className="col-md-8 col-sm-7">
                            <h3>
                              <a href="#.">Sue gate F 1.0 htmlFor Sale</a>
                            </h3>
                            <div className="location">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>2014</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-tachometer"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>38,000 km</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>New York</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="vinfo">
                              <span>Petrol</span>
                            </div>
                            <div className="vinfo">
                              <span>1300 cc</span>
                            </div>
                            <div className="vinfo">
                              <span>Automatic</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="date">Last Updated: 1 day ago</div>
                          </div>
                          <div className="col-md-4 col-sm-5 text-right">
                            <div className="adprice">$456.00</div>
                            <div className="listbtn">
                              <a href="detail.html">
                                View Details{" "}
                                <i
                                  className="fa fa-arrow-circle-right"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="row">
                    <div className="col-md-3 col-sm-4">
                      <div className="adimg">
                        <img src="images/cars/05.jpg" alt="Ad Name" />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-8">
                      <div className="jobinfo">
                        <div className="row">
                          <div className="col-md-8 col-sm-7">
                            <h3>
                              <a href="#.">Sue gate F 1.0 htmlFor Sale</a>
                            </h3>
                            <div className="location">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>2014</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-tachometer"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>38,000 km</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>New York</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="vinfo">
                              <span>Petrol</span>
                            </div>
                            <div className="vinfo">
                              <span>1300 cc</span>
                            </div>
                            <div className="vinfo">
                              <span>Automatic</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="date">Last Updated: 1 day ago</div>
                          </div>
                          <div className="col-md-4 col-sm-5 text-right">
                            <div className="adprice">$456.00</div>
                            <div className="listbtn">
                              <a href="detail.html">
                                View Details{" "}
                                <i
                                  className="fa fa-arrow-circle-right"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="row">
                    <div className="col-md-3 col-sm-4">
                      <div className="adimg">
                        <img src="images/cars/06.jpg" alt="Ad Name" />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-8">
                      <div className="jobinfo">
                        <div className="row">
                          <div className="col-md-8 col-sm-7">
                            <h3>
                              <a href="#.">Sue gate F 1.0 htmlFor Sale</a>
                            </h3>
                            <div className="location">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>2014</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-tachometer"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>38,000 km</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>New York</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="vinfo">
                              <span>Petrol</span>
                            </div>
                            <div className="vinfo">
                              <span>1300 cc</span>
                            </div>
                            <div className="vinfo">
                              <span>Automatic</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="date">Last Updated: 1 day ago</div>
                          </div>
                          <div className="col-md-4 col-sm-5 text-right">
                            <div className="adprice">$456.00</div>
                            <div className="listbtn">
                              <a href="detail.html">
                                View Details{" "}
                                <i
                                  className="fa fa-arrow-circle-right"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="row">
                    <div className="col-md-3 col-sm-4">
                      <div className="adimg">
                        <img src="images/cars/07.jpg" alt="Ad Name" />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-8">
                      <div className="jobinfo">
                        <div className="row">
                          <div className="col-md-8 col-sm-7">
                            <h3>
                              <a href="#.">Sue gate F 1.0 htmlFor Sale</a>
                            </h3>
                            <div className="location">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>2014</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-tachometer"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>38,000 km</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>New York</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="vinfo">
                              <span>Petrol</span>
                            </div>
                            <div className="vinfo">
                              <span>1300 cc</span>
                            </div>
                            <div className="vinfo">
                              <span>Automatic</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="date">Last Updated: 1 day ago</div>
                          </div>
                          <div className="col-md-4 col-sm-5 text-right">
                            <div className="adprice">$456.00</div>
                            <div className="listbtn">
                              <a href="detail.html">
                                View Details{" "}
                                <i
                                  className="fa fa-arrow-circle-right"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="row">
                    <div className="col-md-3 col-sm-4">
                      <div className="adimg">
                        <img src="images/cars/08.jpg" alt="Ad Name" />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-8">
                      <div className="jobinfo">
                        <div className="row">
                          <div className="col-md-8 col-sm-7">
                            <h3>
                              <a href="#.">Sue gate F 1.0 htmlFor Sale</a>
                            </h3>
                            <div className="location">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>2014</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-tachometer"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>38,000 km</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>New York</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="vinfo">
                              <span>Petrol</span>
                            </div>
                            <div className="vinfo">
                              <span>1300 cc</span>
                            </div>
                            <div className="vinfo">
                              <span>Automatic</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="date">Last Updated: 1 day ago</div>
                          </div>
                          <div className="col-md-4 col-sm-5 text-right">
                            <div className="adprice">$456.00</div>
                            <div className="listbtn">
                              <a href="detail.html">
                                View Details{" "}
                                <i
                                  className="fa fa-arrow-circle-right"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="row">
                    <div className="col-md-3 col-sm-4">
                      <div className="adimg">
                        <img src="images/cars/09.jpg" alt="Ad Name" />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-8">
                      <div className="jobinfo">
                        <div className="row">
                          <div className="col-md-8 col-sm-7">
                            <h3>
                              <a href="#.">Sue gate F 1.0 htmlFor Sale</a>
                            </h3>
                            <div className="location">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>2014</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-tachometer"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>38,000 km</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>New York</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="vinfo">
                              <span>Petrol</span>
                            </div>
                            <div className="vinfo">
                              <span>1300 cc</span>
                            </div>
                            <div className="vinfo">
                              <span>Automatic</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="date">Last Updated: 1 day ago</div>
                          </div>
                          <div className="col-md-4 col-sm-5 text-right">
                            <div className="adprice">$456.00</div>
                            <div className="listbtn">
                              <a href="detail.html">
                                View Details{" "}
                                <i
                                  className="fa fa-arrow-circle-right"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="row">
                    <div className="col-md-3 col-sm-4">
                      <div className="adimg">
                        <img src="images/cars/10.jpg" alt="Ad Name" />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-8">
                      <div className="jobinfo">
                        <div className="row">
                          <div className="col-md-8 col-sm-7">
                            <h3>
                              <a href="#.">Sue gate F 1.0 htmlFor Sale</a>
                            </h3>
                            <div className="location">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>2014</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-tachometer"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>38,000 km</span>
                            </div>
                            <div className="location">
                              <i
                                className="fa fa-map-marker"
                                aria-hidden="true"
                              ></i>{" "}
                              <span>New York</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="vinfo">
                              <span>Petrol</span>
                            </div>
                            <div className="vinfo">
                              <span>1300 cc</span>
                            </div>
                            <div className="vinfo">
                              <span>Automatic</span>
                            </div>
                            <div className="clearfix"></div>
                            <div className="date">Last Updated: 1 day ago</div>
                          </div>
                          <div className="col-md-4 col-sm-5 text-right">
                            <div className="adprice">$456.00</div>
                            <div className="listbtn">
                              <a href="detail.html">
                                View Details{" "}
                                <i
                                  className="fa fa-arrow-circle-right"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
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

export default CarCard;
