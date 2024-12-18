import React from 'react';

const NextTaskButton = ({ onNext }) => (
  <button
    className="next-task-btn px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200"
    onClick={onNext}
  >
    Next Task
  </button>
);

export default NextTaskButton;
