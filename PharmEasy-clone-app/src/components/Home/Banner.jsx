import { Box, Flex, Text, Button, Link, Image, Heading } from '@chakra-ui/react';
import plusLogo from '../../assets/plus.png'

const Banner = () => {
  return (
    <Box
      bgGradient="linear(to-r, purple.500, purple.300)"
      py={10}
      px={20}
      rounded="lg"
      mb={5}
      ml={"80px"}
      mr={"80px"}
      mt={"40px"}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Heading as="h2" color="white" fontSize="xl" fontWeight="bold" mr={4} display={"flex"}>
            Become a {"  "}<Image src={plusLogo} alt="Plus" width={"80px"} />{"   "}  member
          </Heading>
          <Text color="white" fontSize="lg" lineHeight="1.5">
            And enjoy extra bachat on every order
          </Text>
       </Box>
        <Flex alignItems="center">
          <Text color="white" fontSize="sm" lineHeight="1.5">
            Save 5% on medicines, 50% on 1st lab test & get FREE delivery with PLUS membership
            <Link href="#" color="white" fontSize="sm" fontWeight="bold">
              Know more <Box>{">"}</Box>
            </Link>
          </Text>
          <Image src='https://assets.pharmeasy.in/apothecary/_next/static/media/PlusFamily.22677720.png?dim=1440x0'/>
        </Flex>
      </Flex>
      <Box mt={5} alignSelf="center">
        <Button
          bg="orange.400"
          color="white"
          fontSize="md"
          fontWeight="bold"
          rounded="md"
          py={3}
          px={6}
          _hover={{ bg: 'orange.500' }}
        >
          Explore Now <Box bg={"white"} color={"orange"} marginLeft={"9px"} borderRadius={"80px"} width={"20px"}>{">"}</Box>
          
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;