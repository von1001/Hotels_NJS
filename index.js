const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const app = express();

const DB = require('./database');

DB.sync();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Welcome! <br><br><a href='/api-docs'>To docs</a>");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

require("./routes/AuthRoutes")(app);
require("./routes/BookingRoutes")(app);
require("./routes/HotelRoutes")(app);
require("./routes/ReviewRoutes")(app);
require("./routes/RoleRoutes")(app);
require("./routes/RoomRoutes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});
