const http = require("http");
const fs = require("fs");

const PORT = 8081;

const htmlFile = fs.readFileSync("index.html", "utf8");
const dataFile = JSON.parse(fs.readFileSync("./static/data.json", "utf8"));
const products = dataFile.products;

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/product")) {
    const id = Number(req.url.split("/")[2]);
    const product = products.find((p) => p.id === id);
    console.log("product", product);
    res.setHeader("Content-Type", "text/html");
    let modifiedHTML = htmlFile
      .replace("**title**", product.title)
      .replace("**url**", product.thumbnail)
      .replace("**desc**", product.description)
      .replace("**price**", product.price)
      .replace("**rating**", product.rating);
    res.end(modifiedHTML);
    return;
  }
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(htmlFile);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(dataFile));
      break;

    default:
      res.writeHead(404, "Not Found");
      res.end();
      break;
  }
  console.log("server started");
});

server.listen(PORT);
