# lms-system

This project is an interactive educational platform designed to teach various topics using engaging videos and assessments. The content is structured into tasks that include a video tutorial followed by a related quiz to reinforce learning.  

## Features

- **Video Tutorials**: Each task includes an embedded video to introduce and explain the topic.
- **Assessments**: After each video, users can complete a quiz to test their understanding.
  - Multiple-choice questions
  - Short-answer questions

## Task Structure
![My Skills](https://skillicons.dev/icons?i=react,tailwind)

Each task is represented as a JSON object with the following format:

```javascript
{
  videoUrl: "URL of the educational video",
  assessment: {
    question: "The quiz question",
    type: "Type of question (e.g., 'multiple-choice', 'short-answer')",
    options: ["Option 1", "Option 2", "Option 3"], // For multiple-choice questions
    correctAnswer: "The correct answer",
  },
}

 - Clone the repository:
   git clone https://github.com/your-username/educational-task-platform.git
 - Navigate to the project directory:
  lms-system/lms
 - install
   npm i
 - start project
   npm run dev

## Go Live : https://lms-system-neon.vercel.app/

## Folder Structure :

## Screenshot :
