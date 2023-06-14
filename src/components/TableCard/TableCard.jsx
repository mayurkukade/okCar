/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import {
  
  Box,
  
} from "@chakra-ui/react";
import "./tableCard.css";
import BuyerCard from '../Card/BuyerCard'
export default function TableCard({ CardDatas }) {
  let cardConditionalRender = Object.keys(CardDatas[0])[0];
console.log(cardConditionalRender)
  let cardDetails;
  if (cardConditionalRender === "customerName") {
    cardDetails = CardDatas.map((cardData,index) => {
      console.log(cardData)
      return (
        <div  key={index}>
         <BuyerCard
         customerName = {cardData.customerName}
         MakeModel = {cardData.MakeModel}
         Year = {cardData.Year}
         Dealer = {cardData.Dealer}
         Amount = {cardData.Amount}
         Status = {cardData.Status}
         ValueOffered = {cardData.ValueOffered}
         AcceptRejected = {cardData.AcceptRejected}
         />
        </div>
       
      );
    });
  }else if (cardConditionalRender === 'DealerID'){
    return(
      <>
      <span>Dealer</span>
      </>
    )
  }

  return <Box className="cardContainer">{cardDetails}</Box>;
}
