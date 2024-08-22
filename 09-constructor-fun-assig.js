
function Bank(bankName, location, ifscCode, branchCode) {
   this.bankName =  bankName;
   this.location = location;
   this.ifscCode = ifscCode;
   this.branchCode = branchCode;
}
console.log('============ Constructor function Bank ===========================');

const bankOne = new Bank("yesBank", "Kolhapur", "YES08950490", "200234");
console.log(`Given Bank Details: Bank Name ${bankOne.bankName}, Location ${bankOne.location}, IFSC Code ${bankOne.ifscCode}, Branch Code ${bankOne.BranchCode} `); 

const bankTwo = new Bank("sbiBank", "Sangli", "SBI08950490", "234533");
console.log(`Given Bank Details: Bank Name ${bankTwo.bankName}, Location ${bankTwo.location}, IFSC Code ${bankTwo.ifscCode}, Branch Code ${bankTwo.BranchCode} `); 

const bankThree = new Bank("mahBank", "Satra", "MAH08950490", "304657");
console.log(`Given Bank Details: Bank Name ${bankThree.bankName}, Location ${bankThree.location}, IFSC Code ${bankThree.ifscCode}, Branch Code ${bankThree.BranchCode} `); 

const bankFour = new Bank("axisBank", "Pune", "AXIS08950490", "406789");
console.log(`Given Bank Details: Bank Name ${bankFour.bankName}, Location ${bankFour.location}, IFSC Code ${bankFour.ifscCode}, Branch Code ${bankFour.BranchCode} `); 

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log('============ Prototype object SBI Bank ==============');
console.log(`SBI Bank Details open Time : ${bankTwo.openTime}, Close Time : ${bankTwo.closeTime}`); 

console.log('============ Prototype object AXIS Bank ==============');
console.log(`AXIS Bank Details Bank Name : ${bankFour.bankName}, Close Time : ${bankFour.closeTime}`);

console.log('============ Prototype object YES Bank ==============');
console.log(`YES Bank Details Bank Name : ${bankOne.openTime}, Branch Code : ${bankOne.branchCode}, open Time : ${bankOne.openTime}`); 






