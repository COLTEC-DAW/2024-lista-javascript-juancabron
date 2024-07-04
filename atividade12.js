function bubbleSort(array,ordenacao){
  let n = array.length;
  let swapped;
  do{
    swapped = false;
    for(let i=0;i<n-1;i++){
      if(ordenacao(array[i],array[i+1]) > 0){
        [array[i],array[i+1]] = [array[i+1],array[i]];
        swapped = true;
      }
    }
    n--;//o último elemento sempre sera o maior
  }while(swapped);
  return array;
}
function ordenacaoCrescente(a,b){
  return a-b;
}
function ordenacaoDescrescente(a,b){
  return b-a;
}
//nao entendi comparar decrescentePares e crsecentesImpar
const vet = [1,5,8,5,235,7,62,7,2,6,45,1000]
console.log(bubbleSort(vet.slice(),ordenacaoCrescente));
console.log(bubbleSort(vet.slice(),ordenacaoDescrescente));