import React from 'react';
import { Link } from 'wouter';

const OutrosServicosPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Outros Serviços</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/veiculos">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Veículos</h2>
            <p className="text-gray-600">Compre, venda ou alugue veículos.</p>
          </div>
        </Link>

        <Link href="/loja">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Loja</h2>
            <p className="text-gray-600">Produtos e serviços disponíveis.</p>
          </div>
        </Link>

        <Link href="/ai-hub">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">IA Hub</h2>
            <p className="text-gray-600">Ferramentas e recursos de inteligência artificial.</p>
          </div>
        </Link>

        <Link href="/profissionais">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Profissionais</h2>
            <p className="text-gray-600">Encontre profissionais qualificados.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OutrosServicosPage; 