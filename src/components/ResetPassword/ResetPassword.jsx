// import React from "react";

const ChangePasswordPage = () => {
  return (
    <div
      className="listpgWraper"
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="userccount">
              <h5>Reset Password</h5>
              <div className="formpanel">
                <div className="formrow">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="New Password"
                  />
                </div>
                <div className="formrow">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
                <input type="submit" className="btn" value="Update" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
