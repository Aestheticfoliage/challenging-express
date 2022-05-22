const express = require("express");

// initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// this is starting the server on the port
app.listen(PORT, () => console.log("Listening on PORT: ${PORT}"));
