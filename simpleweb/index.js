const express = require("express");

const app = express();

app.listen(8080, () => {
    console.log("Server listening at port 8080");
})

app.get("/", (req, res) => {
    res.status(200).send("Hello World!")
})