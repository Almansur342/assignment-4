const numbers = [22, 33, 4, 67, 9, 10, 56];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
  const element = numbers[i];
  sum = sum + element;
 
}
console.log(sum)

// function arryTotal(numbers){
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     sum = sum + element;
//   }
//   return sum;
// }
// const number = [22, 33, 4, 67, 9, 10, 56];
// const result = arryTotal(number)
// console.log(result);