import { Question } from "./questions"; 

const getNextQuestion = (G: {index: number}, questions: Question[]): Question => {
    return questions[G.index++];
};

export default getNextQuestion;