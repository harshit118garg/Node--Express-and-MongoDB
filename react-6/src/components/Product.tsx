import {
  Badge,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Star } from "lucide-react";
import { ProductTypes } from "../definations/types";

interface Properties {
  product: ProductTypes;
}

const Product = ({ product }: Properties) => {
  return (
    <Card
      w={"100%"}
      bg={"gray.700"}
      padding={2}
      color={"white"}
      boxShadow={"lg"}
      borderRadius="lg"
    >
      <CardBody sx={{ flex: 1 }}>
        <Image
          w={"100%"}
          h={"150px"}
          objectFit="fill"
          src={product.thumbnail}
          borderRadius="lg"
          alt={product.title}
          fallbackSrc="https://via.placeholder.com/150"
        />
        <Stack mt="6" spacing="2">
          <HStack
            spacing={2}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Heading fontSize={"22.5px"} fontWeight={600}>
              {product.title}
            </Heading>
            <VStack>
              <Badge bg="green" px={2} borderRadius={2} boxShadow={"lg"}>
                {product.category}
              </Badge>
              <Badge bg="purple" px={2} borderRadius={2} boxShadow={"lg"}>
                {product.brand}
              </Badge>
            </VStack>
          </HStack>
          <Text noOfLines={1}>{product.description}</Text>
          <Text textAlign={"end"}>
            Currently Present Items in Stock - {product.stock}
          </Text>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Text color="red.200" fontSize="2xl">
              $ {product.price}
            </Text>
            <Tag
              size={"sm"}
              key={"sm"}
              variant="solid"
              bg="teal.800"
              borderRadius={2}
              px={2}
            >
              {product.rating}
              &nbsp;
              <Star color="#e1ef25" fill="#e1ef25" />
            </Tag>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Product;
