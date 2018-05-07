import config from './config/app_config.json';
console.log(`${config.name}`);

var models = require("./models");

var loader = require("./models/dirwatcher.ts");

let myDirwatcher = new loader.dirwatcher();


console.log(`${myDirwatcher.watch()}`);