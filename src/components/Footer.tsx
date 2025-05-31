
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-academy-500 to-purple-600"></div>
              <span className="font-inter font-bold text-lg">Academia Forge</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Plataforma acadêmica moderna para uma experiência de aprendizado aprimorada
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <div className="text-sm text-gray-400 space-y-1">
              <p>Desenvolvido por <span className="text-academy-400 font-medium">Davi de Moura Seares</span></p>
              <p>Universidade de Gurupi - <span className="text-academy-400 font-medium">UNIG</span></p>
              <p className="text-xs text-gray-500 mt-2">© 2024 Academia Forge. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
