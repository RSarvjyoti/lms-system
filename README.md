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
```
## How to run local

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/educational-task-platform.git
2. Navigate to the project directory:
   ```bash
   cd lms-system
   cd lms
4. Install dependencies:
   ```bash
   npm i
7. Run the application in development mode:
   ```bash
   npm run dev

### Live Link https://lms-system-neon.vercel.app/

## Folder Structure :
   src/
   ├── components/
   │    ├── AssessmentSection.jsx       # Handles displaying quiz assessments
   │    ├── NextTaskButton.jsx          # Button for navigating to the next task
   │    └── VideoSection.jsx            # Displays the video tutorial
   │
   ├── pages/
        └── LMSPage.jsx                 # Main page rendering tasks and assessments



## Screenshot 

![screencapture-lms-system-neon-vercel-app-2024-12-18-15_38_30](https://github.com/user-attachments/assets/0b2ea17c-bfb2-4306-948f-1b8af6836253)

![screencapture-lms-system-neon-vercel-app-2024-12-18-15_38_53](https://github.com/user-attachments/assets/355cf8e3-cb08-450d-a638-43e02d0c6842)

