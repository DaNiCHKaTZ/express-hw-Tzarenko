const express = require("express");
const app = express();
const appRoutes = require("./src/routes/basic.js");
app.use(express.json());
app.use("/", appRoutes);
app.listen(3000, () => {
    console.log("Server is running on the 3000 port");
});
