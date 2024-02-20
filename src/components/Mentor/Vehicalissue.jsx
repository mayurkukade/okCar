import React from "react";
import {
  TabPanels,
  TabPanel,
  Tabs,
  Tab,
  TabList,
  Box,
  Card,
  CardBody,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import carissue from "../../images/cars/Carissue.jpg";

export default function Vehicalissue() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      width="100%"
      h={"20rem"}
      mt={"5rem"}
    >
      <Tabs variant="soft-rounded" colorScheme="green" width="55%">
        <TabList>
          <Tab>All </Tab>
          <Tab>Resolved</Tab>
          <Tab>Pending</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              width={"50rem"}
              boxShadow='dark-lg'
              rounded="lg"
            >
              <Image
                objectFit="cover"
                w={"20rem"}
                src={carissue}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                  <Text py="2" fontWeight={"bold"}>
                    App. Id. :- 123456789
                  </Text>
                  <Text py="2" fontWeight={"semibold"} fontSize={"2xl"}>
                    2013 | Figo | ZXI 1.2L Petrol
                  </Text>
                  <Text py="2" fontWeight={"semibold"}>
                    Document Related issue :- Insurance not recived
                  </Text>
                  <Box bg={"gray.200"} rounded="lg">
                    <Box display={"flex"}>
                      <Text py="2" px="2" fontWeight={"semibold"}>
                        ISSUE STATUS
                      </Text>
                      <Box p={"5px"}>
                      <Box ml={"28"} bg={"green.100"} p={"5px"}>
                        <Text>Token ID:- 12345679</Text>
                     </Box>
                     </Box>
                    </Box>
                    <Text color={"red.400"} ml={"0.5rem"} fontWeight={"semibold"}>
                      Closed
                    </Text>
                    <Text ml={"0.5rem"}  fontWeight={"semibold"}>
                      Reported on Tuesday 14th Nov 2023
                    </Text>
                  </Box>
                </CardBody>
              </Stack>
            </Card>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
