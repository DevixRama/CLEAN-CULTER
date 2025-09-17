
const fs = require('fs');
const path = require("path")

let files = fs.readdirSync(__dirname);


for (const file of files) {


    const ext = path.extname(file)

    const folderName = ext.slice(1).toUpperCase()

    const folderPath = path.join(__dirname, folderName);

    const oldPath = path.join(__dirname, file);

    const newPath = path.join(__dirname,`${folderName}`, file);




    if (fs.existsSync(folderPath)) {
        fs.renameSync(oldPath, newPath);
    }
    else if(ext === ".js" || ext === ".json" ){
        
        console.log(`${ext} file pass`);
    }
    else {
        fs.mkdirSync(folderPath);
        fs.renameSync(oldPath, newPath);
    }

}
