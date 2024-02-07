function cubeNumber(number){
  if(typeof number !== 'number'){
    return "please enter a number"
  }
  const result = Math.pow(number, 3);
  return result;
}
const number1 = cubeNumber(4);
const number2 = cubeNumber('3');
// console.log(number1, number2);

function matchFinder(string1, string2){
  if(typeof string1 !== 'string' || typeof string2 !== 'string'){
    return 'valid string'
  }
  const match = string1.includes(string2);
  return match;
}

const result = matchFinder('John doe', 'ohn');
const result1 = matchFinder('jsvascript', 'code');
// console.log(result, result1)

function sortMaker(arr){
  const [a, b] = arr;
  if(a<0 || b<0){
    return 'invalid input';
  } else if(a==b){
    return 'equal';
  }
  else if(a>b){
    return [a, b];
  }else{
    return [b, a];
  }
} 
// console.log(sortMaker([1, 4]));
function findAdress(obj){
  const street1 = obj.street || '__';
  const house1 = obj.house || '__';
  const society1 = obj.society || '__';
  const total = street1 + ',' + house1 + ',' + society1;
  return total;
}
const obj = findAdress({street:10,house:'15A',society:'Earth Perfect'});
// console.log(obj);
function canPay(prices, number){
  if(prices.length == 0){
    return 'provide a array with price';
  }
  let sum = 0;
  for(const price of prices){
   sum += price;
  }
  if(sum >= number){
    return true;
  } else{
    return false;
  }
}

const need = canPay([],18)
console.log(need);