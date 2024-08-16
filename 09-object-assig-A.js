

let professor = {
    firstName:"Anjali",
    lastName: "Awasthi",
    city :    "Pune",
    contact: 9867805650,
    pinNo:   416311,
    degree: {
        engineering: 'CSC', 
        PHD: 'Adv Computing'
    },
    certificates : ['Hacker Rank Participation',  'Certificate in IFE course',  'Certificate in Adv Programming']
    
}
console.log('================ Object Details ===================');
console.log(professor);
//console.log(professor.degree);


console.log('================ Add new property totalExprience ===================');
professor.totalExperience = " 14 years";
const professorKeys = Object.keys(professor);
console.log(professorKeys);

console.log('================ Modify any existing property ===================');
professor.city = "Pune";
console.log(professor);

console.log('================ Add one new certificate ===================');
professor.certificates.splice(2,0, "Oracle Certified" );
console.log(`update object array = ${professor.certificates}`); 

console.log('================ Last element of the array ===================');
const entries = Object.entries(professor.certificates)
console.log(entries[professor.certificates.length-1]);


console.log('================ Traverse the array using for-in-loop ===================');
for (const key in professor.certificates) {
    if (Object.prototype.hasOwnProperty.call(professor.certificates, key)) {
        const element = professor.certificates[key];
        console.log(`${key}, ${element}`); 

    }
}


console.log('================ Complete object for-in-loop ===================');
for (const key in professor) {
    if (Object.prototype.hasOwnProperty.call(professor, key)) {
        const element = professor[key];
        console.log(`${key}, ${element}`); 

    }
}






