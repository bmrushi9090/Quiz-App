import React, { useState } from 'react'

const Tech = () => {

    const gkQuestions = {
        "quizId": "123",
        "title": "Tech Quiz",
        "questions": [
            {
                "questionId": "1",
                "text": " What does CSS stand for?",
                "options": ["Computer Style Sheet", "Creative Style Sheet", "Cascading Style Sheet", "Colorful Style Sheet"],
                "correctOption": "Cascading Style Sheet"
            },
            {
                "questionId": "2",
                "text": " In JavaScript, what is the purpose of the setTimeout function?",
                "options": ["Pauses the execution of code", "Executes a function after a specified delay", "Sets the interval for code execution", "Repeats a function at regular intervals"],
                "correctOption": "Executes a function after a specified delay"
            },
            {
                "questionId": "3",
                "text": "Which programming language is often used for server-side development?",
                "options": ["CSS", "MongoDB", "HTML", "Java"],
                "correctOption": "Java"
            },
            {
                "questionId": "4",
                "text": " What is the main purpose of a version control system like Git?",
                "options": ["To format code for readability", "To track changes in code over time", "To debug code", "To execute code remotely"],
                "correctOption": "To track changes in code over time"
            },
            {
                "questionId": "5",
                "text": "What is the role of the 'document object' in the Document Object Model (DOM)?",
                "options": ["Represents the structure of a webpage", "Handles asynchronous tasks", "Manages the styling of a webpage", "Represents the entire HTML or XML document"],
                "correctOption": "Represents the entire HTML or XML document"
            },
            {
                "questionId": "6",
                "text": "Which of the following is a relational database management system (RDBMS)?",
                "options": ["MongoDB", "SQLite", "Redis", "Cassandra"],
                "correctOption": "SQLite"
            },
            {
                "questionId": "7",
                "text": "What does API stand for in the context of web development?",
                "options": ["Advanced Programming Interface", "Application Programming Interface", "Automated Processing Interface", "Advanced Protocol Integration"],
                "correctOption": "Advanced Protocol Integration"
            },
            {
                "questionId": "8",
                "text": " What is the purpose of the npm command in Node.js?",
                "options": ["Node Package Manager", "Network Protocol Manager", "Node Project Manager", "New Package Manager"],
                "correctOption": "Node Package Manager"
            },
            {
                "questionId": "9",
                "text": "Which of the following is a front-end JavaScript library for building user interfaces?",
                "options": ["React", "Django", "Flask", "Express"],
                "correctOption": "React"
            },
            {
                "questionId": "10",
                "text": "What is the significance of the '404' HTTP status code?",
                "options": ["Request successful", "Unauthorized access", "Page not found", "Server error"],
                "correctOption": "Page not found"
            },
            // Add more questions as needed
        ]
    }


    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    const [score, setScore] = useState(0)

    const handleOptionSelect = (option) => {
        setSelectedOption(option)
    }

    const handlePreviousQuestion = () => {
        if(currentQuestion > 0){
            setCurrentQuestion(currentQuestion - 1)
        }
      }

    const handleNextQuestion = () => {
        if (selectedOption === gkQuestions.questions[currentQuestion].correctOption) {
            setScore(score + 1)
        }

        setSelectedOption(null)
        setCurrentQuestion(currentQuestion + 1)
    }

    const handlePlayAgain = () => {
        setCurrentQuestion(0)
        setScore(0)
        setSelectedOption(null)
    }

    return (
        <div className='gkResult quize-box '>
            <h3 className='font-a size-t' >*{gkQuestions.title}*</h3>
            {currentQuestion < gkQuestions.questions.length ? (
                <div>
                    <p className='font-p size-q'>{gkQuestions.questions[currentQuestion].questionId} : {gkQuestions.questions[currentQuestion].text}</p>
                    <ul>
                        {gkQuestions.questions[currentQuestion].options.map((option) => (
                            <li type='1' className='font-p size-o option-box' key={option}>
                                <input type="checkbox" name='option' value={Option} checked={selectedOption === option} onChange={() => handleOptionSelect(option)} />
                                {option}
                            </li>
                        ))}
                    </ul>
                    <div className='btn-playA'>
                    <button onClick={handlePreviousQuestion} className='btn-previous font-p mx-4'>Previous Question</button>
                        <button onClick={handleNextQuestion} className='btn-next font-p'>Next Question</button>
                    </div>
                </div>
            ) : (
                <div>
                    <p className='font-p'>Quize Completed..!!</p>
                    {
                        score < 5 && score >= 0 ? <p className='font-p'> <span className='font-a'>Your Score : </span>{score} Do better in next round..</p> : <p>Your Score : {score} out of {gkQuestions.questions.length} Excellent..!!</p>
                    }
                    <div className='btn-playA'>
                        <button className='btn-next font-p' onClick={handlePlayAgain}>Play Again..</button>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Tech