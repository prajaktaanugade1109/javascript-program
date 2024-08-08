console.log('=========== Interview Check ==========');

var InterviewEligibility = function(gradScore , hscScore , sscScore , candidateName) {
    if (gradScore>=70 || hscScore>=80 || sscScore>=90) {
        console.log(`Congrates ${candidateName} you are eligible for TCS interview`);
    } else {
        console.log(`${candidateName} Unfortunately you are not eligible for interview`);
    }
    
}
InterviewEligibility(80, 86, 90, "Jenny");
InterviewEligibility(70, 65, 55, "Sweety");
InterviewEligibility(60, 79, 88, "Riya");