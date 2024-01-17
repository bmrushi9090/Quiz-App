import React, { useState } from 'react'

const Geographic = () => {

    const gkQuestions = {
        "quizId": "123",
        "title": "Geographic  Quiz",
        "questions": [
            {
                "questionId": "1",
                "text": "What is the capital city of India?",
                "options": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
                "correctOption": "Delhi"
            },
            {
                "questionId": "2",
                "text": "Which river is considered the holiest in Hinduism and runs through Northern India?",
                "options": ["Ganges", "Yamuna", "Brahmaputra", "Godavari"],
                "correctOption": "Ganges"
            },
            {
                "questionId": "3",
                "text": "Which Indian state is known as the 'Land of Five Rivers'?",
                "options": ["Punjab", "Haryana", "Rajasthan", "Gujarat"],
                "correctOption": "Punjab"
            },
            {
                "questionId": "4",
                "text": "In which mountain range is the Valley of Flowers National Park located?",
                "options": ["Himalayas", "Western Ghats", "Eastern Ghats", "Aravalli Range"],
                "correctOption": "Himalayas"
            },
            {
                "questionId": "5",
                "text": "What is the largest state in India by area?",
                "options": ["Maharashtra", "Uttar Pradesh", "Madhya Pradesh", "Rajasthan"],
                "correctOption": "Rajasthan"
            },
            {
                "questionId": "6",
                "text": "Which Indian city is known as the 'Pink City'?",
                "options": ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
                "correctOption": "Jaipur"
            },
            {
                "questionId": "7",
                "text": "Which is the southernmost state of India?",
                "options": ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
                "correctOption": "Kerala"
            },
            {
                "questionId": "8",
                "text": "Which is the largest freshwater lake in India?",
                "options": ["Dal Lake", "Chilika Lake", "Wular Lake", "Vembanad"],
                "correctOption": "Wular Lake"
            },
            {
                "questionId": "9",
                "text": "What is the highest mountain peak in India?",
                "options": ["Nanda Devi", "Kanchenjunga", "Mount Everest", "Annapurna"],
                "correctOption": "Kanchenjunga"
            },
            {
                "questionId": "10",
                "text": "Which desert is located in the northwest part of India?",
                "options": ["Thar Desert", "Rann of Kutch", "Deccan Plateau", "Barren Island"],
                "correctOption": "Thar Desert"
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

export default Geographic 