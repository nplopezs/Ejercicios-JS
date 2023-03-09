// Promedio antipode
// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]
console.log("Ejercicio 1");
const arrayMultiplos = (numero,longitud) => {
    let array = [];
    for (let i = 1; i <= longitud; i++) {
        array.push(i*numero);
    }
    return array;
}
console.log(arrayMultiplos(2,10));
console.log(arrayMultiplos(17,6));
console.log("\n");

// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false
console.log("Ejercicio 2");
const dominante = array => {
    let pos = array.filter(num => num > 0);    
    return (pos.length > (Math.floor(array.length/2)))
}

console.log(dominante([-1, -2, 55, 10,-4,5,7]))
console.log("\n");


// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// - Dividir cada numero del array final entre 2  -> [3.5, 12, 4]
console.log("Ejercicio 3");
const antipode = array => {
    let isPar = array.length % 2 == 0;
    if (isPar){
        var arrMitad1 = array.slice(0,array.length/2);
        var arrMitad2 = array.slice(array.length/2);
    }
    else{
        array.splice(Math.floor(array.length/2),1)
        var arrMitad1 = array.slice(0,array.length/2);
        var arrMitad2 = array.slice(array.length/2);
    }
    
    console.log(arrMitad1, arrMitad2);
0
    let sumArray = [];
    for(let i = 0; i < arrMitad1.length; i++){
        sumArray.push(arrMitad1[i]+arrMitad2[i]);
    }
    console.log(sumArray)

    return sumArray.map(num => num/2);
} 

console.log(antipode([1,2,3,5,22,6,7]))
console.log("\n");