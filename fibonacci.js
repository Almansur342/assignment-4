// const fibo = [0, 1];
// for(let i = 2; i <= 20; i++){
// fibo[i] = fibo[i-1] + fibo[i-2]
// }
// console.log(fibo);

function fibonacciSeries(number){
  if(typeof number != 'number'){
    return 'please give a number'
  } else if(number < 2){
    return 'please give a number greater than 1'
  }
  const fibo = [0,1];
  for(let i = 2; i <= number; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
  }
  return fibo
}
const numbers = -10;
const result = fibonacciSeries(numbers);
console.log(result);