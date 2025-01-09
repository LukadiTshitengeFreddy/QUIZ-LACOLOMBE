const quizContent = [
   {
      "title": "Dans les lieux oú le Salongo et obligatoire, tous les travailleur doivent nécessairement arriver à quelle heure ?",
      "id": 1,
      "suggestions": [
         {
            "one": "L’heure d’arrivée obligatoire pour tous les travailleurs est fixée à 9h00, sauf dérogation préalable",
            "two": "Les travailleurs doivent nécessairement arriver à 7h30 pour les travaux du samedi",
            "three": "Les travailleurs doivent obligatoirement arriver à 6h00, pour commencer tôt",
            "for": "Les travailleurs doivent arriver vers 7h50 car la loi regit que le Salongo commence à 8h00 et prend fin à 11h00"
         }
      ],
      "correctAnswer": 3
   },
   {
      "title": "Si l'un de nos collègues tombe malade, est-ce mal de l'aider avec un calmant le temps qu'il rentre chez lui ?",
      "id": 2,
      "suggestions": [
         {
            "one": "Il est strictement interdit de donner ou de vendre des produits pharmaceutiques ou médicaux a d’autres travailleurs",
            "two": "Ce n’est pas mal si vous avez vous-même déjà utilisé ce calmant et que vous êtes sûr de son efficacité",
            "three": "Oui, il est mal de donner un calmant, car seuls les membres du comité Direteur sont habilités à administrer des médicaments",
            "for": "Non, ce n’est pas mal tant que vous demandez son consentement et que le calmant est en vente libre"
         }
      ],
      "correctAnswer": 0
   },
   {
      "title": "En cas de maladie ou malaise, se presenter d'abord au travail vers quelle heure ? Et ensuite repartir dans quelle condition ?",
      "id": 3,
      "suggestions": [
         {
            "one": "Arriver au travail à 8 h pour éviter de perturber la matinée des collègues, et repartir le plus tôt possible pour éviter une rechute",
            "two": "Aller d'abord à l'hôpital, ensuite envoyer le bordereau de santé pour justifier son absence, et partir pour un temps de repos accordé par le directeur",
            "three": "Il est nécessaire de se présenter d'abord au travail vers 7 h 50 afin que les autorités soient au courant. Ensuite, la Direction devra déléguer un collègue pour vous accompagner",
            "for": "Ne pas donner de signe de vie durant la période de maladie et de convalescence. Ensuite, revenir et ne rien justifier auprès des autorités"
         }
      ],
      "correctAnswer": 2
   },
   {
      "title": "Qui est le Directeur General Adjoint de notre Entreprise ?",
      "id": 4,
      "suggestions": [
         {
            "one": "Madame Fanny Mulanga",
            "two": "Monsieur Ismael Wa ngoie",
            "three": "Madame Augustine Ilunga",
            "for": "Monsieur Meschack Kasongo"
         }
      ],
      "correctAnswer": 1
   },
   {
      "title": "",
      "id": 5,
      "suggestions": [
         {
            "one": "",
            "two": "",
            "three": "",
            "for": ""
         }
      ],
      "correctAnswer": 1
   },
   {
      "title": "",
      "id": 6,
      "suggestions": [
         {
            "one": "",
            "two": "",
            "three": "",
            "for": ""
         }
      ],
      "correctAnswer": 1
   },
   {
      "title": "",
      "id": 7,
      "suggestions": [
         {
            "one": "",
            "two": "",
            "three": "",
            "for": ""
         }
      ],
      "correctAnswer": 2
   },
   {
      "title": "",
      "id": 8,
      "suggestions": [
         {
            "one": "",
            "two": "",
            "three": "",
            "for": ""
         }
      ],
      "correctAnswer": 0
   },
   {
      "title": "",
      "id": 9,
      "suggestions": [
         {
            "one": "",
            "two": "",
            "three": "",
            "for": ""
         }
      ],
      "correctAnswer": 1
   },
   {
      "title": "",
      "id": 10,
      "suggestions": [
         {
            "one": "",
            "two": "",
            "three": "",
            "for": ""
         }
      ],
      "correctAnswer": 0
   },
   {
      "title": "",
      "id": 11,
      "suggestions": [
         {
            "one": "",
            "two": "",
            "three": "",
            "for": ""
         }
      ],
      "correctAnswer": 2
   },
   {
      "title": "",
      "id": 12,
      "suggestions": [
         {
            "one": "",
            "two": "",
            "three": "",
            "for": ""
         }
      ],
      "correctAnswer": 3
   },
   {
      "title": "",
      "id": 13,
      "suggestions": [
         {
            "one": "",
            "two": "",
            "three": "",
            "for": ""
         }
      ],
      "correctAnswer": 0
   },
   {
      "title": "",
      "id": 14,
      "suggestions": [
         {
            "one": "",
            "two": "",
            "three": "",
            "for": ""
         }
      ],
      "correctAnswer": 1
   },
   {
      "title": "",
      "id": 15,
      "suggestions": [
         {
            "one": "",
            "two": "",
            "three": "",
            "for": ""
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