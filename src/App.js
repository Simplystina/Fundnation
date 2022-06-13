import React  from "react";
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import {LandingPage} from './Pages/index'


const App = () => {
  return (
    <Router>
      <Routes>
          <Route  index path='/' element={<LandingPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
