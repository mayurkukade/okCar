
import SubNav from "../Navbar/SubNav";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useUpdateDealerMutation } from "../../api/dealersManegmentApiSlice";
const EditDealerProfile = () => {
  const [inputField, setInputField] = useState({
    email: "",
    mobileNo: "",
    address: "",
    city: "",
    area: "",
    shopName: "",
  });

  

  const userToken = localStorage.getItem("userToken")
  console.log(userToken)
  const {id} = useParams()
console.log(id)
  const [updateDealer,{isLoading}] = useUpdateDealerMutation({id})

  const onChangeFormhandler = (e) => {
    const { name, value } = e.target;
    setInputField((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = async(e) => {
    e.preventDefault();

   try {
    const res = await updateDealer(inputField).unwrap()
    console.log(res)
   } catch (error) {
    console.log(error)
   }
   
  };
  return (
    <>
    {
      isLoading ?
      <p>Loading...</p>
      :
      <>
      <SubNav componentsName={"Edit Dealer"} />
      <div className="listpgWraper" style={{ backgroundColor: "#F5F7F9" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="userccount">
                <form onSubmit={onSubmitHandler}>
                  <div className="userbtns">
                    <h2>Edit Dealer Details </h2>
                  </div>
                  <div className="tab-content">
                    <div
                      id="wsell"
                      className="formpanel tab-pane fade in active"
                    >
                   
                      <div className="formrow">
                        <input
                          type="number"
                          name="mobileNo"
                          className="form-control"
                          placeholder="Phone Number"
                          onChange={onChangeFormhandler}
                          required
                        />
                      </div>
                      <div className="formrow">
                        <input
                          type="email"
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
                     
                      <div className="formrow">
                        <input
                          type="text"
                          name="area"
                          className="form-control"
                          placeholder="Area"
                          onChange={onChangeFormhandler}
                          required
                        />
                      </div>
                      <div className="formrow">
                        <input
                          type="text"
                          name="shopName"
                          className="form-control"
                          placeholder="Shop Name"
                          onChange={onChangeFormhandler}
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
                      <div style={{ display: "flex", gap: "10px" }}>
                        <button type="submit" className="btn" value="Register">
                          Edit User
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    }
      
    </>
  );
};

export default EditDealerProfile;
