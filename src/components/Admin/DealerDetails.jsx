import React from "react";
import { dealerdetails } from "../../json/dealerdetails.json";
import TableModel from "../tableModel/TableModel";
import "./dealerdetails.css";
import { Flex } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
const DealerDetails = () => {
  const data = React.useMemo(() => dealerdetails, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Car Brand",
        accessor: "CarBrand",
      },
      {
        Header: "Model",
        accessor: "Model",
      },
      {
        Header: "Body Type",
        accessor: "BodyType",
      },
      {
        Header: "CarId",
        accessor: "CarId",
      },
      {
        Header: "Location",
        accessor: "Location",
      },
      {
        Header: "Km Driven",
        accessor: "KmDriven",
      },
      {
        Header: "Year",
        accessor: "Year",
      },
    ],
    []
  );
  return (
    <>
      <div className="containerCard">
        <div className="card-img">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="card-details"
          />
        </div>
        <div className="card-title">
          <Text>
            <Flex>
              <Heading size="md">{dealerdetails[0].DealerName}</Heading>
            </Flex>

            <p>Dealer ID</p>
            <h5>{dealerdetails[0].DealerID}</h5>

            <p>Total Cars</p>
            <h5>{dealerdetails[0].TotalCars}</h5>
          </Text>
        </div>
      </div>

      <TableModel data={data} columns={columns} />
    </>
  );
};

export default DealerDetails;
