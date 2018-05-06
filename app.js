import config from './config/app_config.json';
console.log(`${config.name}`);

var models = require("./models");

var loader = require("./models/dirwatcher.ts");

require 

/* for(var index in models) {
    new models[index].default;
} */

let myDirwatcher = new loader.dirwatcher();

console.log(`${myDirwatcher.watch()}`);