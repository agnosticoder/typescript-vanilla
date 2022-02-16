import { AppProps } from "./app";
interface RenderScoreProps extends AppProps{
    G: {index: number, correct: number}
}

const renderScore = ({
    questionTextEl,
    answersSelectEl,
    submitButtonEl,
    startButtonEl,
    scoreEl,
    questions,
    G
}: RenderScoreProps) => {
    console.log(G.index, questions.length);
    if (G.index === questions.length) {
        startButtonEl.style.display = 'block';
        submitButtonEl.style.display = 'none';
        questionTextEl.style.display = 'none';
        answersSelectEl.style.display = 'none';
        scoreEl.style.display = 'block';
        scoreEl.innerText = `Correct Answers: ${G.correct}`;
    }
};

export default renderScore;
