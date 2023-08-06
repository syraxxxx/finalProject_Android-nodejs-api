const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to NodeJS application" });
});

app.get('/test-connection', async (req, res) => {
  try {
    // Replace 'your_test_query' with your actual test query or method
    // For example, if you are using MySQL:
    const result = await pool.query('SELECT 1');
    res.status(200).json({ message: 'Database connection successful' });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ error: 'Database connection failed' });
  }
});


// require("./app/routes/tutorial.routes.js")(app);
require("./app/routes/site.routes.js")(app);
require("./app/routes/user.routes.js")(app);
require("./app/routes/region.routes.js")(app);
require("./app/routes/event.routes.js")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
