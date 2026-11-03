// What data looks like 
// {
//     id: "electro-07-11",
//     type: "Petit électroménager",
//     lieu: "Maison des Amandiers",
//     adresse: "12 rue des Amandiers",
//     debut: "2026-11-07T10:00",
//     fin: "2026-11-07T13:00",
//     places: 8,
//     reserves: 4,
//     description: "Grille-pain qui ne chauffe plus, bouilloire qui fuit, aspirateur qui ne démarre pas ? Venez avec votre appareil. Un bénévole vous aide à trouver la panne et à la réparer vous-même.",
//     aApporter: ["L'appareil", "Son câble d'alimentation", "La pièce de rechange, si vous l'avez déjà"],
//   }

// Fonctions utiles
// Calcul du nombre de places encore libres
function spacesLeft(une_seance_particuliere) {
    return une_seance_particuliere.places - une_seance_particuliere.reserves
}

// Est-ce que la séance est complète ?
function isComplete(seance) {
    return spacesLeft(seance) === 0 ;
}

// Formatage de l'heure
function formatHour(iso) {
    const date = new Date(iso);
    const minutes = date.getMinutes();
    if (minutes === 0) {
        return `${date.getHours()} h`;
    }
    return `${date.getHours} h ${String(minutes).padStart(2, "0")}` ;
}

// Formatage du jour
function formatDay(iso) {
    const dateText = new Date(iso).toLocaleDateString("fr-FR" {
        weekday:"long",
        day: "numeric",
        month: "long",
    });
    return dateText.charAt(0).toUpperCase() + dateText.slice(1) ;
}

// création d'un nouveau créneau
function newSlot(seance) {
    const slotStart = document.createElement("time");
    const slotEnd = document.createElement("time");

    slotStart.dateTime = seance.debut ;
    slotEnd.dateTime = seance.fin ;

    slotStart.textContent = `${formatDay(seance.debut), formatHour(seance.debut)}` ;
    slotEnd.textContent = `${formatDay(seance.fin), formatHour(seance.fin)}` ;

    const fragment = document.createDocumentFragment();
    fragment.append(slotStart, "-", slotEnd);
    return fragment;
}

// Texte à afficher pour les places libres
function textForSpaces(seance) {
    const numberOfSpaces = spacesLeft(seance) ;
    return n === 1 ? '1 place restante' : `${numberOfSpaces} restantes`;
}

// Récupérer des infos dans l'URL pour faire une recherche
function getSlotByUrl() {

}


// Détail des la grille
const grille = document.querySelector(".grille-seances");
if (grille) {
  const filtreObjet = document.querySelector("#filtre-objet");
  const filtreLieu = document.querySelector("#filtre-lieu");
  const formulaireFiltres = document.querySelector(".filtres");
  const compteur = document.querySelector(".compteur");
  const aucunResultat = document.querySelector("#aucun-resultat");
  const boutonEffacer = document.querySelector("#effacer-filtres");

  // Fabrique une carte <article> pour une séance
  function creerCarte(seance) {
    const carte = document.createElement("article");
    carte.classList.add("carte");

    const titre = document.createElement("h3");
    const lien = document.createElement("a");
    lien.href = `seance.html?id=${seance.id}`;
    lien.textContent = seance.type;
    titre.append(lien);

    const etat = document.createElement("p");
    if (estComplete(seance)) {
      carte.classList.add("carte-complete");
      etat.classList.add("badge-complet");
      etat.textContent = "Complet";
    } else {
      etat.classList.add("places");
      etat.textContent = textePlaces(seance);
    }

    const lieu = document.createElement("p");
    lieu.classList.add("infos");
    lieu.textContent = seance.lieu;

    const date = document.createElement("p");
    date.classList.add("infos", "date");
    date.append(creerCreneau(seance));

    carte.append(titre, etat, lieu, date);
    return carte;
  }
}