
let stringOriginal = "Hello World!";


function inverterString(str) {
    let stringInvertida = '';  
    
   
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];  
    }

    return stringInvertida;  
}


console.log("String Original: " + stringOriginal);
console.log("String Invertida: " + inverterString(stringOriginal));