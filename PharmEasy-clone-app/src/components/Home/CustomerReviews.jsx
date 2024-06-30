import React from 'react';
import PropTypes from 'prop-types';
import Data from './Data.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Box, IconButton, Heading, Text } from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa6";

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

const ReviewsCarousel = () => {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 3.5, // Display 3.5 boxes per slide
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
        settings: { slidesToShow: 3.5, slidesToScroll: 1 }, // Adjust for larger screens
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2.5, slidesToScroll: 1 }, // Adjust for medium screens
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1.5, slidesToScroll: 1 }, // Adjust for small screens
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 }, // Adjust for very small screens
      },
    ],
  };

  return (
    <Box marginLeft="80px" marginRight="80px" position="relative"> {/* Adjust margins as needed */}
      <Heading as="h2" size="lg" mb={10} fontFamily={"sans-serif"} mt="10">What Our Customers have to Say</Heading>
      <Slider {...settings}>
        {Data.reviews.map((review, index) => (
          <Box
            key={index}
            p={4}
            m="0 2px" // Minimal margin between items
            // borderWidth="1px"
            
            overflow="hidden"
            textAlign="left"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            bg="white"
            _hover={{ boxShadow: 'md' }}
          >
            <Box mb={4}>
              <Text fontWeight="bold">{review.name}</Text>
              <Text fontSize="sm" color="gray.500">{review.date}</Text>
            </Box>
            <Box border={"1px solid #D7FAF8"} height={"300px"} bg={"#F2FFF8"} borderRadius={"4px"}>
                <FaQuoteLeft color='#BFEDDD' size={"40px"}/>
                <Text m={10}>{review.review}</Text>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ReviewsCarousel;
