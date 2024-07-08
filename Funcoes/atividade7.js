function countChars(string,c){
  let aparicoes = 0;
  for(let i = 0;i<string.length;i++){
      if(string[i] === c){
          aparicoes ++;
      }
      else{
          continue;
      }
  }
  return aparicoes;
}
console.log(countChars('ana','a'));
console.log(countChars('presunto','e'));