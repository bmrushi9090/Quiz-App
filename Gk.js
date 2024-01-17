import React, { useState } from 'react'

const Gk = () => {

    const gkQuestions = {
        "quizId": "123",
        "title": "General Knowledge Quiz",
        "questions": [
            {
                "questionId": "q1",
                "text": "What is the capital of France?",
                "options": ["Berlin", "Madrid", "Paris", "Rome"],
                "correctOption": "Paris"
            },
            {
                "questionId": "q2",
                "text": "Which planet is known as the Red Planet?",
                "options": ["Venus", "Mars", "Jupiter", "Saturn"],
                "correctOption": "Mars"
            },
            {
                "questionId": "q3",
                "text": "Who wrote 'Romeo and Juliet'?",
                "options": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                "correctOption": "William Shakespeare"
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
        <div className='gkResult'>
            <h3>{gkQuestions.title}</h3>
            {currentQuestion < gkQuestions.questions.length ? (
                <div>
                    <p>{gkQuestions.questions[currentQuestion].text}</p>
                    <ul>
                        {gkQuestions.questions[currentQuestion].options.map((option) => (
                            <li type='1' key={option}>
                                <input type="radio" name='option' value={Option} checked={selectedOption === option} onChange={() => handleOptionSelect(option)} />
                                {option}
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleNextQuestion}>Next Question</button>
                </div>
            ) : (
                <div>
                    <p>Quize Complete..!!</p>
                    {
                        score < 2 && score >= 0 ? <p>Your Score : {score} Do better in next round..</p> : <p>Your Score : {score} Excellent..!!</p>
                    }
                    <button onClick={handlePlayAgain}>Play Again..</button>
                </div>
            )}
        </div>

    )
}

export default Gk