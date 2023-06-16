/* eslint-disable react/prop-types */
import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import "./Card.css";

const DriverCard = ({
  DealerID,
  DealerName,
  Location,
  PhoneNo,
  TotalCars,
  TotalDeals
}) => {
  return (
    <Box className="cardContainer">
      <Center py={6}>
        <Box
          // maxW={"350px"}
          w={"full"}
          width={"310px"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                Dealers Details
              </Heading>
            </Stack>

            <Box direction={"row"} justify={"center"} spacing={6}>
              <Text color={"gray.500"}>Dealer ID : {DealerID}</Text>
              <Text color={"gray.500"}>Dealer&apos;s Name :{DealerName} </Text>
              <Text color={"gray.500"}>Location : {Location}</Text>
              <Text color={"gray.500"}>Phone No :{PhoneNo}</Text>
              <Text color={"gray.500"}>Total Cars :{TotalCars} </Text>
              <Text color={"gray.500"}>Total Deals :{TotalDeals} </Text>
            </Box>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default DriverCard;
