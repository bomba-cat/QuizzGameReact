import React from 'react';
import Button from '../../components/Button.jsx';
import Question from '../../components/question.jsx'

const Question1 = ({ onAnswer, correctAnswer }) => {
  const buttonClicked = (event) => {
    const clicked = event.target.innerHTML;
    onAnswer(clicked === correctAnswer);
  };

  const answers = ["VRAM", "DDR5", "RAM", "DIMM"];
  const answerButtons = answers.map(a => (
    <Button key={a} name={a} fun={buttonClicked} />
  ));

  return (
    <div className="p-48 bg-gradient-to-tr from-zinc-100 via-gray-200 to-slate-300 dark:bg-gradient-to-tr dark:from-slate-900 dark:via-gray-800 dark:to-zinc-700 h-screen w-screen absolute top-0 left-0">
      <Question s="text-center mt-20" name="Wie nennt man den Zwischenspeicher der GPU" />
      <div className="answer-buttons text-center mt-8">
        {answerButtons}
      </div>
    </div>
  );
};

export default Question1;
