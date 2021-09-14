const fs = require('fs');

/* fs.mkdir('./tmp')
.then((err) => {
  console.log('success dir')
})

fs.writeFile('./tmp/info.txt', 'Hello world and Node')
.then((err) => {
  console.log('success file')
}) */

fs.readFile('./text.txt', 'utf8', (err, file) => { 
  console.log(file)
});
