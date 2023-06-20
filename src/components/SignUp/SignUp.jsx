import { Link } from "react-router-dom";
import SubNav from "../Navbar/SubNav";

const SignUp = () => {
  return (
    <>
      <SubNav componentsName={"Register"} />
      <div className="listpgWraper" style={{ backgroundColor: "#F5F7F9" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="userccount">
                <div className="alert alert-success" role="alert">
                  <strong>Well done!</strong> Your account successfully created.
                </div>
                <div className="alert alert-warning" role="alert">
                  <strong>Warning!</strong> Better check yourself, you&apos;re
                  not looking too good.
                </div>
                <div className="alert alert-danger" role="alert">
                  <strong>Oh snap!</strong> Change a few things up and try
                  submitting again.
                </div>
                <div className="userbtns">
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a data-toggle="tab" href="#wsell">
                        I want to sell
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#wbuy">
                        I want to buy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div id="wsell" className="formpanel tab-pane fade in active">
                    <div className="formrow">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="formrow">
                      <select className="form-control">
                        <option>Ad type</option>
                        <option>New</option>
                        <option>Used</option>
                      </select>
                    </div>
                    <div className="formrow">
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="formrow">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="formrow">
                      <input
                        type="text"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="formrow">
                      <input
                        type="text"
                        name="conpass"
                        className="form-control"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="formrow">
                      <input type="checkbox" value="agree text" name="agree" />
                      There are many variations of passages of Lorem Ipsum
                      available
                    </div>
                    <input type="submit" className="btn" value="Register" />
                  </div>
                  <div id="wbuy" className="formpanel tab-pane fade in">
                    <div className="formrow">
                      <input
                        type="text"
                        name="cname"
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="formrow">
                      <input
                        type="text"
                        name="cusername"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="formrow">
                      <input
                        type="text"
                        name="cemail"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="formrow">
                      <input
                        type="text"
                        name="cpass"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="formrow">
                      <input
                        type="text"
                        name="cpass"
                        className="form-control"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <div className="formrow">
                      <input
                        type="checkbox"
                        value="agree text c"
                        name="cagree"
                      />
                      There are many variations of passages of Lorem Ipsum
                      available
                    </div>
                    <input type="submit" className="btn" value="Register" />
                  </div>
                </div>
                <div className="newuser">
                  <i className="fa fa-user" aria-hidden="true"></i> Already a
                  Member?
                  <Link to="/signin">
                    <a> Login Here</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
