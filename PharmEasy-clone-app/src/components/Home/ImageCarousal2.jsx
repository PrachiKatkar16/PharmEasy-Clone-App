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
  // Fetching data from Data.json
  const labTests = Data.lab_tests_by_healthConcern;

  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 6, // Display 6 images per slide
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false, // Disable autoplay
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 7, slidesToScroll: 1 }, // Adjust slidesToShow as needed
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 6, slidesToScroll: 1 }, // Adjust slidesToShow as needed
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 5, slidesToScroll: 1 }, // Adjust slidesToShow as needed
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 4, slidesToScroll: 1 }, // Adjust slidesToShow as needed
      },
    ],
  };

  return (
    <Box marginLeft="80px" marginRight="80px" > {/* Adjust margins as needed */}
      <Heading as="h2" size="lg" mb={0} fontFamily={"sans-serif"}>Lab Tests by Health Concern</Heading>
      <Box display={"flex"} gap={"5px"} margin={0}>
        <Text>Powered by</Text>
        <Image src='https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1440x0' width={"90px"} height={"18px"} margin={"5px"}/>
      </Box>
      <Slider {...settings}>
        {labTests.map((el, index) => (
          <Box key={index} p={1} display={"flex"} paddingRight="0" gap={"5px"} justifyContent={"center"} marginTop={"20px"} > {/* Adjust padding and margin */}
            <Image src={el.image} alt={`Lab Test ${index + 1}`} borderRadius="md"  w={"180px"} height={"190px"}/>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
