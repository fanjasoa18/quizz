import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import pic2 from '../pics/pic2.png';
import courage from '../pics/courage.png';
import congrats from '../pics/congrats.png';
import './Quizz.css';
import questions from './QuizzData';
import QuizzResult from './QuizzResult';

function Quizz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const [showResult, setShowResult] = useState(false);
    const [clicked, setClicked] = useState(false);

    const nextQuestion = currentQuestion + 1;

    const handleAnswerOption = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
            setCorrectAnswer(correctAnswer + 1)
        }
        setClicked(true);
    };
    const handleNextOption = () => {
        setClicked(false);
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true)
        }
    };
    const handleTryAgain = () => {
        setCurrentQuestion(0);
        setScore(0);
        setCorrectAnswer(0);
        setShowResult(false);
    };
    let mess;
    const message = () => {
        if (score < (questions.length / 2)) {
            mess =
                <div className='ko'>
                    <h2>Courage<img src={courage} alt="" className='ko-pic'/></h2>
                </div>
        } else {
            mess =
                <img src={congrats} alt="" className='ok-pic'/>    
        }
        return mess;
    }
    const navigate = useNavigate();
    const handleQuit = () => {
        navigate("/");
  }
  return (
    <div className='body'>    
        <div className='app'>
            <div className='container'>
                <div className='title'>
                    <h3>KWIZZ-GAME</h3>
                    <img src={pic2} alt=""/>
                </div>
                {showResult ? (
                    <QuizzResult 
                        score={score} 
                        correctAnswer={correctAnswer} 
                        handleTryAgain={handleTryAgain} 
                        message={message} />
                    ) : (
                    <>
                    <div className='content'>
                        <div className='question-section'>
                            <div className='question-point'>
                                <h5>Score:{score} </h5>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1} of {questions.length} </span>
                                </div>
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                                {questions[currentQuestion].answerOptions.map((ans, i) => {
                                    return <div className='choices'>
                                                <button 
                                                    type="submit" 
                                                    className={`button ${clicked && ans.isCorrect? "correct" : "button"}`} 
                                                    disabled={clicked} key={i} 
                                                    onClick={() => handleAnswerOption(ans.isCorrect)}
                                                >
                                                    {ans.answerText}
                                                </button> 
                                            </div>   
                                })}
                        </div>
                        <div className='button-section'>
                            <button type="submit" className='button_ok' disabled={!clicked}  onClick={handleNextOption} >{nextQuestion === questions.length? "FINISH" : "NEXT"}</button>
                            <button type="submit" className='button_quit' onClick={handleQuit}>QUIT</button>
                        </div>
                    </div>
                </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Quizz;