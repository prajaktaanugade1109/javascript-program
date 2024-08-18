console.log('================= 1.WAP to find the length or total number of character of the string=====================');
function FindLength(str) {
    var len = str.length;
    console.log(`Given string is      : ${str}`);
    console.log(`length of the string : ${len}`);   
}
FindLength("Hello, World!");
FindLength("JavaScript is the language of Internet");


console.log('================ 2.WAP to print or log the last character of the given strings================');
function getLastCharacter(str) {
    return str.charAt(str.length-1);
    
}
const str1 = "Hey, my friend,Programming Language";
const str2 = "I am learning logical programs";
const str3 = "Angular";

 console.log(`Last character of the string   "${str1}"  is: ${getLastCharacter(str1)}`);
 console.log(`Last character of the string   "${str2}"  is: ${getLastCharacter(str2)}`);
 console.log(`Last character of the string   "${str3}"  is: ${getLastCharacter(str3)}`);


 console.log('================ 3.WAP to print or log the first character of the given strings================');
 function getFirstCharacter(str) {
    return str.charAt(0);
 }
 const str4 = "React";
 const str5 = "Elon Musk";
 const str6 = "Apple founder is Stew Job";

 console.log(`The first character of the string   "${str4}"   is: ${getFirstCharacter(str4)}`);
 console.log(`The first character of the string   "${str5}"   is: ${getFirstCharacter(str5)}`);
 console.log(`The first character of the string   "${str6}"   is: ${getFirstCharacter(str6)}`);


 console.log('================ 4.WAP to check whether given strings contains word UI OR NOT ================');
function contains(word) {
    const res = word.includes('UI');
    console.log(`Given String is        : ${word} `);
    console.log(`Given String is        : ${res} `);  
}
contains("React - UI Developer");
contains("UI Developer");
contains("FrontEnd and Backend Technologies");


console.log('================ 5.WAP to How do you split a string into an array of substring ? ================');
function splitString(str) {
    const strSplit = str.split(",");
    console.log(`Given String is :       "${str}" `);
    console.log(`After split into array of substring   ` , strSplit);

}
splitString("apple, orange, banana");
splitString("Stew, bill, Jenny, Elon");


console.log('================ 6.WAP to reverse the string using any existing methods-Part A ================');
function reverseString(str) {
    let result = str.split('').reverse().join('');
    console.log(`Given String is :     "${str}",      reverse string is:     "${result}"`);  
}
reverseString("Software");
reverseString("UI Developer");

console.log('================ 6.WAP to reverse the string using any existing methods-Part A ================');
function reverseString1(str) {
    let reverse = "";
    for (let index = str.length-1; index >=0; index--) {
        const char = str.charAt(index);
        reverse = reverse+char;   
    }
    console.log(`Given String is :      "${str}",     reverse string is:       "${result}"`);  

}
reverseString("Web Developer");
reverseString("Billion Dollar");
reverseString("Java");
    


    





