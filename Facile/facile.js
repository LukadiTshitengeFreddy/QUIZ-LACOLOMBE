const quizContent = [
   {
      "title": "Que veut dire l'expression : MOUVEMENT BANQUE ?",
      "id": 1,
      "suggestions": [
         {
            "one": "Une expédition internationale visant à explorer une île déserte pour y établir des bases scientifiques et commerciales",
            "two": "Signifie déplacer l’argent d’une agence a une autre dans une même ville, soit d’une ville a une autre, soit encore d’une agence à une banque ou vice versa",
            "three": "Une architecture utilisée dans le framework Django, où le modèle gère les données, la vue traite la logique et le template gère l'affichage",
            "for": "Une abréviation courante pour mouvement, souvent utilisée dans des contextes liés à la physique ou à la cinématique"
         }
      ],
      "correctAnswer": 1
   },
   {
      "title": " Qui est l'actuel PDG de notre Entreprise ?",
      "id": 2,
      "suggestions": [
         {
            "one": "Monsieur Baudouin Wa ngoie",
            "two": "Monsieur Deo Hamboleo",
            "three": "Monsieur Patrick Kibila",
            "for": "Madame Nicole Wa ngoie"
         }
      ],
      "correctAnswer": 0
   },
   {
      "title": "Que veut dire l'expression : FAIRE UN DÉPÔT ?",
      "id": 3,
      "suggestions": [
         {
            "one": "Ranger un objet précieux chez un notaire pour qu'il soit protégé et conservé jusqu'à la fin d'un contrat",
            "two": "Déposer une somme d'argent sur un compte bloqué pour servir uniquement de garantie lors d'un emprunt ou d'un crédit immobilier",
            "three": "C’est l’opération qui consiste pour un client à remettre l’argent a un caissier pour pouvoir le transférer pour son compte vers une autre agence",
            "for": "Effectuer une opération bancaire qui consiste à transférer de l'argent depuis un compte courant directement vers une banque étrangère"
         }
      ],
      "correctAnswer": 2
   },
   {
      "title": "Que veut dire l'expression : FAIRE UN RETRAIT ?",
      "id": 4,
      "suggestions": [
         {
            "one": "Retirer un document officiel d’un bureau administratif pour pouvoir le modifier avant de le soumettre à nouveau",
            "two": "Supprimer un compte bancaire de manière permanente pour éviter toute future transaction ou activité associée",
            "three": "Enlever une somme d’argent de sa cate visa, mais uniquement pour la transférer immédiatement vers un compte bancaire",
            "for": "Opération consistant pour un bénéficiaire de retirer une somme d’argent dans notre locale moyennant un code fournit par un expéditeur"
         }
      ],
      "correctAnswer": 3
   },
   {
      "title": "Que veut dire l'expression : ONG ? ",
      "id": 5,
      "suggestions": [
         {
            "one": "Organisation Nationale de Gouvernance, une entité qui gère les politiques publiques à l’échelle nationale avec des objectifs sociaux ",
            "two": "Est un acronyme pour Organisation non-gouvernementale",
            "three": "Une organisation secrète qui conçoit les règles des jeux de société populaires, comme celui-ci pour aider les employés dans la culture de l\'entreprise",
            "for": "Organisation Non Générale, une association temporaire créée pour résoudre des crises spécifiques dans des régions isolées"
         }
      ],
      "correctAnswer": 1
   },
   {
      "title": "Quel est la moyenne d'âge dans notre entreprise pour être considéré comme mineur ?",
      "id": 6,
      "suggestions": [
         {
            "one": "(18-25) ans",
            "two": "(0-17) ans",
            "three": "(30-50) ans",
            "for": "(0-20) ans"
         }
      ],
      "correctAnswer": 1
   },
   {
      "title": "Qui est l'actuel Directeur Général de notre Entreprise ?",
      "id": 7,
      "suggestions": [
         {
            "one": "Monsieur Jonathan Monkila",
            "two": "Monsieur Pascal Zahera",
            "three": "Monsieur Patrick Kibila",
            "for": "Monsieur Ismael Wa ngoie"
         }
      ],
      "correctAnswer": 2
   },
   {
      "title": "Nous avons combien d'echelle d'infractions pour les fautes légères ?",
      "id": 8,
      "suggestions": [
         {
            "one": "(Six) echelle d'infraction",
            "two": "(Dix) echelle d'infraction",
            "three": "(Trois) echelle d'infraction",
            "for": "(Une) echelle "
         }
      ],
      "correctAnswer": 0
   },
   {
      "title": "À quoi sert le bureau Solde ?",
      "id": 9,
      "suggestions": [
         {
            "one": "Le bureau Solde sert à organiser des ventes promotionnelles en fin de saison pour écouler les produits invendus des magasins",
            "two": "Le bureau de la direction générale qui s’occupe de vérifier toutes les transactions financières et contrôler le capital de l’entreprise",
            "three": "Il est chargé de calculer les gains et les pertes des jeux de hasard dans les casinos internationaux",
            "for": "Ce bureau gère les économies des citoyens et redistribue les surplus à des organisations caritatives"
         }
      ],
      "correctAnswer": 1
   },
   {
      "title": "Est-il interdit aux travailleurs d’avoir une relation amoureuse ?",
      "id": 10,
      "suggestions": [
         {
            "one": "Non,au moins dans le cas d’une relation très sérieuse. Si c’est le cas, vous devez en informer à un des membres du comité directeurgit",
            "two": "Oui, c'est interdit par une loi internationale qui vise à maintenir un environnement totalement dénué d'émotions dans les lieux de travail",
            "three": "Oui, les entreprises peuvent licencier automatiquement deux employés qui commencent une relation, même si cela n’affecte pas leur travail",
            "for": "Non, tout contact personnel entre collègues n'est pas considéré comme une infraction aux droits fondamentaux des entreprises"
         }
      ],
      "correctAnswer": 0
   },
   {
      "title": "Nos locaux sont ouverts de quelle jour à quel jour ?",
      "id": 11,
      "suggestions": [
         {
            "one": "Les locaux sont ouverts du lundi au vendredi, mais uniquement l’après-midi",
            "two": "Nos locaux sont ouverts du lundi au samedi, avec une fermeture exceptionnelle le samedi matin 15h",
            "three": "Les portes de nos locaux sont ouvertes du lundi au vendredi de 8h00 à 16h30, et le samedi jusqu'à 14h00",
            "for": "Nos locaux sont ouverts du lundi au samedi de 8h00 jusqu'à l'heure de finir le boulot, et le samedi jusqu'à 14h00"
         }
      ],
      "correctAnswer": 2
   },
   {
      "title": "Combien des jours ou semaine en amont une demande d'absence doit être indiquer ?",
      "id": 12,
      "suggestions": [
         {
            "one": "3 Semaine avant",
            "two": "7 Jours après",
            "three": "2 Semaine avant",
            "for": "7 Jours avant"
         }
      ],
      "correctAnswer": 3
   },
   {
      "title": "Lorsque le gouvernement annonce une journée de marche ou tout autre activité qui pourrait affecter nos activités que demander au gerant de faire ?",
      "id": 13,
      "suggestions": [
         {
            "one": "Il est demandé d’informer immédiatement la direction et un membre du comité directeur, pour avoir des instructions claires sur l'approche à avoir",
            "two": "Demander au gérant de fermer les locaux pour toute la journée, peu importe l’impact réel de l’activité",
            "three": "Dire au gérant de contacter tous les employés pour leur demander de venir travailler une heure plus tôt, au cas où",
            "for": "Il est demandé de fermer tous nos locaux et attendre les instructions le jour suivant pour reprendre ou non"
         }
      ],
      "correctAnswer": 0
   },
   {
      "title": "L'habillement classique est requis de quel jour à quel jour ?",
      "id": 14,
      "suggestions": [
         {
            "one": "L’habillement classique est obligatoire du jeudi au dimanche, sauf les jours fériés",
            "two": "L’habillement classique est exigé tous les jours, y compris le samedi, bien qu'une jounée relax mais décente",
            "three": "L’habillement classique est exigé tous les jours, sauf le samedi, où une tenue décontractée est exigée",
            "for": "L’habillement classique est requis du lundi au samedi, mais uniquement en chemise"
         }
      ],
      "correctAnswer": 1
   },
   {
      "title": "Qui est le Chef du departement Informatique ?",
      "id": 15,
      "suggestions": [
         {
            "one": "Monsieur Peniel Shako",
            "two": "monsieur Ismael Wa ngoie",
            "three": "Monsieu bellamard Kiala",
            "for": "Monsieur Jonathan Monkila"
         }
      ],
      "correctAnswer": 0
   }
]

const first_screen = document.querySelector('#first_screen');
const second_screen = document.querySelector('#second_screen');
const correctAnswer = quizContent.correctAnswer;
let btn_start = document.querySelector('#btn_start');
let view_quiz = document.querySelector('#view_quiz');
let showResult = document.querySelector('#showResult');
let increm_quiz = document.querySelector('#increm_quiz');
let NbrBonnRepons = document.querySelector('#NbrBonnRepons');
let Nbr_Bon_Rep = document.querySelector('#Nbr_Bon_Rep');
let Allq = document.querySelectorAll('#Allq');
let allQuiz = quizContent.length;
let currentQuestionIndex = 0;
let compteur = 0;
let score = 0;
let scoreR = 0

increm_quiz.textContent = '0/' + allQuiz;

Allq.textContent = allQuiz;

view_quiz.textContent = '';

btn_start.addEventListener('click', function () {
   first_screen.style.display = 'none';
   second_screen.style.display = 'block';
   NbrBonnRepons.style.display = 'block';
   displayQuestion()
})

function displayQuestion() {
   if (currentQuestionIndex < quizContent.length) {
      const question = quizContent[currentQuestionIndex];
      view_quiz.textContent = question.title;
      const options = Object.values(question.suggestions[0]);
      document.querySelectorAll('.btn_quiz').forEach((btn, index) => {
         btn.textContent = options[index];
         btn.onclick = () => handleAnswer(index);
      });
   } else {
      endQuiz();
   }
}

function handleAnswer(selectedIndex) {

   const question = quizContent[currentQuestionIndex];
   const correctAnswer = question.correctAnswer;

   if (selectedIndex === correctAnswer) {
      score += 1;
      scoreR += 1;
   }

   console.log(`Réponse sélectionnée : ${selectedIndex}, Bonne réponse : ${correctAnswer}`);

   compteur += 1;

   increm_quiz.textContent = `${compteur} / ${allQuiz}`;

   Nbr_Bon_Rep.textContent = scoreR

   currentQuestionIndex++;

   displayQuestion();

}

function endQuiz() {
   showResult.textContent = score
   document.querySelector('.overlay').style.display = 'block';
   document.querySelector('.modal').style.display = 'block';
   document.querySelectorAll('.btn_quiz').forEach((btn) => {
      btn.style.display = 'none';
      second_screen.style.display = 'none';
      btn.onclick = null;
   });
}

function closeModal() {
   document.querySelector('.overlay').style.display = 'none';
   document.querySelector('.modal').style.display = 'none';
}
function v() {
   f.addEventListener('click', function () {
      alert('Bonjour')
   })
}
