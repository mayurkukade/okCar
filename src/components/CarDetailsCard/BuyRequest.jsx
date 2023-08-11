import { useNavigate } from "react-router-dom";
import { usePendingCarBookingMutation } from "../../api/bookingSlice";
import { selectUserInfo } from "../../api/authSlice";
import { Button, useToast } from "@chakra-ui/react";
import { Toast } from "@chakra-ui/react";
// eslint-disable-next-line react/prop-types
const BuyRequest = ({ price, id }) => {
  const navigate = useNavigate();
  const [askingPrice] = usePendingCarBookingMutation();
  const userInfo = localStorage.getItem("userInfo");
const toast = useToast()
  const userId = JSON.parse(userInfo);
  console.log(id);

  const submitHandler = async (e) => {
    e.preventDefault();
    if(!userId){
    return  navigate('/signin')
    }
    try {
      const res = await askingPrice({
        date: "2023-09-19",
        price,
        status: "PENDING",
        carId: id,
        userId:userId.userId,
      }).unwrap();
      if(res){
        toast({
          title: 'Success',
          description: "buy request has been send",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return <p onClick={submitHandler}>{userId?"Buy request":"Sign In"} </p>;
};

export default BuyRequest;
