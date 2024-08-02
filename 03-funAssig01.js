
console.log("========= Printing two functions with no arguments and no return value =========");

function demo() {
    console.log("Hellow World!");
}

function demo02() {
    console.log("I am learning JavaScript");

}

demo();
demo02();


console.log("========= Functions with arguments and no return value =========");

function personDetails(firstName, lastName, collegeName) {
    console.log("My First name is:", firstName);
    console.log("My Last name is:" , lastName);
    console.log("My College name is:" , collegeName);
}

personDetails("Prajakta", "Anugade"," KIT Imer College,Kolhapur");


console.log("=====3 parameters function, Parameters can be added together ======");

function addThreeValues(value1, value2, value3){
    var result = value1 + value2 + value3;
    return result;
}
var finalResult = addThreeValues(10.23 , 600, 40);
console.log("The addition of three values is:" , finalResult);

var finalResult = addThreeValues("Hello ", "Good ", "Morning");
console.log("The addition of three values is:" , finalResult);