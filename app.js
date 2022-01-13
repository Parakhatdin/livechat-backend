const express = require("express");
const app = express()

app.get("/", (req, res) => {
    res.json({
        "name": "Parakhatdin",
        "age": 23
    });
});

app.listen(3300);