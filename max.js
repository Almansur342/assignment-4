const business = 450;
const minister = 3000;
const army = 159
// if(business > minister){
//   console.log('businessmen er pula big')
// } else{
//   console.log('minister er pula ');
// }
// if(business > minister && business > army){
//   console.log('businessmen er pula big');
// }else if(minister > business && minister > army){
//   console.log('minister er pula ');
// } else{
//   console.log('army pula is nigger');
// }

// let max = Math.max(business, minister, army);
// console.log('largest is ', max)
// function findLargest(first, second,){
//   if(first > second){
//     return first;
//   } else{
//     return second;
//   }
//   }
//   const result = findLargest(234, 345);
//   console.log('biggest number is ', result)



function findLargest(first, second, third){
  if(first < second && first < third){
    return first;
  } else if (second < first && second < third){
    return second;
  } else{
    return third;
  }
}

const result = findLargest(6, 9, 13);
console.log('smallest number is ', result);
