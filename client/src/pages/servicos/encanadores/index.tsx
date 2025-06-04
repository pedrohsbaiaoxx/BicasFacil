import React from 'react';
import { Wrench } from 'lucide-react';
import ServicoTemplate from '../../../components/ServicoTemplate';

const EncanadoresPage = () => {
  // Dados de exemplo - serão substituídos por dados reais da API
  const profissionais = [
    {
      id: 1,
      nome: 'Carlos Mendes',
      especialidade: 'Encanamento Residencial',
      avaliacao: 4.9,
      localizacao: 'Zona Sul',
      preco: 'R$ 80/hora',
      telefone: '(11) 98888-8888',
      email: 'carlos@email.com',
      descricao: 'Especialista em reparos hidráulicos e instalações residenciais com 15 anos de experiência.',
      foto: 'https://via.placeholder.com/150'
    },
    // Adicione mais profissionais aqui
  ];

  return (
    <ServicoTemplate
      titulo="Encanadores"
      subtitulo="Encontre os melhores profissionais de encanamento da sua região"
      profissionais={profissionais}
      iconePreco={<Wrench className="w-4 h-4 mr-2" />}
    />
  );
};

export default EncanadoresPage; 