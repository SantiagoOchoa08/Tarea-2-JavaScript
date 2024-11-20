// 1. Función flecha sin parámetros
const saludar = () => console.log("Hola amiguitos, tengo dulces...");

// 2. Función flecha con un parámetro
const cuadrado = num => num * num;

// 3. Función flecha con dos parámetros
const sumar = (a, b) => a + b;

// 4. Función flecha que devuelve un objeto
const crearPersona = (nombre, edad) => ({ nombre, edad });

// 5. Función flecha con lógica más compleja
const esMayorDeEdad = edad => edad >= 18 ? "Es mayor de edad" : "Es menor de edad";

// Ejemplo de uso
saludar(); // "Hola amiguitos, tengo dulces..."
console.log(cuadrado(5)); // 25
console.log(sumar(3, 7)); // 10
console.log(crearPersona("Ana", 25)); // { nombre: "Ana", edad: 25 }
console.log(esMayorDeEdad(20)); // "Es mayor de edad"
