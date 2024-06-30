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
    <Box marginLeft="50px" marginRight="50px" position="relative"  mr={"80px"}
    ml={"80px"}
    mt={"80px"}
    mb={"80px"}> {/* Adjust margins as needed */}
      <Heading as="h2" size="lg" mb={4} fontFamily={"sans-serif"}>Shop by Categories</Heading>
      <Slider {...settings}>
        {Data.shop_by_category.map((el, index) => (
          <Box
            key={index}
            p={1}
            m="0 5px"
            width="120px"
            position="relative"
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"

          > {/* Adjust padding, margin, and width */}
            <Box
              position="relative"
              overflow="hidden"
              borderRadius="md"
               border="1px solid #E6EBF4"
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
                // marginLeft={"40px"}
              />
            </Box>
            <Text mt={2} fontWeight={"500"}>{el.title}</Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
