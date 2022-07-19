const { writeFile, readFile, writeFileSync, readFileSync } = require('fs');

// Writing and Reading synchronously
writeFileSync('./result.txt', 'NextGenApps Training session', {encoding: 'utf-8'});

const readFileResult = readFileSync('./data.txt', {encoding: 'utf-8'});

console.log(readFileResult);

// Reading and Writing asynchronously.

writeFile('./resultAsync.txt','NextGenApps Training Session', (err, result) => {
    console.log(result);
})