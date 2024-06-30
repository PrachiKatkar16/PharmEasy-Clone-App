// src/components/LocationDrawer.jsx
import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
  Button,
  Flex,
  Link,
  Image,
  useDisclosure,
  Box,
  Text,
  Input,
  Stack,
  Divider,
  InputGroup,
  InputRightAddon,
  InputLeftElement,
  Heading
} from '@chakra-ui/react';
import PropTypes from 'prop-types'
import { useState } from 'react';



const LoginDrawer = ({ isOpen, onClose }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
  
    const handlePhoneNumberChange = (event) => {
      setPhoneNumber(event.target.value);
    };
  
    const handleSendOTP = () => {
      // Handle sending OTP here
      console.log('Sending OTP to', phoneNumber);
      onClose();
    };
    return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay />
    <DrawerContent w={"30%"} maxW={"30%"}>
      <DrawerCloseButton mt="30px" mr={"445px"} color={"white"} width={"60px"} borderRadius={0} height={"60px"} bgColor={"#10847E"} size={"lg"}/>
      <DrawerHeader borderBottomWidth="1px" bg={"#10847E"} mt={0} >
        <Flex direction="row" gap={"140px"}>
         <Image src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png?dim=256x0" alt="logo" width={"180px"} height={"50px"} mt={"20px"}/>
         <Image src="https://assets.pharmeasy.in/web-assets/dist/1fe1322a.svg?dim=256x0" alt='logo' w={"170px"} mt={"20px"}/>
        </Flex>
      </DrawerHeader>
      <DrawerBody>
        <Text fontFamily={"sans-serif"} fontWeight={"bold"} color={"gray.600"} mt={"20px"} mb={"20px"}>Quick Login / Register</Text>
        <Input
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          border={"1px solid"}
        />
        <Button textAlign={"center"} color="white" bg={"#10847E"} mt={"20px"} width={"420px"}>Send OTP</Button>
      </DrawerBody>
      {/* <DrawerFooter borderTopWidth="1px">
        <Button
          variant="outline"
          mr={3}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          colorScheme="blue"
          onClick={handleSendOTP}
          isDisabled={!phoneNumber}
        >
          Send OTP
        </Button>
      </DrawerFooter> */}
      <Text ml={4} mt={2} mb={4}>
        By continuing, you agree with our{' '}
        <Link color="black">Privacy Policy</Link> and{' '}
        <Link color="black">Terms and Conditions</Link>
      </Text>
    </DrawerContent>
  </Drawer>
);
};

LoginDrawer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };
export default LoginDrawer;