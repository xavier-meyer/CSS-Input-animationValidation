//déclaration variables
const inpWrap = document.querySelector(".inp-wrap");
const input = document.querySelector(".input-anim");
const validation = document.querySelector(".inp-wrap span");

//on mets une écoute d"evenement sur l'input de type input. On déclenches une fonction. e => objet d'évenement qui regroupe les propriétés contenus ds le input.

input.addEventListener("input", function(e){
    // affiche l'objet d'évenement + toutes les propriétés
    // console.log(e);

    // affiche le contenu de l'input dans la console
    // console.log(e.target.value);
    
    // !== : inégalité stricte
    // on ajoutes une class active-input sur le parent de e.target 
    if(e.target.value !== ""){
        e.target.parentNode.classList.add("active-input");
    } else if (e.target.value === ""){
        e.target.parentNode.classList.remove("active-input");
    }

}) 