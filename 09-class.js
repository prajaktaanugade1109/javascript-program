
class Student{
    //Constructor: Special method used to initialize an object
    constructor(fullName, graduation, collegeName, city){
             this.fullName= fullName;
             this.graduation= graduation;
             this.collegeName= collegeName;
             this.city = city;
    }
    //Member Function
    display() {
        console.log(`Student Details => Full Name ${this.fullName},Graduation:${this.graduation},College Name:${this.collegeName},City:${this.city}`); 
          
    }
}

const std1 = new Student("Sid Gates", 2024, "Clg-one","Pune");
console.log(std1);

std1.display();

const std2 = new Student("Jenny Gates", 2023, "Clg-two","Mumbai");
console.log(std2);

std2.display();

const std3 = new Student("Elon Musk", 2019, "C.O.E.P","LA");
console.log(std3);

std3.display();