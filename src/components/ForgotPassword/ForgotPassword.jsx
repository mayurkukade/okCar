import { useState } from "react";
import SubNav from "../Navbar/SubNav.jsx";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useForgotPasswordMutation } from "../../api/usersApiSlice.js";

const ForgotPassword = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [createPost, responseData] = useForgotPasswordMutation();
  const validateEmail = (email) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    validateEmail(email)
      ? (createPost(email), navigate("/reset-password"))
      : toast({
          status: "error",
          position: "top",
          description: "Invalid Email Please Check Email",
        });
  };
  console.log(responseData);
  return (
    <div>
      <SubNav componentsName={"ForgotPassword"} />
      <div
        className="listpgWraper"
        style={{ minHeight: "62vh", display: "flex", alignItems: "center" }}
      >
        <div className="container">
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div className="userccount">
                  <h5>Forgot Password</h5>
                  <h6>Please Enter Email to send Password Reset Link</h6>
                  <div className="formpanel">
                    <div className="formrow">
                      <label>Email Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email Address"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <input type="submit" className="btn" value="Sumbit" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
