const fs = require("fs");

const depto = [];
const prov = [];
const dist = [];

const callback = (err, data) => {
    const toString = JSON.stringify(data);
    const parsed = JSON.parse(toString);
    const cleaned = parsed.replace(/“|”/g, "");
    const newArray = cleaned.split("\n");
    // Step 1: Making the plain text usable
    console.log(newArray);
};

fs.readFile("./file.txt", "utf8", callback);