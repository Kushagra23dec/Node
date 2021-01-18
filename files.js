const fs = require('fs');


// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');




// writing files

// fs.writeFile('./docs/blog12.txt', 'hello, World', () =>{
//     console.log('file was written');
// });




// directories

if(!fs.existsSync('./assests')){
fs.mkdir('./assests', (err) =>{
    if(err){
        console.log(err);
    }
    console.log('folder created');
});
}

else {
    fs.rmdir('./assests', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    });
}





// deleting files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}