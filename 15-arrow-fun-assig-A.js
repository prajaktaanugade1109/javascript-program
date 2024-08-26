console.log('======= Arrow function with no arguments and no return value =======');

let show = ()=>{
    console.log('Good Morning, Today is Monday'); 
}
show();

console.log('======= Arrow function with arguments and no return value =======');
let multiply = (n1, n2, n3=1)=>{
    let result = n1 * n2 * n3;
    console.log(`Multiplication is: ${result}`); 

}
 multiply(5, 5, 2);
 multiply(10, 4);

 console.log('======= Arrow function with arguments and return value =======');

 let addition = (n1, n2, n3, n4, n5) => {
    let result = n1 + n2 + n3 + n4 + n5;
    return result;
}
let addResult = addition(100, 100, 200, 349, 756);
console.log(`Addition is : ${addResult}`);

let addResult2 = addition("I am ", "learning ", "ES6 ", "features", " in depth");
console.log(`Addition is : ${addResult2} `);
