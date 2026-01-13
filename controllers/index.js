const awesomeFunction = (req, res) => {
    res.send("Hello World!");
}

const tTech = (req, res) => {
    res.send("Tooele Tech is Awesome!");
}

// Export both functions together
module.exports = {
    awesomeFunction,
    tTech
};
