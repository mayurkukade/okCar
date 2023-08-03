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
const MyCarBooking = () => {
  return (
    <div className="mycarbooking_container">
      <div className="calender-container">
        <input type="date" />
        <input type="date" />
      </div>
      <div className="booking_container">
        <TableContainer>
          <Table variant="simple">
           
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Car Id</Th>
                <Th>Car Actual Price</Th>
                <Th>Car Asking Price</Th>
                <Th>Car Details</Th>
                <Th>status</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>5/2/2021</Td>
                <Td>1254</Td>
                <Td>5,00,000</Td>
                <Td>4,80,000</Td>
                <Td>
                  <Button>Car Details</Button>
                </Td>
                <Td>pending</Td>
              </Tr>
              <Tr>
                <Td>5/2/2021</Td>
                <Td>1254</Td>
                <Td>5,00,000</Td>
                <Td>4,80,000</Td>
                <Td>
                  <Button>Car Details</Button>
                </Td>
                <Td>pending</Td>
              </Tr>
              <Tr>
                <Td>5/2/2021</Td>
                <Td>1254</Td>
                <Td>5,00,000</Td>
                <Td>4,80,000</Td>
                <Td>
                  <Button>Car Details</Button>
                </Td>
                <Td>Accepted</Td>
              </Tr>
            
            
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default MyCarBooking;
