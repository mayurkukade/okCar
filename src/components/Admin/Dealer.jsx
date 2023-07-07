import React, { useEffect, useState } from "react";
import TableM from "./TableM";
import { useGetAllDealerQuery } from "../../api/dealersManegmentApiSlice";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { InfoIcon,EditIcon} from "@chakra-ui/icons";
const Dealer = () => {
  const userToken = localStorage.getItem("userToken");
  const { data: v, error, isLoading } = useGetAllDealerQuery(userToken);
  console.log(v);
  const [vendorFetchData, setVendorFetchData] = useState([]);

// const [deleteDealer]  = useDeleteDealerMutation()
  const data = React.useMemo(() => vendorFetchData, [vendorFetchData]);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "dealer_id",
      },
      {
        Header: "Dealor Name ",
        accessor: "firstName",
      },
      {
        Header: "Location",
        accessor: "area",
      },
      {
        Header: "Phone",
        accessor: "mobileNo",
      },
      {
        Header: "Total Trips",
        accessor: "total_trips",
      },
      {
        Header: "Accept",
        accessor: "status.label",
      },

      {
        Header: "Edit",
        accessor: "Edit",
      
        Cell: (cell) => {
          console.log(cell.row.values.dealer_id)
          return(
          <div>
            <Link to={` ${cell.row.values.dealer_id}`}>
              <Button
                variant="outline"
                colorScheme="blue"
                leftIcon={<InfoIcon />}
                marginRight={"0.2rem"}
                _hover={{ bg: "#2C5282", textColor: "white" }}
              >
                Details
              </Button>
            </Link>

            {/* <Button
                variant="outline"
                colorScheme="teal"
                leftIcon={<EditIcon />}
                _hover={{ bg: "#5DC302" }}
                mr={2}
              >
                Edit
              </Button> */}

            <Link to={`/editDealerdetails/${cell.row.values.dealer_id}`}>
              <Button
                variant="outline"
                colorScheme="teal"
                leftIcon={<EditIcon />}
                _hover={{ bg: "#5DC302" }}
                mr={2}
              >
                Edit
              </Button>
            </Link>

            {/* <Link to={`${cell.row.values.dealer_id}`}>
              <Button
                variant="outline"
                colorScheme="red"
                leftIcon={<DeleteIcon />}
                _hover={{ bg: "#E53E3E", textColor: "white" }}
                onClick={()=>deleteDealer(`${cell.row.values.dealer_id}`)}
              >
                Delete
              </Button>
            </Link> */}
          </div>
          )
        },
      },
    ],
    []
  );
  useEffect(() => {
    const getData = setTimeout(() => {
      setVendorFetchData(v.list);
    }, 100);

    return () => clearTimeout(getData);
  }, [v]);

  return (
    <>
      <TableM
        data={data}
        columns={columns}
        FetchData={vendorFetchData}
        error={error}
        isLoading={isLoading}
      />
    </>
  );
};

export default Dealer;
