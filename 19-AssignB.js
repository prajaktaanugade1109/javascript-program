class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

 let arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]; 

console.log('------ 1. Find all the employees working in TCS and log only emp nam and company ------');

for (const element of arrayEmployee) {
    if (element.emp_company =="TCS") {
        console.log(`Employee Name : ${element.emp_name}, Company name : ${element.emp_company}`); 
   
    }
}

console.log('------ 2.Find the finance department employees,log only department and employee name ------');

for (const element of arrayEmployee) {
    if (element.emp_dept =="Finance") {
        console.log(`Department name : ${element.emp_dept}, Employee name : ${element.emp_name}`); 
   
    }
}

console.log('------ 3.Find the employee whose name starts with R and log complete employee ------');

for (const element of arrayEmployee) {
    if (element.emp_name.startsWith("R")) {
        console.log(element);
         
    }
}

console.log('------ 4.Find the employees whose salary is greater than 75000 and log emp name ,company and salary ------');

for (const element of arrayEmployee) {
    if (element.emp_salary>75000) {
        console.log(`Employee name : ${element.emp_name}, company : ${element.emp_salary}, salary : ${element.emp_salary}`); 
   
    }
}

console.log('------ 5.Find the emps whose salary greater than or equal 50000 and from IT department,log complete emp ------');

for (const element of arrayEmployee) {
    if (element.emp_salary>=50000 && element.emp_dept =="IT") {
        console.log(element); 
   
    }
}

console.log('------ 6.Find out all the employees from company Infy and log complete employee ------');

for (const element of arrayEmployee) {
    if (element.emp_company =="Infy") {
        console.log(element); 
   
    }
}


