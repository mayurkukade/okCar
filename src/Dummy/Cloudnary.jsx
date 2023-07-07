import { useState } from "react";

const Cloudnary = () => {
  const [images, setImages] = useState([]);
  const submitImages = async () => {
    try {
      const formData = new FormData();
      for (let i = 0; i < images.length; i++) {
        formData.append("file", images[i]);
      }
      formData.append("upload_preset", "carokupload");
      formData.append("cloud_name", "delygdkh2");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/delygdkh2/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SubNav componentsName={"Register"} />

      <div className="listpgWraper">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="userccount">
                <form onSubmit={onSubmitHandler}>
                  <div className="userbtns">
                    <h2>User Register</h2>
                  </div>

                  <div className="tab-content">
                    <div
                      id="wsell"
                      className="formpanel tab-pane fade in active"
                    >
                      <div className="formrow">
                        <input
                          type="text"
                          name="firstName"
                          className="form-control"
                          placeholder="First Name"
                          value={inputField.firstName}
                          onChange={onChangeFormhandler}
                          required
                        />
                      </div>

                      <div className="formrow">
                        <input
                          type="text"
                          name="lastName"
                          className="form-control"
                          placeholder="Last Name"
                          onChange={onChangeFormhandler}
                          value={inputField.lastName}
                          required
                        />
                      </div>

                      <div className="formrow">
                        <input
                          type="text"
                          name="mobileNo"
                          className="form-control"
                          placeholder="Phone Number"
                          onChange={onChangeFormhandler}
                          value={inputField.mobileNo}
                          required
                        />
                      </div>

                      <div className="formrow">
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          onChange={onChangeFormhandler}
                          value={inputField.email}
                          required
                        />
                      </div>

                      <div className="formrow">
                        <input
                          type="text"
                          name="address"
                          className="form-control"
                          placeholder="Address"
                          onChange={onChangeFormhandler}
                          value={inputField.address}
                          required
                        />
                      </div>

                      <div className="formrow">
                        <input
                          type="text"
                          name="city"
                          className="form-control"
                          placeholder="City"
                          onChange={onChangeFormhandler}
                          value={inputField.city}
                          required
                        />
                      </div>

                      <div className="formrow">
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Password"
                          onChange={onChangeFormhandler}
                          value={inputField.password}
                          required
                        />
                      </div>

                      <div className="formrow">
                        <input
                          type="password"
                          name="confirmPassword"
                          className="form-control"
                          placeholder="Confirm Password"
                          onChange={onChangeFormhandler}
                          value={inputField.confirmPassword}
                          required
                        />
                      </div>

                      <div className="formrow">
                        <input
                          type="checkbox"
                          value="agree text"
                          name="agree"
                          style={{ marginRight: "10px" }}
                          required
                        />
                        Terms and Condition
                      </div>

                      {/* {error && <p>{error}</p>} */}

                      <button type="submit" className="btn" value="Register">
                        Register
                      </button>
                    </div>
                  </div>

                  <div className="newuser">
                    <i className="fa fa-user" aria-hidden="true"></i> Already a
                    Member?
                    <Link to="/signin">
                      <span>Login Here</span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cloudnary;
