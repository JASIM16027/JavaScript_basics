const fs = require('fs');
fs.writeFileSync('myfile1.txt','Hello, Md. Jasim Uddin. ');
fs.appendFileSync('myfile1.txt', 'What are you doing?');

fs.readFile('myfile1.txt',(err,data)=>{
    console.log(data.toString());
});

console.log('Hello');