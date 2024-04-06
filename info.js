const os = require('os');

// Platform
console.log('Platform:', os.platform());

// CPU Architecture
console.log('Architecture:', os.arch());

// CPU Information
console.log('CPUs:', os.cpus());

// Total Memory
console.log('Total Memory (bytes):', os.totalmem());

// Free Memory
console.log('Free Memory (bytes):', os.freemem());

// Hostname
console.log('Hostname:', os.hostname());

// Network Interfaces
console.log('Network Interfaces:', os.networkInterfaces());

// Operating System Type
console.log('OS Type:', os.type());

// Operating System Release
console.log('OS Release:', os.release());

// System Uptime
console.log('Uptime (seconds):', os.uptime());
console.log("user:",os.userInfo())