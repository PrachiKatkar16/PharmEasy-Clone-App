import React from 'react';
import { Box, Heading, Link, Image, Text, Stack } from '@chakra-ui/react';

const HomeBanner = () => {
  return (
    <Box position="relative" textAlign="center" ml={"80px"} mr={"80px"} mt={"50px"}>
      <Image src="https://assets.pharmeasy.in/apothecary/images/downloadBanner.webp?dim=1440x0&q=100" alt="Banner Image" width="100%" bg={"#D7FAF8"}/>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        p={4}
        borderRadius="md"
      >
        <Heading size="xl" mb={4} color={"black.200"} >Simplifying <br></br>Healthcare<br></br> Impacting Lives</Heading>
        <Heading size={"sm"} mb={4}>Download the App for free</Heading>
        <Stack direction="row" spacing={4} justify="center">
          <Link
            href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&amp;hl=en_IN&amp;gl=US&amp;utm_source=web&amp;utm_medium=footer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="play store"
              src="https://assets.pharmeasy.in/apothecary/images/googlePlay.svg?dim=256x0"
              maxW="150px"
            />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&amp;hl=en_IN&amp;gl=US&amp;utm_source=web&amp;utm_medium=footer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="app store"
              src="https://assets.pharmeasy.in/apothecary/images/appStore.svg?dim=256x0"
              maxW="150px"
            />
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default HomeBanner;
