import React from 'react'
import { Link } from 'react-router-dom';

const Category = () => {
    return (
        <div>
            <ul className='cBox font-ct'>
                <li>
                    <Link className='lineR'  to='/Tech' >Tech</Link>
                </li>
                <li>
                    <Link className='lineR' to='/Sports' >Sports</Link>
                </li>
                <li>
                    <Link to='/Politics' className='lineR'>Politics</Link>
                </li>
                <li>
                    <Link to='/Historical' className='lineR' >Historical</Link>
                </li>
                <li>
                    <Link to='/GeneralKnowledge' className='lineR'>General Knowledge</Link>
                </li>
                <li>
                    <Link to='/Geographic ' className='lineR'>Geographic </Link>
                </li>
            </ul>
        </div>
    )
}

export default Category