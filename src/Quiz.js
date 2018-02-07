import React, { Component } from 'react';
import './Quiz.css';
import Question from './Components/Question.js';
import Answers from './Components/Answers.js';
import NextQuestion from './Components/Buttons/NextQuestion.js';
import FinishQuiz from './Components/Buttons/FinishQuiz.js';
import Score from './Components/Score.js';




class Quiz extends Component {

    defaultState = {
        data: [{}],
        currentQuestion: 0,
        finished: false,
        score: '',
    };
    constructor(props) {
        super(props);
        this.state = {
            data: [{}],
            currentQuestion: 0,
            finished: false,
            score: ''
        };
        this.getData();
    }
    getData() {
        fetch('/questions.json').then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({ data: data });
        }).catch((error) => {
            console.log('ERROR:' + error);
        });
    }

    nextQuestion() {
        if (this.state.currentQuestion === this.state.data.length - 1) {
            return this.setState({ currentQuestion: 0 });
        }
        return this.setState({ currentQuestion: this.state.currentQuestion + 1 });


    }

    checkAnswer(key) {
        var data = this.state.data.slice(0);
        const checked = data[this.state.currentQuestion].answers[key].checked;

        data[this.state.currentQuestion].answers[key].checked = !checked;
        this.setState({ data: data });
    }
    finishQuiz() {
        const score = this.getScore();
        this.setState({
            score: score,
            finished: true
        });
    }
    getScore() {
        var score = 0;
        this.state.data.map((question) => {
            question.answers.some((answer, key) => {
                if ((answer.checked && !answer.correct) ||
                    (answer.correct && !answer.checked)) {
                    return true;
                }

                if (key === question.answers.length - 1) {
                    score = score + 1;
                }
            });
        });

        return score;
    }

    repeatQuiz() {
        this.setState(this.defaultState);
        this.getData();
    }

    render() {
        const question = this.state.data[this.state.currentQuestion].question;
        const answers = this.state.data[this.state.currentQuestion].answers;
        const finished = this.state.finished;
        const score = this.state.score;
        const total = this.state.data.length;
        return (
            <div className="box">
                <div className="row">
                    <div className="questions">
                        <Question question={question} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Answers answers={answers} finished={finished} onClick={(key) => this.checkAnswer(key)} />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <NextQuestion next={() => this.nextQuestion()} />
                        <FinishQuiz className="button" onClick={() => this.finishQuiz()} finished={finished} />
                    </div>
                </div>


                <div className="score">
                    <Score score={score} total={total} onClick={() => this.repeatQuiz()} />
                </div>

            </div>);
    }
}
export default Quiz;