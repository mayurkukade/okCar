import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Avatar,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { logout } from "../../api/authSlice";
const AvtarModal = () => {
  const username = localStorage.getItem("userInfo");
  console.log(username);
  console.log(JSON.parse(username)?.firstname);
  // console.log(JSON.parse(username)?.authorities[0]);
  const token = Cookies.get('cookie')
  console.log(token)
const decoded = jwt_decode(token)
console.log(decoded.roles.includes('ADMIN'))
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      dispatch(logout());
      navigate("/signin");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box className="card">
      <Avatar size={'sm'} marginRight={'0.3rem'} marginTop={'0.1rem'} name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <Menu bg="white">
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
         marginTop={'0.2rem'}
          size={'sm'}
        >
          {decoded.roles.includes('ADMIN')
            ? "Admin"
            : JSON.parse(username)?.firstname }
     
        </MenuButton>
        <MenuList >
          
        
            <Link to="/edituserdetails" style={{textDecoration:"none"}}> <MenuItem color={"black"}  _hover={{ bg: '#5DC302' }}> <span>Edit Profile  </span></MenuItem></Link>
           {
            decoded.roles.includes('USER')?
            <Link to="#" style={{textDecoration:"none"}}>  <MenuItem    _hover={{ bg: '#5DC302' }}  color={"black"}>  <span>My Booking  </span></MenuItem></Link>:null
           }
           
        
          <MenuItem style={{textDecoration:"none"}} _hover={{ bg: '#5DC302' }}    onClick={logoutHandler}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default AvtarModal;
