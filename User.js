import React, { useState } from 'react'

const User = () => {

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState("")

    const handleUser = (e) => {
        setUser(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleAge = (e) => {
        setAge(e.target.value)
    }

    const handleSubmit = () => {
        setUser('')
        setEmail('')
        setAge('')
    }
    return (
        <div>
            {
                handleSubmit ? (

                    <div>
                        <h3>Enter User Details</h3>
                        Name : <input type="text" placeholder='Enter Your Name' value={user} onChange={handleUser} /><br />
                        Email : <input type="mail" placeholder='Enter Your Email' value={email} onChange={handleEmail} /><br />
                        Age : <input type="text" placeholder='Enter Your Age' value={age} onChange={handleAge} />
                        <button onClick={handleSubmit} >Submit</button>
                    </div>) : (


                    <div>
                        <p>Name : {user}</p>
                        <p>Email : {email}</p>
                        <p>Age : {age}</p>
                    </div>
                )
            }
        </div>
    )
}

export default User