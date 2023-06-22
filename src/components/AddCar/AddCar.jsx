import { useState } from "react";
import SubNav from "../Navbar/SubNav";

const AddCar = () => {
  const [formData, setFormData] = useState({
    carName: "",
    carPrice: "",
    make: "",
    year: "",
    bodyType: "",
    transmission: "",
    color: "",
    engineCapacity: "",
    mileage: "",
    registration: "",
    kmDriven: "",
    fuelType: "",
    owner: "",
    insurance: "",
    city: "",
    description: "",
    safetyDescription: "",
    abs: "",
    radio: "",
    airBags: "",
    airConditioning: "",
    alloyRims: "",
    cdPlayer: "",
    cassette: "",
    cruiseControl: "",
    dvdPlayer: "",
    keylessEntry: "",
    powerLocks: "",
    rearParkingCamera: "",
    powerSteering: "",
    powerWindows: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Prepare the form data to send to the backend
    const data = {
      carName: formData.carName,
      carPrice: formData.carPrice,
      make: formData.make,
      year: formData.year,
      bodyType: formData.bodyType,
      transmission: formData.transmission,
      color: formData.color,
      engineCapacity: formData.engineCapacity,
      mileage: formData.mileage,
      registration: formData.registration,
      kmDriven: formData.kmDriven,
      fuelType: formData.fuelType,
      owner: formData.owner,
      insurance: formData.insurance,
      city: formData.city,
      features: formData.features,
      description: formData.description,
      safetyDescription: formData.safetyDescription,
      abs: formData.abs,
      radio: formData.radio,
      airBags: formData.airBags,
      airConditioning: formData.airConditioning,
      alloyRims: formData.alloyRims,
      cdPlayer: formData.cdPlayer,
      cassette: formData.cassette,
      cruiseControl: formData.cruiseControl,
      dvdPlayer: formData.dvdPlayer,
      keylessEntry: formData.keylessEntry,
      powerLocks: formData.powerLocks,
      powerSteering: formData.powerSteering,
      powerWindows: formData.powerWindows,
    };

    // Send the form data to the backend
    // try {
    //   const response = await axios.post("/api/addCar", data); // Replace "/api/addCar" with the actual backend API endpoint
    //   console.log(response.data); // Handle the response from the backend
    // } catch (error) {
    //   console.error(error); // Handle any errors that occur during the request
    // }
    console.log(data);
  };

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
                  {/* <h5>Car Information</h5> */}
                  <h5>Add Details Page</h5>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="formrow">
                        <input
                          type="text"
                          name="jobtitle"
                          className="form-control"
                          placeholder="Car Name"
                          value={formData.carName}
                          onChange={(event) =>
                            setFormData({
                              ...formData,
                              carName: event.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="formrow">
                        <input
                          type="text"
                          name="carPrice"
                          className="form-control"
                          placeholder="Car Price"
                          value={formData.carPrice}
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              carPrice: event.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="formrow">
                        <select
                          className="form-control"
                          name="make"
                          value={formData.make}
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              make: event.target.value,
                            });
                          }}
                        >
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
                        <select
                          className="form-control"
                          name="year"
                          value={formData.year}
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              year: event.target.value,
                            });
                          }}
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
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="formrow">
                        <select
                          className="form-control"
                          name="bodyType"
                          required
                          value={formData.bodyType}
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              bodyType: event.target.value,
                            });
                          }}
                        >
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
                        <select
                          className="form-control"
                          name="transmission"
                          value={formData.transmission}
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              transmission: event.target.value,
                            });
                          }}
                        >
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
                          value={formData.color}
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              color: event.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="formrow">
                        <input
                          type="text"
                          placeholder="Engine Capacity"
                          className="form-control"
                          value={formData.engineCapacity}
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              engineCapacity: event.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="formrow">
                        <input
                          type="text"
                          placeholder="Mileage"
                          className="form-control"
                          value={formData.mileage}
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              mileage: event.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="formrow">
                        <input
                          type="text"
                          placeholder="Registration"
                          className="form-control"
                          value={formData.registration}
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              registration: event.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="formrow">
                        <input
                          type="text"
                          placeholder="Km Driven"
                          className="form-control"
                          value={formData.kmDriven}
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              kmDriven: event.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="formrow">
                        <select
                          className="form-control"
                          name="fuelType"
                          value={formData.fuelType}
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              fuelType: event.target.value,
                            });
                          }}
                        >
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
                        <select
                          className="form-control"
                          name="owner"
                          value={formData.owner}
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              owner: event.target.value,
                            });
                          }}
                        >
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
                        <select
                          className="form-control"
                          name="msalary"
                          value={formData.insurance}
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              insurance: event.target.value,
                            });
                          }}
                        >
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
                          name="city"
                          value={formData.city}
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              city: event.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>

                    {/* Features */}

                    <div className="col-md-12">
                      <h5>Features</h5>
                      <div className="formrow">
                        <ul className="row featchoose">
                          <li className="col-md-4">
                            <input
                              type="checkbox"
                              name="abs"
                              value={formData.abs}
                              onChange={(event) => {
                                setFormData({
                                  ...formData,
                                  abs: event.target.value,
                                });
                              }}
                            />{" "}
                            ABS
                          </li>
                          <li className="col-md-4">
                            <input
                              type="checkbox"
                              name="radio"
                              value={formData.radio}
                              onChange={(event) => {
                                setFormData({
                                  ...formData,
                                  radio: event.target.value,
                                });
                              }}
                            />{" "}
                            AM/FM Radio
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="features" /> Air Bags
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="features" /> Air
                            Conditioning
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="features" /> Alloy Rims
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="features" /> CD Player
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="features" /> Cassette
                            Player
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="features" /> Cruise
                            Control
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="features" /> DVD Player
                          </li>
                          {/* <li className="col-md-4">
                            <input type="checkbox" name="features" />{" "}
                            Immobilizer Key
                          </li> */}
                          <li className="col-md-4">
                            <input type="checkbox" name="features" /> Keyless
                            Entry
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="features" /> Power
                            Locks
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="features" /> Rear
                            Parking Camera
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="features" /> Power
                            Steering
                          </li>
                          <li className="col-md-4">
                            <input type="checkbox" name="features" /> Power
                            Windows
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
                          name="description"
                          placeholder="Vehicle Description"
                          value={formData.description}
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              description: event.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h4>Safety Description</h4>
                      <div className="formrow">
                        <textarea
                          className="form-control"
                          name="safetyDescription"
                          placeholder="Safety Description"
                          value={formData.safetyDescription}
                          onChange={(event) => {
                            setFormData({
                              ...formData,
                              safetyDescription: event.target.value,
                            });
                          }}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <br />
                  <input
                    type="submit"
                    className="btn"
                    value="Post An Ad"
                    onClick={handleSubmit}
                  />
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
