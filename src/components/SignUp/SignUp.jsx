import { Link } from "react-router-dom";
import SubNav from "../Navbar/SubNav";
import { useState } from "react";

const SignUp = () => {
  const [inputField, setInputField] = useState({
    password: "",
    mobileNo: "",
    roles: "USER",
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    confirmPassword: "",
  });

  const onChangeFormhandler = (e) => {
    const { name, value } = e.target;
    setInputField((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(inputField);
  };
  return (
    <>
      <SubNav componentsName={"Register"} />
      <div className="listpgWraper" style={{ backgroundColor: "#F5F7F9" }}>
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
                          type="text"
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
                          type="text"
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
export default SignUp;
