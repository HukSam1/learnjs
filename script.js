console.log('Hello World');
var num = 1; // don't use var anymore
let num2 = 2; 
console.log(num2, num);
num = 3.5;
console.log(typeof num);
num = 3;
console.log(typeof num);
let text = 'Hugo';
console.log(typeof text);
let bool = true;
console.log(typeof bool);
bool = false;
console.log(typeof bool);
let nothing;
console.log(typeof nothing);
nothing = undefined;
nothing = null;
console.log(typeof nothing);
let array = [1, 2, 3, 4, 'sad', true, 3.5];
console.log(typeof array);
let obj = {
    name: 'Hugo', 
    age: 32, 
    cat: ['Kitty'], 
    data: {
        phone: '55612811', 
        email: 'hugsamuelrohusaar@gmail.com'
    }
};
console.log(typeof obj);
function hello() {
    console.log('hello');
}

console.log(typeof hello);