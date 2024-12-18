import React, { useState } from "react";
import NextTaskButton from "../components/NextTaskButton";
import AssessmentSection from "../components/AssessmentSection";
import VideoSection from "../components/VideoSection";

const LMSPage = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [assessmentCompleted, setAssessmentCompleted] = useState(false);

  const tasks = [
    {
      videoUrl: "https://www.youtube.com/embed/8mAITcNt710", // Video on Binary Numbers
      assessment: {
        question: "What is the binary representation of the decimal number 5?",
        type: "multiple-choice",
        options: ["101", "110", "1001", "111"],
        correctAnswer: "101",
      },
    },
    {
      videoUrl: "https://www.youtube.com/embed/RBSGKlAvoiM", // Video on Algorithms
      assessment: {
        question: "Which of the following algorithms is used to find the shortest path in a graph?",
        type: "multiple-choice",
        options: ["Bubble Sort", "Binary Search", "Dijkstra's Algorithm", "Merge Sort"],
        correctAnswer: "Dijkstra's Algorithm",
      },
    },
    {
      videoUrl: "https://www.youtube.com/embed/_uQrJ0TkZlc", // Video on Python Programming
      assessment: {
        question: "What will be the output of the following Python code? \n`print(2**3)`",
        type: "short-answer",
        correctAnswer: "8",
      },
    },
    {
      videoUrl: "https://www.youtube.com/embed/zOjov-2OZ0E", // Video on Web Development
      assessment: {
        question: "Which tag is used to define a hyperlink in HTML?",
        type: "multiple-choice",
        options: ["<a>", "<link>", "<href>", "<hyper>"],
        correctAnswer: "<a>",
      },
    },
    {
      videoUrl: "https://www.youtube.com/embed/4IRP6kh7g7s", // Video on Big-O Notation
      assessment: {
        question: "What is the time complexity of a binary search algorithm?",
        type: "multiple-choice",
        options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
        correctAnswer: "O(log n)",
      },
    },
    {
      videoUrl: "https://www.youtube.com/embed/vLnPwxZdW4Y", // Video on C Programming
      assessment: {
        question: "Which keyword is used to declare a constant variable in C?",
        type: "multiple-choice",
        options: ["constant", "final", "const", "var"],
        correctAnswer: "const",
      },
    },
    {
      videoUrl: "https://www.youtube.com/embed/YkOSUVzOAA4", // Video on Machine Learning
      assessment: {
        question: "Which of the following is an example of supervised learning?",
        type: "multiple-choice",
        options: ["K-Means Clustering", "Linear Regression", "Principal Component Analysis", "Apriori Algorithm"],
        correctAnswer: "Linear Regression",
      },
    },
    {
      videoUrl: "https://www.youtube.com/embed/qpMvS1Q1sos", // Video on Databases
      assessment: {
        question: "What does SQL stand for?",
        type: "short-answer",
        correctAnswer: "Structured Query Language",
      },
    },
    {
      videoUrl: "https://www.youtube.com/embed/JU767SDMDvA", // Video on Operating Systems
      assessment: {
        question: "Which scheduling algorithm is known as 'First Come First Serve'?",
        type: "multiple-choice",
        options: ["Round Robin", "FCFS", "Priority Scheduling", "SJF"],
        correctAnswer: "FCFS",
      },
    },
    {
      videoUrl: "https://www.youtube.com/embed/Hl-zzrqQoSE", // Video on Computer Networks
      assessment: {
        question: "What does HTTP stand for?",
        type: "short-answer",
        correctAnswer: "HyperText Transfer Protocol",
      },
    },
  ];
  
  const handleVideoEnd = () => {
    setAssessmentCompleted(false);
    window.scrollTo(0, document.body.scrollHeight); 
  };

  const handleAssessmentComplete = (isCorrect) => {
    setAssessmentCompleted(true);
  };

  const handleNextTask = () => {
    if (assessmentCompleted) {
      setCurrentTaskIndex(currentTaskIndex + 1);
      setAssessmentCompleted(false);
    }
  };

  const task = tasks[currentTaskIndex];

  return (
    <div className="lms-page min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
      {/* Task Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-center mb-4">
          Learning Management System
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400">
          Task {currentTaskIndex + 1} of {tasks.length}
        </p>
      </header>

      {/* Video Section */}
      <div className="mb-8">
        <VideoSection videoUrl={task.videoUrl} onVideoEnd={handleVideoEnd} />
      </div>

      {/* Assessment Section */}
      <div className="mb-8">
        <AssessmentSection
          assessment={task.assessment}
          onAssessmentComplete={handleAssessmentComplete}
        />
      </div>

      {/* Next Task Button */}
      {assessmentCompleted && (
        <div className="text-center">
          <NextTaskButton onNext={handleNextTask} />
        </div>
      )}
    </div>
  );
};

export default LMSPage;
