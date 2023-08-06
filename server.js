const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db.js");

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.get("/", (req, res) => {
  res.json({ message: "Welcome to NodeJS application" });
});

app.get('/test-connection', async (req, res) => {
  try {
    const result = await pool.query('SELECT 1');
    res.status(200).json({ message: 'Database connection successful' });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

require("./app/routes/site.routes.js")(app);
require("./app/routes/user.routes.js")(app);
require("./app/routes/region.routes.js")(app);
require("./app/routes/event.routes.js")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
