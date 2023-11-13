//Ejercicio 1 
let numero1 = parseInt(prompt("Ingresa un numero para ver su tabla de multiplicar"))
for (let i = 0; i <= 10; i++) {
    console.log(numero1 + " * " + i + " = " + (numero1 * i))

}

//ejercicio 2
let acumulacionNumeros = []
let numeroIngresado1 = parseInt(prompt("Ingresa el numero que deseas guardar"))

do {
    if (numeroIngresado1 > 0) {
        acumulacionNumeros.push(numeroIngresado1)
        console.log(acumulacionNumeros)
        numeroIngresado1 = parseInt(prompt("Ingresa el numero que deseas guardar"))
    }
    if (numeroIngresado1 == 0) {
        numeroIngresado1 = 0
        alert("Has ingresado el numero 0 el guardado de numero se ha detenido")
    }
} while (numeroIngresado1 != 0);

//ejercicio 3
let numeroGanador = Math.floor((Math.random() * (100 - 1)) + 1)
console.log(numeroGanador)

let numeroIngresado2 = parseInt(prompt("Por favor ingrese un numero entre 1 y 100 para comenzar"))

let intentos = 0

while (numeroIngresado2 != numeroGanador) {
    if (numeroIngresado2 < numeroGanador && numeroIngresado2 <= 100) {
        console.log("El numero ingresado es menor que el numero ganador")
        intentos += 1
        numeroIngresado2 = parseInt(prompt("Por favor ingrese un numero entre 1 y 100 para comenzar"))
    }
    if (numeroIngresado2 > numeroGanador && numeroIngresado2 <= 100) {
        console.log("El numero ingresado es mayor que el numero ganador")
        intentos += 1
        numeroIngresado2 = parseInt(prompt("Por favor ingrese un numero entre 1 y 100 para comenzar"))
    }
    if (numeroIngresado2 > 100) {
        alert("Has ingresado un valor superior a 100")
        intentos += 1
        numeroIngresado2 = parseInt(prompt("Por favor ingrese un numero entre 1 y 100 para comenzar"))
    }
    if (numeroIngresado2 == 0 || isNaN(numeroIngresado2)) {
        alert("Estas ingresando un numero no valido")
        intentos += 1
        numeroIngresado2 = parseInt(prompt("Por favor ingrese un numero entre 1 y 100 para comenzar"))
    }
    if (numeroIngresado2 == numeroGanador) {
        console.log("Felicidades has acertado, lo has logrado en " + intentos + " intentos")
        numeroIngresado2 = numeroGanador
    }

}

// ejercicio 4

let numeroIngresado = parseInt(prompt("Por favor ingresa un numero"))

let contador = 0

for (let i = 2; i < numeroIngresado; i++) {
    if (numeroIngresado % i === 0) {
        console.log("El numero ingresado no es primo porque " + numeroIngresado + " es multiplo de " + i)
        contador += 1
    }
}

if (numeroIngresado === 1) {
    console.log("Me has pasado el numero 1, recuerda que este no es un numero primo")
}
if (contador === 0 && numeroIngresado !== 1) {
    console.log("El numero ingresado es primo")
}

//ejercicio 5

let numeroIngresadoDivisor = parseInt(prompt("Por favor ingresa un numero"))


for (let i = 1; i <= numeroIngresadoDivisor; i++) {
    if (numeroIngresadoDivisor % i === 0) {
        console.log("Los divisores de " + numeroIngresadoDivisor + " son " + i)
    }
}

//ejercicio 6
let animales = ["oso", "perro", "gatos", "buho", "ballena", "elefante", "tiburon", "delfin", "tortuga", "leon"]
for (let nombreAnimales of animales) {
    console.log(nombreAnimales)
}

//ejercicio 7
let numeros = [2, 6, 5, 8, 9, 7, 4, 1, 10]
for (let doblados of numeros) {
    console.log(doblados * 2)
}

//ejercicio 8
let grupoFamiliar = [
    {
        nombre: "Mabel",
        parentesco: "madre",
        edad: 20,
        hermanos: true,
        mascotas: true
    },
    {
        nombre: "Maria",
        parentesco: "abuela",
        edad: 50,
        hermanos: true,
        mascotas: false
    },
    {
        nombre: "Carmen",
        parentesco: "tia",
        edad: 20,
        hermanos: true,
        mascotas: true
    },
    {
        nombre: "Ruben",
        parentesco: "primo",
        edad: 15,
        hermanos: false,
        mascotas: false
    },
    {
        nombre: "Yank",
        parentesco: "primo",
        edad: 25,
        hermanos: false,
        mascotas: true
    }
]

for (let i = 0; i < grupoFamiliar.length; i++) {
    console.log("-----------------------------------------------")
    console.log("Hola mi nombre es "+grupoFamiliar[i].nombre + " soy " + grupoFamiliar[i].parentesco + " de Jeison, actualmente tengo " + grupoFamiliar[i].edad + " tengo hermanos uhmm pues: " + grupoFamiliar[i].hermanos + " y tengo mascotas pues ... " +grupoFamiliar[i].mascotas )
}


//ejercicio 9
let numerosParesImpares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 1; i <= numerosParesImpares.length; i += 2) {
    console.log(i)
}

//ejercicio 10

let numerosSumatoria = parseInt(prompt("Ingresa los numeros que deseas calcular\n para terminar el programa presione el numero 0 "))
let numerosPares = 0
let numerosImpares = 0
let resultado = Math.floor(numerosSumatoria / 2)
let opera = resultado * 2

do {
    if (numerosSumatoria == opera && numerosSumatoria != 0) {
        numerosPares += numerosSumatoria
        console.log("La suma de tus numeros elegidos pares es de:" + numerosPares)
        numerosSumatoria = parseInt(prompt("Ingresa los numeros que deseas calcuuuular\n para terminar el programa presione el numero 0 "))
        resultado = Math.floor(numerosSumatoria / 2)
        opera = resultado * 2
    }
    if (numerosSumatoria != opera && numerosSumatoria != 0 && isNaN(numerosSumatoria) == false) {
        numerosImpares += numerosSumatoria
        console.log("La suma de tus numeros elegidos impares es de:" + numerosImpares)
        numerosSumatoria = parseInt(prompt("Ingresa los numeros que deseas calcular\n para terminar el programa presione el numero 0 "))
        resultado = Math.floor(numerosSumatoria / 2)
        opera = resultado * 2
    }
} while (numerosSumatoria != 0 && isNaN(numerosSumatoria) == false);

//ejercicio 11

let elegirNumeroGrande = [50, 80, 90, 70, 40, 60, 30, 10, 20, 35, 75, 100]
let max = 0
for (let numeroGrande of elegirNumeroGrande) {
    if (max < numeroGrande) {
        max = numeroGrande
    }
}
console.log(max)

//ejercicio 12

let elegirNumeroPequeno = [50, 80, 90, 70, 40, 60, 30, 10, 5, 20, 35, 75, 100]
let min = 0
for (let numeroGrande of elegirNumeroPequeno) {
    if (max < numeroGrande) {
        max = numeroGrande
    }
}
min = max
for (let numeroPequeno of elegirNumeroPequeno) {
    if (min > numeroPequeno) {
        min = numeroPequeno
    }
}
console.log(min)

//ejercicio 13
let nombreJugadorUno = prompt("Jugador numero 1, ingresa tu nombre: ")
let nombreJugadorDos = prompt("Jugador numero 2, ingresa tu nombre: ")
let jugadorUno
let jugadorDos
let empate = 0
let puntosJugadorUno = 0
let puntosJugadorDos = 0
do {
    jugadorUno = prompt(nombreJugadorUno + " Elije un ataque, PIEDRA, PAPEL o TIJERAS").toLowerCase();
    jugadorDos = prompt(nombreJugadorDos + " Elije un ataque, PIEDRA, PAPEL o TIJERAS").toLowerCase();

    if (jugadorUno == "piedra" && jugadorDos == "tijeras" || (jugadorUno == "papel" && jugadorDos == "piedra") || (jugadorUno == "tijeras" && jugadorDos == "papel")) {
        puntosJugadorUno += 1
        console.log("Ha ganado " + nombreJugadorUno + "\nLlevas: " + puntosJugadorUno + " puntos")
    }
    if (jugadorUno == "piedra" && jugadorDos == "piedra" || (jugadorUno == "papel" && jugadorDos == "papel" || (jugadorUno == "tijeras" && jugadorDos == "tijeras"))) {
        console.log("Ha sido un empate")
        empate += 1

    }
    if (jugadorDos == "piedra" && jugadorUno == "tijeras" || (jugadorDos == "papel" && jugadorUno == "piedra") || (jugadorDos == "tijeras" && jugadorUno == "papel")) {
        puntosJugadorDos += 1
        console.log("Ha ganado " + nombreJugadorDos + "\nLlevas: " + puntosJugadorDos + " puntos")
    }
} while (empate !== 1);

//ejercicio 14
for (let i = 0; i < 6; i++) {
    let asterisco = "*"
    for (let j = 0; j < i; j++) {
        asterisco = asterisco + " *"
    }
    console.log(asterisco)
}

//ejercicio 15 
for (let i = 6; i > 0; i--) {
    let asterisco = ""
    for (let j = i; j > 0; j--) {
        asterisco = asterisco + "* "
    }
    console.log(asterisco)
}

//ejercicio 16

let numerosDesordenados = [2, 3, 5, 8, 7, 9, 6, 1, 10, 4]

for (let i = 0; i < numerosDesordenados.length -1; i++) {
    console.log(numerosDesordenados)
    for (let j = 0; j < numerosDesordenados.length - i-1; j++) {
        console.log(numerosDesordenados + "*")
        if (numerosDesordenados[j] > numerosDesordenados[j+1]) {
            [numerosDesordenados[j],numerosDesordenados[j+1]] = [numerosDesordenados[j+1], numerosDesordenados[j]]     
        }    
    } 
}

console.log(numerosDesordenados)