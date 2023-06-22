import React from "react";
import { dealerdetails } from "../../json/dealerdetails.json";
import TableModel from "../tableModel/TableModel";
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
  
      <h3>Dealer Details</h3>
      <p>DealerID:{dealerdetails[0].DealerID}</p>
      <p>Dealer Name:{dealerdetails[0].DealerName}</p>
      <p>Total Cars:{dealerdetails[0].TotalCars}</p>
      <TableModel data={data} columns={columns} />
    </>
  );
};

export default DealerDetails;
