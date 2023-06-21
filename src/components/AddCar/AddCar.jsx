import { useState } from "react";
import SubNav from "../Navbar/SubNav";

const AddCar = () => {
  const [images, setImages] = useState([]);
  function handleImage(event) {
    const fileList = event.target.files;
    const imageArray = Array.from(fileList);
    setImages(imageArray);
    console.log(imageArray);
  }

  return (
    <>
      <SubNav componentsName={"AddCar"} />
      <div className="listpgWraper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="userccount">
                <div className="formpanel">
                  <h5>Add Details Page</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="formrow">
                        <input
                          type="text"
                          name="jobtitle"
                          className="form-control"
                          placeholder="Car Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="formrow">
                        <input
                          type="text"
                          name="jobtitle"
                          className="form-control"
                          placeholder="Car Price"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="formrow">
                        <select className="form-control" name="msalary">
                          <option>Select Make</option>
                          <option>Honda</option>
                          <option>Toyota</option>
                          <option>BMW</option>
                          <option>Suzuki</option>
                          <option>Tata</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="formrow">
                        <select className="form-control" name="msalary">
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
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="formrow">
                        <select className="form-control" name="msalary">
                          <option>Body Type</option>
                          <option>Sedan</option>
                          <option>Hatchback</option>
                          <option>SUV</option>
                          <option>MUV</option>
                          <option>Coupe</option>
                          <option>Convertibles</option>
                          <option>Pickup Trucks</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="formrow">
                        <select className="form-control" name="msalary">
                          <option>Transmission</option>
                          <option>Automatic</option>
                          <option>Manual</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="formrow">
                        <input
                          type="text"
                          placeholder="Color"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="formrow">
                        <input
                          type="text"
                          placeholder="Engine Capacity"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="formrow">
                        <input
                          type="text"
                          placeholder="Millage"
                          className="form-control"
                        />
                      </div>
                    </div>

                    {/* start */}

                    <div className="col-md-4">
                      <div className="formrow">
                        <input
                          type="text"
                          placeholder="Registration"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="formrow">
                        <input
                          type="text"
                          placeholder="Km Driven"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="formrow">
                        <select className="form-control" name="msalary">
                          <option>Fuel Type</option>
                          <option>Petrol</option>
                          <option>Diesel</option>
                          <option>Electric</option>
                          <option>Bio-Fuel</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="formrow">
                        <select className="form-control" name="msalary">
                          <option>Owner</option>
                          <option>1st owner</option>
                          <option>2nd owner</option>
                          <option>3rd owner</option>
                          <option>4th owner</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="formrow">
                        <select className="form-control" name="msalary">
                          <option>Car Insurance</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="formrow">
                        <input
                          type="text"
                          placeholder="City"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <h5>Features</h5>
                      <div className="formrow">
                        <ul className="row featchoose">
                          <li className="col-md-4">
                            <input type="checkbox" name="" /> ABS
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="" /> AM/FM Radio
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="" /> Air Bags
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="" /> Air Conditioning
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="" /> Alloy Rims
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="" /> CD Player
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="" /> Cassette Player
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="" /> Cruise Control
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="" /> DVD Player
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="" /> Immobilizer Key
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="" /> Keyless Entry
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="" /> Power Locks
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="" /> Rear Parking
                            Camera
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="" /> Power Steering
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="" /> Power Windows
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <h5>Upload Image</h5>
                      <div className="formrow">
                        <div className="uploadphotobx">
                          {" "}
                          <i className="fa fa-upload" aria-hidden="true"></i>
                          <h4>Upload your photo</h4>
                          <p>
                            Select multiple photo at a time using ctr button
                          </p>
                          <label className="uploadBox">
                            Click here to Upload
                            <input
                              type="file"
                              name="upload"
                              onChange={handleImage}
                              multiple
                            />
                          </label>
                        </div>
                        {images &&
                          images.map((image, index) => (
                            <div className="fileattached" key={index}>
                              <img src={URL.createObjectURL(image)} alt="" />
                              <span>{image.name}</span>
                              <i
                                className="fa fa-check-circle"
                                aria-hidden="true"
                              ></i>
                              <div className="clearfix"></div>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h4>Vehicle Description</h4>
                      <div className="formrow">
                        <textarea
                          className="form-control"
                          name="jobdetail"
                          placeholder="Vehicle Description"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h4>Safety Description</h4>
                      <div className="formrow">
                        <textarea
                          className="form-control"
                          name="jobdetail"
                          placeholder="Safety Description"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <br />
                  <input type="submit" className="btn" value="Post An Ad" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCar;
