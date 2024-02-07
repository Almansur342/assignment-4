function calculateMoney(ticket){
  if(ticket < 0){
    return 'Invalid Number';
  }
 const perTicket = 120;
 const keeper = 500;
 const lunch = 8 * 50;
 const income = ticket * perTicket;
 const spending = keeper + lunch;
 const total = income - spending;
 return total;
}
// const result = calculateMoney(-130);
// console.log(result);

function checkName(name){
  if(typeof name !== 'string'){
    return 'Invalid'
  }
  const check = ['A', 'y', 'i' , 'e' , 'o' , 'u', 'w']
  for(const ch of check){
    const checkLower = ch.toLowerCase();
    const nameAccess = name;
  const nameLower = nameAccess.toLowerCase();
  if(nameLower.slice(-1).includes(checkLower)){
    return 'good';
  } 
  }
  return 'bad'
  }

// console.log(checkName(['Jhankar'])); 

function deleteInvalids(array){
  if(typeof array !== 'array'){
    return 'Invalid Array';
  }
  let number = [];
  for(const arr of array){
    if(typeof arr === 'number' && isNaN(arr) === false){
      number.push(arr);
    }
  }
  return number;
}
const rihjy = deleteInvalids({num: [ 1 , 2 , 3 ]});
console.log(rihjy);

