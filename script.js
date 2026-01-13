const expresss = require("express");
const app = expresss();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log(`Test server running on port: ${PORT}`);
});