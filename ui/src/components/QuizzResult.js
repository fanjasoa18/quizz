import React from 'react';
import questions from './QuizzData';
import { useNavigate } from 'react-router';

const QuizzResult = (props) => {
  const navigate = useNavigate();
  const handleQuit = () => {
    navigate("/");
  }
     
  return (
    <div className='score-section'>
        <div className='result'>
          <h3>Quizz Completed!!!</h3>
          <h2>{props.message()}, Total score: {props.score}/{questions.length}  </h2>
          <h4>Your Correct Question is {props.correctAns} out of {questions.length} ☻☻☻☻☻</h4>  
        </div>
        <div className="button-finish">
            <button type="submit" className="button_ok" onClick={props.handleTryAgain} >Try Again</button>
            <button type="submit" className="button_quit" onClick={handleQuit} >QUIT</button>
        </div>
    </div>
  )
}

export default QuizzResult;