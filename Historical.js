import React, { useState } from 'react'

const Historical = () => {

    const gkQuestions = {
        "quizId": "123",
        "title": "Historical Quiz",
        "questions": [
            {
                "questionId": "1",
                "text": "When was Chhatrapati Shivaji Maharaj born?",
                "options": ["1630", "1632", "1645", "1650"],
                "correctOption": "1632"
            },
            {
                "questionId": "2",
                "text": "What is the name of the fort that Chhatrapati Shivaji Maharaj captured at the age of 16, marking the beginning of his military career?",
                "options": ["Raigad Fort", "Pratapgad Fort", "Torna Fort", "Panhala Fort"],
                "correctOption": "Torna Fort"
            },
            {
                "questionId": "3",
                "text": "Which of the following is the coronation fort of Chhatrapati Shivaji Maharaj?",
                "options": ["Raigad Fort", "Sinhagad Fort", "Pratapgad Fort", "Shivneri Fort"],
                "correctOption": "Raigad Fort"
            },
            {
                "questionId": "4",
                "text": "Who was the mother of Chhatrapati Shivaji Maharaj?",
                "options": ["Jijabai", "Tarabai", "Ahilyabai Holkar", "Rajmata Jijau"],
                "correctOption": "Rajmata Jijau"
            },
            {
                "questionId": "5",
                "text": "What is the title 'Chhatrapati' bestowed upon Shivaji Maharaj mean?",
                "options": ["Warrior King", "Supreme King", "rotector of the People", "Lion King"],
                "correctOption": "Supreme King"
            },
            {
                "questionId": "6",
                "text": "In which year did Chhatrapati Shivaji Maharaj establish the Maratha Navy?",
                "options": ["1660", "1674", "1680", "1685"],
                "correctOption": "1674"
            },
            {
                "questionId": "7",
                "text": "What is the name of the fort where Chhatrapati Shivaji Maharaj successfully executed the escape known as the 'Escape from Agra'?",
                "options": ["Raigad Fort", "Pratapgad Fort", "Rajgad Fort", "Panhala Fort"],
                "correctOption": "Rajgad Fort"
            },
            {
                "questionId": "8",
                "text": "Which prominent Maratha warrior served as the mentor and military commander for Chhatrapati Shivaji Maharaj?",
                "options": ["Tanaji Malusare", "Baji Prabhu Deshpande", "Netaji Palkar", "Afzal Khan"],
                "correctOption": "Netaji Palkar"
            },
            {
                "questionId": "9",
                "text": "What was the name of Chhatrapati Shivaji Maharaj's capital city before he moved it to Raigad?",
                "options": ["Pune", "Kolhapur", "Bijapur", "Pratapgad"],
                "correctOption": "Pune"
            },
            {
                "questionId": "10",
                "text": "Chhatrapati Shivaji Maharaj was a pioneer in the use of which type of military strategy?",
                "options": ["Guerrilla warfare", "Naval warfare", "Siege warfare", "Cavalry warfare"],
                "correctOption": "Guerrilla warfare"
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
        <div className='gkResult quize-box'>
            <h3 className='font-a size-t'>*{gkQuestions.title}*</h3>
            {currentQuestion < gkQuestions.questions.length ? (
                <div>
                    <p className='font-p size-q'>{gkQuestions.questions[currentQuestion].questionId} : {gkQuestions.questions[currentQuestion].text}</p>
                    <ul>
                        {gkQuestions.questions[currentQuestion].options.map((option) => (
                            <li type='1' className='size-o option-box font-p' key={option}>
                                <input type="checkbox"name='option' value={Option} checked={selectedOption === option} onChange={() => handleOptionSelect(option)} />
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
                    <p className='font-p'>Quize Complete..!!</p>
                    {
                        score < 5 && score >= 0 ? <p className='font-p'><span className='font-a'>Your Score : </span>{score} Do better in next round..</p> : <p>Your Score : {score} out of {gkQuestions.questions.length} Excellent..!!</p>
                    }
                    <div className='btn-playA'>
                    <button className='btn-next font-p' onClick={handlePlayAgain}>Play Again..</button>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Historical