/**
 * Start the Game
 */

function startQuiz() {
    document.getElementById('welcome').classList.add('d-none');
    document.getElementById('quiz-container').classList.remove('d-none');
    document.getElementById('quiz-container').classList.add('quiz-container');
}

let question_1 = 'Was bedeutet das norwegische Wort Lofot auf Deutsch?';
let question_1_answer_1 = 'Hasenpfote';
let question_1_answer_2 = 'Luchsfuß';
let question_1_answer_3 = 'Pferdeschwanz';
let question_1_answer_4 = 'Kuhhaut';

let question_2 = 'Warum ist die Durchschnittstemperatur im Winter nur -5°C?';
let question_2_answer_1 = 'Aufgrund der südlichen Lage';
let question_2_answer_2 = 'Weil sich die Larme Luft in den vielen Fjorden staut';
let question_2_answer_3 = 'Weil die Sonne dort eine hohe Strahlenkraft hat';
let question_2_answer_4 = 'Wegen dem Einfluss des Golfstroms';

let question_3 = 'Für welches Naturschauspiel sind die Lofoten bekannt?';
let question_3_answer_1 = 'Die Nordlichter';
let question_3_answer_2 = 'Vulkanausbrüche';
let question_3_answer_3 = 'Ebbe und Flut';
let question_3_answer_4 = 'Erdbeben';

let question_4 = 'Was findet man auf den Lofoten nur wenig vor?';
let question_4_answer_1 = 'Schnee';
let question_4_answer_2 = 'Fjorde';
let question_4_answer_3 = 'Berge';
let question_4_answer_4 = 'Bäume';

let question_5 = 'Wie nennt man auf den Lofoten kleine Ortschaften?';
let question_5_answer_1 = 'Lofot';
let question_5_answer_2 = 'Stod';
let question_5_answer_3 = 'Tettsteder';
let question_5_answer_4 = 'Oat';

let question_number = 0;
let progress = 0;
let right_answer;

/**
 * Changing Question
 */
function nextQuestion() {
    hideElements();

    question_number = question_number + 1;
    progress = question_number * 10;
    document.getElementById('progress-bar').innerHTML = progress + '%';
    document.getElementById('progress-bar').style.width = progress + '%';

    if(question_number == 1) {
        loadQuestion1();
    }

    if(question_number == 2) {
        loadQuestion2();
    } 
    
    if(question_number == 3) {
        loadQuestion3();
    }

    if(question_number == 4) {
        loadQuestion4();
    }

    if(question_number == 5) {
        loadQuestion5();
    }
}

function loadQuestion1() {
    document.getElementById('question').innerHTML = question_1;
        document.getElementById('answer1').innerHTML = question_1_answer_1;
        document.getElementById('answer2').innerHTML = question_1_answer_2;
        document.getElementById('answer3').innerHTML = question_1_answer_3;
        document.getElementById('answer4').innerHTML = question_1_answer_4;
        right_answer = 2;
}

function loadQuestion2() {
    document.getElementById('question').innerHTML = question_2;
        document.getElementById('quiz-container').style.backgroundImage = 'url(img/icybubble.jpeg)';
        document.getElementById('answer1').innerHTML = question_2_answer_1;
        document.getElementById('answer2').innerHTML = question_2_answer_2;
        document.getElementById('answer3').innerHTML = question_2_answer_3;
        document.getElementById('answer4').innerHTML = question_2_answer_4;
        right_answer = 4;
}

function loadQuestion3() {
    document.getElementById('question').innerHTML = question_3;
        document.getElementById('quiz-container').style.backgroundImage = 'url(img/itsmagic.jpeg)';
        document.getElementById('answer1').innerHTML = question_3_answer_1;
        document.getElementById('answer2').innerHTML = question_3_answer_2;
        document.getElementById('answer3').innerHTML = question_3_answer_3;
        document.getElementById('answer4').innerHTML = question_3_answer_4;
        right_answer = 1;
}

function loadQuestion4() {
    document.getElementById('question').innerHTML = question_4;
        document.getElementById('quiz-container').style.backgroundImage = 'url(img/Rushybeach.jpeg)';
        document.getElementById('answer1').innerHTML = question_4_answer_1;
        document.getElementById('answer2').innerHTML = question_4_answer_2;
        document.getElementById('answer3').innerHTML = question_4_answer_3;
        document.getElementById('answer4').innerHTML = question_4_answer_4;
        right_answer = 4;
}

function loadQuestion5() {
    document.getElementById('question').innerHTML = question_5;
        document.getElementById('quiz-container').style.backgroundImage = 'url(img/summer.jpg)';
        document.getElementById('answer1').innerHTML = question_5_answer_1;
        document.getElementById('answer2').innerHTML = question_5_answer_2;
        document.getElementById('answer3').innerHTML = question_5_answer_3;
        document.getElementById('answer4').innerHTML = question_5_answer_4;
        right_answer = 3;
}

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