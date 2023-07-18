import React, { useEffect, useState } from "react";
import TableM from "./TableM";
import { useGetAllDealerQuery } from "../../api/dealersManegmentApiSlice";
import { Link, useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { InfoIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useDeleteDealerMutation } from "../../api/dealersManegmentApiSlice";
// import TableCard from "../TableCard/TableCard";
const Dealer = () => {
  const { id } = useParams();
  const [currentPage,setCurrentPage] = useState(1)
  console.log(id);
  const { data: v, isLoading, isError } = useGetAllDealerQuery(currentPage);
  console.log(v);
  const [vendorFetchData, setVendorFetchData] = useState([]);
  // const [catchUserId,setCatchUserId] = useState()

  const [deleteDealer] = useDeleteDealerMutation();
  const data = React.useMemo(() => vendorFetchData, [vendorFetchData]);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "dealer_id",
      },
      {
        Header: "First Name",
        accessor: "firstName",
      },

      {
        Header: "Last Name ",
        accessor: "lastName",
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
        Header: "user id",
        accessor: "userId",
        disableSortBy: true,
      },

      {
        Header: "Edit",
        accessor: "Edit",

        Cell: (cell) => {
          console.log(cell.row.values.dealer_id);
          return (
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

              <Link
                to={`/editDealerdetails/${cell.row.values.userId}/${cell.row.values.dealer_id}`}
              >
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

              <Button
                variant="outline"
                colorScheme="red"
                leftIcon={<DeleteIcon />}
                _hover={{ bg: "#E53E3E", textColor: "white" }}
                onClick={() => deleteDealer(`${cell.row.values.dealer_id}`)}
              >
                Delete
              </Button>
            </div>
          );
        },
      },
    ],
    []
  );

  const goToPreviousPage = ()=>{
    setCurrentPage((prevPage)=>prevPage - 1)
  }

  const goToNextPage = ()=>{
    setCurrentPage((prevPage)=> prevPage + 1)
  }
  useEffect(() => {
    const getData = setTimeout(() => {
      if (v && v.list) {
        setVendorFetchData(v.list);
      }
    }, 100);
  
    return () => clearTimeout(getData);
  }, [v]);

  return (
    <>
      <TableM
        data={data}
        columns={columns}
        FetchData={vendorFetchData}
        error={isError}
        isLoading={isLoading}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
    </>
  );
};

export default Dealer;
