
const arrayNum = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];

console.log('====== 1.Array element with its index using forEach() =======');

arrayNum.forEach((element, index)=> {
    console.log(`Index No.= ${index}, Element = ${element}`); 
});
        
console.log('=====2.Find the positive numbers ======');
arrayNum.forEach((element) => {
    if (element >= 0) {
        console.log(element);
        
    }
});

 console.log('=====3.Find the negative numbers =====');
        const newArr = [];
        arrayNum.forEach((element)=> {
            if (element < 0) {
                newArr.push(element);
                
            }
        });
        newArr.forEach(element => {
            console.log(element);
            
        });
        
    console.log('====== 4. find the even numbers ======');
    arrayNum.forEach((element) => {
        if ( element % 2 == 0) {
            console.log(element);
            
        }
    });

    console.log('===== 5. Find the sum of all elements =====');

    let sum = 0;
    arrayNum.forEach((element) => {
        sum = sum + element;
    });
    console.log(`Sum of given array number is : ${sum}`); 

    console.log('====== 6. Log even indexed =====');

    arrayNum.forEach((element, index) => {
        if (index % 2== 0) {
            console.log(element);
            
        }
    });
    

    
