
console.log('==========1.WAP to list the properties of a javaScript object =============');
var student = {
    name : "David Rayy",
    class : "VI",
    rollno : 12
}
var property = Object.keys(student);
console.log(property);

console.log('==========2.WAP to delete the rollno property from the object deleting the property =============');
var student = {
    name : "David Rayya",
    class : "VI",
    rollno : 12
}
console.log('Before deleting roll no ->',student);
delete student.rollno;
console.log('After deleting roll no ->',student);

console.log('==========3.WAP to get the length of a javaScript object =============');
var car = {
    make : "Toyota",
    model: "camry",
    year : 2020,
    color: "blue"
}
const {make, model, year, color} = car;
const length = Object.keys({make, model, year, color}).length
console.log(`Length of object     -> ${length}`);

console.log('==========4.WAP to get dynamic access to an object property in JavaScript =============');
var person = {
    name : "John deo",
    age : 32,
    profession : "Developer"
}
console.log('Object property  ->',person.profession);

console.log('==========5.WAP to modify an objects property in an array of objects in JavaScript =============');
var employee = [
    {
        id: 1,
        name: "John Deo",
        profession : "Developer",
        salary : 3200
    }
];
function updatesalary(id,newSalary) {
    for (let i = 0; i < employee.length; i++) {
        if (employee[i].id == id) {
            employee[i].salary = newSalary;
            return;
            
        }
        
    }
}
updatesalary(1, 60000);
console.table(employee);

console.log('==========6.WAP to get the last item of JavaScript object =============');
var car = {
    make : "Toyota",
    model : "camry",
    year : 2020,
    color : "blue"
};
let key = Object.keys(car);
let lastkey = key[key.length-1]
console.log(`last item of object   -> ${lastkey} : ${car[lastkey]}`);

//Using Object.entries()
var car = {
    make : "Toyota",
    model : "camry",
    year : 2020,
    color : "blue"
};
let entries = Object.entries(car);
let lastEntry = entries[entries.length-1]
console.log(`6.last item of object entries   -> ${lastEntry[0]} : ${lastEntry[1]}`);

console.log('==========7.WAP to use array that include and check an object against a property of an object =============');
var student = [
    { id: 1, name: "John Doe", grade: "A"},
    { id: 1, name: "Jane Smith", grade: "B"},
    { id: 1, name: "Samuel Green", grade: "C"},

];
function checkStudentExists(id) {
    return student.filter((student) => student.id == id).length > 0;   
}
console.log(checkStudentExists(2));
console.log(checkStudentExists(4));


console.log('==========8.How to add an object to an array in JavaScript =============');
var fruit = ["apple", "banana", "orange"];
var newfruit = {
    name : "mongo",
    color : "purple"
}
fruit.push(newfruit);
console.log('Add object to array   ->',...fruit);

console.log('==========9.WAP to remove duplicates from an  array of objects using JavaScript =============');
var student = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 1, name: 'John Doe' },
    { id: 3, name: 'Samuel Green' },
    { id: 2, name: 'Jane Smith' },
    
];
function removeDuplicates(arr) {
    return arr.filter(
        (student, index, self) =>
            index ==
        self.findIndex((t) => t.id == student.id && t.name == student.name)
    );
}
var uniqueStudents = removeDuplicates(student);
console.table(uniqueStudents);

console.log('==========10.How to get a subset of a javascript objects properties  =============');
var person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    city: 'New York',
    country: 'USA'
};
var { firstName, lastName} = person;
console.log(firstName, lastName);

console.log('==========11.How to convert an object {} to an Array [] of key-value pairs in JavaScript  =============');
const obj = {
    key1:"value1",
    key2:"value2",
    key3:"value3"
}
let array = Object.entries(obj);
console.log(...array);

// using object.keys()
const obj2 = {
    key1:"value1",
    key2:"value2",
    key3:"value3",
};
const entries2 = Object.keys(obj2).map((key) => [key, obj2[key]]);
console.log(entries2);

console.log('==========12.How to check if a value is object - like in JavaScript  =============');
function isObjectLike(value) {
    return typeof value == "object" && value != null;
   
}
console.log(isObjectLike({}));
console.log(isObjectLike([]));
console.log(isObjectLike(null));
console.log(isObjectLike(42));
console.log(isObjectLike('string'));

console.log('==========13.How to use a variable for a key in a JavaScript object literal =============');

let key1 = 'name';
let value = 'John Doe';
let obj3 ={
    [key1]:value
};
console.log(obj3);
