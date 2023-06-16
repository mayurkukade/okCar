import SubNav from "../Navbar/SubNav.jsx";

const ForgotPassword = () => {
  return (
    <>
      <SubNav componentsName={"ForgotPassword"} />
      <div className="listpgWraper">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="userccount">
                <h5>Forgot Password</h5>
                <p>
                  Nam ea eripuit assueverit, invenire delicatissimi ad pro, an
                  dicam principes duo. Paulo prodesset duo ad. Duo eu summo
                  verear. Natum gubergren definitionem id usu, graeco cetero ius
                  ut.
                </p>

                <div className="formpanel">
                  <div className="formrow">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <input type="submit" className="btn" value="Sumbit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
