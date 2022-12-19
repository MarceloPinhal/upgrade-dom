// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const getShowMeClass = document.querySelector(".showme")
console.log(getShowMeClass)


// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const getPilladoId = document.querySelector("#pillado")
console.log(getPilladoId);

// 1.3 Usa querySelector para mostrar por consola todos los p

const todosLosPs = document.querySelectorAll("p")
console.log(todosLosPs)

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const matchesClassPokemon = document.querySelectorAll(".pokemon")
console.log(matchesClassPokemon)

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe"

const matchesDataFunction = document.querySelectorAll("[data-function='testMe']")
console.log(matchesDataFunction)

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe"

const allCharacters = document.querySelectorAll("[data-function='testMe']")
const arrayCharacters = Array.from(allCharacters)
console.log(arrayCharacters[2])
