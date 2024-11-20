// Array de números
const numeros = [10, 20, 30, 40, 50];

// .reduce() para sumar los elementos
const sumaNumeros = numeros.reduce((acum, num) => acum + num, 0);
console.log("Suma de números:", sumaNumeros);

// .filter() para filtrar números mayores a 25
const numerosMayores = numeros.filter(num => num > 25);
console.log("Números mayores a 25:", numerosMayores);

// .map() para multiplicar cada número por 2
const numerosDoblados = numeros.map(num => num * 2);
console.log("Números multiplicados por 2:", numerosDoblados);

// .forEach() para imprimir cada número
console.log("Números en el array:");
numeros.forEach(num => console.log(num));



// Array de cadenas de texto
const nombres = ["Ana", "Luis", "Carlos", "Marta"];

// .reduce() para concatenar los nombres
const nombresConcatenados = nombres.reduce((acum, nombre) => acum + " " + nombre, "");
console.log("Nombres concatenados:", nombresConcatenados.trim());

// .filter() para filtrar nombres con más de 3 letras
const nombresLargos = nombres.filter(nombre => nombre.length > 3);
console.log("Nombres con más de 3 letras:", nombresLargos);

// .map() para transformar los nombres a mayúsculas
const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log("Nombres en mayúsculas:", nombresMayusculas);

// .forEach() para imprimir cada nombre
console.log("Nombres en el array:");
nombres.forEach(nombre => console.log(nombre));



// Array de valores booleanos
const booleanos = [true, false, true, false];

// .reduce() para contar los valores `true`
const cantidadTrue = booleanos.reduce((acum, bool) => bool ? acum + 1 : acum, 0);
console.log("Cantidad de valores true:", cantidadTrue);

// .filter() para obtener solo los valores `true`
const soloTrue = booleanos.filter(bool => bool);
console.log("Solo valores true:", soloTrue);

// .map() para invertir los valores booleanos
const booleanosInvertidos = booleanos.map(bool => !bool);
console.log("Valores booleanos invertidos:", booleanosInvertidos);

// .forEach() para imprimir cada valor booleano
console.log("Valores booleanos:");
booleanos.forEach(bool => console.log(bool));



// Array mixto
const mixto = [42, "Hola", true, { clave: "valor" }, [1, 2, 3]];

// .reduce() para contar la cantidad total de elementos
const totalMixto = mixto.reduce((acum, item) => acum + 1, 0);
console.log("Cantidad total de elementos:", totalMixto);

// .filter() para filtrar solo los números
const soloNumerosMixtos = mixto.filter(item => typeof item === "number");
console.log("Solo números:", soloNumerosMixtos);

// .map() para transformar cada elemento en una cadena de texto
const mixtoComoTexto = mixto.map(item => item.toString());
console.log("Elementos como texto:", mixtoComoTexto);

// .forEach() para imprimir cada elemento
console.log("Elementos en el array mixto:");
mixto.forEach(item => console.log(item));