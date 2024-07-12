const http = require("http");
const fs = require("fs");

const route = (req, res) => {
    if (req.url === "/") {
      res.setHeader("content-type", "html");
      res.write("<html>");
      res.write("<head>");
      res.write("<title>My First NodeJs App</title>");
      res.write("</head>");
      res.write(
        '<body> <h1>Welcome to my node js app</h1> <form action="/create-user" method="POST"> <input type="text" name="username" placeholder="username"/> <button>Click</button> </form> </body>'
      );
      return res.end();
    }
  
    if (req.url === "/user") {
      res.setHeader("content-type", "html");
      res.write("<html>");
      res.write("<head>");
      res.write("<title>My First NodeJs App</title>");
      res.write("</head>");
      res.write(
        "<body> <ul><li> User-1 </li><li> User-2 </li><li> User-3 </li></ul> </body>"
      );
      return res.end();
    }
  
    if (req.url === "/create-user") {
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
  
      return req.on("end", () => {
        const bodyText = Buffer.concat(body).toString();
        const massage = bodyText.split("=")[1];
        console.log(massage);
        fs.writeFile("massage.txt", massage, (err) => {
          res.statusCode = 302; 
          res.setHeader("Location", "/user");
          return res.end();
        });
      });
    }
  }

 exports = route