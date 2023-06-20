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

const AvtarModal = () => {
  const username = localStorage.getItem("userInfo");
   console.log(JSON.parse(username).results)
  return (
    <Box className="card">
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <Menu bg="white">
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {JSON.parse(username).results.user[0].username}
        </MenuButton>
        <MenuList>
          <MenuItem>History</MenuItem>
          <MenuItem>FAQ Managment</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Payment</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default AvtarModal;
