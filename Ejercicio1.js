//Ejercicio 1 
const cant_metros=Parseint(prompt("Ingrese la cantidad de metros que debe viajar"));
if(cant_metros<=1000){
    document.write('Usted puede dirigirse al lugar yendo a pie.');
}else if(cant_metros>1000 & cant_metros<=10000){

    document.write('Usted debera dirigirse al lugar en bicicleta');

}else if(cant_metros>10000 & cant_metros<=30000){

    document.write('Usted debera dirigirse al lugar en colectivo.');

}else if(cant_metros>30000 & cant_metros<=100000){
    document.write('Usted debera dirigirse al lugar en auto.');
}else if(cant_metros>100000){

    document.write('Usted debera dirigirse al lugar en avión');
}