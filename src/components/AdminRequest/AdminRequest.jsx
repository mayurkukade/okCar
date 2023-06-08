import React from 'react';
import {cars} from '../../json/cars.json'
import TableModel from '../tableModel/TableModel';

const AdminRequest = () => {
    const data = React.useMemo(() =>cars , []);
    const columns = React.useMemo(
      () => [
        {
          Header: "Customer Name",
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
        }
      ],
      []
    );

  return (
    
            <TableModel
        data={data}
        columns={columns}
      
      />
      
    
  )
}

export default AdminRequest
