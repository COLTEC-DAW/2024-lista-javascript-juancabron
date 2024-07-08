function range(min,max,index){
  let newArray = [];
  for(let i=min;i<=max;i += index){
      newArray.push(i);
  }
  return newArray;
}
console.log(range(20,40,3));