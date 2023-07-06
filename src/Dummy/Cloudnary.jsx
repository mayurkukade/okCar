// import { useState } from "react";

// const Cloudnary = () => {
//   const [images, setImages] = useState([]);
//   const submitImages = async () => {
//     try {
//       const formData = new FormData();
//       for (let i = 0; i < images.length; i++) {
//         formData.append("file", images[i]);
//       }
//       formData.append("upload_preset", "carokupload");
//       formData.append("cloud_name", "delygdkh2");
//       const response = await fetch(
//         "https://api.cloudinary.com/v1_1/delygdkh2/image/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleImageChange = (e) => {
//     const files = e.target.files;
//     const imageArray = Array.from(files);
//     setImages(imageArray);
//   };

//   return (
//     <div>
//       <input type="file" multiple onChange={handleImageChange} />
//       <button onClick={submitImages}>Upload</button>
//     </div>
//   );
// };

// export default Cloudnary;

import { Link } from "react-router-dom";

import SubNav from "../Navbar/SubNav";

import { useState } from "react";

import { useRegisterMutation } from "../../api/usersApiSlice";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { useEffect } from "react";

import { useToast } from "@chakra-ui/react";

const SignUp = () => {
  const toast = useToast();

  const navigate = useNavigate();

  const [inputField, setInputField] = useState({
    password: "",

    mobileNo: "",

    roles: "USER",

    firstName: "",

    lastName: "",

    city: "",

    address: "",

    confirmPassword: "",

    email: "",
  });

  const dispatch = useDispatch();

  const [register] = useRegisterMutation();

  const onChangeFormhandler = (e) => {
    const { name, value } = e.target;

    setInputField((preVal) => {
      return {
        ...preVal,

        [name]: value,
      };
    });
  };

  // email valiation Regex

  const validateEmail = (email) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    return emailRegex.test(email);
  };

  //submit handler

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (inputField.confirmPassword === inputField.password) {
      if (validateEmail(inputField.email)) {
        try {
          const res = await register({
            password: inputField.password,

            mobileNo: inputField.mobileNo,

            roles: inputField.roles,

            firstName: inputField.firstName,

            lastName: inputField.lastName,

            city: inputField.city,

            address: inputField.address,

            email: inputField.email,

            confirmPassword: inputField.confirmPassword,
          }).unwrap();

          toast({
            status: "success",

            position: "top",

            description: "Successful Register User",
          });

          navigate("/signin");
        } catch (error) {
          toast({
            status: "error",

            position: "top",

            description: "User not registered",
          });

          console.log(error);
        }
      } else {
        toast({
          status: "error",
          position: "top",
          description: "Invalid Email. Please check your email address",
        });
      }
    } else {
      toast({
        status: "error",
        position: "top",
        description: "Password and Confirm Password fields should be the same",
      });
    }
  };

  return (
    <>
      <SubNav componentsName={"Register"} />

      <div className="listpgWraper">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="userccount">
                <form onSubmit={onSubmitHandler}>
                  <div className="userbtns">
                    <h2>User Register</h2>
                  </div>

                  <div className="tab-content">
                    <div
                      id="wsell"
                      className="formpanel tab-pane fade in active"
                    >
                      <div className="formrow">
                        <input
                          type="text"
                          name="firstName"
                          className="form-control"
                          placeholder="First Name"
                          value={inputField.firstName}
                          onChange={onChangeFormhandler}
                          required
                        />
                      </div>

                      <div className="formrow">
                        <input
                          type="text"
                          name="lastName"
                          className="form-control"
                          placeholder="Last Name"
                          onChange={onChangeFormhandler}
                          value={inputField.lastName}
                          required
                        />
                      </div>

                      <div className="formrow">
                        <input
                          type="text"
                          name="mobileNo"
                          className="form-control"
                          placeholder="Phone Number"
                          onChange={onChangeFormhandler}
                          value={inputField.mobileNo}
                          required
                        />
                      </div>

                      <div className="formrow">
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          onChange={onChangeFormhandler}
                          value={inputField.email}
                          required
                        />
                      </div>

                      <div className="formrow">
                        <input
                          type="text"
                          name="address"
                          className="form-control"
                          placeholder="Address"
                          onChange={onChangeFormhandler}
                          value={inputField.address}
                          required
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
                          required
                        />
                      </div>

                      <div className="formrow">
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Password"
                          onChange={onChangeFormhandler}
                          value={inputField.password}
                          required
                        />
                      </div>

                      <div className="formrow">
                        <input
                          type="password"
                          name="confirmPassword"
                          className="form-control"
                          placeholder="Confirm Password"
                          onChange={onChangeFormhandler}
                          value={inputField.confirmPassword}
                          required
                        />
                      </div>

                      <div className="formrow">
                        <input
                          type="checkbox"
                          value="agree text"
                          name="agree"
                          style={{ marginRight: "10px" }}
                          required
                        />
                        Terms and Condition
                      </div>

                      {/* {error && <p>{error}</p>} */}

                      <button type="submit" className="btn" value="Register">
                        Register
                      </button>
                    </div>
                  </div>

                  <div className="newuser">
                    <i className="fa fa-user" aria-hidden="true"></i> Already a
                    Member?
                    <Link to="/signin">
                      <span>Login Here</span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cloudnary;

// import { Link } from "react-router-dom";

// import SubNav from "../Navbar/SubNav";

// import { useState } from "react";

// import { useRegisterMutation } from "../../api/usersApiSlice";

// import { useNavigate } from "react-router-dom";

// import { useDispatch } from "react-redux";

// import { useEffect } from "react";

// import { useToast } from "@chakra-ui/react";

// const SignUp = () => {
//   const toast = useToast();

//   const navigate = useNavigate();

//   const [inputField, setInputField] = useState({
//     password: "",

//     mobileNo: "",

//     roles: "USER",

//     firstName: "",

//     lastName: "",

//     city: "",

//     address: "",

//     confirmPassword: "",

//     email: "",
//   });

//   const dispatch = useDispatch();

//   const [register] = useRegisterMutation();

//   const onChangeFormhandler = (e) => {
//     const { name, value } = e.target;

//     setInputField((preVal) => {
//       return {
//         ...preVal,

//         [name]: value,
//       };
//     });
//   };

//   // email valiation Regex

//   const validateEmail = (email) => {
//     const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

//     return emailRegex.test(email);
//   };

//   //submit handler

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     if (inputField.confirmPassword === inputField.password) {
//       if (validateEmail(inputField.email)) {
//         try {
//           const res = await register({
//             password: inputField.password,

//             mobileNo: inputField.mobileNo,

//             roles: inputField.roles,

//             firstName: inputField.firstName,

//             lastName: inputField.lastName,

//             city: inputField.city,

//             address: inputField.address,

//             email: inputField.email,

//             confirmPassword: inputField.confirmPassword,
//           }).unwrap();

//           toast({
//             status: "success",

//             position: "top",

//             description: "Successful Register User",
//           });

//           navigate("/signin");
//         } catch (error) {
//           toast({
//             status: "error",

//             position: "top",

//             description: "User not registered",
//           });

//           console.log(error);
//         }
//       } else {
//         toast({
//           status: "error",

//           position: "top",

//           description: "Invalid Email. Please check your email address",
//         });
//       }
//     } else {
//       toast({
//         status: "error",

//         position: "top",

//         description: "Password and Confirm Password fields should be the same",
//       });
//     }
//   };

//   return (
//     <>
//       <SubNav componentsName={"Register"} />
//       <div className="listpgWraper">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6 col-md-offset-3">
//               <div className="userccount">
//                 <form onSubmit={onSubmitHandler}>
//                   <div className="userbtns">
//                     <h2>User Register</h2>
//                   </div>

//                   <div className="tab-content">
//                     <div
//                       id="wsell"
//                       className="formpanel tab-pane fade in active"
//                     >
//                       <div className="formrow">
//                         <input
//                           type="text"
//                           name="firstName"
//                           className="form-control"
//                           placeholder="First Name"
//                           value={inputField.firstName}
//                           onChange={onChangeFormhandler}
//                           required
//                         />
//                       </div>

//                       <div className="formrow">
//                         <input
//                           type="text"
//                           name="lastName"
//                           className="form-control"
//                           placeholder="Last Name"
//                           onChange={onChangeFormhandler}
//                           value={inputField.lastName}
//                           required
//                         />
//                       </div>

//                       <div className="formrow">
//                         <input
//                           type="text"
//                           name="mobileNo"
//                           className="form-control"
//                           placeholder="Phone Number"
//                           onChange={onChangeFormhandler}
//                           value={inputField.mobileNo}
//                           required
//                         />
//                       </div>

//                       <div className="formrow">
//                         <input
//                           type="text"
//                           name="email"
//                           className="form-control"
//                           placeholder="Email"
//                           onChange={onChangeFormhandler}
//                           value={inputField.email}
//                           required
//                         />
//                       </div>

//                       <div className="formrow">
//                         <input
//                           type="text"
//                           name="address"
//                           className="form-control"
//                           placeholder="Address"
//                           onChange={onChangeFormhandler}
//                           value={inputField.address}
//                           required
//                         />
//                       </div>

//                       <div className="formrow">
//                         <input
//                           type="text"
//                           name="city"
//                           className="form-control"
//                           placeholder="City"
//                           onChange={onChangeFormhandler}
//                           value={inputField.city}
//                           required
//                         />
//                       </div>

//                       <div className="formrow">
//                         <input
//                           type="password"
//                           name="password"
//                           className="form-control"
//                           placeholder="Password"
//                           onChange={onChangeFormhandler}
//                           value={inputField.password}
//                           required
//                         />
//                       </div>

//                       <div className="formrow">
//                         <input
//                           type="password"
//                           name="confirmPassword"
//                           className="form-control"
//                           placeholder="Confirm Password"
//                           onChange={onChangeFormhandler}
//                           value={inputField.confirmPassword}
//                           required
//                         />
//                       </div>

//                       <div className="formrow">
//                         <input
//                           type="checkbox"
//                           value="agree text"
//                           name="agree"
//                           style={{ marginRight: "10px" }}
//                           required
//                         />
//                         Terms and Condition
//                       </div>

//                       {/* {error && <p>{error}</p>} */}

//                       <button type="submit" className="btn" value="Register">
//                         Register
//                       </button>
//                     </div>
//                   </div>

//                   <div className="newuser">
//                     <i className="fa fa-user" aria-hidden="true"></i> Already a
//                     Member?
//                     <Link to="/signin">
//                       <span>Login Here</span>
//                     </Link>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;
