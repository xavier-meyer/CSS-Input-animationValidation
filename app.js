//déclaration variables
const inpWrap = document.querySelector(".inp-wrap");
const input = document.querySelector(".input-anim");
const validation = document.querySelector(".inp-wrap span");

//on mets une écoute d"evenement sur l'input de type input. On déclenches une fonction. e => objet d'évenement qui regroupe les propriétés contenus ds le input.


input.addEventListener("input", function(e){

    input.addEventListener("keydown", (event)=>{
     // interdire certains caractéres à la saisie ds le input et prévenir l'utilisateur
     let arrayBadLetters = [
        "$",
        "!",
        "?",
        "%",
        "+",
        "-",
        "/",
        "*",
        ";",
        "=" 
    ];
    if(arrayBadLetters.includes(event.key)){
        event.preventDefault();
        console.log("erreur!");
        input.classList.add("erreur");
        validation.textContent = "Les caractéres spéciaux sont interdits.";
        validation.classList.add("visible");
        setTimeout(()=>{
            validation.classList.remove("visible");
            input.classList.remove("erreur");
            }, 4000)
    }
    // prévenir que le champ est vide
    else if(e.target.value == ""){
        input.classList.add("erreur");
        validation.textContent = "Veuillez entrer un mot dans le champ de saisie!";
        validation.classList.add("visible");   
        setTimeout(()=>{
            validation.classList.remove("visible");
            input.classList.remove("erreur");
            }, 4000)
        } else {
        input.classList.remove("erreur");
        validation.classList.remove("visible"); 
        }
    })    
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