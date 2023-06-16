import { buyers } from "../../json/buyers.json";
import React from "react";
import TableModel from "../tableModel/TableModel";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

const AdminBuyers = () => {
  const [isActive, setIsActive] = useState("");
  const [button, setButton] = useState(false);

  const handleAccept = () => {
    setButton(true);
    console.log("Accept");
  };
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
        Cell: ({ value }) => (
          <div>
            <Button
              colorScheme="transparent"
              color="blue"
              onClick={() => {
                setIsActive("Accept");
                handleAccept;
              }}
            >
              Accept
            </Button>
            |
            <Button
              colorScheme="transparent"
              color="red"
              onClick={() => {
                setIsActive("Reject");
                handleAccept;
              }}
            >
              Reject
            </Button>
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

export default AdminBuyers;
