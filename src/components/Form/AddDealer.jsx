import { useState } from "react";
import SubNav from "../Navbar/SubNav";

import { useToast } from "@chakra-ui/react";
import { TOASTS, ToastUtility } from "../../util/toast.utilities";
import { useAddDealerMutation } from "../../api/dealersManegmentApiSlice";
import { CommonUtilities } from "../../util/common.utilities";
import { useNavigate } from "react-router-dom";
const AddDealer = () => {
  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    area: "",
    mobileNo: "",
    shopName: "",
    email: "",
    roles: "DEALER",
    password: "",
  });
const [addDealer] = useAddDealerMutation()
  
  const toastUtility = new ToastUtility(useToast());
  const navigate = useNavigate()

  const onChangeFormHandler = (e) => {
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
    // const a = inputField;
    const { email, mobileNo } = inputField;

    if (!CommonUtilities.mobileNumberValidation(mobileNo)) {
      toastUtility.showError("Invalid Form", "mobile number is not valid");
      return;
    }

    if (!CommonUtilities.emailValidation(email)) {
      toastUtility.showError("Invalid Form", "email is not valid");
      return;
    }

    try {
  
      console.log(inputField);
      const res = await addDealer(inputField).unwrap();
      console.log(res);
      toastUtility.showCustom(TOASTS.LOGIN_SUCCESS);
      navigate('/dealersmanegment')
    } catch (error) {
      console.log(error);
      toastUtility.showCustom(TOASTS.FILE_ADD_FAILED);
    }
  };
  return (
    <>
      <SubNav componentsName={"Add Dealer"} />
      <div className="listpgWraper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="userccount">
                <div className="formpanel">
                  <h5>Add Dealer Details Page</h5>
                  <div className="row">
                    <form onSubmit={onSubmitHandler}>
                      <div className="col-md-6">
                        <div className="formrow">
                          <label>First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            className="form-control"
                            placeholder="First Name"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="formrow">
                          <label>Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            className="form-control"
                            placeholder="Last Name"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="formrow">
                          <label>Address</label>
                          <input
                            type="text"
                            name="address"
                            className="form-control"
                            placeholder="address details"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="formrow">
                          <label>City</label>
                          <input
                            type="text"
                            name="city"
                            className="form-control"
                            placeholder="city"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="formrow">
                          <label>Mobile No</label>
                          <input
                            type="number"
                            name="mobileNo"
                            className="form-control"
                            placeholder="mobileNo"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                        <div className="formrow">
                          <label>Area</label>
                          <input
                            type="text"
                            name="area"
                            className="form-control"
                            placeholder="area"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                      </div>
                   
                      <div className="col-md-6">
                        <div className="formrow">
                          <label>Email</label>
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                        <div className="formrow">
                          <label>Shop Name</label>
                          <input
                            type="text"
                            name="shopName"
                            className="form-control"
                            placeholder="shopName"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="formrow">
                          <label>Password</label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="password"
                            onChange={onChangeFormHandler}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                      
                      </div>
                      <br />
                      <input type="submit" className="btn" value="Add Dealer" />
                      {/* <input type="submit" className="btn" value="Add Dealer" /> */}
                    </form>
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

export default AddDealer;


