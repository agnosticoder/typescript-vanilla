import { Question } from './lib/questions';
import getNextQuestion from './lib/getNextQuestion.js';

//* I want to create a function that create fout options element with values
const createOptionsEls = (question: Question): HTMLOptionElement[] => {
    const options = [question.answer, ...question.wrongAnswers];

    const optionsEl = options.map((option) => {
        let optionEl = document.createElement('option');
        optionEl.innerText = option;
        optionEl.setAttribute('value', option);
        return optionEl;
    });

    return optionsEl;
};
interface RenderInput {
    questionTextEl: HTMLElement,
    answersSelectEl: HTMLElement,
    questions: Question[],
    G: {index: number}
}

const renderQuestion = ({G, questions, questionTextEl, answersSelectEl }: RenderInput) => {
    console.log(G.index, '--', questions.length);
    if (G.index < questions.length) {
        answersSelectEl.innerHTML = '';
        questionTextEl.innerText = questions[G.index].text;
        let optionsEls = createOptionsEls(getNextQuestion(G, questions));
        optionsEls.forEach((optionEl) => {
            answersSelectEl.appendChild(optionEl);
        });
    }
};

export default renderQuestion;
