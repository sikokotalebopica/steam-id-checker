// NIGGA BALLS
const fs = require('fs');
const { Worker } = require("worker_threads");

let ids = fs.readFileSync('input.txt', 'UTF-8').split(/\r?\n/);

console.log(`found ${ids.length} ids fuck you nigger`)

let mode = true; // false = profile ids / true = group ids

for(let i = 0; i < 50; i++) {
    let data = {
        ids : ids.splice(0, ids.length / 50),
        mode: mode
    }
    new Worker("./check.js", { workerData: data });
}