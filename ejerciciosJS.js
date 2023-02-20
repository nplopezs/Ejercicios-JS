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
//console.log(new Date().getHours());
//console.log(laborHour(8));

const verifyHorario = (day,hour) => {
    if (laborDay(day) == true && laborHour(hour) == true) {
        console.log("Horario Laboral");
    }else {
        console.log("Horario No Laboral");
    }
}
verifyHorario(new Date().getDay(),new Date().getHours());
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

/*const fibo = n =>{
    if (n == 0)
        return 1;
    if (n == 1)
        return 1;
    return (fibo(n-1)+ fibo(n-2));
}

console.log(fibo(3)); */
function fibonacci(n) {
    let fib = [0, 1]; // Inicializamos la serie con los dos primeros números
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]; // Calculamos el siguiente número en la serie
    }
    return fib.slice(0, n); // Devolvemos los primeros n números de la serie
}

  console.log(fibonacci(10)); 
  

// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos

// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%

// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit

// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"
