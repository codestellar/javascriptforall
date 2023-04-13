const fs = require("fs");
fs.readFile("users.json", function (err, data) {
  const users = JSON.parse(data);
  console.log(hasDuplicates(users));

});

const hasDuplicates = (data) => {
    const idSet = new Set();
    const hasDuplicateData = data.some((element) => {
     // for each element in test[] try to add the id to idSet
     return idSet.size === idSet.add(element.id).size;
   });
   return hasDuplicateData;
}
