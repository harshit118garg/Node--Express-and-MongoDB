require("dotenv").config({ path: "../config.env" });
const express = require("express");
const morgan = require("morgan");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");

const PORT = process.env.PORT;

const server = express();

// middleware
server.use(express.json()); // middleware used for sending json/html files [body-parser]
server.use(morgan("short")); // middleware used for logging
server.use(express.static("public")); // middleware used for static file hosting
// routes middleware
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
