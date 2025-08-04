const os = require("os");

const cpuCount = os.cpus().length;
console.log("cpu count", cpuCount);

console.log(process);
