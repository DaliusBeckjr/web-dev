const fs = require('fs'); // fs means file system 


// reading files

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString()); // to turn the data into a string to readability
// });

// writing files

// fs.writeFile('./docs/blog1.txt', 'well hello again', () => {
//     console.log("file was written"); // will replace what is written in our current file
// });

// // this didnt exist
// fs.writeFile('./docs/blog2.txt', 'well hello once more', () => {
//     console.log("file was written"); // will make a new file then write inside current file
// });

// directories

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("file created"); // this will create a new file within the root file atm
    });
}  else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// deleting files

if (fs.existsSync('./docs/deleteMe.txt')) {
    fs.unlink('./docs/deleteMe.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}
