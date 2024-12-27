const quizContent = [
   {
      "title": 'Que veut dire l\'expression : MVT ?',
      "id": 1,
      "suggestions": [
         {
            "id": 1,
            "one": "Une expédition internationale visant à explorer une île déserte pour y établir des bases scientifiques et commerciales",
            "two": "Veut dire déplacer l’argent d’une agence a une autre dans une même ville, soit d’une ville a une autre, soit encore d’une agence à une banque ou vice versa(1)",
            "three": "Une architecture utilisée dans le framework Django, où le modèle gère les données, la vue traite la logique et le template gère l\'affichage",
            "for": "Une abréviation courante pour \'mouvement\', souvent utilisée dans des contextes liés à la physique ou à la cinématique"
         }
      ],
   },
   {
      "title": 'Que veut dire l\'expression : Mission de service ?',
      "id": 2,
      "suggestions": [
         {
            "id": 2,
            "one": "Expression utilisé pour désigner une opération effectuée sur un compte bancaire, comme un débit ou un crédit Par exemple, un relevé de compte affiche les MVT pour lister les transactions",
            "two": "Un programme militaire ultra-secret dédié à l’entraînement de robots pour accomplir des tâches à haut risque en territoire hostile",
            "three": "Inclus tout déplacement du travailleur dans le cadre du travail pour une longue ou courte durée sur un chemin long ou court(1)",
            "for": "Un projet organisé par un groupe d’amis pour créer une chaîne de restauration rapide spécialisée dans les plats exotiques"
         }
      ],
   },
   {
      "title": 'Que veut dire l\'expression : Au service ?',
      "id": 3,
      "suggestions": [
         {
            "id": 3,
            "one": "Une technique utilisée par les joueurs de tennis pour améliorer leur précision lorsqu’ils frappent la balle au début d’un match",
            "two": "Au boulot, au travail ou en train de travailler ; soit le trajet nécessaire pour atteindre le lieu du travail(1)",
            "three": "Une ancienne coutume médiévale où les chevaliers devaient chanter des poèmes à table pour divertir les seigneurs et les dames",
            "for": "Un département secret dans les entreprises qui fabrique des gadgets pour les agents secrets, comme dans les films d’espionnage"
         }
      ],
   },
   {
      "title": 'Que veut dire l\'expression : Locale ? ',
      "id": 4,
      "suggestions": [
         {
            "id": 1,
            "one": "Ce qui est relatif à un endroit spécifique ou une zone géographique limitée, souvent utilisé pour désigner des particularités ou des éléments propres à une région précise",
            "two": "Une technique musicale du XVIIIe siècle qui consistait à imiter les sons de la nature pour créer une ambiance régionale",
            "three": "Une ancienne danse ancestrals pratiquée exclusivement sous la pleine lune dans certaines régions isolées",
            "for": "L’endroit où se trouve notre activité ou notre bureau (bureau, agence, alimentation, magasin ou toute pièce comprenant les biens et matériaux(1)"
         }
      ],
   },
   {
      "title": "Que veut dire l\'expression : Comité directeur ? ",
      "id": 5,
      "suggestions": [
         {
            "id": 1,
            "one": "Un groupe de bénévoles chargé de nettoyer les parcs municipaux et de planter des arbres dans les zones urbaines",
            "two": "Une organisation secrète qui conçoit les règles des jeux de société populaires, comme celui-ci pour aider les employés dans la culture de l\'entreprise",
            "three": "Un groupe restreint de personnes ayant pour mission de définir les grandes orientations et de prendre des décisions dans le but de s\'auto - satisfaire",
            "for": "L’ensemble des quatre dirigeants de l’entreprise dont, la mission est de définir les grandes orientations et de prendre des décisions stratégiques au sein de entreprise(1)"
         }
      ],
   }
]

let first_screen = document.querySelector('#first_screen');
let second_screen = document.querySelector('#second_screen');
let btn_start = document.querySelector('#btn_start').addEventListener('click', function () {
   first_screen.style.display = 'none';
   second_screen.style.display = 'block';
})
let view_quiz = document.querySelector('#view_quiz')


function openModal() {
   document.querySelector('.overlay').style.display = 'block';
   document.querySelector('.modal').classList.add('modal--open');
}
function closeModal() {
   document.querySelector('.overlay').style.display = 'none';
   document.querySelector('.modal').classList.remove('modal--open');
}
