import React from "react";
import TableModel from "../tableModel/TableModel";
import {Dealers} from '../../json/driver.json'
const DealersModel = () => {
  

  const data = React.useMemo(() =>Dealers , []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Dealer ID",
        accessor: "DealerID",
      },
      {
        Header: "Dealer's Name",
        accessor: "Dealer Name",
      },
      {
        Header: "Location",
        accessor: "Location",
      },
      {
        Header: "Phone No.",
        accessor: "Phone No",
      },
      {
        Header: "Total Cars",
        accessor: "Total Cars",
      },
      {
        Header: "Total Deals",
        accessor: "Total Deals",
      }
    ],
    []
  );

  return (
  <>
    <TableModel
        data={data}
        columns={columns}
      
      />
  </>
     
    
     
    
  );  
};

export default DealersModel;
