import React from "react";
// import { dealerdetails } from "../../json/dealerdetails.json";
import TableM from "./TableM";
// import "./Dealerdetails.css";
import { Flex } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
  useGetDealerCarsDealerManegmentPageQuery,
  useGetDealerQuery,
} from "../../api/dealersManegmentApiSlice";
import {
  // Heading,
   Avatar,
  Box,
  Center,
  Image,
  // Flex,
  // Text,
  Stack,
   Button,
  useColorModeValue,
}from '@chakra-ui/react';

import { useState } from "react";
import { useEffect } from "react";
const DealerDetails = () => {
  const [dealerData, setDealerData] = useState([]);
  let { id } = useParams();
  console.log(id);

  const { data: dealerID } = useGetDealerQuery({ id });
  const {
    data: dealerCars,
    isError,
    isLoading,
  } = useGetDealerCarsDealerManegmentPageQuery({ id });
  const [carData, setCarData] = useState([]);
  console.log(carData)
  console.log(dealerCars?.list);
  console.log(dealerID, "dealer");
  console.log(dealerID);
  console.log(dealerData);
  useEffect(() => {
    setDealerData(dealerID?.dealerDto);
  }, [dealerID]);
  console.log(dealerData);
  const data = React.useMemo(() => carData, [carData]);
  const columns = React.useMemo(
    () => [
      {
        Header: "CarId",
        accessor: "carId",
      },
      {
        Header: "Brand",
        accessor: "brand",
      },
      {
        Header: "Model",
        accessor: "model",
      },
      {
        Header: "Fuel Type",
        accessor: "fuelType",
      },
      {
        Header: "Transmission",
        accessor: "transmission",
      },
      {
        Header: "Reg.No.",
        accessor: "registration",
      },
      {
        Header: "Area",
        accessor: "area",
      },

      {
        Header: "Owner Serial",
        accessor: "ownerSerial",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Price",
        accessor: "price",
      },
    ],
    []
  );
 
  
  useEffect(() => {
    const getData = setTimeout(() => {
      setCarData(dealerCars?.list);
    }, 100);

    

    return () => clearTimeout(getData);
  }, [dealerCars]);



  

  return (
    <>
  


<Box py={6} textAlign="left" marginLeft="20px" marginRight="20px"> {/* Set the text alignment to "left" and add side margins */}

  <Flex
  maxW={['100%', '380px']}
    w={'full'}
    bg={useColorModeValue('white', 'gray.800')}
    boxShadow={'2xl'}
    rounded={'md'}
    overflow={'hidden'}
    whileHover={{
      scale: 1.02,
     
    }}
    flexDirection={['column', 'row']}
   
  
  >
    {/* Full-size Image */}
    <Image
      h={'auto'}
        w={['100%', '40%']} // Set the width to 50% to make it occupy the left half of the card
    //  w={getNameWidth}
      src={'../../../images/cards/cardimg.jpg'
      }
      objectFit={'cover'}
    />
    
    {/* Details */}
    <Box p={6} 
     w={'auto'}>
       {/* w={getNameWidth() === '100%' ? '100%' : '30%'}> 
      {/* Set the width to 50% to make it occupy the right half of the card */} 
      
      <Stack spacing={0} align={'center'} mb={7}>
      <Text color={'gray.500'}>Dealer Name</Text>

        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
          {dealerData.firstName} {dealerData.lastName}
        </Heading>
      </Stack>

      <Stack direction={'row'} justify={'center'} spacing={6}>
        <Stack spacing={0} align={'center'}>
          <Text fontWeight={600}> {dealerData.dealer_id}</Text> 
          <Text fontSize={'sm'} color={'gray.500'}>
          Dealer ID
          </Text>
        </Stack>
        <Stack spacing={0} align={'center'}>
          <Text fontWeight={600}>23k</Text>
          <Text fontSize={'sm'} color={'gray.500'}>
            Total Cars
          </Text>
        </Stack>
      </Stack>
    </Box>
  </Flex>
  </Box>
 
{/* </Center> */}




      <TableM
        data={data}
        columns={columns}
        FetchData={carData}
        error={isError}
        isLoading={isLoading}
      />
    </>
  );
};

export default DealerDetails;
