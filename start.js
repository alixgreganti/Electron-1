const path = require('path');
const { fork } = require('child_process');
fork(path.join(__dirname, '/main.js'));
