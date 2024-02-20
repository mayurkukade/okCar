import React from "react";
import "./Card.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
const CarDetailsBid = () => {
  return (
    <div className="Card-Main">
      CarDetailsBid
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://fastly-production.24c.in/hello-ar/dev/uploads/cd385d47-0d8a-4dc6-9c3f-fd15c5b30de8/2ac22582-6dc1-428a-a217-6bd63d08d9a9/42.jpg?w=750&auto=format"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <div className="card-icon">
              <Heading size="md">2013 Hyundai i10</Heading>
              <Image src="./src/components/Card-A/heart.svg" className="Image-1" />
            </div>
            <div className="carName">
              <div className="Text-box">SPORTZ 1.2 AT</div>
              <div className="Text-box">. Automatic</div>
            </div>

            <Tabs variant="soft-rounded" colorScheme="green">
              <TabList>
                <Tab>44,067</Tab>
                <Tab>1st Owner</Tab>
                <Tab>Petrol</Tab>
                <Tab>MH-14</Tab>
              </TabList>
              <TabPanels></TabPanels>
            </Tabs>
            <div className="card-month">
              <div>$13,783/month</div>
              <div>$7,05,000</div>
            </div>
            <div className="Text-box2">Zero down payment</div>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CarDetailsBid;
