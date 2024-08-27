import React from 'react';
import Button from '../../components/Button.jsx';

const Question2 = ({ onAnswer, correctAnswer }) => {
  const buttonClicked = (event) => {
    const clicked = event.target.innerHTML;
    onAnswer(clicked === correctAnswer);
  };

  const answers = ["Multithreading", "Kleiner Stromverbrauch", "Sicherer", "Betriebssysteme laufen schneller drauf"];
  const answerButtons = answers.map(a => (
    <Button key={a} name={a} fun={buttonClicked} />
  ));

  return (
    <div className="p-48 bg-gradient-to-tr from-amber-500 to-pink-500 h-screen w-screen">
      <h1 className="text-center mt-20">Was ist Speziell an einer GPU</h1>
      <div className="answer-buttons text-center mt-8">
        {answerButtons}
      </div>
    </div>
  );
};

export default Question2;
