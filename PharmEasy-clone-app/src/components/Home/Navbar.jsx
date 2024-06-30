// src/components/Navbar.jsx
import { Box, HStack, Divider, Text, Center, Image,Button, Link } from '@chakra-ui/react';
import { HiOutlineDeviceMobile, HiOutlineHome } from "react-icons/hi";
import {AiOutlineUser} from 'react-icons/ai'
import { CiUser } from "react-icons/ci";
import { LuBadgePercent } from "react-icons/lu";
import { BsCart2 } from "react-icons/bs";
import React from 'react';
import '../Home/navbar.css';
import LocationDrawer from './LocationDrawer'; 
import LoginDrawer from './LoginDrawer';
import { useDisclosure } from '@chakra-ui/react';
import {Link as RouterLink,useNavigate } from 'react-router-dom'


function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleDownloadAppClick = () => {
    window.location.href = 'https://apps.apple.com/in/app/pharmeasy-healthcare-app/id982432643?mt=8'; // Replace with your App Store URL
  };
  return (
    <Box className='Parent'>
     
      <Box className='Child1'>
        <HStack>
          <Box className='logo'>
            <HStack alignItems="flex-start">
            <Image
              src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0"
              mt={"7px"}
              alt="logo"
              style={{ cursor: "pointer" }}
            />
            <Divider orientation="vertical" borderColor={'black'} />
            </HStack>
          </Box>
         
          <Box ml={"40px"}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box>
                <Image src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=16x0" />
              </Box>
              <Box>
                <Text fontSize="13px"> Express delivery to</Text>
              </Box>
            </Box>
            <Text fontSize="14px" fontWeight="600">
              <LocationDrawer /> {/* Use the LocationDrawer component here */}
            </Text>
          </Box>
        </HStack>
      
        <Box>
          <HStack>
            <Box className='download-button'>
              <Button
                leftIcon={<HiOutlineDeviceMobile fontSize="25px" />}
                colorScheme="gray"
                variant="solid"
                fontWeight="500"
                borderRadius="10px"
                fontSize="15px"
                onClick={handleDownloadAppClick}
              >
                Download App
              </Button>
            </Box> 
            <Box>
                <Box display="flex" alignItems="center" mr="10px" gap={"30px"}>
                  <HStack>
                    <CiUser fontSize="20px" />
                    <Button onClick={onOpen} fontWeight={"500"} fontSize={15} variant={"link"} color={"black.100"}>Hello,log in
                    </Button>
                    <LoginDrawer isOpen={isOpen} onClose={onClose} />
                  </HStack>
                  <HStack>
                    <LuBadgePercent fontSize={"20px"}/>
                    <Text fontWeight={"500"} fontSize={15}>Offers</Text>
                </HStack>
                <HStack>
                    <BsCart2 fontSize={"20px"}/>
                    <Text fontWeight={"500"} fontSize={15}>Cart</Text>
                </HStack>
                </Box>
            </Box>
          </HStack>
      </Box>
      </Box>
      <hr />
      <Box className='Child2'>
      <Box
          p={2}
          style={{
          display: "flex",
          justifyContent: "space-around",
          width: "50%",
          margin: "auto",
          fontSize: "15px",
          fontWeight:"500"

        }}>
        <RouterLink to="/medicine">
            <Link >Medicine</Link>
        </RouterLink>
        <Link>Lab Tests</Link>
        <Link>Healthcare ⌵</Link>
        <Link>Surgeries</Link>
        <Link>Health Blogs</Link>
        <Link>PLUS</Link>
        <Link>Offers</Link>
        <Link>Value Store</Link>
      </Box>
      </Box>
      <hr/>
    </Box>
  );
}

export default Navbar;
