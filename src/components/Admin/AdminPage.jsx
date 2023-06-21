/* eslint-disable react-hooks/exhaustive-deps */
import { Tabs, TabList, TabPanels, Tab } from "@chakra-ui/react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  Box,
} from "@chakra-ui/react";
import { FocusLock } from "@chakra-ui/react";
import "./adminpage.css";
import AvtarModal from "../Navbar/AvtarModal";
import { Button } from "@chakra-ui/react";
import FormAddDriver from "../AdminRequest/FormAddDriver";
const AdminPage = () => {
  const navigate = useNavigate();
  const { onClose } = useDisclosure();
  const firstFieldRef = React.useRef(null);

  useEffect(() => {
    navigate("/dealersmanegment");
  }, []);
  return (
    <>
      <div className="Container">
        <div className="tableContainer" style={{ border: "2px solid black" }}>
          <Tabs isFitted>
            <TabList>
              <Link
                to={"/dealersmanegment"}
                spacing={8}
                style={{ width: "550px" }}
              >
                <Tab fontSize={"20px"}>
                  <span>Dealer Management</span>{" "}
                </Tab>
              </Link>
              <Link to={"/userrequest"} style={{ width: "550px" }}>
                <Tab fontSize={"20px"}>
                  {" "}
                  <span>User Request</span>{" "}
                </Tab>
              </Link>

              <Box fontSize={"20px"} style={{ width: "550px" }}>
                <Popover placement="bottom">
                  <PopoverTrigger>
                    <Button colorScheme="messenger">Add Dealer</Button>
                  </PopoverTrigger>
                  <PopoverContent p={3} w={"100"}>
                    <FocusLock returnFocus persistentFocus={false}>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <FormAddDriver
                        firstFieldRef={firstFieldRef}
                        onCancel={onClose}
                      />
                    </FocusLock>
                  </PopoverContent>
                </Popover>
              </Box>

              <Box>
                <AvtarModal />
              </Box>
            </TabList>

            <TabPanels>
              <Outlet />
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
