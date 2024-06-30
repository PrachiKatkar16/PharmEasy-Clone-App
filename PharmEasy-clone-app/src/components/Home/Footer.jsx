import {
  Box,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  AiOutlineGoogle,
  AiOutlinePayCircle,
  AiOutlineCreditCard,
} from "react-icons/ai";
import { IoIosWallet } from "react-icons/io";

const Footer = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Box bg={"#EEF4FF"} color={textColor} py={8} mt={16} ml={"40px"} mr={"40px"}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        px={{ base: 4, md: 16 }}
      >
        <Box>
          <Heading as="h3" fontSize="lg" fontWeight="bold">
            Company
          </Heading>
          <List spacing={2} mt={4}>
            <ListItem>
              <Link href="#">About Us</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Careers</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Blog</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Partner with PharmEasy</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Sell at PharmEasy</Link>
            </ListItem>
          </List>
          <Heading as="h3" fontSize="lg" fontWeight="bold" mt={8}>
            Our Services
          </Heading>
          <List spacing={2} mt={4}>
            <ListItem>
              <Link href="#">Order Medicine</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Healthcare Products</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Lab Tests</Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                Find Nearest Collection Centre
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Heading as="h3" fontSize="lg" fontWeight="bold">
            Featured Categories
          </Heading>
          <List spacing={2} mt={4}>
            <ListItem>
              <Link href="#">Must Haves</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Elderly Care</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Personal Care</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Healthcare Devices</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Health Food and Drinks</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Skin Care</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Mother and Baby Care</Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                Accessories & Wearables
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">Fitness Supplements</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Ayurvedic Care</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Sexual Wellness</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Diabetic Care</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Health Condition</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Home Care</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Trending Products</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Oral Care</Link>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Heading as="h3" fontSize="lg" fontWeight="bold">
            Need Help
          </Heading>
          <List spacing={2} mt={4}>
            <ListItem>
              <Link href="#">Browse All Medicines</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Browse All Molecules</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Browse All Cities</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Browse All Areas</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Browse All Stores</Link>
            </ListItem>
            <ListItem>
              <Link href="#">FAQs</Link>
            </ListItem>
          </List>
          <Heading as="h3" fontSize="lg"fontWeight="bold" mt={8}>
            Policy Info
          </Heading>
          <List spacing={2} mt={4}>
            <ListItem>
              <Link href="#">Editorial Policy</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Privacy Policy</Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                Vulnerability Disclosure Policy
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">Terms and Conditions</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Customer Support Policy</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Return Policy</Link>
            </ListItem>
            <ListItem>
              <Link href="#">Smartbuy Policy</Link>
            </ListItem>
          </List>
        </Box>
        <Box>
          <Heading as="h3" fontSize="lg" fontWeight="bold">
            Follow us on
          </Heading>
          <Flex align="center" mt={4}>
            <Link href="#">
              <FaInstagram size={24} />
            </Link>
            <Link href="#" mx={4}>
              <FaFacebook size={24} />
            </Link>
            <Link href="#" mx={4}>
              <FaYoutube size={24} />
            </Link>
            <Link href="#" mx={4}>
              <FaTwitter size={24} />
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Flex  mt={8}>
        <Heading as="h3" fontSize="lg" fontWeight="bold" ml={5} mb={"10"} >
          Our Payment Partners
        </Heading>
        <Flex  mt={10} gap={"10px"} justifyContent={"flex-start"}>
          <Link href="#" mr={4}>
            <Image src="https://assets.pharmeasy.in/apothecary/images/gpay.png?dim=1440x0" width={"60px"} />
          </Link>
          <Link href="#" mr={4}>
            <Image src="https://assets.pharmeasy.in/apothecary/images/paytm.png?dim=1440x0" width={"60px"} />
          </Link>
          <Link href="#" mr={4}>
            <Image src="https://assets.pharmeasy.in/apothecary/images/phonepe.png?dim=1440x0" width={"30px"} />
          </Link>
          <Link href="#" mr={4}>
            <Image src="https://assets.pharmeasy.in/apothecary/images/amazon.png?dim=1440x0" width={"30px"} />
          </Link>
          <Link href="#" mr={4}>
            <Image src="https://assets.pharmeasy.in/apothecary/images/mobikwik.png?dim=1440x0"width={"30px"} />
          </Link>
          <Link href="#" mr={4}>
            <Image src="https://assets.pharmeasy.in/apothecary/images/olamoney.png?dim=1440x0" width={"30px"} />
          </Link>
          <Link href="#" mr={4}>
            <Image src="https://assets.pharmeasy.in/apothecary/images/mastercard.png?dim=1440x0" width={"30px"} />
          </Link>
          <Link href="#" mr={4}>
            <Image src="https://assets.pharmeasy.in/apothecary/images/visa.png?dim=1440x0" width={"50px"} />
          </Link>
          <Link href="#" mr={4}>
            <Image src="https://assets.pharmeasy.in/apothecary/images/rupay.png?dim=1440x0" width={"60px"} />
          </Link>
        </Flex>
      </Flex>
      <Text textAlign="center" mt={4}>
        © 2024 PharmEasy. All Rights Reserved.
      </Text>
    </Box>
  );
};

export default Footer;