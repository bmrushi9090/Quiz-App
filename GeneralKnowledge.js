import React, { useState } from 'react'

const GeneralKnowledge = () => {

    const gkQuestions = {
        "quizId": "123",
        "title": "General Knowledge Quiz",
        "questions": [
            {
                "questionId": "1",
                "text": "What is the currency of India?",
                "options": ["Rupee", "Rupiah", "Ringgit", "Baht"],
                "correctOption": "Rupee"
            },
            {
                "questionId": "2",
                "text": "Which river is known as the 'Ganga' in India?",
                "options": ["Yamuna", "Brahmaputra", "Indus", "Ganges"],
                "correctOption": "Ganges"
            },
            {
                "questionId": "3",
                "text": "Who is known as the 'Father of the Nation' in India?",
                "options": ["Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
                "correctOption": "Mahatma Gandhi"
            },
            {
                "questionId": "4",
                "text": "Which Indian festival is known as the 'Festival of Lights'?",
                "options": ["Holi", "Diwali", "Navratri", "Ganpati"],
                "correctOption": "Diwali"
            },
            {
                "questionId": "5",
                "text": "What is the national animal of India?",
                "options": ["Tiger", "Elephant", "Lion", "Leopard"],
                "correctOption": "Tiger"
            },
            {
                "questionId": "6",
                "text": "Which Indian state is famous for the backwaters and houseboats?",
                "options": ["Kerala", "Goa", "West Bengal", "Punjab"],
                "correctOption": "Kerala"
            },
            {
                "questionId": "7",
                "text": "Who composed the Indian national anthem, 'Jana Gana Mana'?",
                "options": ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Jawaharlal Nehru"],
                "correctOption": "Rabindranath Tagore"
            },
            {
                "questionId": "8",
                "text": "What is the highest civilian award in India?",
                "options": ["Bharat Ratna", "Padma Vibhushan", "Padma Bhushan", "Padma Shri"],
                "correctOption": "Bharat Ratna"
            },
            {
                "questionId": "9",
                "text": "Which Indian state is known as the 'Land of Five Rivers'?",
                "options": ["Maharashtra", "Haryana", "Gujarat", "Punjab"],
                "correctOption": "Punjab"
            },
            {
                "questionId": "10",
                "text": "In which city is the Indian Space Research Organisation (ISRO) headquartered?",
                "options": ["Mumbai", "Delhi", "Bengaluru", "Kolkata"],
                "correctOption": "Bengaluru"
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
        <div className='quize-box gkResult'>
            <h3 className='font-a size-t'>*{gkQuestions.title}*</h3>
            {currentQuestion < gkQuestions.questions.length ? (
                <div>
                    <p className='font-p size-q'>{gkQuestions.questions[currentQuestion].questionId} : {gkQuestions.questions[currentQuestion].text}</p>
                    <ul>
                        {gkQuestions.questions[currentQuestion].options.map((option) => (
                            <li type='1' className='font-p size-o option-box' key={option}>
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

export default GeneralKnowledge