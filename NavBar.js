import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [login, setlogin] = useState(false)

    const handleLogin = (lg) => {
        if (login === false) {
            setlogin('logOut')
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light font-f">
                <div className="container-fluid">
                    <Link className="navbar-brand f-size nav-c" to="#">BM-Quiz-App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link  hvr" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="hvr nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="hvr nav-link" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 category">
                            <li className="nav-item">
                                    <Link className="hvr nav-link" to="/Tech">Tech</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="hvr nav-link" to="/Politics">Politics</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="hvr nav-link" to="/Historical">Historical</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="hvr nav-link" to="/GeneralKnowledge">General Knowledge</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="hvr nav-link" to="/Geographic">Geographic</Link>
                                </li>
                            </ul>
                        </div>
                        <form className="d-flex" >
                            {
                                handleLogin ? <button className="mx-2 btn btn-outline-dark hvr-bg" type="submit">SignUp</button> : <button className="mx-2 btn btn-outline-dark hvr-bg" type="submit">Login</button>

                            }
                            <button className="mx-2 btn btn-outline-dark hvr-bg" type="submit">Logout</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar