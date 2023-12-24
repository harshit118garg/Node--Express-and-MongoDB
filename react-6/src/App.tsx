import "./App.css";
import {
  Flex,
  Container,
  Box,
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
  Heading,
} from "@chakra-ui/react";
import { AddProduct } from "./components/AddProduct";
import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";
import { ProductTypes } from "./definations/types";
import axios from "axios";

const theme = extendBaseTheme({}, chakraTheme);

function App() {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductTypes[]>([]);

  const fetchProducts = async () => {
    const res = await axios.get(`/products`);
    setProducts(res.data);
  };

  const addNewProduct = async (newProduct: ProductTypes) => {
    const res = await axios.post(`/products`, newProduct);
    alert(res.data.message);
    setProducts((productList) => [...productList, newProduct]);
  };

  useEffect(() => {
    setisLoading(true);
    fetchProducts();
    setisLoading(false);
  }, []);

  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <Container bg={"brown"} borderRadius={4} maxW={"100%"}>
          <Flex
            padding={4}
            alignItems={"center"}
            direction={{ base: "column" }}
            gap={4}
          >
            <Box
              w={"100%"}
              padding={3}
              bg={"blue.400"}
              borderRadius={3}
              color={"whitesmoke"}
            >
              <AddProduct addNewProduct={addNewProduct} />
            </Box>
            <Box
              w={"100%"}
              padding={3}
              bg={"blue.700"}
              borderRadius={3}
              color={"whitesmoke"}
            >
              {isLoading ? (
                <Heading>Products are loading....</Heading>
              ) : (
                <ProductList products={products} />
              )}
            </Box>
          </Flex>
        </Container>
      </ChakraBaseProvider>
    </>
  );
}

export default App;
