import React from 'react';
import {dealersManegment} from '../../json/dealersManegment.json'
import TableModel from '../tableModel/TableModel';
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
      }
    ],
    []
  );

  return (
    <>
    <TableModel data={data} columns={columns} />
          
    </>
  )
}

export default DealerManegment
