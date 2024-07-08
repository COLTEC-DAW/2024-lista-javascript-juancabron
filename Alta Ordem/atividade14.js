function verifyNum(num,condition){
  return condition(num);
};
function even(num){
  if(num % 2 === 0){
      return true;
  }else{
      return false;
  }
}
function odd(num){
  if(num % 2 === 0)return false;
  else return true;
};
function prime(numero) {
  if (numero <= 1) return false;
  if (numero === 2) return true;
  if (numero % 2 === 0) return false;

  for (let i = 3; i <= numero / 2; i += 2) {
      if (numero % i === 0) return false;
  }
  
  return true;
}
console.log(verifyNum(4,odd));
console.log(verifyNum(8,even));
console.log(verifyNum(121,prime));
