document.addEventListener("DOMContentLoaded", function () {
   const Questions = [
      'Que veut dire l\'expression : MVT ? ',
      'Que veut dire l\'expression : Mission de service ? ',
      'Que veut dire l\'expression : Au service ?',
      'Que veut dire l\'expression : Locale ? ',
      'Que veut dire l\'expression : Comité directeur ? '
   ];
   const Answer1 = [
      'Expression utilisé pour désigner une opération effectuée sur un compte bancaire, comme un débit ou un crédit Par exemple, un relevé de compte affiche les MVT pour lister les transactions',
      'Veut dire déplacer l’argent d’une agence a une autre dans une même ville, soit d’une ville a une autre, soit encore d’une agence à une banque ou vice versa(1)',
      'Une architecture utilisée dans le framework Django, où le modèle gère les données, la vue traite la logique et le template gère l\'affichage',
      'Une abréviation courante pour \'mouvement\', souvent utilisée dans des contextes liés à la physique ou à la cinématique',
   ];
   const Answer2 = [
      'Une expédition internationale visant à explorer une île déserte pour y établir des bases scientifiques et commerciales',
      'Un programme militaire ultra-secret dédié à l’entraînement de robots pour accomplir des tâches à haut risque en territoire hostile',
      'Inclus tout déplacement du travailleur dans le cadre du travail pour une longue ou courte durée sur un chemin long ou court(1)',
      'Un projet organisé par un groupe d’amis pour créer une chaîne de restauration rapide spécialisée dans les plats exotiques'
   ];
   const Answer3 = [
      'Une technique utilisée par les joueurs de tennis pour améliorer leur précision lorsqu’ils frappent la balle au début d’un match',
      'Au boulot, au travail ou en train de travailler ; soit le trajet nécessaire pour atteindre le lieu du travail(1)',
      'Une ancienne coutume médiévale où les chevaliers devaient chanter des poèmes à table pour divertir les seigneurs et les dames',
      'Un département secret dans les entreprises qui fabrique des gadgets pour les agents secrets, comme dans les films d’espionnage'
   ];
   const Answer4 = [
      'Ce qui est relatif à un endroit spécifique ou une zone géographique limitée, souvent utilisé pour désigner des particularités ou des éléments propres à une région précise',
      'Une technique musicale du XVIIIe siècle qui consistait à imiter les sons de la nature pour créer une ambiance régionale',
      'Une ancienne danse ancestrals pratiquée exclusivement sous la pleine lune dans certaines régions isolées',
      'L’endroit où se trouve notre activité ou notre bureau (bureau, agence, alimentation, magasin ou toute pièce comprenant les biens et matériaux(1)'
   ];
   const Answer5 = [
      'Un groupe de bénévoles chargé de nettoyer les parcs municipaux et de planter des arbres dans les zones urbaines',
      'Une organisation secrète qui conçoit les règles des jeux de société populaires, comme celui-ci pour aider les employés dans la culture de l\'entreprise',
      'Un groupe restreint de personnes ayant pour mission de définir les grandes orientations et de prendre des décisions dans le but de s\'auto - satisfaire',
      'L’ensemble des quatre dirigeants de l’entreprise dont, la mission est de définir les grandes orientations et de prendre des décisions stratégiques au sein de entreprise(1)'
   ]
   let NbrQuestions = Questions.length;

   let afficheDiv = document.getElementById('AffichageAll')

   let DivQuestion = document.getElementById('HereQuiez')

   let Reponse1 = document.getElementById('chose_one')

   let Reponse2 = document.getElementById('chose_two')

   let Reponse3 = document.getElementById('chose_three')

   let Reponse4 = document.getElementById('chose_for')

   DivQuestion.textContent = '',
      setTimeout(() => {
         afficheDiv.style.display = 'block';
         DivQuestion.textContent = Questions[0]
         Reponse1.textContent = Answer1[0]
         Reponse2.textContent = Answer1[1]
         Reponse3.textContent = Answer1[2]
         Reponse4.textContent = Answer1[3]
      }, 500);
   document.getElementById('sur').textContent = NbrQuestions;

});


let compteur = 0;

let CompteurIncrem = document.getElementById('compteur')

function compteurValue() {
   compteur += 1;
   CompteurIncrem.textContent = compteur + '/';
}




