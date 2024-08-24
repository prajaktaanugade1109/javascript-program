console.log('======= WAP to Remove duplicate element from array using loop =======');

function removeDuplicates(arr){
    
    let removeDuplicates = [];
    
    // loop through array
    for(let i of arr) {
        if(removeDuplicates.indexOf(i) === -1) {
            removeDuplicates.push(i);
        }
    }
console.log('After new removing duplicate elements');
console.log(removeDuplicates);
}

const arrayNum = [11, 3, 4, 11, 4,7,3];
console.log(`Given array is: ${arrayNum}`);
removeDuplicates(arrayNum);


console.log('====== WAP to given String value ======');

const str = "How are you mate";
let result = ' ';

for (let i = 0; i < str.length; i++) {
    result += i % 2 === 0 ?
    str[i]. toUpperCase():
    str[i]. toLowerCase();
}
console.log(result);

 

