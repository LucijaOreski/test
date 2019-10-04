var name = 'Lucija'; 
console.log(name);

function sayName(){
    console.log('Hello');
}
sayName();

var sayAge = function(){
    console.log('My age is 21.');
}
sayAge(); 

var person = {
    firstName : 'Lucija',
    lastName : 'Oreški',
    age : 21,
    eyeColor : 'green',
};
console.log(person);

function sayHello(){
    console.log('Hello, my name is ' + name + '.')
}
sayHello();

var age = 21;
function sayAge(){
    console.log('My age is ' + age + '.')
}
sayAge();

function sayAll(){
    sayHello();
    sayAge();
}
sayAll();

console.log('Final');

function sayFullName(){
    const namee = 'Jesse';
    const agee = 20;

    console.log(namee, agee);
}
sayFullName();

const sayName1 = (name12, cb) => {
    console.log(`My name is ${name12}`);
    cb();
}

function callback(){
    console.log('This ran at the end');
}
sayName1('Ed', callback);

console.log('first');

setTimeout(() => {
    console.log('from callback');
}, 2000);
console.log('last');

async function getData(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done'), 3000);
    });
    let result = await promise; 
    console.log(result);
}
getData();

const lastName = 'Oreski';
console.log(lastName);
const height = 165;
console.log(height);
function sayLastName(){
    console.log(`Hello there, my last name is ${lastName}`);
}
sayLastName();
function sayHeight(){
    console.log(`Hello there, my height is ${height}`);
}
sayHeight();