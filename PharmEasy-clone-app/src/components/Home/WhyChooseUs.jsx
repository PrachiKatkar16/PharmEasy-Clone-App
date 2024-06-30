import React from 'react';
import { Box, Flex, Text,Image,Heading } from '@chakra-ui/react';

const ChooseUsBox = () => {
  return (
  
    <Box
        bg="#F8F9FF"
        p={6}
        borderRadius="md"
      ml={"80px"}
      mr={"80px"}
      mt={"30px"}
    >
      
      <Heading  as="h2" size="lg" mb={10} fontFamily={"sans-serif"}  >
        Why Choose Us?
      </Heading>
      
      <Box >
      <Flex  mb={4} gap={"40px"}>
        <Image src='https://assets.pharmeasy.in/apothecary/images/family.svg?dim=96x0' mr={0}  width={"100px"}></Image>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            32 Million+
          </Text>
          <Text fontSize="sm">Registered users as of Mar 31, 2022</Text>
        </Box>
        <Image src="https://assets.pharmeasy.in/apothecary/images/deliveryBoy.svg?dim=96x0" width={"100px"}/>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            36 Million+
          </Text>
          <Text fontSize="sm">Orders on Pharmeasy till date</Text>
        </Box>
        <Image src="https://assets.pharmeasy.in/apothecary/images/pincodeServed.svg?dim=96x0" width={"100px"}/>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            99,000+
          </Text>
          <Text fontSize="sm">Unique items sold last 3 months</Text>
        </Box>
        <Image src="https://assets.pharmeasy.in/apothecary/images/locationMarker.svg?dim=96x0" width={"100px"}/>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            19,000+
          </Text>
          <Text fontSize="sm">Pin codes serviced last 3 months</Text>
        </Box>
      </Flex>
    </Box>
    </Box>
  );
};

export default ChooseUsBox;