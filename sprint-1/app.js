const path = require("node:path");
var object = path.parse(__filename);
console.log(object);

const os = require("node:os");
var totalMemory = os.totalmem();
console.log(`Total memory: ${totalMemory}`);
