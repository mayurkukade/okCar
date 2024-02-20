import { Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel, 
  Button, 
  Flex, 
  Box, 
  Text, 
  Stack 
} from '@chakra-ui/react';

function PaymentDetails() {
  return (
    <Box direction="column" alignItems="center" justifyContent="center" minHeight="60rem">
      <Box bg="green.500" fontFamily={'heading'} fontWeight={'bold'} p={9} rounded="sm" fontSize={40} color="white" width="100%" textAlign="center">
        Payment Details
      </Box>
      <Flex direction={['column', 'row']} fontSize="xl" mt={5} alignItems="center" justifyContent="center">
        <Box textAlign={['center', 'left']} mr={[0, 8]} mb={[4, 0]} fontFamily="inherit" ml={[0, 1]}>
        <Stack spacing={4}>
          <Text alignItems="center" fontSize={25}>Transaction Balance</Text>
          <Text alignItems="center"  fontSize={25}>Rs. 0</Text>
          </Stack>
        </Box>
        <Flex direction={['column', 'row']} alignItems="center" justifyContent={['center', 'space-between']} maxWidth="400px">
          <Button colorScheme="orange" mb={[4, 0]} mr={[0, 4]} variant="outline">
            Add to DTA
          </Button>
          <Button colorScheme="orange" variant="outline">
            Refund to My
          </Button>
        </Flex>
      </Flex>
      <Flex  alignItems="center" justifyContent="center" mt={5}>
        <Box textAlign="center" fontSize={25} mr={8}>
          <Stack spacing={3}>
            <Text>Bidding Balance</Text>
            <Text>Rs. 10000</Text>
          </Stack>
        </Box>
        <Box textAlign="center" fontSize={25}>
          <Stack spacing={3}>
            <Text>Booking Left</Text>
            <Text>4</Text>
          </Stack>
        </Box>
      </Flex>
      <Flex direction="column" alignItems="center" justifyContent="center" mt={5} width="full">
      <Tabs variant='soft-rounded' colorScheme='green' width="full" height={'56'}>
        <Flex justifyContent="center">
          <TabList marginTop={10}>
            <Tab marginRight={['', '8']} fontSize={25}>All</Tab>
            <Tab marginLeft={['', '20']} fontSize={25}>Refunds</Tab>
            <Tab marginLeft={['', '24']} fontSize={25}>Deposit</Tab>
          </TabList>
        </Flex>
        <TabPanels fontFamily='mono'>
          <Box>
            <TabPanel>
              <Stack spacing={2} marginTop={10}>
                <Text textAlign="center" mr={['', '52']} fontSize={22}>29 Jan 2024</Text>
                <Text textAlign="center" fontWeight='bold' fontSize={22}>
                  DTA Refund Request <Text as="span" color="red.500" ml={[0, 15]} fontWeight='bold'>-Rs.17716</Text>
                </Text>
                <br />
                <Text textAlign="center" mr={['', '52']} fontSize={22}>28 Jan 2024</Text>
                <Text textAlign="center" fontWeight='bold' fontSize={22} ml={[0, 3]}>
                  RC Holdback Realeased <Text as="span" color="green.500" ml={[0, 5]} fontWeight='bold'>+Rs.17716</Text>
                </Text>
                <Text textAlign="center" fontSize={22} mr={[0, 9]}>Maruti Suzuki, Alto 800, LXI</Text>
                <Text textAlign="center" fontSize={22} mr={['', '32']}>Apt Id. 10626751741</Text>
                <br />
                <Text textAlign="center" mr={['', '52']} fontSize={22}>27 Jan 2024</Text>
                <Text textAlign="center" fontWeight='bold' fontSize={22} ml={[0, 3]}>
                  RC Holdback Realeased <Text as="span" color="green.500" ml={[0, 5]} fontWeight='bold'>+Rs.17716</Text>
                </Text>
                <Text textAlign="center" fontSize={22} mr={[0, 4]}>Ford Figo Aspire, AMBIFINITE12</Text>
                <Text textAlign="center" fontSize={22} mr={['', '60']}>PETROL</Text>
                <Text textAlign="center" fontSize={22} mr={['', '28']}>Apt Id. 10387814768</Text>
                <br />
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack spacing={0}>
                {/* Content for Refunds TabPanel */}
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack spacing={0}>
                {/* Content for Deposit TabPanel */}
              </Stack>
            </TabPanel>
          </Box>
        </TabPanels>
      </Tabs>
    </Flex>
    </Box>
  );
}

export default PaymentDetails;
