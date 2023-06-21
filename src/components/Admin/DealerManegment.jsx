import React from "react";
import { dealersManegment } from "../../json/dealersManegment.json";
import TableModel from "../tableModel/TableModel";
import { Button } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const DealerManegment = () => {
  const data = React.useMemo(() => dealersManegment, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Dealer Name",
        accessor: "DealerName",
      },
      {
        Header: "Dealer ID",
        accessor: "DealerID",
      },
      {
        Header: "Location",
        accessor: "Location",
      },
      {
        Header: "Contact No",
        accessor: "ContactNo",
      },
      {
        Header: "Total Cars",
        accessor: "TotalCars",
      },
      {
        Header: "Edit",
        accessor: "Edit",
        Cell: (cell) => (
          
          <div >
            <Link to={`${cell.value}`}>
            <Button
              variant="outline"
              colorScheme="blue"
              leftIcon={<EditIcon />}
              marginRight={'0.2rem'}
              _hover={{ bg: "#2C5282",textColor:"white" }}
            >
              Details
            </Button>
            </Link>

            <Link to={`${cell.value}`}>
            <Button
              variant="outline"
              colorScheme="purple"
              marginRight={'0.2rem'}
              leftIcon={<EditIcon />}
              _hover={{ bg: "#6B46C1",textColor:"white" }}
            >
              Edit 
            </Button>
            </Link>

            <Link to={`${cell.value}`}>
            <Button
              variant="outline"
              colorScheme="red"
              leftIcon={<EditIcon />}
              _hover={{ bg: "#E53E3E",textColor:"white" }}
            >
              Delete
            </Button>
            </Link>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <>
      <TableModel data={data} columns={columns} />
    </>
  );
};

export default DealerManegment;
