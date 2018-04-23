import config from './config/app_config.json';

/* import user from "./models/User";
import product from "./models/Product"; */

/* import * as models from "./models/*"; */

import User from "./models/User";
import Product from "./models/Product";

console.log(`${config.name}`);

/* console.log(User); */

new User();
new Product();




