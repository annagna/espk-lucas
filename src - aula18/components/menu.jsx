import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const menu = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path; //localhost:5173 /contato é o path 
  return (
    <nav className='bg-gray-800 p-4'>
        <div>
         <div className='max-w-4xl mx-auto flex justify-between items-center'>
        <div className='text-white text-xl fon-bold'> Meu App
        </div>
        <div className='flex space-x-6'>
            <Link to='/' className={`px-3 py-2 rounded-2xl transition-colors 
                ${isActive('/') ? 'bg-green-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}>Home</Link>
            <Link to='/sobre' className={`px-3 py-2 rounded-2xl transition-colors 
                ${isActive('/sobre') ? 'bg-green-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}>Sobre</Link>
            <Link to='/contato' className={`px-3 py-2 rounded-2xl transition-colors 
                ${isActive('/contato') ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}>Contato</Link>
        </div>
        
        </div> 
        
        </div> 

    </nav>
  )
}

export default menu
