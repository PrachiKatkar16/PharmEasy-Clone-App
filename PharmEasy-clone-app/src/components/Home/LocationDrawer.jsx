// src/components/LocationDrawer.jsx
import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,
  Text,
  Input,
  Stack,
  Divider,
  InputGroup,
  InputRightAddon,
  Image,
  Link,
  InputLeftElement
} from '@chakra-ui/react';



const LocationDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} variant="link" color="black">
        400001 Mumbai ⌵
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent w={"30%"} maxW={"30%"}>
          <DrawerCloseButton position={"relative"} left={"-14"} width={"60px"} bgColor={"white"}  height={"60px"} marginTop={"20px"} borderRadius={"0px"}/>
          <DrawerHeader fontSize={"26px"} fontFamily={"sans-serif"} fontWeight={"Bold"} color={"#4F585E"} marginLeft={"20px"}>Choose your <br></br>Location</DrawerHeader>
          <DrawerBody marginLeft={"20px"}>
            <Stack spacing={4}>
            <Box className="searchbar">
              <InputGroup >
                
                <Input type="text" placeholder="Enter PIN code" border="1px solid gray"  width="300px"   
                      borderRadius={"5px"}
                     height={"40px"}
                />
                <InputRightAddon
                  p={0}
                  border="none"
                >
                  <Button color={"white"} bg={'#10847E'} borderRightRadius={"5px"} borderLeftRadius={0} height={"40px"}
                   _hover={{bg:"#10847E"}}>
                   Check
                  </Button>
                </InputRightAddon>
              </InputGroup>
              </Box>
              <Box  display="flex" gap="40px" width={"380px"} h={"60px"} border={"1px solid #DFE3E6"} borderRadius={"10px"}>
                <Image src="https://assets.pharmeasy.in/web-assets/_next/icons/home-address.svg?dim=48x48&q=75" mt="10px" ml={"20px"} w={"40px"} h={"40px"}/>
                <Link color="teal" mt={"17px"} fontWeight={"bold"} fontFamily={"sans-serif"}> Login to View Addresses</Link>
              </Box>
              <Box display="flex" gap="30px" width={"380px"} h={"80px"} bg={"#F8F9FF"} borderRadius={"10px"}>
                <Image src="https://assets.pharmeasy.in/web-assets/_next/icons/scooter-coloured.svg?dim=64x64&q=75" mt="10px" ml={"20px"} w={"60px"} h={"60px"}/>
                <Text mt={"17px"} fontFamily={"sans-serif"}>Serving more than 1,000 towns and cities in India.</Text>
              </Box>
              <Box display="flex" gap="30px" width={"380px"} h={"60px"} bg={"#E9F9FF"} borderRadius={"10px"}>
                <Image src="https://assets.pharmeasy.in/web-assets/dist/0c22e009.svg?dim=0x32&dpr=2&q=100" mt="10px" ml={"20px"} w={"40px"} h={"40px"}/>
                <Text mt={"8px"} fontFamily={"sans-serif"} fontSize={"14px"}>Over 30,00,000 orders safely delivered  <Link color={"blue.200"}>Know More</Link></Text>
             
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LocationDrawer;
