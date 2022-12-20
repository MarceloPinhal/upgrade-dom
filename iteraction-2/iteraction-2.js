// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const newDiv = document.createElement("div");
newDiv.innerText= "Hi! I'm new"
document.body.appendChild(newDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const secondDiv =  document.createElement("div");
secondDiv.innerText= "Hi! I'm the second div"
document.body.appendChild(secondDiv)
const pForDiv = document.createElement("p");
secondDiv.appendChild(pForDiv)

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const createThirdDiv =  document.createElement("div");
createThirdDiv.innerText= "Hi! I'm the third div"
document.body.appendChild(createThirdDiv);

for (let i = 0; i < 6; i++){
let createParagraphs = document.createElement("p")
createThirdDiv.appendChild(createParagraphs);
}


// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const createParagraph =  document.createElement("p");
createParagraph.innerText = "I'm dynamic"
document.body.appendChild(createParagraph);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const getH2 = document.querySelector(".fn-insert-here");
getH2.classList.replace("fn-insert-here","Wubba-Lubba-dub-dub")
console.log(getH2)

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const createUl = document.createElement("ul")
document.body.appendChild(createUl)


for (i = 0; i < apps.length; i++){
    let createLi =document.createElement("li");
    createLi.innerText = apps[i]
    createUl.appendChild(createLi)
}

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const getClassFnRemoveMe = document.querySelectorAll(".fn-remove-me");

getClassFnRemoveMe.forEach(element => {
    element.remove();
})

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.



// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here