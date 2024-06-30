import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Image,
    useColorModeValue,
    HStack,
    Center,
  } from "@chakra-ui/react";
  import { GrAttachment } from "react-icons/gr";
  
  const OrderWithPrescriptionBox = () => {
    const bg = useColorModeValue("gray.100", "gray.700");
  
    return (
      <Box  margin={"50px"} border="1px solid #E6EBF4" borderRadius={8}height={"180px"} 
        mr={"80px"}
        ml={"80px"} >
        
        <Flex justifyContent="space-between">

        <Flex gap={"40px"} bg={bg} p={8} rounded="md" borderRightRadius={0} height={"180px"}>
          <Box mt={4}>
            <Image src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1440x0"/>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={2}>
              Order with Prescription
            </Heading>
            <Text fontSize="sm">
              Upload prescription and we will deliver your medicines
            </Text>
            <Button
              mt={4}
              variant="solid"
              colorScheme="teal"
              leftIcon={<GrAttachment/>}
            >
              Upload
            </Button>
          </Box>
          </Flex>
          <Box mt={"8"} mr={"60px"}>
            <Heading as="h4" size="sm" mb={2}>
              How does this work?
            </Heading>
            <Flex direction="column" spacing={4}>
            <Flex gap="20px">
              <Flex alignItems="center">
                <Box
                  bg="#EBF2FF"
                  borderRadius={"7px"}
                  color="blue.500"
                  fontSize="md"
                  mr={2}
                  padding={"1"}
                  width={"8"}
                  textAlign={"center"}
                  height={"8"}
                  fontWeight={"bold"}
                >
                  1
                </Box>
                <Text>Upload a photo of your prescription</Text>
              </Flex>
              <Flex alignItems="center">
                <Box
                  bg="#EBF2FF"
                  borderRadius={"7px"}
                  color="blue.500"
                  fontSize="md"
                  mr={2}
                  padding={"1"}
                  width={"8"}
                  textAlign={"center"}
                  height={"8"}
                  fontWeight={"bold"}
                  marginLeft={"50px"}
                >
                  3
                </Box>
                <Text>We will call you to confirm the medicines</Text>
              </Flex>
            </Flex>
            <Flex gap="32px">
              <Flex alignItems="center">
                <Box
                  ox
                  bg="#EBF2FF"
                  borderRadius={"7px"}
                  color="blue.500"
                  fontSize="md"
                  mr={2}
                  padding={"1"}
                  width={"8"}
                  textAlign={"center"}
                  height={"8"}
                  fontWeight={"bold"}
                >
                  2
                </Box>
                <Text>Add delivery address and place the order</Text>
              </Flex>
              <Flex alignItems="center">
                <Box
                  ox
                  bg="#EBF2FF"
                  borderRadius={"7px"}
                  color="blue.500"
                  fontSize="md"
                  mr={2}
                  padding={"1"}
                  width={"8"}
                  textAlign={"center"}
                  height={"8"}
                  fontWeight={"bold"}
                >
                  4
                </Box>
                <Text>
                  Now, sit back! your medicines will get delivered at<br/> your
                  doorstep
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
  export default OrderWithPrescriptionBox;