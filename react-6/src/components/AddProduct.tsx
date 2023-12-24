import {
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { ProductTypes } from "../definations/types";
import { initialProductDetailsState } from "../definations/constants";

interface Properties {
  addNewProduct: (product: ProductTypes) => void;
}

export const AddProduct = ({ addNewProduct }: Properties) => {
  const [productDetails, setProductDetails] = useState<ProductTypes>(
    initialProductDetailsState
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProductDetails({
      ...productDetails,
      [name]: value,
    });
  };

  const handleClick = () => {
    if (!Object.is(productDetails, initialProductDetailsState)) {
      addNewProduct(productDetails);
      setProductDetails(initialProductDetailsState);
    }
  };

  return (
    <Container maxW={"100%"}>
      <Heading as={"h2"} fontSize={"35px"} textAlign={"center"} mb={4}>
        Add Products
      </Heading>
      <FormControl isRequired>
        <FormLabel>Title</FormLabel>
        <Input
          variant={"filled"}
          _placeholder={{ opacity: 0.6, color: "black" }}
          color={"black"}
          name={"title"}
          value={productDetails.title}
          onChange={handleChange}
          size={"sm"}
          placeholder="Please enter product title"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Description</FormLabel>
        <Textarea
          placeholder="Please enter product description"
          size={"sm"}
          variant={"filled"}
          name={"description"}
          value={productDetails.description}
          onChange={handleChange}
          _placeholder={{ opacity: 0.6, color: "black" }}
          color={"black"}
        />
      </FormControl>
      <HStack>
        <FormControl isRequired>
          <FormLabel>Brand</FormLabel>
          <Input
            variant={"filled"}
            _placeholder={{ opacity: 0.6, color: "black" }}
            color={"black"}
            name={"brand"}
            value={productDetails.brand}
            onChange={handleChange}
            size={"sm"}
            placeholder="Please enter product brand"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Category</FormLabel>
          <Input
            variant={"filled"}
            _placeholder={{ opacity: 0.6, color: "black" }}
            color={"black"}
            size={"sm"}
            name={"category"}
            value={productDetails.category}
            onChange={handleChange}
            placeholder="Please enter product category"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Rating</FormLabel>
          <Input
            variant={"filled"}
            _placeholder={{ opacity: 0.6, color: "black" }}
            color={"black"}
            size={"sm"}
            name={"rating"}
            value={productDetails.rating}
            onChange={handleChange}
            placeholder="Please enter product rating"
          />
        </FormControl>
      </HStack>
      <HStack>
        <FormControl isRequired>
          <FormLabel>Stock</FormLabel>
          <Input
            variant={"filled"}
            _placeholder={{ opacity: 0.6, color: "black" }}
            color={"black"}
            size={"sm"}
            name={"stock"}
            value={productDetails.stock}
            onChange={handleChange}
            placeholder="Please enter product stock"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Price</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="black"
              fontSize="1.2em"
            >
              $
            </InputLeftElement>
            <Input
              variant={"filled"}
              _placeholder={{ opacity: 0.6, color: "black" }}
              color={"black"}
              size={"sm"}
              name={"price"}
              value={productDetails.price}
              onChange={handleChange}
              placeholder="Please enter product price"
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Discount %</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="black"
              fontSize="1.2em"
            >
              $
            </InputLeftElement>
            <Input
              variant={"filled"}
              _placeholder={{ opacity: 0.6, color: "black" }}
              color={"black"}
              size={"sm"}
              name={"discountPercentage"}
              value={productDetails.discountPercentage}
              onChange={handleChange}
              placeholder="Please enter product discount available"
            />
          </InputGroup>
        </FormControl>
      </HStack>
      <FormControl isRequired>
        <FormLabel>Product Image</FormLabel>
        <Input
          variant={"filled"}
          _placeholder={{ opacity: 0.6, color: "black" }}
          color={"black"}
          size={"sm"}
          name={"thumbnail"}
          value={productDetails.thumbnail}
          onChange={handleChange}
          placeholder="Please enter product thumbnail"
        />
      </FormControl>
      <Button mt={3} variant={"outline"} onClick={handleClick}>
        Submit Details
      </Button>
    </Container>
  );
};
