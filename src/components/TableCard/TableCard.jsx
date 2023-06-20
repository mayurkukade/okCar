/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";
import "./tableCard.css";
import BuyerCard from "../Card/BuyerCard";
import DealerCard from "../Card/DealerCard";
import UserRequestCard from "../Card/UserRequestCard";
export default function TableCard({ CardDatas }) {
  let cardConditionalRender = Object.keys(CardDatas[0])[0];
  console.log(cardConditionalRender)
  let cardDetails;
  if (cardConditionalRender === "customerName") {
    cardDetails = CardDatas.map((cardData, index) => {
    
      return (
        <div key={index}>
          <BuyerCard
            customerName={cardData.customerName}
            MakeModel={cardData.MakeModel}
            Year={cardData.Year}
            Dealer={cardData.Dealer}
            Amount={cardData.Amount}
            Status={cardData.Status}
            ValueOffered={cardData.ValueOffered}
            AcceptRejected={cardData.AcceptRejected}
          />
        </div>
      );
    });
  } else if (cardConditionalRender === "DealerID") {
    cardDetails = CardDatas.map((cardData, index) => {
      
      return (
        <div key={index}>
          <DealerCard
            DealerID={cardData.DealerID}
            DealerName={cardData.DealerName}
            Location={cardData.Location}
            PhoneNo={cardData.ContactNo}
            TotalCars={cardData.TotalCars}
            TotalDeals={cardData.Edit}
          />
        </div>
      );
    });
  }else if(cardConditionalRender === 'userName'){
    cardDetails = CardDatas.map((cardData, index) => {
      
      return (
        <div key={index}>
          <UserRequestCard
            userName={cardData.userName}
            requestID={cardData.requestID}
            DealerID={cardData.DealerID}
            Location={cardData.Location}
            CarID={cardData.CarID}
            DealStatus={cardData.DealStatus}
          />
        </div>
      );
    });
  }

  return <Box className="cardContainer">{cardDetails}</Box>;
}
