import config from './config/app_config.json';
let dirwatcher_loader = require('./DirWatcher');
let importer_loader = require('./Importer');

console.log(`${config.name}`);

var models = require("./models");

for(var index in models) {
    new models[index].default;
} 

let myDirwatcher = new dirwatcher_loader.DirWatcher();

myDirwatcher.watch('./data/', 1000);

let myImporter = new importer_loader.Importer(myDirwatcher);






