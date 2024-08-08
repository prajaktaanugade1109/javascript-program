console.log('======== voting Eligibility Check =======');

var voteEligible = function(age) {
    if (age==0 || age < 0 || age > 130 || age==null) {
       console.log(`Invalid Date Age : ${age}`);
    } else {
        console.log(`Valid Date Age : ${age}`);
        if (age>=18) {
            console.log(`Eligible for voting`);
        } else {
            console.log('NOT eligible for voting');   
        }
  
    }
}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);
