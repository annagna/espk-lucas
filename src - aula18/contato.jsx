import React, {useState} from 'react'

const contato = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDeafault();
       alert(`Obrigado, ${nome}! Mensge enviada.`)
       setNome('');
       setEmail('');
       setMensagem('');
    };

  return (
    <div className='p-8 max-w-md mx-auto'>
          <h1 className='text-4xl font-bold text-purple-500 mb-4'>Contato</h1>
          <form onSubmit={handleSubmit} className='space-y-4'> 
            <div>
                <label className='block text-gray-700 font-semibold mb-2'> Nome:</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Seu nome' required 
                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-purple-500' />

            </div>
            <div>
                <label className='block text-gray-700 font-semibold mb-2'> Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Seu@email' required 
                className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-purple-500' />
                
            </div>
            <div>
                  <label className='block text-gray-700 font-semibold mb-2'> Mensagem:</label>
                  <textarea type="mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder='Sua mensagem' required
                      className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-purple-500' />

              </div>
              <button type='submit' className='w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-70 
              transition-colors font-semibold'> 
              Enviar Mensagem</button>
          </form>
    </div>
  )
}

export default contato
