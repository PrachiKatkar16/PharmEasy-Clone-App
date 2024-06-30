import React from 'react';
import PropTypes from 'prop-types';
import Data from './Data.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Box, Image, IconButton, Heading, Text } from "@chakra-ui/react";

// Arrow components using Chakra UI
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      icon={<IoIosArrowForward />}
      className={className}
      onClick={onClick}
      bg="rgba(0, 0, 0, 0.5)"
      color="white"
      borderRadius="full"
      position="absolute"
      top="50%"
      right="0"
      transform="translate(50%, -50%)"
      zIndex="50"
      _hover={{ bg: 'rgba(0, 0, 0, 0.7)' }}
    />
  );
}

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      icon={<IoIosArrowBack />}
      className={className}
      onClick={onClick}
      bg="rgba(0, 0, 0, 0.5)"
      color="white"
      borderRadius="full"
      position="absolute"
      top="50%"
      left="0"
      transform="translate(-50%, -50%)"
      zIndex="50"
      _hover={{ bg: 'rgba(0, 0, 0, 0.7)' }}
    />
  );
}

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

const Carousel = () => {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 7, // Display 7 images per slide
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false, // Disable autoplay
    arrows: true,
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 7, slidesToScroll: 1 }, // Adjust for larger screens
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5, slidesToScroll: 1 }, // Adjust for medium screens
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3, slidesToScroll: 1 }, // Adjust for small screens
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 1 }, // Adjust for very small screens
      },
    ],
  };

  return (
    <Box marginLeft="80px" marginRight="80px" position="relative"> {/* Adjust margins as needed */}
      <Heading as="h2" size="lg" mb={2} fontFamily={"sans-serif"}>New Launches</Heading>
      <Text mb={4}>New wellness range just for you!</Text>
      <Slider {...settings}>
        {Data.new_launches.map((el, index) => (
          <Box
            key={index}
            p={1}
            m="0 2px" // Minimal margin between items
            width="160px"
            position="relative"
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            // border={"1px solid"}
          > {/* Adjust padding, margin, and width */}
            <Box
              position="relative"
              overflow="hidden"
              borderRadius="md"
               border="1px solid #E6EBF4"
               marginLeft={"20px"}
               width={"160px"}
               height={"170px"}
               display="flex"
              flexDirection="column"
              alignItems="center"
              gap={"5px"}
              transition="box-shadow 0.3s"
              _hover={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}

            >
              <Image
                src={el.image}
                alt={el.title}
                borderRadius="md"
                width="120px"
                height="120px"
                mt={"20px"}
                // border="1px solid #E6EBF4"
              />
            </Box>
            <Text mt={2} fontSize="sm" noOfLines={2} fontWeight={"500"}>{el.title}</Text>
            <Text mt={1} color="gray.500" fontSize="sm">
              <Text as="span" fontWeight="bold">{el.dis_price}</Text> &nbsp;
              <Text as="span" textDecoration="line-through" color="red.500">{el.price}</Text>
              &nbsp; <Text as="span" color="#F47779" fontWeight={"500"}>{el.discount}</Text>
            </Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
