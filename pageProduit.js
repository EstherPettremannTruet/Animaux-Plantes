// barre de recherche
const recherche = document.querySelector('.recherche');
const iconeRecherche = recherche.querySelector('i');
const inputRecherche = recherche.querySelector('input');

// s'ouvre/se ferme au clic sur l'icône
iconeRecherche.addEventListener('click', function() {
    recherche.classList.toggle('ouverte');
});

//CARROUSEL
const miniatures = document.querySelectorAll('.miniature');
const imagePrincipale = document.querySelector('.main-image');
const flecheGauche = document.querySelector('.arrow-left');
const flecheDroite = document.querySelector('.arrow-right');

let indexActuel = 0;

function mettreAJourGalerie(index) {
    if (index >= miniatures.length) index = 0;
    if (index < 0) index = miniatures.length - 1;

    indexActuel = index;
    imagePrincipale.src = miniatures[indexActuel].src;

    miniatures.forEach(img => img.classList.remove('active-miniature'));
    miniatures[indexActuel].classList.add('active-miniature');
}

// Flèche DROITE
flecheDroite.addEventListener('click', function() {
    mettreAJourGalerie(indexActuel + 1);
});

// Flèche GAUCHE
flecheGauche.addEventListener('click', function() {
    mettreAJourGalerie(indexActuel - 1);
});

// Clic Miniatures
miniatures.forEach((mini, index) => {
    mini.addEventListener('click', () => {
        mettreAJourGalerie(index);
    });
});

mettreAJourGalerie(0);

//BOUTON FAVORIS
document.addEventListener('click', function(favori) {
    const etoile = favori.target.closest('.favori');
    
    if (etoile) {
        etoile.classList.toggle('selectionne'); 
    }
});


//BOUTONS QUANTITE
const btnMoins = document.querySelector('.quantite button:first-child');
const btnPlus = document.querySelector('.quantite button:last-child');
const affichageQuantite = document.querySelector('.quantite span');

let quantiteActuelle = 1;

btnPlus.addEventListener('click', function() {
    quantiteActuelle++;
    affichageQuantite.textContent = quantiteActuelle;
});

btnMoins.addEventListener('click', function() {
    if (quantiteActuelle > 1) {
        quantiteActuelle--;
        affichageQuantite.textContent = quantiteActuelle;
    }
});


// VOLET PANIER
const voletPanier = document.getElementById('volet-panier');
const btnFfermer = document.querySelector('.btn-fermer-panier');
const btnContinuer = document.querySelector('.btn-continuer-achat');

function ouvrirPanier() {
    voletPanier.classList.add('ouvert');
}

function fermerPanier() {
    voletPanier.classList.remove('ouvert');
}

if (btnFfermer) btnFfermer.addEventListener('click', fermerPanier);
if (btnContinuer) btnContinuer.addEventListener('click', fermerPanier);

document.addEventListener('click', function(volet) {
    if (volet.target.matches('.btn-panier')) {
        ouvrirPanier();
    }
});


//ONGLET
const boutons = document.querySelectorAll('.onglet-btn');
const contenus = document.querySelectorAll('.onglet-texte');

boutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        
        document.querySelector('.onglet-btn.active').classList.remove('active');
        document.querySelector('.onglet-texte.active').classList.remove('active');

        bouton.classList.add('active');

        const cible = bouton.getAttribute('data-target');
        document.getElementById(cible).classList.add('active');
    });
});


//CARROUSEL PRODUITS SIMILAIRES
const allProduits = document.querySelector('.produits-all');
const flecheSimGauche = document.querySelector('.arrow-sim-left');
const flecheSimDroite = document.querySelector('.arrow-sim-right');

// Clic sur la flèche droite
flecheSimDroite.addEventListener('click', () => {
    const unProduit = document.querySelector('.un-produit');

    if (unProduit) {
        const distanceDeplacement = unProduit.offsetWidth + 16;
        allProduits.scrollLeft += distanceDeplacement;
    } else {
        console.error("Aucun élément trouvé.");
    }
});

// Clic sur la flèche gauche
flecheSimGauche.addEventListener('click', () => {
    const unProduit = document.querySelector('.un-produit');

    if (unProduit) {
        const distanceDeplacement = unProduit.offsetWidth + 16;
        allProduits.scrollLeft -= distanceDeplacement;
    }
});
