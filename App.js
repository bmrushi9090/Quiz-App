import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Gk from './Components/Gk';
import SlidingImg from './Components/SlidingImg';
import Category from './Components/Category';
import Tech from './Components/Tech';
import Sports from './Components/Sports';
import Politics from './Components/Politics';
import Historical from './Components/Historical';
import GeneralKnowledge from './Components/GeneralKnowledge';
import Geographic from './Components/Geographic ';
import User from './Components/User';
import DataFetchingComponent from './Components/DataFetchingComponent';
const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <h1 className='font-a hedading-n'>Well Come To BM Quiz App</h1>
        <Routes>
          <Route exact path='/' element={<Tech />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Tech' element={<Tech />} />
          <Route path='/Sports' element={<Sports />} />
          <Route path='/Politics' element={<Politics />} />
          <Route path='/Historical' element={<Historical />} />
          <Route path='/GeneralKnowledge' element={<GeneralKnowledge />} />
          <Route path='/Geographic' element={<Geographic />} />
        </Routes>

      </Router>


      <div>

        {/* <SlidingImg /> */}
        {/* <Router>
          <Category />
          <Routes>
          <Route exact path='/Tech' element={<Tech />} />
            <Route exact path='/Sports' element={<Sports />} />
            <Route exact path='/Politics' element={<Politics />} />
            <Route exact path='/Historical' element={<Historical />} />
            <Route exact path='/GeneralKnowledge' element={<GeneralKnowledge />} />
            <Route exact path='/Geographic' element={<Geographic />} />
          </Routes>
        </Router> */}

        {/* <Gk /> */}
        {/* <User /> */}
        {/* <DataFetchingComponent/> */}
      </div>
    </div>
  )
}

export default App