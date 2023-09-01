// 2. Doc file du lieu va in ra console
const fs = require("fs");

fs.readFileSync("./product-data.json", (err, data)=>{
    if (err) throw err;
    console.log(data.toString());
});
// fs.readFile("./product-data.json", (err, data)=>{
//     if (err) throw err;
//     console.log(data.toString());
// });



// 3. Xay dung server
const express = require("express");
const app = require("./app");

app.listen(8000, function() {
    console.log("Server is running on port " + 8000);
});

