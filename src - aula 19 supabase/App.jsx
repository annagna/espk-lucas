import React, { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newItemName, setNewItemName] = useState('');
  const [newItemDescription, setNewItemDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    try {
      setLoading(true);
      const {data, error} = await supabase
        .from('items')
        .select('*');

      if(error){
        throw error;
      }

      setItems(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleAddItem(event) {
    event.preventDefault();
    if(!newItemName.trim() || !newItemDescription.trim()){
      alert('Por favor, preencher todos os campos.');
      return;
    }
    try {
      setIsSubmitting(true);
      const {error} = await supabase
        .from('items')
        .insert([{name: newItemName, description: newItemDescription}]);
      if(error){
        throw error;
      }
      setNewItemName('');
      setNewItemDescription('');
      getItems();
    } catch (error){
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (loading) {
    // Estilos Tailwind: centraliza o conteúdo verticalmente e horizontalmente na tela.
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold text-gray-400">Carregando itens...</div>
      </div>
    );
  }
  // Lógica de renderização condicional: exibe a mensagem de erro.
  if (error) {
    // Estilos Tailwind: centraliza a mensagem de erro com cor vermelha.
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold text-red-500">Ocorreu um erro: {error}</div>
      </div>
    );
  }
  // Renderização principal do componente quando não está carregando e não há erros.
  return (
    // Estilos Tailwind: contêiner principal com fundo escuro e centralização.
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-900">
      {/* Seção de cabeçalho da página */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-white mb-2">
          Gerenciador de Itens
        </h1>
        <p className="text-gray-400">Adicione e visualize itens com React e Supabase</p>
      </header>
      {/* Formulário para Adicionar Novo Item */}
      {/* Estilos Tailwind: fundo cinza escuro, padding, bordas arredondadas e sombra. */}
      <form onSubmit={handleAddItem} className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        {/* Campo de input para o nome */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
            Nome do Item
          </label>
          <input
            id="name"
            type="text"
            placeholder="Ex: Tênis de corrida"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            disabled={isSubmitting} // Desativa o input enquanto o envio está em andamento.
            // Estilos Tailwind: input moderno sem bordas, com bordas arredondadas e foco com anel azul.
            className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>
        {/* Campo de textarea para a descrição */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-gray-300 text-sm font-bold mb-2">
            Descrição
          </label>
          <textarea
            id="description"
            placeholder="Ex: Confortável e leve para longas distâncias."
            value={newItemDescription}
            onChange={(e) => setNewItemDescription(e.target.value)}
            disabled={isSubmitting} // Desativa o textarea enquanto o envio está em andamento.
            // Estilos Tailwind: textarea com os mesmos estilos do input para consistência.
            className="shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>
        {/* Botão de envio */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isSubmitting} // Desativa o botão enquanto o envio está em andamento.
            // Estilos Tailwind: botão com fundo azul, efeito hover e opacidade para o estado desativado.
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 disabled:opacity-50"
          >
            {isSubmitting ? 'Adicionando...' : 'Adicionar Item'}
          </button>
        </div>
      </form>
      {/* Seção para exibir a lista de itens */}
      <div className="mt-10 w-full max-w-md">
        {/* Renderização condicional: se houver itens, exibe a lista, caso contrário, uma mensagem. */}
        {items.length > 0 ? (
          // Estilos Tailwind: lista com espaço entre os itens.
          <ul className="space-y-4">
            {/* Mapeia o array de itens para renderizar cada item como um <li> */}
            {items.map((item) => (
              // Estilos Tailwind para o item da lista: card com fundo cinza, padding, bordas arredondadas e efeito de escala no hover.
              <li key={item.id} className="bg-gray-800 p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 duration-300">
                <h2 className="text-xl font-semibold text-white">{item.name}</h2>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-center">Nenhum item encontrado. Adicione um novo!</p>
        )}
      </div>
    </div>
  );

}
