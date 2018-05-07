let fs = require('fs');
const csv=require('csvtojson');

const promisify = require('util');

export class Importer {

    constructor(dirWatcher){
        console.log('const_importer');
        dirWatcher.on('changed',(path) => {
            this.import(path);
            this.importSync(path);
        });
    }

    readCsvFile (error, data) {
        csv({noheader:true})
        .fromString(data)
        .on('json', (csvrow) => {
            console.log(csvrow);
        });
    };

    import(path) {
        fs.readFile(path, 'utf8', (error, data) => this.readCsvFile(error, data));
    };

    importSync(path) {
        console.log(fs.readFileSync(path));
    };
       
    
    

   
    
    

    
}
