import React from 'react';
import { Scissors } from 'lucide-react';
import ServicoTemplate from '../../../components/ServicoTemplate';

const CabeleireirosPage = () => {
  // Dados de exemplo - serão substituídos por dados reais da API
  const profissionais = [
    {
      id: 1,
      nome: 'João Silva',
      especialidade: 'Corte e Coloração',
      avaliacao: 4.8,
      localizacao: 'Centro',
      preco: 'R$ 80/corte',
      telefone: '(11) 97777-7777',
      email: 'joao@email.com',
      descricao: 'Cabeleireiro especializado em cortes modernos e coloração profissional.',
      foto: 'https://via.placeholder.com/150',
      servicos: ['Corte', 'Coloração', 'Hidratação', 'Escova']
    },
    // Adicione mais profissionais aqui
  ];

  const filtrosAdicionais = [
    {
      nome: 'servico',
      opcoes: [
        { value: 'all', label: 'Todos os serviços' },
        { value: 'corte', label: 'Corte' },
        { value: 'coloracao', label: 'Coloração' },
        { value: 'hidratacao', label: 'Hidratação' },
        { value: 'escova', label: 'Escova' }
      ]
    }
  ];

  return (
    <ServicoTemplate
      titulo="Cabeleireiros"
      subtitulo="Encontre os melhores profissionais de beleza da sua região"
      profissionais={profissionais}
      filtrosAdicionais={filtrosAdicionais}
      iconePreco={<Scissors className="w-4 h-4 mr-2" />}
    />
  );
};

export default CabeleireirosPage; 