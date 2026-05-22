// carrousel

const slides = document.querySelectorAll('.slide');
let current = 0;

setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}, 3000);



// cookies

const cookies = document.getElementById("cookies");
const accept = document.getElementById("accept");
const refuse = document.getElementById("refuse");

const page = document.body;

setTimeout(() => {
    cookies.classList.add("show");
}, 1000);

// accepter
accept.addEventListener("change", () => {
    cookies.classList.remove("show");
});

// refuser
refuse.addEventListener("change", () => {
    cookies.classList.remove("show");
    page.classList.add("blur-page");
});


// barre de recherche
const recherche = document.querySelector('.recherche');
const iconeRecherche = recherche.querySelector('i');
const inputRecherche = recherche.querySelector('input');

// s'ouvre/se ferme au clic sur l'icône
iconeRecherche.addEventListener('click', () => {
    recherche.classList.toggle('ouverte');
});


// sélection du magasin
const boutonsOnglet = document.querySelectorAll('.btn-onglet-selection');
const groupes = document.querySelectorAll('.groupe-cards');

boutonsOnglet.forEach(bouton => {
    bouton.addEventListener('click', () => {

        boutonsOnglet.forEach(b => b.classList.remove('actif'));
        bouton.classList.add('actif');

        const groupe = bouton.dataset.groupe;
        groupes.forEach(g => {
            g.style.display = g.id === groupe ? 'flex' : 'none';
        });
    });
});