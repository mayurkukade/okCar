import { SimpleGrid, Card, CardHeader } from "@chakra-ui/react";
import "./tableCard.css";
const TableCard = ({
  customername,
  model,
  year,
  dealer,
  amount,
  status,
  offered,
  acceptreject,
}) => {
  return (
    <div
      className="cardContainer"
      style={{
        borderRadius: "12px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(320px, 0.4fr))"
      >
        <Card padding="20px">
          <CardHeader>Details</CardHeader>
          <h1>Customer name : {customername}</h1>
          <h1>Make/model : {model}</h1>
          <h1>Year : {year}</h1>
          <h1>Dealer : {dealer}</h1>
          <h1>Amount : {amount}</h1>
          <h1>Status : {status}</h1>
          <h1>Value Offered : {offered}</h1>
          <h1>Accept/Reject: {acceptreject}</h1>
        </Card>
      </SimpleGrid>
    </div>
  );
};

export default TableCard;
