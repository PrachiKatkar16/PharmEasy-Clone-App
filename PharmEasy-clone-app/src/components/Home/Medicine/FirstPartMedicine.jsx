import {
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    FaCheckCircle,
    FaPercentage,
    FaRegCalendarAlt,
    FaPhoneAlt,
    FaPrescription,
    FaTimesCircle,
    FaSearch,
    FaShoppingCart,
    FaMapMarkerAlt

  } from 'react-icons/fa';
  
  const App = () => {
    const bg = useColorModeValue('teal.50', 'teal.900');
    const textColor = useColorModeValue('gray.700', 'gray.200');
    const iconColor = useColorModeValue('gray.500', 'gray.300');
    return (
      <Box
        bg={bg}
        py={10}
        px={4}
        maxW="100%"
        color={textColor}
        mx="auto"
        rounded="md"
      >
        <Heading as="h2" size="xl" fontWeight="bold" mb={4} textAlign="center">
          Order Medicines Online
        </Heading>
        <Flex justify="space-around" mb={6}>
          <Stack spacing={0} align="center" direction="row">
            <Icon as={FaCheckCircle} color={iconColor} w={6} h={6} />
            <Text fontSize="md" fontWeight="semibold">
              Upto 25% Off
            </Text>
          </Stack>
          <Stack spacing={0} align="center" direction="row">
            <Icon as={FaRegCalendarAlt} color={iconColor} w={6} h={6} />
            <Text fontSize="md" fontWeight="semibold">
              1 Lakh+ Products
            </Text>
          </Stack>
          <Stack spacing={0} align="center" direction="row">
            <Icon as={FaCheckCircle} color={iconColor} w={6} h={6} />
            <Text fontSize="md" fontWeight="semibold">
              Easy Returns
            </Text>
          </Stack>
        </Flex>
        <Box maxW="md" mx="auto" mb={6}>
          <InputGroup mb={4}>
            <Input
              type="text"
              placeholder="Search medicines/Healthcare products"
              borderRadius="md"
              _focus={{
                borderColor: 'teal.500',
                boxShadow: 'none',
              }}
            />
            <InputRightElement pointerEvents="none">
              <Icon as={FaSearch} color={iconColor} />
            </InputRightElement>
          </InputGroup>
          <InputGroup mb={4}>
            <Input
              type="text"
              placeholder="400001, Mumbai"
              borderRadius="md"
              _focus={{
                borderColor: 'teal.500',
                boxShadow: 'none',
              }}
            />
            <InputRightElement pointerEvents="none">
              <Icon as={FaMapMarkerAlt} color={iconColor} />
            </InputRightElement>
          </InputGroup>
          <Select
            placeholder="Order via Prescription"
            borderRadius="md"
            _focus={{
              borderColor: 'teal.500',
              boxShadow: 'none',
            }}
          >
            <option value="option1">Order via Prescription</option>
            <option value="option2">Dont have a Prescription</option>
          </Select>
        </Box>
        <Flex justify="center" mb={6}>
          <Button
            colorScheme="teal"
            size="lg"
            variant="solid"
            rightIcon={<Icon as={FaShoppingCart} />}
          >
            Order Medicines Online
          </Button>
        </Flex>
        <Flex justify="center" mb={6}>
          <Text fontSize="md" fontWeight="semibold">
            Or Call on{' '}
            <Text as="span" color="teal.500">
              +91 80698 09760
            </Text>
          </Text>
        </Flex>
      </Box>
    );
  };
  
  export default App;