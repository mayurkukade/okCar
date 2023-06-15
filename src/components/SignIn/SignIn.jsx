// import { useState } from "react";
// // import { Link } from "react-router-dom";
// import { useLoginMutation } from "../../api/usersApiSlice";
// import { useDispatch } from "react-redux";
// import { setCredentials } from "../../api/authSlice";
// import { useNavigate } from "react-router-dom";

// export default function SimpleCard() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [signInValue, setsignInValue] = useState({
//     email: "",
//     password: "",
//   });
//   const [login, { useLoading }] = useLoginMutation();
//   const toast = useToast();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const onCHangeHandler = (e) => {
//     const { name, value } = e.target;
//     setsignInValue((preVal) => {
//       return {
//         ...preVal,
//         [name]: value,
//       };
//     });
//   };

//   const SubmitHandler = async (e) => {
//     e.preventDefault();
//     const { email, password } = signInValue;

//     try {
//       const res = await login({ email, password }).unwrap();
//       dispatch(setCredentials({ ...res }));
//       toast({
//         status: "success",
//         position: "top",
//         description: "Successful",
//       });
//       navigate("/adminbuyers");
//     } catch (err) {
//       console.log(err.data.error.message);
//       toast({
//         status: "error",
//         position: "top",
//         description: err.data.error.message,
//       });
//     }
//   };

//   return (
//     // <Flex
//     //   minH={"100vh"}
//     //   align={"center"}
//     //   justify={"center"}
//     //   bg={useColorModeValue("gray.50", "gray.800")}
//     // >
//     //   <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
//     //     <Stack align={"center"}>
//     //       <Heading fontSize={"4xl"}>Sign in to your account</Heading>
//     //       <Text fontSize={"lg"} color={"gray.600"}>
//     //         {/* to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️ */}
//     //       </Text>
//     //     </Stack>
//     //     <Box
//     //       rounded={"lg"}
//     //       bg={useColorModeValue("white", "gray.700")}
//     //       boxShadow={"lg"}
//     //       p={8}
//     //     >
//     //       <Stack spacing={4}>
//     //         <FormControl >
//     //           <FormLabel htmlFor="email">Email address</FormLabel>
//     //           <Input
//     //             type="email"
//     //             onChange={onCHangeHandler}
//     //             value={signInValue.email}
//     //             name="email"
//     //             required='true'
//     //           />

//     //         </FormControl>
//     //         <FormControl id="password" isRequired>
//     //           <FormLabel>Password</FormLabel>
//     //           <InputGroup>
//     //             <Input
//     //               type={showPassword ? "text" : "password"}
//     //               onChange={onCHangeHandler}
//     //               name="password"
//     //               value={signInValue.password}
//     //             />
//     //             <InputRightElement h={"full"}>
//     //               <Button
//     //                 variant={"ghost"}
//     //                 onClick={() =>
//     //                   setShowPassword((showPassword) => !showPassword)
//     //                 }
//     //               >
//     //                 {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//     //               </Button>
//     //             </InputRightElement>
//     //           </InputGroup>
//     //         </FormControl>
//     //         <Stack spacing={10}>
//     //           <Stack
//     //             direction={{ base: "column", sm: "row" }}
//     //             align={"start"}
//     //             justify={"space-between"}
//     //           >
//     //             <Checkbox>Remember me</Checkbox>
//     //             <Link to="/forgotpassword ">
//     //               <ChakraLink color="blue.400">Forgot password?</ChakraLink>
//     //             </Link>
//     //           </Stack>
//     //           <Button
//     //             bg={"blue.400"}
//     //             color={"white"}
//     //             _hover={{
//     //               bg: "blue.500",
//     //             }}
//     //             onClick={SubmitHandler}
//     //           >
//     //             Sign in
//     //           </Button>
//     //         </Stack>
//     //       </Stack>
//     //     </Box>
//     //   </Stack>
//     // </Flex>
//     <>
//       {/* // <!-- Page Title start --> */}
//       <div classNameName="pageTitle">
//         <div classNameName="container">
//           <div className="row">
//             <div className="col-md-6 col-sm-6">
//               <h1 className="page-heading">Login</h1>
//             </div>
//             <div className="col-md-6 col-sm-6">
//               <div className="breadCrumb">
//                 <a href="#">Home</a> / <span>Login</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* // <!-- Page Title End --> */}

//       <div className="listpgWraper">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6 col-md-offset-3">
//               <div className="userccount">
//                 <h5>User Login</h5>
//                 {/* <!-- login form --> */}
//                 <div className="formpanel">
//                   <div className="formrow">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Username"
//                     />
//                   </div>
//                   <div className="formrow">
//                     <input
//                       type="text"
//                       className="form-control"
//                       placeholder="Password"
//                     />
//                   </div>
//                   <input type="submit" className="btn" value="Login" />
//                 </div>
//                 {/* <!-- login form  end-->  */}

//                 {/* <!-- sign up form --> */}
//                 <div className="newuser">
//                   <i className="fa fa-user" aria-hidden="true"></i> New User?{" "}
//                   <a href="#.">Register Here</a>
//                 </div>
//                 {/* <!-- sign up form end--> */}

//                 <div className="socialLogin">
//                   <h5>Login Or Register with Social</h5>
//                   <a href="#." className="fb">
//                     <i className="fa fa-facebook" aria-hidden="true"></i>
//                   </a>{" "}
//                   <a href="#." className="gp">
//                     <i className="fa fa-google-plus" aria-hidden="true"></i>
//                   </a>{" "}
//                   <a href="#." className="tw">
//                     <i className="fa fa-twitter" aria-hidden="true"></i>
//                   </a>{" "}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { Link } from "react-router-dom";
import SubNav from "../Navbar/SubNav.jsx";
const SignIn = () => {
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
                      type="text"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                  <div className="formrow">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <input type="submit" className="btn" value="Login" />
                </div>
                {/* <!-- login form  end-->  */}

                {/* <!-- sign up form --> */}
                <div className="newuser">
                  <i className="fa fa-user" aria-hidden="true"></i> New User?{" "}
                  <Link to="/signup">
                    <a href="#.">Register Here</a>
                  </Link>
                </div>
                {/* <!-- sign up form end--> */}

                {/* <div className="socialLogin">
                  <h5>Login Or Register with Social</h5>
                  <a href="#." className="fb">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>{" "}
                  <a href="#." className="gp">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </a>{" "}
                  <a href="#." className="tw">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>{" "}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
