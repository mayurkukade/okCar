import SubNav from "../Navbar/SubNav";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { useGetUserQuery } from "../../api/usersApiSlice";
const EditUserProfile = () => {
  const userToken = localStorage.getItem("userToken");
  // decode user token
  const decode = jwt_decode(userToken);
  const id = decode?.userProfileId;
  console.log(decode?.userProfileId);

  const responseData = useGetUserQuery(id);
  const { data } = responseData;
  console.log("response data", data);
  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    mobile_no: "",
    email: "",
    address: "",
    city: "",
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

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(inputField);
    // try {
    //   const response = await updateUser(1, {
    //     firstName: inputField.firstName,
    //     lastName: inputField.lastName,
    //     mobile_no: inputField.mobile_no,
    //     email: inputField.email,
    //     address: inputField.address,
    //     city: inputField.city,
    //   });
    //   console.log("User Updated", response.data);
    // } catch (error) {
    //   console.error("Error updating user:", error);
    // }
  };
  return (
    <>
      <SubNav componentsName={"Edit User"} />
      <div className="listpgWraper" style={{ backgroundColor: "#F5F7F9" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="userccount">
                <form onSubmit={onSubmitHandler}>
                  <div className="userbtns">
                    <h2>Edit User Details </h2>
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
                          required
                        />
                      </div>
                      <div className="formrow">
                        <input
                          type="text"
                          name="mobile_no"
                          className="form-control"
                          placeholder="Phone Number"
                          onChange={onChangeFormhandler}
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
                          required
                        />
                      </div>
                      {/* <div className="formrow">
                        <input
                          type="checkbox"
                          value="agree text"
                          name="agree"
                          style={{ marginRight: "10px" }}
                          required
                        />
                        Terms and Condition
                      </div> */}
                      <div style={{ display: "flex", gap: "10px" }}>
                        <button type="submit" className="btn" value="Register">
                          Update User
                        </button>
                        <button
                          type="submit"
                          className="btn"
                          value="Register"
                          style={{ backgroundColor: "red" }}
                        >
                          Delete User
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* <div className="newuser">
                      <i className="fa fa-user" aria-hidden="true"></i> Already a
                      Member?
                      <Link to="/signin">
                        <a> Login Here</a>
                      </Link>
                    </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUserProfile;
