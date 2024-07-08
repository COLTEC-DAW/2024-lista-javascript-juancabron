function createFunction(rows,cols,parameter){
  let matriz = [];
  for(let i=0;i<rows;i++){
    matriz[i] = []
    for(let j=0;j<rows;j++){
      matriz[i][j] = parameter(i,j);
    }
  }
  return matriz;
};
function addIndices(i,j){return i+j;}
function multiplyIndices(i,j){return i*j;}
function identityMatrix(i, j) {return i === j ? 1 : 0;}
function divideSquare(i, j) {return parseFloat((i ** 2 / (j + 1)).toFixed(2));}
function compareIndices(i, j) {
  if (i > j) {
    return 1;
  } else if (i < j) {
    return 5;
  } else {
    return 0;
  }
}
console.log(createFunction(3,3,addIndices));
console.log(createFunction(3,3,multiplyIndices));
console.log(createFunction(3,3,identityMatrix));
console.log(createFunction(3,3,divideSquare));
console.log(createFunction(3,3,compareIndices));