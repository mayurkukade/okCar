import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
// import { useState } from "react";
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// import { Link } from "react-router-dom";
// export default function   SignupCard() {
//   const [showPassword, setShowPassword] = useState(false);

import { Link } from "react-router-dom";
import SubNav from "../Navbar/SubNav";

//   return (
//     <Flex
//       minH={"100vh"}
//       align={"center"}
//       justify={"center"}
//       bg={useColorModeValue("gray.50", "gray.800")}
//     >
//       <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
//         <Stack align={"center"}>
//           <Heading fontSize={"4xl"} textAlign={"center"}>
//             Sign up
//           </Heading>
//           <Text fontSize={"lg"} color={"gray.600"}>
//             {/* to enjoy all of our cool features ✌️ */}
//           </Text>
//         </Stack>
//         <Box
//           rounded={"lg"}
//           bg={useColorModeValue("white", "gray.700")}
//           boxShadow={"lg"}
//           p={8}
//         >
//           <Stack spacing={4}>
//             <HStack>
//               <Box>
//                 <FormControl id="firstName" isRequired>
//                   <FormLabel>First Name</FormLabel>
//                   <Input type="text" />
//                 </FormControl>
//               </Box>
//               <Box>
//                 <FormControl id="lastName">
//                   <FormLabel>Last Name</FormLabel>
//                   <Input type="text" />
//                 </FormControl>
//               </Box>
//             </HStack>
//             <FormControl id="email" isRequired>
//               <FormLabel>Email address</FormLabel>
//               <Input type="email" />
//             </FormControl>
//             <FormControl id="password" isRequired>
//               <FormLabel>Password</FormLabel>
//               <InputGroup>
//                 <Input type={showPassword ? "text" : "password"} />
//                 <InputRightElement h={"full"}>
//                   <Button
//                     variant={"ghost"}
//                     onClick={() =>
//                       setShowPassword((showPassword) => !showPassword)
//                     }
//                   >
//                     {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//                   </Button>
//                 </InputRightElement>
//               </InputGroup>
//             </FormControl>
//             <Stack spacing={10} pt={2}>
//               <Button
//                 loadingText="Submitting"
//                 size="lg"
//                 bg={"blue.400"}
//                 color={"white"}
//                 _hover={{
//                   bg: "blue.500",
//                 }}
//               >
//                 Sign up
//               </Button>
//             </Stack>
//             <Stack pt={6}>
//               <Text align={"center"}>
//                 Already a user?{" "}
//                 <Link to="/">
//                   <ChakraLink color="blue.400">Sign In</ChakraLink>
//                 </Link>
//               </Text>
//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }

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
                    <a>Login Here</a>
                  </Link>
                </div>
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
export default SignUp;
