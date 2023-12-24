import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import Product from "./Product";
import { ProductTypes } from "../definations/types";

interface Properties {
  products: ProductTypes[];
}

function ProductList({ products }: Properties) {
  return (
    <Container maxW={"100%"}>
      <Heading as={"h2"} fontSize={"35px"} textAlign={"center"} mb={4}>
        Product List
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        alignItems={"center"}
      >
        {products.map((product, index) => {
          return (
            <GridItem
              key={index}
              w={"100%"}
              h={"100%"}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Product product={product} />
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
}

export default ProductList;
