/*
function conferirPalindromo(palavra){
    palavraInversa = palavra.split('').reverse().join('');
    if(palavra === palavraInversa){
        console.log('É um palindromo')
    }else{
        console.log('Não é um palindromo')
    }
}   
let palindromo = prompt('Insira uma palavra:  ');
conferirPalindromo(palindromo);

Fiz com os metodos sem saber que podia iterar strings
*/
function conferirPalindromo(palavra){
  palavraInversa = "";
  for(let i = palavra.length -1;i>=0;i--){
      palavraInversa += palavra[i];
  }
  if(palavra === palavraInversa){
      console.log('É um palindromo');
  }else{
      console.log('Não é um palindromo');
  }
}
let palindromo = prompt('Insira uma palavra:  ');
conferirPalindromo(palindromo);