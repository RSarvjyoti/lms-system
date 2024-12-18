import React, { useState } from "react";

const AssessmentSection = ({ assessment, onAssessmentComplete }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = () => {
    if (
      userAnswer.trim().toLowerCase() === assessment.correctAnswer.toLowerCase()
    ) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setIsAnswered(true);
    if (onAssessmentComplete) onAssessmentComplete(isCorrect);
  };

  return (
    <div className="assessment-section bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto mb-8">
      <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {assessment.question}
      </p>

      {assessment.type === "multiple-choice" ? (
        <div className="space-y-2">
          {assessment.options.map((option, index) => (
            <label
              key={index}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name="assessment"
                value={option}
                className="form-radio text-blue-600 focus:ring-2 focus:ring-blue-400"
                onChange={() => setUserAnswer(option)}
              />
              <span className="text-gray-700 dark:text-gray-300">
                {option}
              </span>
            </label>
          ))}
        </div>
      ) : (
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Type your answer"
          className="mt-4 p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700"
        />
      )}

      <button
        onClick={handleSubmit}
        disabled={isAnswered}
        className={`mt-6 px-6 py-2 rounded-lg font-medium ${
          isAnswered
            ? "bg-gray-400 cursor-not-allowed text-white"
            : "bg-blue-600 text-white hover:bg-blue-700"
        } transition duration-200`}
      >
        Submit
      </button>

      {isAnswered && (
        <p
          className={`mt-4 font-semibold text-lg ${
            isCorrect ? "text-green-600" : "text-red-600"
          }`}
        >
          {isCorrect
            ? "Correct! Great job!"
            : "Incorrect! Please try again."}
        </p>
      )}
    </div>
  );
};

export default AssessmentSection;