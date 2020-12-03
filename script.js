const quizData = [
    {
        question: "How old is Me?",
        a: '19',
        b: '20',
        c: '21',
        d: '22',
        correct: 'd'
    },
    {
        question: "What's my favourate fruit?",
        a: 'Apple',
        b: 'Banana',
        c: 'Mango',
        d: 'Grapes',
        correct: 'c'
    },
    {
        question: 'My Ideal Time of sleeping?',
        a: '10pm',
        b: '12 midnight',
        c: '1am',
        d: '2am',
        correct: 'd'
    },
    {
        question: 'Whome do I like the most?',
        a: 'My friends',
        b: 'My parents',
        c: 'Myself',
        d: '',
        correct: 'b'
    },
    {
        question: 'Which thing I do the most?',
        a: 'sleeping',
        b: 'studing',
        c: 'exercising',
        d: 'Cooking',
        correct: 'a'
    },

];

const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const quiz = document.getElementById('quiz');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    unTick();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

submitBtn.addEventListener('click', () => {
    if(isSelected()) {
        var optionSelected = isSelected();
        if(optionSelected == quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if( currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You've got ${score} out of ${quizData.length} questions correct!!</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    } else {
        alert('Please Select an option to continue!')
    }
})

function isSelected() {
    let answer;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
function unTick() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}