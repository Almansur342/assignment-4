function largestElement(numbers){
  let largest = numbers[0];
  for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
  if(element > largest){
    largest = element;
  }
  }
  return largest;
}
const ages = [-12, -13, -14, -19, -16, -17];
const oldest = largestElement(ages);
console.log(oldest)