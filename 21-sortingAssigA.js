
console.log("======= Sorting in Ascending/Descending order and reverse =========");

const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ]
console.log(`Given array is : ${arrayRollNumbers}`); 

console.log('====== 1. Reverse the array ======');

const reverseArray = arrayRollNumbers.reverse((n1, n2)=> {
    return n1 > n2 ? -1 : 1;
});
console.log(`Reverse array is : ${arrayRollNumbers}`); 

console.log('====== 2. Use the sort() method as without any custom sorting logic(without passing any arguments) ======');
const arraySort = arrayRollNumbers.sort();
console.log(`Given array is : ${arrayRollNumbers}`); 
console.log(`Result using sort() : ${arraySort}`); 

console.log('====== 3. Sort array in ascending order ======');

const arrAscending = arrayRollNumbers.sort((n1, n2)=> {
return n1 > n2 ? 1 : -1;
});
console.log(`Array in ascending order : ${arrayRollNumbers}`); 

console.log('====== 4. Greatest number from the array ======');

// let Greatest = 0;
// for (let index = 0; index < arrAscending.length; index++) {
    // if (arrAscending[index]> Greatest) {
       //  Greatest = arrAscending[index];
    // }

//}

let Greatest = arrAscending[arrAscending.length-1];
console.log(`Greatest number in array : ${Greatest}`); 

console.log('====== 5. Smallest number from the array ======');

let Smallest = arrAscending[0];
console.log(`Smallest number in array : ${Smallest}`); 

console.log('====== 6. Remove duplicates from array ======');

const uniqueArray = [];

for (let index = 0; index < arrayRollNumbers.length; index++) {
    let element = arrayRollNumbers[index];
    if(uniqueArray.indexOf(element) == -1 ){
        uniqueArray.push(element);
    }
}

console.log(`Remove duplicates is : ${uniqueArray}`); 


