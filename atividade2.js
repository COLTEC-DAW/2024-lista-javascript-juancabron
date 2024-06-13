function tabuleiroXadrez(num){
  linha1 = '# # # #';
  linha2 = ' # # # #';
  if(num%2 === 0){
    for(let i=0;i<num/2;i++){
      console.log(linha1);
      console.log(linha2);
    }
  }else{
    for(let i=0;i<num/2-1;i++){
      console.log(linha1);
      console.log(linha2);
    }
    console.log(linha1);
  }
}
let xadrez = prompt('Quantas linhas voce deseja?');
tabuleiroXadrez(xadrez);
