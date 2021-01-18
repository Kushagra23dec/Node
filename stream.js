const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt');
const wirteStream = fs.createWriteStream('./docs/blogs4.txt');

readStream.on('data', (chunk) => {
   console.log(' ----- NEW CHUNK--------');
    console.log(chunk);
    fs.writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
});


// piping

readStream.pipe(writeStream);