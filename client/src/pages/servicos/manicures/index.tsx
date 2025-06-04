import React from 'react';
import { Scissors } from 'lucide-react';
import ServicoTemplate from '../../../components/ServicoTemplate';

const ManicuresPage = () => {
  // Dados de exemplo - serão substituídos por dados reais da API
  const profissionais = [
    {
      id: 1,
      nome: 'Maria Oliveira',
      especialidade: 'Manicure e Pedicure',
      avaliacao: 4.9,
      localizacao: 'Zona Leste',
      preco: 'R$ 50/sessão',
      telefone: '(11) 96666-6666',
      email: 'maria@email.com',
      descricao: 'Manicure profissional com 8 anos de experiência em unhas decoradas e alongamento.',
      foto: 'https://via.placeholder.com/150',
      servicos: ['Manicure', 'Pedicure', 'Unhas Decoradas', 'Alongamento']
    },
    // Adicione mais profissionais aqui
  ];

  const filtrosAdicionais = [
    {
      nome: 'servico',
      opcoes: [
        { value: 'all', label: 'Todos os serviços' },
        { value: 'manicure', label: 'Manicure' },
        { value: 'pedicure', label: 'Pedicure' },
        { value: 'decoradas', label: 'Unhas Decoradas' },
        { value: 'alongamento', label: 'Alongamento' }
      ]
    }
  ];

  return (
    <ServicoTemplate
      titulo="Manicures"
      subtitulo="Encontre os melhores profissionais de manicure da sua região"
      profissionais={profissionais}
      filtrosAdicionais={filtrosAdicionais}
      iconePreco={<Scissors className="w-4 h-4 mr-2" />}
    />
  );
};

export default ManicuresPage; 