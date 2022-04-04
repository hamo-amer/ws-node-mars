const fs = require("fs");
const path = require("path");
const http = require("http");

// const { sayHello, add } = require("./main");

// console.log(sayHello());
// console.log(add(2, 9));
// fs.writeFile("msg.txt", "Hello world from f1", (err, data) => {
//   if (err) {
//     console.log("ERROR");
//   } else {
//     console.log("file created..");
//   }
// });
// fs.readFile("msg.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error");
//   } else {
//     console.log(data);
//   }
// });
// console.log("End Program");

const server = http.createServer((req, res) => {
  fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
    if (err) {
      console.log("Error");
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(5000, () => console.log("server started"));
