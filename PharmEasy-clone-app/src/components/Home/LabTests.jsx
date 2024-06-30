import React from 'react';
import {
  Flex,
  Heading,
  Text,
  Box,
  Image,
  Button,
  useColorModeValue,
  Center,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Data from './Data.json';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types'

const LabTestCard = ({
  title,
  description,
  originalPrice,
  discountedPrice,
  discountPercentage,
  image,
}) => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const buttonBgColor = useColorModeValue("pink.500", "pink.200");
  const buttonTextColor = useColorModeValue("white", "gray.900");

  LabTestCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    originalPrice: PropTypes.string.isRequired,
    discountedPrice: PropTypes.string.isRequired,
    discountPercentage: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  };

  return (
    <Box
      bg={bgColor}
      p={4}
      borderRadius="md"
      boxShadow="md"
      m={2}
      textAlign="left"
      width={"300px"}
      height={"300px"}
    >
      <Box mb={2}>
        <Text
          fontSize="sm"
          fontWeight="bold"
          p={1}
          bg="#F47779"
          color="white"
          width={"80px"}
          borderRadius={"4px"}
          textAlign={"center"}
        >
          {discountPercentage}% OFF
        </Text>
      </Box>
      <Heading fontSize="md" fontWeight="bold" mb={2}>
        {title}
      </Heading>
      <Text fontSize="sm" color={textColor} mb={4}>
        {description}
      </Text>
      <HStack  marginTop={"70px"}>
      <VStack marginLeft={0}  width={"60px"}>
        <Text
          fontSize="lg"
          fontWeight="bold"
          textDecoration="line-through"
          color="gray.500"
        >
          ₹{originalPrice}
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          ₹{discountedPrice}
        </Text>
      </VStack>
      <Image src={image} alt={title} borderRadius="md" width={"80px"} height={"80px"} 
    //   mt={"50px"}
        ml={"130px"}
      mb={0} />
      </HStack>
    </Box>
  );
};

const LabTests = () => {
  return (
    <Flex direction="column" mt={10}>
      <Heading as="h2" size="lg" mb={0} fontFamily={"sans-serif"} ml={"80px"}>
        Frequently Booked Lab Tests
      </Heading>
      <Flex
        direction={["column", "column", "row"]}
        wrap="wrap"
        justify="center"
        alignItems="center"
      >
        {Data.frequently_booked_labtests.map((labTest) => (
          <LabTestCard key={labTest.title} {...labTest} />
        ))}
      </Flex>
      {/* <Button
        variant="solid"
        colorScheme="teal"
        size="md"
        mt={4}
        onClick={() => console.log("View All clicked")}
      >
        View All
      </Button> */}
    </Flex>
  );
};

export default LabTests;