import { buyers } from "../../json/buyers.json";
import React from "react";
import TableModel from "../tableModel/TableModel";

const AdminBuyers = () => {
  const data = React.useMemo(() => buyers, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Dealer ID",
        accessor: "customerName",
      },
      {
        Header: "Make/Model",
        accessor: "Make/Model",
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
        accessor: "Accept/Rejected",
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
