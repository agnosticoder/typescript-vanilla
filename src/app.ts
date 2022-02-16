import { Question } from './lib/questions.js';
import renderQuestion from './renderQuestion.js';
import renderScore from './renderScore.js';

export interface AppProps {
    questionTextEl: HTMLElement;
    answersSelectEl: HTMLSelectElement;
    submitButtonEl: HTMLElement;
    startButtonEl: HTMLElement;
    scoreEl: HTMLElement;
    questions: Question[];
}

const App = ({
    questionTextEl,
    answersSelectEl,
    submitButtonEl,
    startButtonEl,
    scoreEl,
    questions,
}: AppProps) => {
    const G = {
        index: 0,
        correct: 0,
    };

    const renderQuestionProps = {
        questionTextEl,
        answersSelectEl,
        G,
        questions,
    };

    const renderScoreProps = {
        G,
        answersSelectEl,
        questionTextEl,
        questions,
        scoreEl,
        startButtonEl,
        submitButtonEl,
    };

    /* ------------------------ Our Code Goes After This ------------------------ */
    startButtonEl.addEventListener('click', () => {
        G.index = 0;
        G.correct = 0;
        scoreEl.style.display = 'none';
        startButtonEl.style.display = 'none';
        submitButtonEl.style.display = 'block';
        questionTextEl.style.display = 'block';
        answersSelectEl.style.display = 'block';

        renderQuestion(renderQuestionProps);
    });

    submitButtonEl.addEventListener('click', () => {
        const userAnswer = answersSelectEl.value;
        if (userAnswer === questions[G.index - 1].answer) G.correct++;
        
        //* when index is equal to questions.length show score
        renderScore(renderScoreProps);
        renderQuestion(renderQuestionProps);
    });
};

export default App;
