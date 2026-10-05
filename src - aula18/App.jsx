import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import menu from './components/menu'
import home from './home'
import sobre from './sobre'
import contato from './contato'

const App = () => {
  return (
    <Router>
      <menu/>

      <div className='max-w-4xl mx-auto'>
        <Routes>
          <Route path='/' element={<home/>}/>
          <Route path='/sobre' element={<sobre/>}/>
          <Route path='/contatoc' element={<contato />} /> 
        </Routes>
      </div>
      
    </Router>
  )
}

export default App
