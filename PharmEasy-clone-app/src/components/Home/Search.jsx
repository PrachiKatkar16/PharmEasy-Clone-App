import { Box, HStack,Text,Flex,InputGroup,InputAddon,InputLeftElement,InputRightElement,Input,Button } from '@chakra-ui/react'
import React from 'react'
import '../Home/search.css'
import { CgMenuBoxed } from "react-icons/cg";
import { SearchIcon } from '@chakra-ui/icons';

function Search() {
  return (
    <Box className='Search-Parent'>
    <Box className='Search-Child1'>
      <Flex gap={"60px"}>
        <Box style={{fontSize:"23px",fontWeight:"600",color:"#30363C", fontFamily:"sans-serif", marginTop:"50px"}}>What are you looking for?</Box>
        <Box className='orderDescription'>
          <CgMenuBoxed size={"22px"} id='order-icon'/>
          <Text fontWeight={"500"} color="gray.600">Order with prescription.</Text>
          <Text color={"#10847E"} fontWeight={"500"}>UPLOAD NOW {">"}</Text>
        </Box>
      </Flex>
    </Box>
    <Box className='Search-Child2'>
    <Box width="720px" mx="auto" mt={4}>
      <InputGroup size="lg">
        <InputLeftElement
          pointerEvents="none"
          // eslint-disable-next-line react/no-children-prop
          children={<SearchIcon color="gray.300" />}
        />
        <Input 
          type="text" 
          placeholder="Search for" 
          borderRadius="60px" 
          pr="4.5rem" // Ensuring there is enough space for the button
        />
        <InputRightElement width="auto" pr={1.5} pt={1} pb={1}>
          <Button h="2.4rem" size="md" colorScheme="teal" borderRadius="60px" fontWeight={"bold"}>
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
    </Box>
  </Box>
  )
}

export default Search