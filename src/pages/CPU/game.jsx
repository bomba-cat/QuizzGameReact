import '../../App.css'
import Button from '../../components/Button.jsx'
import React, { useState, useEffect } from 'react';
import Question1 from './Question1.jsx';
import Question2 from './Question2.jsx';
import Question3 from './Question3.jsx';
import Rules from './rules.jsx'
import Impress from './impress.jsx'
const questions = [
  {
    id: 1,
    component: Question1,
    correctAnswer: 'Alter Kuehlschrank'
  },
  {
    id: 2,
    component: Question2,
    correctAnswer: 'Random Access Memory'
  },
  {
    id: 3,
    component: Question3,
    correctAnswer: 'Central Processing Unit'
  }
];
function Auto() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionList, setQuestionList] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  useEffect(() => {
    const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    setQuestionList(shuffledQuestions);
  }, []);
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionList.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setIsCorrect(null); // Reset correct answer state
    } else {
      setResultMessage('Herzlichen Glueckwunsch! Du hast das Quiz abgeschlossen.');
      setShowResult(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }
  };
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setResultMessage('Richtige Antwort!');
      setIsCorrect(true);
      setShowResult(true);
      setTimeout(() => {
        setShowResult(false);
        handleNextQuestion();
      }, 2000);
    } else {
      setResultMessage('Falsche Antwort! Versuche es noch einmal.');
      setIsCorrect(false);
      setShowResult(true);
    }
  };
  const CurrentQuestionComponent = questionList[currentQuestionIndex]?.component;
  return (
    <div className="App">
      {showResult ? (
        <div className="result-container text-center">
          <p className="result-message">{resultMessage}</p>
          <button
            onClick={isCorrect === false ? () => setShowResult(false) : handleNextQuestion}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            {isCorrect === false ? 'Zurueck zur Frage' : 'Naechste Frage'}
          </button>
        </div>
      ) : (
        CurrentQuestionComponent ? (
          <CurrentQuestionComponent onAnswer={handleAnswer} correctAnswer={questionList[currentQuestionIndex]?.correctAnswer} />
        ) : (
          <div>Lade Fragen...</div>
        )
      )}
      <Rules />
      <Impress />
    </div>
  );
}
export default Auto;
