import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SubNav from "../Navbar/SubNav";
import { useToast } from "@chakra-ui/react";
import { useResetPasswordMutation } from "../../api/usersApiSlice";

const ChangePasswordPage = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { mutate: resetPassword } = useResetPasswordMutation();

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (newPassword === confirmPassword) {
        console.log(token, newPassword);
        const response = await resetPassword({ password: newPassword, token });
        if (response.error) {
          toast({
            status: "error",
            position: "top",
            description: response.error.message,
          });
        } else {
          toast({
            status: "success",
            position: "top",
            description: "Password updated successfully",
          });
          navigate("/");
        }
      } else {
        toast({
          status: "error",
          position: "top",
          description: "Password and Confirm Password do not match",
        });
      }
    } catch (error) {
      toast({
        status: "error",
        position: "top",
        description: "An error occurred while updating the password",
      });
    }
  };

  return (
    <>
      <SubNav componentsName={"Reset Password"} />
      <div className="listpgWraper">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="userccount">
                <h5>Reset Password</h5>
                <p>Here is the token: {token}</p>
                <div className="formpanel">
                  <form onSubmit={handleSubmit}>
                    <div className="formrow">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        required
                      />
                    </div>
                    <div className="formrow">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                      />
                    </div>
                    <input type="submit" className="btn" value="Update" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePasswordPage;
