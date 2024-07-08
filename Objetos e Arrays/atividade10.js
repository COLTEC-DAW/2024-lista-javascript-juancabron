function toList(array){
  if(array.length === 0){
    return null;
  }
  let list = null;
  
  for(let i= array.length-1;i>=0;i--){
    list = {
      value: array[i],
      rest: list
    };
  } 
   
   return list;
};

console.log(toList([1,2,7,7]));