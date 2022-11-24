const h1 = document.querySelector ("#h1")

setTimeout(() => {
    h1.style.color = "orange";
}, 3000)

const parrafo = document.querySelector("#parrafo")

setTimeout(() => {
    parrafo.textContent = "Soy otra prueba de JS";
}, 3000)













































































// const pizzas = [
//     {
//         id: 1,
//         nombre: "Pepequeso",
//         precio: 250,
//         ingredientes: ["Queso", "Salsa napolitana", "Oliva", "Peperoni"],
//     },
//     {
//         id: 2,
//         nombre: "Pizzaña",
//         precio: 800,
//         ingredientes: ["Tomate", "Queso", "Piña", "Cebolla"]
//     },
//     {
//         id: 3,
//         nombre: "Pizzatables",
//         precio: 500,
//         ingredientes: ["Tomate", "Salsa napolitana", "Cebolla", "Pimenton", "Aceitunas"]
//     },
//     {
//         id: 4,
//         nombre: "Pizzason",
//         precio: 900,
//         ingredientes: ["Salsa napolitana", "Queso", "tocineta", "Pimenton", "Maiz", "Aceitunas"]
//     },
//     {
//         id: 5,
//         nombre: "Pizzaneta",
//         precio: 550,
//         ingredientes: ["Queso", "Salsa napolitana", "Tocineta", "Tomate"]
//     },
//     {
//         id: 6,
//         nombre: "Pizzaton",
//         precio: 350,
//         ingredientes: ["Queso", "Salsa napolitana", "Tomate", "Pimenton", "Pimenton"]
//     },
//     {
//         id: 7,
//         nombre: "Pizzallina",
//         precio: 1100,
//         ingredientes: ["Salsa", "Tomate", "Queso", "Maiz"]
//     }
// ]

// // Pizzas Id Par 

// const pizzaPares = pizzas.filter( (pizza) => {
//     return pizza.id % 2 !== 0
// } )

// pizzaPares.forEach( (pizza) => {
//     console.log( `La pizza ${pizza.nombre} tiene un id impar` );
// } )

// // Pizzas menores a 600 

// const pizzaBarata = (precio) => {
//     return pizzas.some ( (pizza) => {
//         return pizza.precio < 600
//     } )
//     ? console.log(`Si hay pizzas menor a 600`) : console.log(`No hay pizzas menor a 600`);;
// }

// pizzaBarata()

// // Nombre de cada pizza con su precio 

// const menuPizza = pizzas.map ( (pizza) => {
//     return {...pizza}
// } )

// menuPizza.forEach( (pizza) => {
//     console.log(`La pizza ${pizza.nombre} tiene un precio de $ ${pizza.precio}`);
// } )

// // Imprimir las pizzas con sus ingredientes

// pizzas.forEach( (pizza) => {
//     console.log(`Los ingredientes de la pizza ${pizza.nombre} son:`);
//     pizza.ingredientes.forEach ((ingrediente) => {
//         console.log(ingrediente);
//     } )
// } )

