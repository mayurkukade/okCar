import { Link } from "react-router-dom";
import SubNav from "../Navbar/SubNav.jsx";
import { useState } from "react";
import { useLoginMutation } from "../../api/usersApiSlice.js";
import { setCredentials } from "../../api/authSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
const SignIn = () => {
  const [signState, setSignState] = useState({
    email: "",
    password: "",
  });

  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const toast = useToast();


  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignState((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  
  const SubmitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = signState;
    try {
      const res = await login({ email, password }).unwrap();
      console.log(res);
      dispatch(setCredentials({ ...res }));
      const resRole = res.results.user[0].role

      if(resRole === 'vendor'){
        navigate("/dealer");
      }else if(resRole === 'admin'){
        navigate("/dealersManegment")
      }
        
      toast({
        status: "success",
        position: "top",
        description: "Successful Login",
      });
   
    } catch (error) {
      toast({
        status: "error",
        position: "top",
        description: "Login error please check email and password",
      });
    }
  };
  return (
    <>
      <SubNav componentsName={"Login"} />
      {/* // <!-- Page Title End --> */}

      <div className="listpgWraper">
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
                    onClick={SubmitHandler}
                    className="btn"
                    value="Login"
                  >
                    Login
                  </button>
                </div>
                {/* <!-- login form  end-->  */}

                {/* <!-- sign up form --> */}
                <div className="newuser">
                  <i className="fa fa-user" aria-hidden="true"></i> New User?{" "}
                  <Link to="/signup">
                    <a>Register Here</a>
                  </Link>{" "}
                  |
                  <Link to="/resetpassword">
                    <a> Forgot Password</a>
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

export default SignIn;
