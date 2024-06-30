import React from 'react';
import { Box, Image, Text, Link, Flex, Divider } from '@chakra-ui/react';
import Data from './Data.json';
import { Link as RouterLink } from 'react-router-dom';

const Firstpart = () => {
  return (
    <Box p={4} >
       <Flex
        overflowX="auto"
        justifyContent="center"
        alignItems="center"
        wrap="nowrap"
        gap={"20px"}
      >
        {Data.image_data.map((el) => (
          <Box
            key={el.name}
            // borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={2}
            m={2}
            width="130px"
            height="160px"
            transition="box-shadow 0.3s"
            _hover={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
            textAlign="center"
            justifyContent={"center"}
          >
            <Link as={RouterLink} to={el.link}>
              <Image src={el.image} alt={el.name} />
            </Link>
            <Divider my={0} borderColor={"gray.400"} />
            <Box mt={2}>
              <Text fontWeight="bold">{el.name}</Text>
              <Text color="#F47D7F" fontSize={"15"} fontWeight={"500"} marginTop={"5px"}>{el.discount}</Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Firstpart;
