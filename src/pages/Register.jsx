import { useState } from "react";
import { Button, Flex, Icon } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import "./register.scss";
import { Link } from "react-router-dom";
import HomeImag from "../components/homeimage/HomeImg";
import { BiMailSend, BiUserPin } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoAccessibilityOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
const Register = () => {
  const [registerValue, setRegisterValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    role:"",
    phone_no:""
  });
const navigate = useNavigate()
  const [errors, setErrors] = useState({});

  const registerHandler = (e) => {
    const { name, value } = e.target;
    setRegisterValue((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validation logic for each field
    if (registerValue.first_name.trim() === "") {
      newErrors.firstname = "First Name is required";
      isValid = false;
    }

    if (registerValue.last_name.trim() === "") {
      newErrors.lastname = "Last Name is required";
      isValid = false;
    }

    if (registerValue.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (registerValue.password.trim() === "") {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (registerValue.confirm_password.trim() === "") {
      newErrors.repassword = "Re-Password is required";
      isValid = false;
    }
   

    if (registerValue.role.trim() === "") {
      newErrors.role = "Role is required";
      isValid = false;
    }


    setErrors(newErrors);
    return isValid;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(registerValue);
 
    
    
    if (validateForm()) {
      console.log(registerValue);
      // Perform form submission logic here
    }
    navigate('/')
  };

  return (
    <div className="app_register" >
      <HomeImag  />
      <div className="app_register_form" >
        <div className="app_register_form2">
          <h1 style={{ fontWeight: "700" }}>Sign Up</h1>
          <p>Create an account to start car booking</p>
          <FormControl>
            <form>
              <Flex>
                <Icon as={BiUserPin} fontSize="25px"></Icon>
                <FormLabel>First Name</FormLabel>
              </Flex>
              <Input
                type="text"
                id="first_name"
                className="form-control"
                style={{ border: "1px solid black " }}
                name="first_name"
                value={registerValue.first_name}
                onChange={registerHandler}
                placeholder="First Name"
              />
              {errors.firstname && (
                <span style={{fontSize:'15px', color:'red'}}>
                  {errors.firstname}
                </span>
              )}
              <Flex paddingTop={"10px"}>
                <Icon as={BiUserPin} fontSize="25px"></Icon>
                <FormLabel>Last Name</FormLabel>
              </Flex>
              <Input
                type="text"
                id="last_name"
                className="form-control"
                style={{ border: "1px solid black " }}
                name="last_name"
                value={registerValue.last_name}
                onChange={registerHandler}
                placeholder="Last Name"
              />
              {errors.firstname && (
                <span style={{fontSize:'15px', color:'red'}}>
                  {errors.lastname}
                </span>
              )}
              <Flex paddingTop={"10px"}>
                <Icon as={BiMailSend} fontSize="25px"></Icon>
                <FormLabel>Email</FormLabel>
              </Flex>
              <Input
                type="email"
                id="email"
                className="form-control"
                style={{ border: "1px solid black " }}
                name="email"
                value={registerValue.email}
                onChange={registerHandler}
                placeholder="Email"
              />
              {
                errors.email && (
                  <span style={{fontSize:'15px', color:'red'}}>
                    {errors.email}
                  </span>
                )
              }
                 <Flex paddingTop={"10px"}>
                <Icon as={BiMailSend} fontSize="25px"></Icon>
                <FormLabel>Phone No</FormLabel>
              </Flex>
              <Input
                type="number"
                id="phone_no"
                className="form-control"
                style={{ border: "1px solid black " }}
                name="phone_no"
                value={registerValue.phone_no}
                onChange={registerHandler}
                placeholder="Email"
              />
              <Flex paddingTop={"10px"}>
                <Icon as={RiLockPasswordLine} fontSize="25px"></Icon>
                <FormLabel>Password</FormLabel>
              </Flex>
              <Input
                type="password"
                id="password"
                autoCapitalize="on"
                className="form-control"
                style={{ border: "1px solid black " }}  
                name="password"
                value={registerValue.password}
                onChange={registerHandler}
                placeholder="Password"
              />
              {errors.password && (
                <span style={{fontSize:'15px', color:'red'}}>
                  {errors.password}
                </span>
              )}
              <Flex paddingTop={"10px"}>
                <Icon as={RiLockPasswordLine} fontSize="25px"></Icon>
                <FormLabel>Re-enter password</FormLabel>
              </Flex>
              <Input
                type="current-password"
                className="form-control"
                style={{ border: "1px solid black " }}
                name="confirm_password"
                id="confirm_password"
                value={registerValue.confirm_password}
                onChange={registerHandler}
                autoCapitalize="on"
                placeholder="Re-enter Password"
              />
              {
                errors.repassword && (
                  <span style={{fontSize:'15px', color:'red'}}>
                  {errors.repassword}
                </span>
                )
              }

              <Flex paddingTop={"10px"}>
                <Icon as={IoAccessibilityOutline} fontSize="25px"></Icon>
                <FormLabel>Select your role</FormLabel>
              </Flex>
              <Select
                placeholder="Select option"
                style={{ border: "1px solid black" }}
                name="role"
                value={registerValue.role}
                onChange={registerHandler}
              >
                <option value="user">User</option>
                <option value="vendor">Vendor</option>
                <option value="driver">Driver</option>
              </Select>
              {
                errors.role &&(
                  <span style={{fontSize:'15px', color:'red'}}>
                    {errors.role}
                  </span>
                )
              }
            </form>
          </FormControl>
          <div className="button">
            <Button type="submit" colorScheme="blue" onClick={submitHandler}>
              Submit
            </Button>
          </div>
          <p>
            Sign up already? please
            <span style={{ fontWeight: "600" }}>
              <Link to="/"> Sign in</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
