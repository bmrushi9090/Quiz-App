import React, { useState } from 'react'

const Sports = () => {

    const gkQuestions = {
        "quizId": "123",
        "title": "Sports Quiz",
        "questions": [
            {
                "questionId": "1",
                "text": "Who holds the record for the highest individual score in Test cricket for India?",
                "options": ["Sachin Tendulkar", "Virender Sehwag", "Virat Kohli", "Rahul Dravid"],
                "correctOption": "Virender Sehwag"
            },
            {
                "questionId": "2",
                "text": "Who is the only Indian cricketer to score centuries in all three formats of the game (Test, ODI, and T20)?",
                "options": ["Rohit Sharma", "Virat Kohli", "Shikhar Dhawan", "Yuvraj Singh"],
                "correctOption": "Rohit Sharma"
            },
            {
                "questionId": "3",
                "text": "In which year did India win its first Cricket World Cup under the captaincy of Kapil Dev",
                "options": ["1975", "1983", "1987", "1992"],
                "correctOption": "1983"
            },
            {
                "questionId": "4",
                "text": "Who is known as the 'God of Cricket' in India?",
                "options": ["Virender Sehwag", "Sachin Tendulkar", "Virat Kohli", "Rahul Dravid"],
                "correctOption": "Sachin Tendulkar"
            },
            {
                "questionId": "5",
                "text": "What is the highest team score by India in a One Day International (ODI) match?",
                "options": ["393/3", "418/5", "481/6", "404/5"],
                "correctOption": "481/6"
            },
            {
                "questionId": "6",
                "text": "Who was the captain of the Indian cricket team when they won the ICC T20 World Cup in 2007?",
                "options": ["Rahul Dravid", "Virender Sehwag", "Sourav Ganguly", "MS Dhoni"],
                "correctOption": "MS Dhoni"
            },
            {
                "questionId": "7",
                "text": "Which Indian bowler has taken the most wickets in Test cricket for India?",
                "options": ["Anil Kumble", "Kapil Dev", "Harbhajan Singh", "Ravichandran Ashwin"],
                "correctOption": "Anil Kumble"
            },
            {
                "questionId": "8",
                "text": "Who is the only Indian cricketer to have scored a century in each inning of a Test match?",
                "options": ["Sunil Gavaskar", "Rahul Dravid", "Virat Kohli", "Rohit Sharma"],
                "correctOption": "Sunil Gavaskar"
            },
            {
                "questionId": "9",
                "text": "Which Indian cricketer is known for his aggressive captaincy style and leading India to the No. 1 ranking in Test cricket?",
                "options": ["MS Dhoni", "Virat Kohli", "Sourav Ganguly", "Rahul Dravid"],
                "correctOption": "Virat Kohli"
            },
            {
                "questionId": "10",
                "text": "Who is the highest run-scorer for India in T20 International cricket as of 2022?",
                "options": ["Virat Kohli", "Rohit Sharma", "Shikhar Dhawan", "Suresh Raina"],
                "correctOption": "Virat Kohli"
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
        <div className='gkResult quize-box'>
            <h3 className='font-a size-t'>*{gkQuestions.title}*</h3>
            {currentQuestion < gkQuestions.questions.length ? (
                <div>
                    <p className='font-p size-q'>{gkQuestions.questions[currentQuestion].questionId} : {gkQuestions.questions[currentQuestion].text}</p>
                    <ul>
                        {gkQuestions.questions[currentQuestion].options.map((option) => (
                            <li className='font-p size-o option-box' type='1' key={option}>
                                <input type="checkbox"name='option' value={Option} checked={selectedOption === option} onChange={() => handleOptionSelect(option)} />
                                {option}
                            </li>
                        ))}
                    </ul>
                    <div className='btn-playA'>
                    <button onClick={handleNextQuestion} className='btn-next font-p'>Next Question</button>
                    </div>
                </div>
            ) : (
                <div>
                    <p className='font-p'>Quize Complete..!!</p>
                    {
                        score < 5 && score >= 0 ? <p className='font-p'><span className='font-a'>Your Score : </span>{score} Do better in next round..</p> : <p>Your Score : {score} Excellent..!!</p>
                    }
                    <div className='btn-playA'>
                        <button className='btn-next font-p' onClick={handlePlayAgain}>Play Again..</button>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Sports