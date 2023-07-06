import { useState } from "react";
import SubNav from "../Navbar/SubNav.jsx";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
const ForgotPassword = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const validateEmail = (email) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    validateEmail(email)
      ? navigate("/reset-password")
      : toast({
          status: "error",
          position: "top",
          description: "Invalid Email Please Check Email",
        });
  };
  return (
    <>
      <SubNav componentsName={"ForgotPassword"} />
      <div className="listpgWraper">
        <div className="container">
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div className="userccount">
                  <h5>Forgot Password</h5>
                  <h7>Please Enter Email to send Password Reset Link</h7>
                  <div className="formpanel">
                    <div className="formrow">
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
    </>
  );
};

export default ForgotPassword;
