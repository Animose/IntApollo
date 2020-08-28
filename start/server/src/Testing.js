// function iterate(num,string){
//     for(let i = 0;i < num;i++) {
//         console.log(string)
//     }
// }
// iterate(2, "hello")
// function interate(num){
//     let arry = [8, 5 ,6]
//     arry.forEach((ele, idx) => {

//         if(idx === 0){
//             console.log(ele * 2)
//         }
//         else if(idx === 1){
//             console.log(ele)
//         }
//         else{
//             console.log(ele + 1)
//         }
//     })
//     while(arry.length){
//         console.log(arry)
//         arry.pop(0)
//     }
// }
// interate(5)
/*-----------------------------------------------------------------
Challenge: 02-addTwoNumbers

Difficulty: Basic  

Prompt:

Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
If either argument is not a Number, return the value of NaN.

Examples:

addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8
addTwoNumbers(0, 0) //=> 0
addTwoNumbers('Hello', 5) //=> NaN
-----------------------------------------------------------------*/
function addTwoNumbers(num,num2){
    if(Number.isInteger(num) && Number.isInteger(num2)){
        return num + num2
    }
    else{
        return 'NaN'
}
    }
console.log(addTwoNumbers(5 ,'bad'))