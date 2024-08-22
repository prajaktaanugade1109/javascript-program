
const emp = {
    firstName: "Jenny",
    lastName: "Gate",
    age: 56
}
//emp = {
    //city: "LA"
//}
emp.age = 80;
console.log(emp);

Object.freeze(emp);
emp.firstName = "Elon";
console.log(emp);


console.log('=========Object cloning or merging =============');
const student = {
    firstName: "Jenny",
    lastName: "Gate",
    age: 56
}
const clonedStudent = Object.assign({}, student);
console.log(clonedStudent);

const clonedObj = {...student};
console.log(clonedObj);

console.log('=========Object merge =============');
const std = {
    firstName: "Jenny",
    lastName: "Gate",
    age: 56
}
const address = {
    city: "LA",
    pin: 411057
}
const mergeObject = Object.assign({},std, address);
console.log(mergeObject);
const mergeObj = {...std, ...address};
console.log(mergeObj);


