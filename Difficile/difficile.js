const quizContent = [
   {
      "title": "",
      "id": 1,
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
      "id": 2,
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
      "id": 3,
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
      "id": 4,
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