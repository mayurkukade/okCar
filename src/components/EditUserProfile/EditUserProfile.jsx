import SubNav from "../Navbar/SubNav";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "../../api/usersApiSlice";
const EditUserProfile = () => {
  const userToken = localStorage.getItem("userToken");
  // decode user token
  const decode = jwt_decode(userToken);
  const id = decode?.userProfileId;
  console.log(decode?.userProfileId);

  //get user by id query
  const responseData = useGetUserQuery(id);
  const { data, isLoading } = responseData;
  console.log("response data", responseData);

  // update user Mutation
  const [updateUser] = useUpdateUserMutation();
  console.log();
  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    mobile_no: "",
    email: "",
    address: "",
    city: "",
  });

  useEffect(() => {
    if (data) {
      setInputField({
        firstName: data.firstName,
        lastName: data.lastName,
        mobile_no: data.mobile_no,
        email: data.email,
        address: data.address,
        city: data.city,
      });
    }
  }, [data]);

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
    try {
      const res = await updateUser({ id, data: inputField });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
                              name="mobile_no"
                              className="form-control"
                              placeholder="Phone Number"
                              onChange={onChangeFormhandler}
                              value={inputField.mobile_no}
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
                              required
                              value={inputField.city}
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
                            <button type="submit" className="btn">
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
      )}
    </>
  );
};

export default EditUserProfile;
