import config from './config/app_config.json';
console.log(`${config.name}`);

var models = require("./models");

for(var index in models) {
    new models[index].default;
}
