import { Link } from "react-router-dom";
import SubNav from "../Navbar/SubNav.jsx";
import { useState } from "react";
import { useLoginMutation } from "../../api/usersApiSlice.js";
import { setCredentials } from "../../api/authSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { TOASTS, ToastUtility } from "../../util/toast.utilities.js";
const SignIn = () => {
  const [signState, setSignState] = useState({
    email: "",
    password: "",
  });

  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toastUtility = new ToastUtility(useToast());

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignState((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  //email Validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = signState;
    try {
      if (validateEmail(email)) {
        const res = await login({ username: email, password }).unwrap();
        console.log(res);
        dispatch(setCredentials({ ...res }));
        const resRole = res.results.user[0].role;

        if (resRole === "vendor") {
          navigate("/dealer");
        } else if (resRole === "admin") {
          navigate("/dealersManegment");
        }

        toastUtility.showCustom(TOASTS.LOGIN_SUCCESS);
      } else {
        toastUtility.showError("Invalid Email", "Entered email is invalid");
      }
    } catch (error) {
      toastUtility.showCustom(TOASTS.LOGIN_FAILED);
    }
  };
  return (
    <>
      <SubNav componentsName={"Login"} />
      {/* // <!-- Page Title End --> */}

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
                <h5>User Login</h5>
                {/* <!-- login form --> */}
                <div className="formpanel">
                  <div className="formrow">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={onChangeHandler}
                      value={signState.email}
                    />
                  </div>
                  <div className="formrow">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={onChangeHandler}
                      value={signState.password}
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={submitHandler}
                    className="btn"
                    value="Login"
                  >
                    Login
                  </button>
                </div>
                {/* <!-- login form  end-->  */}

                {/* <!-- sign up form --> */}
                <div className="newuser">
                  <i className="fa fa-user" aria-hidden="true"></i> New User ?{" "}
                  <Link to="/signup">Register Here</Link> |
                  <Link to="/ForgotPassword"> Forgot Password</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
