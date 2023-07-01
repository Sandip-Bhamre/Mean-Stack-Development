const express = require("express");
const app = express();

// imports routes
const listingRoutes = require("./routes/listing");

app.use("/api/listning", listingRoutes)
app.listen(4000, () => console.log("Server started"))