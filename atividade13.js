//nao sei se é o melhor metodo mas
const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
function criptografia(string,method){
    let newString = '';
    for(let i=0;i<string.length;i++){
        const char = method(string[i]);
        newString += char;
    };
    return newString;
};
function ceaser(char){//char + 3
    let letterPosition = 0;
    for(let i = 0;i<alph.length;i++){
        if(char === alph[i]){
            letterPosition = i;
        }
    }
    if(letterPosition > 22 && letterPosition < 26){
        char = alph[letterPosition-23];
    }else if(letterPosition > 48 && letterPosition < 52){
        char = alph[letterPosition-23];
    }else{
        char = alph[letterPosition+3];
    }
    
    
    return char;
};
console.log(criptografia('Z',ceaser));