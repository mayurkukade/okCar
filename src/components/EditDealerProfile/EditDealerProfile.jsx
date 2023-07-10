
import SubNav from "../Navbar/SubNav";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useUpdateDealerMutation } from "../../api/dealersManegmentApiSlice";
import { useGetAllDealerQuery } from "../../api/dealersManegmentApiSlice";
import { useGetDealerQuery } from "../../api/dealersManegmentApiSlice";

const EditDealerProfile = () => {
  const userToken = localStorage.getItem("userToken")
    const {userid,id} = useParams()
    const {data:dealerID} = useGetDealerQuery({id})
    
  console.log(dealerID?.dealerDto?.address)

    console.log(userid,id)
  const [inputField, setInputField] = useState({
    email: `${dealerID?.dealerDto?.email}`,
    mobileNo:`${dealerID?.dealerDto?.mobileNo}`,
    address: `${dealerID?.dealerDto?.address}`,
    city: `${dealerID?.dealerDto?.city}`,
    area: `${dealerID?.dealerDto?.area}`,
    shopName: `${dealerID?.dealerDto?.shopName}`,
    userid
  });
  
  console.log(dealerID)

  
  console.log(userToken)

console.log(userid)
const { data: v, } = useGetAllDealerQuery();
console.log(v);
  const [updateDealer,{isLoading}] = useUpdateDealerMutation()

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
                          defaultValue={inputField.mobileNo}
                          onChange={onChangeFormhandler}
                          
                        />
                      </div>
                      <div className="formrow">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          onChange={onChangeFormhandler}
                          value={inputField.email}
                          
                        />
                      </div>
                      <div className="formrow">
                        <input
                          type="text"
                          name="address"
                          className="form-control"
                          placeholder="Address"
                          value={inputField.address}
                          onChange={onChangeFormhandler}
                          
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
                        />
                      </div>
                     
                      <div className="formrow">
                        <input
                          type="text"
                          name="area"
                          className="form-control"
                          placeholder="Area"
                          onChange={onChangeFormhandler}
                          value={inputField.area}
                        />
                      </div>
                      <div className="formrow">
                        <input
                          type="text"
                          name="shopName"
                          className="form-control"
                          placeholder="Shop Name"
                          onChange={onChangeFormhandler}
                          value={inputField.shopName}
                        />
                      </div>
                      <div className="formrow">
                        <input
                          type="checkbox"
                          value="agree text"
                          name="agree"
                          style={{ marginRight: "10px" }}
                          
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
