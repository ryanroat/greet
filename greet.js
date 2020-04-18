const myArgs = process.argv.slice(2);
const name = myArgs.slice(0, 1);

// console.log(myArgs);

function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet(name);
