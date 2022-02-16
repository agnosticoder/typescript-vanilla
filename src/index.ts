import App from './app.js';
import questions from './lib/questions.js';

//* selecting elements
const questionTextEl = document.getElementById('questionText') as HTMLDivElement
const answersSelectEl = document.getElementById('answersSelect') as HTMLSelectElement;
const submitButtonEl = document.getElementById('submitButton') as HTMLButtonElement;
const startButtonEl = document.getElementById('startButton') as HTMLHeadElement;
const scoreEl = document.getElementById('score') as HTMLButtonElement;

//* I don't want to run the code if any of above element doesn't exist, cuz they need each other
if (
    questionTextEl &&
    answersSelectEl &&
    submitButtonEl &&
    startButtonEl &&
    scoreEl
) {
    App({questionTextEl, answersSelectEl, submitButtonEl, startButtonEl, scoreEl, questions});
}
