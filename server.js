const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./app/models/db.js");

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
  res.json({ message: "Welcome to NodeJS application" });
});

require("./app/routes/site.routes.js")(app);
require("./app/routes/user.routes.js")(app);
require("./app/routes/region.routes.js")(app);
require("./app/routes/event.routes.js")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
