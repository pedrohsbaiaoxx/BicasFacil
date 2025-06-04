import React, { useState } from 'react';
import { Link } from 'wouter';
import { Search, Star, MapPin, Phone, Mail } from 'lucide-react';

interface Profissional {
  id: number;
  nome: string;
  especialidade: string;
  avaliacao: number;
  localizacao: string;
  preco: string;
  telefone: string;
  email: string;
  descricao: string;
  foto: string;
  servicos?: string[];
  formacao?: string;
  crea?: string;
}

interface ServicoTemplateProps {
  titulo: string;
  subtitulo: string;
  profissionais: Profissional[];
  filtrosAdicionais?: {
    nome: string;
    opcoes: { value: string; label: string }[];
  }[];
  iconePreco?: React.ReactNode;
}

const ServicoTemplate: React.FC<ServicoTemplateProps> = ({
  titulo,
  subtitulo,
  profissionais,
  filtrosAdicionais,
  iconePreco
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    rating: 'all',
    price: 'all',
    location: '',
    ...(filtrosAdicionais?.reduce((acc, filtro) => ({
      ...acc,
      [filtro.nome]: 'all'
    }), {}))
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">{titulo}</h1>
          <p className="text-gray-600 mt-2">{subtitulo}</p>
        </div>
        <Link href="/servicos">
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
            Voltar
          </button>
        </Link>
      </div>

      {/* Barra de pesquisa e filtros */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={`Buscar ${titulo.toLowerCase()}...`}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.rating}
              onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
            >
              <option value="all">Todas as avaliações</option>
              <option value="4">4+ estrelas</option>
              <option value="3">3+ estrelas</option>
            </select>
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={filters.price}
              onChange={(e) => setFilters({ ...filters, price: e.target.value })}
            >
              <option value="all">Qualquer preço</option>
              <option value="low">Mais baratos</option>
              <option value="high">Mais caros</option>
            </select>
            {filtrosAdicionais?.map((filtro) => (
              <select
                key={filtro.nome}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={filters[filtro.nome]}
                onChange={(e) => setFilters({ ...filters, [filtro.nome]: e.target.value })}
              >
                {filtro.opcoes.map((opcao) => (
                  <option key={opcao.value} value={opcao.value}>
                    {opcao.label}
                  </option>
                ))}
              </select>
            ))}
          </div>
        </div>
      </div>

      {/* Lista de profissionais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profissionais.map((profissional) => (
          <div key={profissional.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <img
                  src={profissional.foto}
                  alt={profissional.nome}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{profissional.nome}</h3>
                  <p className="text-gray-600">{profissional.especialidade}</p>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="ml-1 text-sm">{profissional.avaliacao}</span>
                  </div>
                </div>
              </div>
              
              <p className="mt-4 text-gray-600">{profissional.descricao}</p>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{profissional.localizacao}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  {iconePreco}
                  <span className="font-semibold">{profissional.preco}</span>
                </div>
                {profissional.formacao && (
                  <div className="flex items-center text-gray-600">
                    <span className="font-semibold">{profissional.formacao}</span>
                  </div>
                )}
                {profissional.crea && (
                  <div className="text-sm text-gray-500">
                    CREA: {profissional.crea}
                  </div>
                )}
                {profissional.servicos && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {profissional.servicos.map((servico, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {servico}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 flex gap-2">
                <a
                  href={`tel:${profissional.telefone}`}
                  className="flex-1 px-4 py-2 bg-primary text-white rounded-lg text-center hover:bg-primary-dark"
                >
                  <Phone className="w-4 h-4 inline-block mr-2" />
                  Ligar
                </a>
                <a
                  href={`mailto:${profissional.email}`}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-center hover:bg-gray-50"
                >
                  <Mail className="w-4 h-4 inline-block mr-2" />
                  Email
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicoTemplate; 