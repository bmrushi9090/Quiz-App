import React, { useState } from 'react'

const Politics = () => {

    const gkQuestions = {
        "quizId": "123",
        "title": "Politics Quiz",
        "questions": [
            {
                "questionId": "1",
                "text": "Who is known as the 'Iron Lady of India' for her strong leadership and decisive actions during her tenure as Prime Minister?",
                "options": ["Sonia Gandhi", "Indira Gandhi", "Mamata Banerjee", "Jayalalithaa"],
                "correctOption": "Indira Gandhi"
            },
            {
                "questionId": "2",
                "text": "What is the term of office for a member of the Lok Sabha (House of the People) in India?",
                "options": ["3 years", "4 years", "5 years", "6 years"],
                "correctOption": "5 years"
            },
            {
                "questionId": "3",
                "text": "Who is the current Prime Minister of India (as of 2022)?",
                "options": ["Narendra Modi", "Rahul Gandhi", "JuAmit Shahpiter", "Manmohan Singh"],
                "correctOption": "Narendra Modi"
            },
            {
                "questionId": "4",
                "text": "What is the minimum voting age in India for parliamentary elections?",
                "options": ["16 years", "25 years", "21 years", "18 years"],
                "correctOption": "18 years"
            },
            {
                "questionId": "5",
                "text": "Which political party did Dr. B.R. Ambedkar lead during the drafting of the Indian Constitution?",
                "options": ["Indian National Congress", "Bharatiya Janata Party (BJP)", "Samajwadi Party", "Scheduled Castes Federation"],
                "correctOption": "Scheduled Castes Federation"
            },
            {
                "questionId": "6",
                "text": "How many states and union territories are there in India as of 2022?",
                "options": ["28 states, 8 union territories", "29 states, 7 union territories", "30 states, 6 union territories", "31 states, 5 union territories"],
                "correctOption": "29 states, 7 union territories"
            },
            {
                "questionId": "7",
                "text": "Who was the first woman to serve as the Chief Minister of an Indian state?",
                "options": ["Mamata Banerjee", "J. Jayalalithaa", "Mayawati", "Sheila Dikshit"],
                "correctOption": "J. Jayalalithaa"
            },
            {
                "questionId": "8",
                "text": "What is the role of the Rajya Sabha (Council of States) in the Indian Parliament?",
                "options": ["It is the Lower House", "It is the Upper House", "It is the President's advisory council", "It is the Executive branch"],
                "correctOption": "It is the Upper House"
            },
            {
                "questionId": "9",
                "text": "Who is the head of the Election Commission of India?",
                "options": ["Chief Justice of India", "President of India", "Prime Minister of India", "Chief Election Commissioner"],
                "correctOption": "Chief Election Commissioner"
            },
            {
                "questionId": "10",
                "text": "What is the maximum number of members that can be nominated to the Rajya Sabha by the President of India?",
                "options": ["8", "10", "12", "15"],
                "correctOption": "12"
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
        <div className='gkResult  quize-box'>
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

export default Politics