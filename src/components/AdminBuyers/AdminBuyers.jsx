import { buyers } from "../../json/buyers.json";
import React, { useState } from "react";
import TableModel from "../tableModel/TableModel";
import { Button } from "@chakra-ui/react";

const AdminBuyers = () => {
  const [toggle, setToggle] = useState(true)

console.log(toggle)
  

  const AcceptButton = (
    <Button colorScheme="transparent" color="blue" onClick={()=>setToggle(!toggle)}>
      Accept
    </Button>
  );

  const RejectButton = (
    <Button colorScheme="transparent" color="red">
      Reject
    </Button>
  );

  
  const data = React.useMemo(() => buyers, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Dealer ID",
        accessor: "customerName",
      },
      {
        Header: "Make/Model",
        accessor: "MakeModel",
      },
      {
        Header: "Year",
        accessor: "Year",
      },
      {
        Header: "Dealer",
        accessor: "Dealer",
      },
      {
        Header: "Amount",
        accessor: "Amount",
      },
      {
        Header: "Status",
        accessor: "Status",
      },
      {
        Header: "Value Offered",
        accessor: "ValueOffered",
      },
      {
        Header: "Accept/Rejected",
        accessor: "AcceptRejected",
        
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

export default AdminBuyers;
