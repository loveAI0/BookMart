import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes} from 'react-router'
import Signup from './components/Signup'
import Home from './components/Home'
import About from './components/About'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<About/>}></Route>
        <Route path='/Signup' element = {<Signup/>}></Route>
        <Route path = '/Home' element = {<Home/>}></Route>

      </Routes>
      
    </Router>
  );
}

export default App
