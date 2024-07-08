function desenhandoTriangulho(num) {
  for(let i = 0;i<num;i++){
      let linha ="";
      for(let j= 0;j<=i;j++){
          linha += "#";
      }
      console.log(linha);
  }
}
let triangulo = prompt('Quantas linhas voce deseja?')
desenhandoTriangulho(triangulo);