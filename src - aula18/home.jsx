import React from 'react'

const home = () => {
  return (
    <div className='text-center p-8'>
      <h1 className='text-4xl font-bold text-blue-500 mb-4'>Página Inicial</h1>
      <p  className='text-lg text-gray-600'> Bem-Vindo ao meu app com React Router!</p>
      <div className='mt-8 p-6 bg-blue-50 rounded-lg'>
        <h2 className='text-xl font-semibold mb-2'> O que você encontra aqui:</h2>
        <ul className='text-left space-y-2'>
            <li className=''>✅Navegação Simples</li>
            <li className=''>Muliplas páginas</li>
            <li className=''>React Router</li>
        </ul>
      </div>
    </div>
  )
}

export default home
