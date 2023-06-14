/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import "./tableCard.css";

export default function TableCard({ CardDatas }) {
  let cardConditionalRender = Object.keys(CardDatas[0])[0];
console.log(cardConditionalRender)
  let cardDetails;
  if (cardConditionalRender === "customerName") {
    cardDetails = CardDatas.map((cardData) => {
      return (
        <div key={cardData.DealerID}>
          <Center py={6}>
            <Box
              // maxW={"350px"}
              w={"full"}
              width={"310px"}
              bg={useColorModeValue("white", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Box p={6}>
                <Stack spacing={0} align={"center"} mb={5}>
                  <Heading
                    fontSize={"2xl"}
                    fontWeight={500}
                    fontFamily={"body"}
                  >
                    {cardData.Location}
                  </Heading>
                  <Text color={"gray.500"}>Frontend Developer</Text>
                </Stack>

                <Stack direction={"row"} justify={"center"} spacing={6}>
                  <Stack spacing={0} align={"center"}>
                    <Text fontWeight={600}>23k</Text>
                    <Text fontSize={"sm"} color={"gray.500"}>
                      Followers
                    </Text>
                  </Stack>
                  <Stack spacing={0} align={"center"}>
                    <Text fontWeight={600}>23k</Text>
                    <Text fontSize={"sm"} color={"gray.500"}>
                      Followers
                    </Text>
                  </Stack>
                </Stack>

                <Button
                  w={"full"}
                  mt={8}
                  bg={useColorModeValue("#151f21", "gray.900")}
                  color={"white"}
                  rounded={"md"}
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                >
                  Follow
                </Button>
              </Box>
            </Box>
          </Center>
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
