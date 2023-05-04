let numeros=[200,1000, 320,500];
let mayor=0;
for(let i=0;i<numeros.length;i++){
    if (numeros[i]>mayor){
        mayor=numeros[i];
    }
}
document.write("El numero mayor es : " + mayor );