import React from 'react'

const sobre = () => {
  return (
    <div className='text-center p-8'>
      <h1 className='text-4xl font-bold text-green-500 mb-4'>Sobre nós</h1>
      <div className='max-w-2xl'>
        <p  className='text-lg text-gray-700 mb-4'> 
            Este é um projeto simples para demonstrar o uso do React Router</p>
        <p className='text-gray-600 mb-6'>
            Aqui você pode aprender como navegar entre diferentes páginas sem recarregar o navegador.
        </p>
        </div>
        <div className='p-6 bg-green-50 rounded-lg'>
            <h2 className='text-xl font-semibold mb-3 text-green-800'> Tecnologias usadas:</h2>
            <ul className='text-green-700 space-y-2'>
                <li>☑️ React 18</li>
                <li>☑️ Vite</li>
                <li>☑️ React Router</li>
                <li>☑️ Tailwind CSS</li>
            </ul>
            </div>
      </div>
      
  )
}

export default sobre