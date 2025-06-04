import React from 'react';
import { PaintBucket } from 'lucide-react';
import ServicoTemplate from '../../../components/ServicoTemplate';

const PintoresPage = () => {
  // Dados de exemplo - serão substituídos por dados reais da API
  const profissionais = [
    {
      id: 1,
      nome: 'João Silva',
      especialidade: 'Pintura Residencial',
      avaliacao: 4.8,
      localizacao: 'Centro',
      preco: 'R$ 30/m²',
      telefone: '(11) 99999-9999',
      email: 'joao@email.com',
      descricao: 'Profissional com 10 anos de experiência em pintura residencial e comercial.',
      foto: 'https://via.placeholder.com/150'
    },
    // Adicione mais profissionais aqui
  ];

  return (
    <ServicoTemplate
      titulo="Pintores"
      subtitulo="Encontre os melhores profissionais de pintura da sua região"
      profissionais={profissionais}
      iconePreco={<PaintBucket className="w-4 h-4 mr-2" />}
    />
  );
};

export default PintoresPage; 