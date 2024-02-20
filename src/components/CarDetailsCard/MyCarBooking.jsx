import "./mycarbooking.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useMobileBookingPendingQuery } from "../../api/bookingSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const MyCarBooking = () => {
  const {
    data: fetchMobilePendingBooking,
    isLoading,
    isError,
  } = useMobileBookingPendingQuery(1151,0);
  console.log(fetchMobilePendingBooking);
  const fetchData = fetchMobilePendingBooking?.list;

  console.log(fetchData);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>Error</p>;
  } else if (fetchMobilePendingBooking) {
    content = (
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Car Id</Th>
              <Th>Car Actual Price</Th>

              <Th>Car Details</Th>
              <Th>status</Th>
            </Tr>
          </Thead>

          {fetchData.map((car) => (
            <Tr key={car.carId}>
              <Td>{car.date}</Td>
              <Td>{car.carId}</Td>
              <Td>{car.price}</Td>
              <Link to={`/dealer/carDetails/${car.carId}`}>
                <Td>
                  <Button>Car Details</Button>
                </Td>
              </Link>
              <Td>{car.status}</Td>
            </Tr>
          ))}
        </Table>
      </TableContainer>
    );
  }

  return (
    <div className="mycarbooking_container">
      <div className="calender-container">
        <input type="date" />
        <input type="date" />
      </div>
      <div className="booking_container">{content}</div>
    </div>
  );
};

export default MyCarBooking;
