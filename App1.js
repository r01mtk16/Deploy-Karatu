const realine = require('readline');
const r1 = realine.createInterface({
    input: process.stdin,
    output: process.stdout

});


r1.question("Please enter your name:", (name) => {
    console.log("You entered: "+name);
    r1.close();
});

r1.on('close', () => {
console.log("Interface closed");
process.exit(0);
});
