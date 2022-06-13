import React  from "react";
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import {LandingPage, Signin} from './Pages/index'


const App = () => {
  return (
    <Router>
      <Routes>
          <Route  index path='/' element={<LandingPage/>}/>
          <Route  index path='/signin' element={<Signin/>}/>
      </Routes>
    </Router>
  )
}

export default App
