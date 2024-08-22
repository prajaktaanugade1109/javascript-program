
function Student(fullName, graduation, collegeName, city) {
    this.fullName= fullName;
    this.graduation= graduation;
    this.collegeName= collegeName;
    this.city = city;
}
const std1 = new Student("Sid Gate", 2024, "Clg-one", "Pune");
console.log(std1);

const std2 = new Student("Jenny Many", 2023, "Clg-two", "Mumbai");
console.log(std2);

Student.prototype.Country = "India";
console.log(std1.fullName,std1.Country);

console.log(std2.fullName,std2.Country);


//Prototype
const array = [10,20,30,100];
array.push(500);
array.pop();

let friendList = ["Elon", "Bill", "Stew", "Jenny"];
friendList.splice(2,1);