console.log('============== Find 1st and last element in the arrayList ==========================');
const fruits= ["Banana","Orange","Apple","Mango","Water Melon"];
console.log('first element is: Banana');
console.log('Last element is: Water Melon');
console.log(fruits);

console.log('================ 2.Add Papaya before the element "Banana"============================');
fruits.unshift("Papaya");
console.log(fruits);

console.log('================3.Remove Mango from  the array ===============');
let fruitsOne = ["Banana","Orange","Apple","Mango","Water Melon"];
let splice = fruitsOne.splice(3,1);
console.log(fruitsOne);
console.log(`Removed fruit is: ${splice}`);   
console.log(fruitsOne);

console.log('================4.Insert an element Pineappleat the last ===============');
let fruitsTwo = ["Banana","Orange","Apple","Mango","Water Melon"];
let fruitsPush = fruitsTwo.push(" Pineappleat");
console.log(fruitsTwo);

console.log('================5.Insert an element Dragon Fruit ===============');
const fruitsThree = ["Banana","Orange","Apple","Mango","Water Melon"];
let splice2 = fruitsThree.splice(4,0, "Dragon Fruit");
console.log(fruitsThree);

console.log('================6.Replace an element Orange with Kiwi ===============');
const fruitsFour = ["Banana","Orange","Apple","Mango","Water Melon"];
let splice3 = fruitsFour.splice(1,1, "Kiwi")
console.log(`Replace fruit is: ${splice3}`);   
console.log(fruitsFour);

console.log('================7.Log elements starting from index 1 to 4 ===============');
const fruitsFive = ["Banana","Orange","Apple","Mango","Water Melon"];
let splice4 = fruitsFive.splice(1,4)
console.log(`Element index 1 to 4: ${splice4}`);
console.log(fruitsFive);
   
console.log('================8.Last 3 elements ===============');
const fruitsSix = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruitsSix.splice([fruitsSix.length-3]));



