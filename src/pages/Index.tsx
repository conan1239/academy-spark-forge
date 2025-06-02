
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Hello World! 👋
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Bem-vindo ao meu primeiro projeto
        </p>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Projeto Criado por
          </h2>
          <p className="text-lg text-blue-600 font-medium">
            Davi de Moura Seares
          </p>
          <p className="text-gray-500 mt-2">
            Universidade UNIG
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
