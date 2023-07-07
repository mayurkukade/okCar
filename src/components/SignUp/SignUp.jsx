/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import SubNav from "../Navbar/SubNav";
import { useState } from "react";
import { useRegisterMutation } from "../../api/usersApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useToast } from "@chakra-ui/react";

const SignUp = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [inputField, setInputField] = useState({
    password: "",
    mobileNo: "",
    roles: "USER",
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    confirmPassword: "",
    email: "",
  });

  const dispatch = useDispatch();

  const [register] = useRegisterMutation();

  const onChangeFormhandler = (e) => {
    const { name, value } = e.target;
    setInputField((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(inputField);
    const {
      password,
      mobileNo,
      roles,
      firstName,
      lastName,
      city,
      address,
      email,
      confirmPassword,
    } = inputField;

    try {
      const res = await register({
        password,
        mobileNo,
        roles,
        firstName,
        lastName,
        city,
        address,
        email,
        confirmPassword,
      }).unwrap();
      if (inputField.password == !inputField.confirmPassword) {
        alert("not match password");
      }
      toast({
        status: "success",
        position: "top",
        description: "Successful Register User",
      });
      navigate("/signin");
    } catch (error) {
      toast({
        status: "error",
        position: "top",
        description: "User not register ",
      });
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
export default SignUp;
