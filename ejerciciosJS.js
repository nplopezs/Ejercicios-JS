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
//no lo logre
const numTrues = array => {
    if (array.isEmpty){
        return 0;
    } else{
        return 1;
    }
}

console.log(numTrues([]))
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
console.log("\n");

// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos
console.log("Ejercicio 5");
const cantNum = nivel =>{
    return (nivel * (nivel + 1)) / 2;
}
console.log(cantNum(4));
console.log("\n");

// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%
console.log("Ejercicio 6");
const areaProporcional = (pais,area) => {
    // La cantidad esta evaluada por el porcentaje equilante al 29.1% que es la cantidad de tierra en el planeta lo demás es agua
    const areaTierra = 148439100; 
     let areaPorcentaje = (area * 100)/areaTierra;
    console.log(`${pais} is ${areaPorcentaje.toFixed(2)}%`);
}

areaProporcional("Russia",17098242);
areaProporcional("USA", 9372610);
console.log("\n");

// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit
console.log("Ejercicio 7");
//método utilizado ecuacion de la recta jaja xD
const change = n =>{
    return Math.abs(-1*(n-1));
}
console.log(change(0)); //1
console.log(change(1)); //0
console.log("\n");

// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"
console.log("Ejercicio 8");
const messengerBuzz = n => {
    if (n == 0)
        return "No hay nadie en línea";
    if (n == 1)
        return `user${n} esta en linea`;
    if (n == 2)
        return `user${n-1} y user${n} estan en línea`
    if (n>2)
        return `user1 y ${n-1} estan en línea`
}

console.log(messengerBuzz(0));
console.log(messengerBuzz(1));
console.log(messengerBuzz(2));
console.log(messengerBuzz(3));
console.log(messengerBuzz(4));