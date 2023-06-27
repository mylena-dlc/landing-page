
/* Menu burger */ 


function toggleMenu() {
    const navbar = document.querySelector(".navbar")
    const burger = document.querySelector(".burger")
    burger.addEventListener('click', () => {
        navbar.classList.toggle('show-nav')
        behavior: "smooth"
    })
}
toggleMenu();


/* Bouton scroll haut de page */


const btn = document.querySelector('.btn-scroll-to-top');
btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth" // pour adoucir l'effet
    })
})


/* Bouton changement thème couleur */ 


// Select elements from the DOM
const body = document.querySelector("body");
const button = document.querySelector("#btn-theme");
const section = document.querySelector("#home");
const submit = document.querySelector("#submit input");
const card = document.querySelector(".card");
const card_i = document.querySelector(".card i");
const card_h4 = document.querySelector("h4");
const card_p = document.querySelector(".card-p");
const h3 = document.querySelector("h3");
const h2 = document.querySelector("h2");
const faq = document.querySelector("#faq");


// Listen for button clicks
button.addEventListener("click", changeThemes);

// Change theme colors
function changeThemes() {
    section.classList.toggle("light");
    submit.classList.toggle("light");
    button.classList.toggle("light");
    card.classList.toggle("light");
    card_i.classList.toggle("light");
    card_h4.classList.toggle("light");
    card_p.classList.toggle("light");
    h3.classList.toggle("light");
    h2.classList.toggle("light");
    faq.classList.toggle("light");
}



// Change button text




