const fs = require("fs");
const calc = require("./index");
var result = calc.amortization(400000, 400000, 30, 0.65);

fs.writeFile("result.json", JSON.stringify(result), null, (err) => {
  if (err) {
    console.log("error occured");
  } else {
    console.log("done successfully");
  }
});
