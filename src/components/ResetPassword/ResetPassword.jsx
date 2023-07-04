import { useState } from "react";

import { useRegisterMutation } from "../../api/usersApiSlice";
const ChangePasswordPage = () => {
  
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
const [resetpassword] = useRegisterMutation()
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
        await resetpassword({newPassword,confirmPassword})
    } else {
      setError("Passwords do not match");
    }
  };

  return (
    <div
      className="listpgWraper"
     
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="userccount">
              <h5>Reset Password</h5>
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
                  {error && <p>{error}</p>}
                  <input type="submit" className="btn" value="Update" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
