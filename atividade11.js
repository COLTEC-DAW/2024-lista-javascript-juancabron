function deepEquals(obj1,obj2){
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if(keys1.length !== keys2.length){
    console.log('Não sao iguais');
    return false;
  }
  let isEqual = true;
  keys1.forEach(prop =>{
    if(obj1[prop] !== obj2[prop]){
      console.log(`Propiedade ${prop} é diferente`);
      isEqual = false;
      }
  });
  if(isEqual){
    console.log('São iguais :)');
  }
  return isEqual;
};
const fox = {
  cor:'branco',
  ano:'2012',
  motor:'1.6'
};
const fox2 = {
  cor:'branco',
  ano:'2012',
  motor:'1.6'
};
const celta = {
  cor:'cinza',
  ano:'2014',
  motor:'2.0'
};
deepEquals(fox,fox2);
deepEquals(fox,celta);