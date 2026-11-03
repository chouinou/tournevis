//  * Structure d'une séance :
//  *   id          identifiant unique, utilisé dans l'URL : seance.html?id=velo-07-11
//  *   type        le type d'objet réparé (voir TYPES)
//  *   lieu        le lieu (voir LIEUX)
//  *   adresse     l'adresse du lieu
//  *   debut, fin  date et heure au format ISO : "AAAA-MM-JJTHH:MM"
//  *   places      nombre total de places
//  *   reserves    nombre de places déjà réservées
//  *   description texte de présentation
//  *   aApporter   liste de ce qu'il faut apporter
//  */

const seances = [
  {
    id: "electro-07-11",
    type: "Petit électroménager",
    lieu: "Maison des Amandiers",
    adresse: "12 rue des Amandiers",
    debut: "2026-11-07T10:00",
    fin: "2026-11-07T13:00",
    places: 8,
    reserves: 4,
    description: "Grille-pain qui ne chauffe plus, bouilloire qui fuit, aspirateur qui ne démarre pas ? Venez avec votre appareil. Un bénévole vous aide à trouver la panne et à la réparer vous-même.",
    aApporter: ["L'appareil", "Son câble d'alimentation", "La pièce de rechange, si vous l'avez déjà"],
  },
  {
    id: "velo-07-11",
    type: "Vélo",
    lieu: "Atelier Tournevis",
    adresse: "8 passage des Artisans",
    debut: "2026-11-07T14:00",
    fin: "2026-11-07T17:00",
    places: 6,
    reserves: 6,
    description: "Freins, chaîne, crevaison, dérailleur : apprenez à entretenir et réparer votre vélo avec les bénévoles de l'atelier. Les outils sont fournis.",
    aApporter: ["Le vélo", "La chambre à air de rechange, si vous en avez une"],
  },
  {
    id: "info-12-11",
    type: "Informatique et téléphone",
    lieu: "Atelier Tournevis",
    adresse: "8 passage des Artisans",
    debut: "2026-11-12T18:00",
    fin: "2026-11-12T21:00",
    places: 6,
    reserves: 4,
    description: "Ordinateur qui rame, écran cassé, batterie qui ne tient plus : un bénévole vous aide à diagnostiquer le problème et à trouver une solution.",
    aApporter: ["L'appareil", "Son chargeur", "Vos mots de passe, si besoin de vous connecter"],
  },
  {
    id: "electro-14-11",
    type: "Petit électroménager",
    lieu: "Médiathèque du Parc",
    adresse: "3 allée du Parc",
    debut: "2026-11-14T10:00",
    fin: "2026-11-14T13:00",
    places: 8,
    reserves: 2,
    description: "Grille-pain qui ne chauffe plus, bouilloire qui fuit, aspirateur qui ne démarre pas ? Venez avec votre appareil. Un bénévole vous aide à trouver la panne et à la réparer vous-même.",
    aApporter: ["L'appareil", "Son câble d'alimentation", "La pièce de rechange, si vous l'avez déjà"],
  },
  {
    id: "couture-18-11",
    type: "Couture et textile",
    lieu: "Médiathèque du Parc",
    adresse: "3 allée du Parc",
    debut: "2026-11-18T14:00",
    fin: "2026-11-18T17:00",
    places: 8,
    reserves: 3,
    description: "Ourlet, fermeture éclair, trou, bouton : apprenez à repriser vos vêtements à la main ou à la machine. Machines à coudre et fils fournis.",
    aApporter: ["Le vêtement ou le tissu à réparer"],
  },
  {
    id: "velo-21-11",
    type: "Vélo",
    lieu: "Atelier Tournevis",
    adresse: "8 passage des Artisans",
    debut: "2026-11-21T10:00",
    fin: "2026-11-21T13:00",
    places: 6,
    reserves: 3,
    description: "Freins, chaîne, crevaison, dérailleur : apprenez à entretenir et réparer votre vélo avec les bénévoles de l'atelier. Les outils sont fournis.",
    aApporter: ["Le vélo", "La chambre à air de rechange, si vous en avez une"],
  },
  {
    id: "jouets-25-11",
    type: "Jouets et objets du quotidien",
    lieu: "Maison des Amandiers",
    adresse: "12 rue des Amandiers",
    debut: "2026-11-25T14:00",
    fin: "2026-11-25T17:00",
    places: 10,
    reserves: 3,
    description: "Jouet qui ne marche plus, lampe, chaise bancale, parapluie : apportez votre objet, on cherche ensemble comment lui donner une seconde vie.",
    aApporter: ["L'objet à réparer", "Les piles, si l'objet en utilise"],
  },
  {
    id: "info-26-11",
    type: "Informatique et téléphone",
    lieu: "Médiathèque du Parc",
    adresse: "3 allée du Parc",
    debut: "2026-11-26T18:00",
    fin: "2026-11-26T21:00",
    places: 6,
    reserves: 6,
    description: "Ordinateur qui rame, écran cassé, batterie qui ne tient plus : un bénévole vous aide à diagnostiquer le problème et à trouver une solution.",
    aApporter: ["L'appareil", "Son chargeur", "Vos mots de passe, si besoin de vous connecter"],
  },
];

/* Listes de référence */
const TYPES = ["Vélo", "Petit électroménager", "Couture et textile", "Informatique et téléphone", "Jouets et objets du quotidien"];
const LIEUX = ["Maison des Amandiers", "Médiathèque du Parc", "Atelier Tournevis"];
