/**
 * Start the Game
 */
function startQuiz() {
    document.getElementById('welcome').classList.add('d-none');
    document.getElementById('quiz-container').classList.remove('d-none');
    document.getElementById('quiz-container').classList.add('quiz-container');
}

/**
 * Questiondefinition
 */
let allQuestions = [{
    'question': 'Was bedeutet das norwegische Wort Lofot auf Deutsch?',
    'answer_1': 'Hasenpfote',
    'answer_2': 'Luchsfuß',
    'answer_3': 'Pferdeschwanz',
    'answer_4': 'Kuhhaut',
    'right_answer': 2
},
{
    'question': 'Warum ist die Durchschnittstemperatur im Winter nur -5°C?',
    'answer_1': 'Aufgrund der südlichen Lage',
    'answer_2': 'Weil sich die warme Luft in den vielen Fjorden staut',
    'answer_3': 'Weil die Sonne dort eine hohe Strahlenkraft hat',
    'answer_4': 'Wegen dem Einfluss des Golfstroms',
    'right_answer': 4,
    'background-image': 'url(img/icybubble.jpeg)'
},
{
    'question': 'Für welches Naturschauspiel sind die Lofoten bekannt?',
    'answer_1': 'Die Nordlichter',
    'answer_2': 'Vulkanausbrüche',
    'answer_3': 'Ebbe und Flut',
    'answer_4': 'Erdbeben',
    'right_answer': 1,
    'background-image': 'url(img/itsmagic.jpeg)'
},
{
    'question': 'Was findet man auf den Lofoten nur wenig vor?',
    'answer_1': 'Schnee',
    'answer_2': 'Fjorde',
    'answer_3': 'Berge',
    'answer_4': 'Bäume',
    'right_answer': 4,
    'background-image': 'url(img/rushybeach.jpeg)'
},
{
    'question': 'Wie nennt man auf den Lofoten kleine Ortschaften?',
    'answer_1': 'Lofot',
    'answer_2': 'Stod',
    'answer_3': 'Tettsteder',
    'answer_4': 'Oat',
    'right_answer': 3,
    'background-image': 'url(img/summer.jpg)'
}];

let question_number = 0;
let progress = 0;
let right_answer;

/**
 * Changing Question
 */
function nextQuestion() {
    hideElements();

    if(question_number == allQuestions.length) {
        finishQuiz();
    } else {
    question_number = question_number + 1;
    progress = Math.round((question_number / allQuestions.length) * 100);
    document.getElementById('progress-bar').innerHTML = progress + '%';

    document.getElementById('progress-bar').style.width = progress + '%';

        loadQuestion();
    }
}

/**
 * Quiz finishing
 */
function finishQuiz() {
    document.getElementById('quiz-container').classList.add('d-none');
    document.getElementById('quiz-finish').classList.remove('d-none');
    document.getElementById('quiz-finish').classList.add('quiz-finish');
}

/**
 * Loading next Question
 */
let urls = [
    'url(img/freedomsommer.jpg',
    'url(img/icybubble.jpeg)',
    'url(img/itsmagic.jpeg)',
    'url(img/rushybeach.jpeg)',
    'url(img/summer.jpg)'
];
function loadQuestion() {
    updateField('question', 'question');
    updateField('answer1', 'answer_1');
    updateField('answer2', 'answer_2');
    updateField('answer3', 'answer_3');
    updateField('answer4', 'answer_4');
    right_answer = allQuestions[question_number - 1]['right_answer'];
    let quizContainer = document.getElementById('quiz-container');
    quizContainer.style.backgroundImage = urls[question_number - 1]; //Changing Backgroundimg
}
function updateField(id, key) {
    document.getElementById(id).innerHTML = allQuestions[question_number - 1][key];
}


/**
 * Hiding Next-Botton
 */
function hideElements(){
    document.getElementById('right-answer').classList.add('d-none');
    document.getElementById('next-btn').classList.add('d-none');
}

/**
 * Button Click Function
 */
function answer(a) {
    
        if (a == right_answer) {
            document.getElementById('wrong-answer').classList.add('d-none');
            document.getElementById('right-answer').classList.remove('d-none');
            document.getElementById('next-btn').classList.remove('d-none');
        } else {
            document.getElementById('right-answer').classList.add('d-none');
            document.getElementById('wrong-answer').classList.remove('d-none');
        }
}