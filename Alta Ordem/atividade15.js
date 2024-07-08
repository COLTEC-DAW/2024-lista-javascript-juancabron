function transformString(string, method){
  let newString = '';
  for(let i=0;i<string.length;i++){
    newString += method(string[i]);
  }
  return `${string} --> ${newString}`;
};
function upperVogal(char){
  if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
    return char.toUpperCase();
  }else{
    return char;
  }
};
function upperConsonant(char){
  if(char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u'){
    return char.toUpperCase();
  }else{
    return char;
  }
};
function lowerVogal(char){
  if(char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'){
    return char.toLowerCase();
  }else{
    return char;
  }
};
function lowerConsonant(char){
  if(char !== 'A' && char !== 'E' && char !== 'I' && char !== 'O' && char !== 'U'){
    return char.toLowerCase();
  }else{
    return char;
  }
};
console.log(transformString('ana banana',upperVogal));
console.log(transformString('ana banana',upperConsonant));
console.log(transformString('ANA BANANA',lowerVogal));
console.log(transformString('ANA BANANA',lowerConsonant));