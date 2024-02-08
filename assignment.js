function calculateMoney(ticket){
  if(ticket < 0){
    return "“Invalid Number”";
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
    return 'invalid'
  }
  const check = ['A', 'y', 'i' , 'e' , 'o' , 'u', 'w']
  for(const ch of check){
    const checkLower = ch.toLowerCase();
    const nameAccess = name;
  const nameLower = nameAccess.toLowerCase();
  if(nameLower.slice(-1).includes(checkLower)){
    return "Good Name";
  } 
  }
  return "Bad Name"
  }

// console.log(checkName(['Jhankar'])); 

function deleteInvalids(array){
  if(typeof array !== 'array'){
    return "“Invalid Array”";
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
// console.log(rihjy);


 function password(object){
 if(object.name == null || object.birthYear == null || object.siteName == null || object.birthYear < 1000 || object.birthYear > 9999){
  return "invalid";
 }
 const name = object.name;
 const birth = object.birthYear;
 const site = object.siteName;
 const siteUpper = site[0].toUpperCase();
 const ultimateSite = siteUpper + site.slice(1);
 const generatedPass = `${ultimateSite}#${name}@${birth}`;
 return generatedPass;

 }
//  const result =  password({ name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' });
//  console.log(result);
 
 function monthlySavings(income, living){
  if(typeof living !== 'number' || !Array.isArray(income)){
    return "invalid input";
  }
  let earning = 0;
  let tax = 0;
  for(const arr of income){
    earning = earning + arr;
    if(arr >= 3000){
      tax = arr*0.2;
    }
  }
  const totalSavings = earning - tax - living;
  if(totalSavings >= 0 ){
    return totalSavings;
  }else{
    return "“earn more”"
  }
}
 
 const result = monthlySavings([ 1000 , 2000 , 4000 ] , 40000);
 console.log(result);