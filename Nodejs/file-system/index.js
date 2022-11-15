const fs = require('fs');
fs.writeFileSync('myfile.txt','Hello, Md. Jasim Uddin. ');
fs.appendFileSync('myfile.txt','Where are you going?');
const data = fs.readFileSync('myfile.txt');

console.log(data.toString());

