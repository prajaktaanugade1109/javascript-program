
console.log(`======== count prime numbers ===========`);
const array = [3, 9, 7, 6, 19, 29, 53];

function isPrime(num){
    for (let index = 2; index < num; index++) {
        if(num%index==0){
            return false;
        } 
    }
   return true; 
}
    let count =0;
    for (const element of array) {
        var result = isPrime(element);

        if(result==true){
           count++;    
        }    
    }
    console.log(`Given array is: ${array}`); 
    console.log(`Total count of prime number : ${count}`); 

var result = isPrime(3);
console.log(`Is number 3 Prime - ${result}`);

var result = isPrime(9);
console.log(`Is number 9 Prime - ${result}`);

var result = isPrime(7);
console.log(`Is number 7 Prime - ${result}`);

var result = isPrime(6);
console.log(`Is number 6 Prime - ${result}`);

var result = isPrime(19);
console.log(`Is number 19 Prime - ${result}`);

var result = isPrime(29);
console.log(`Is number 29 Prime - ${result}`);

var result = isPrime(53);
console.log(`Is number 53 Prime - ${result}`);



console.log('======== Count space in string ========');

function spaceCount(inputString) {
    return inputString.split(' ').length - 1;
    
}
const string1= "Revision is the mother of success";
const string2 = "JavaScript is the language of internet world";

const count1 = spaceCount(string1);
const count2 = spaceCount(string2);

console.log(`Total spaces in string1 is : ${count1}`);
console.log(`Total spaces in string2 is : ${count2}`);



