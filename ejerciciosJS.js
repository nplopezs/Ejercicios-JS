//Ejercicios js

//Ejercicio 1: Comprobar que la hora y el día seán horario laboral
console.log("Ejercicio 1");

const laborDay = day => {
    return (day != 0 && day != 6) ? true : false;
}
//console.log(laborDay(new Date().getDay()));

const laborHour = hour => {
    let order;
    switch (hour) {
        case 9:
            order = true;
            break;
        case 10:
            order = true;
            break;
        case 11:
            order = true;
            break;
        case 12:
            order = true;
            break;
        case 13:
            order = true;
            break;
        case 14:
            order = true;
            break;
        case 15:
            order = true;
            break;
        case 16:
            order = true;
            break;
        case 17:
            order = true;
            break;
        case 18:
            order = true;
            break;
        default:
            order = false;
    }
    return order;
}
console.log(new Date().getHours());
//console.log(laborHour(8));

const verifyHorario = (day,hour) => {
    if (laborDay(day) == true && laborHour(hour) == true) {
        console.log("Horario Laboral");
    }else {
        console.log("Horario No Laboral");
    }
}
verifyHorario(new Date().getDay(),22);
console.log("\n");

// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/* 
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
 */
// Regresar 0 si el array es vacio
// usar recurcion
console.log("Ejercicio 2");
console.log("\n");



// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion
console.log("Ejercicio 3");
const mcd = (a,b) =>{
    if (a == 0)
        return b;
    return mcd(b%a,a);
}
console.log("Maximo común divisor:" + mcd(12,16));
console.log("\n");

// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion
console.log("Ejercicio 4");
const fibo = n =>{
    if (n == 0)
        return 1;
    if (n == 1)
        return 1;
    return (fibo(n-1)+ fibo(n-2));
}
console.log(fibo(2));