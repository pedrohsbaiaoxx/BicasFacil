import React from 'react';
import { GraduationCap } from 'lucide-react';
import ServicoTemplate from '../../../components/ServicoTemplate';

const EngenheirosPage = () => {
  // Dados de exemplo - serão substituídos por dados reais da API
  const profissionais = [
    {
      id: 1,
      nome: 'Ana Santos',
      especialidade: 'Engenheira Civil',
      avaliacao: 4.9,
      localizacao: 'Zona Oeste',
      preco: 'R$ 150/hora',
      telefone: '(11) 97777-7777',
      email: 'ana@email.com',
      descricao: 'Engenheira civil com 12 anos de experiência em projetos residenciais e comerciais.',
      foto: 'https://via.placeholder.com/150',
      formacao: 'USP - Engenharia Civil',
      crea: '123456-SP'
    },
    // Adicione mais profissionais aqui
  ];

  const filtrosAdicionais = [
    {
      nome: 'especialidade',
      opcoes: [
        { value: 'all', label: 'Todas as especialidades' },
        { value: 'civil', label: 'Engenharia Civil' },
        { value: 'eletrica', label: 'Engenharia Elétrica' },
        { value: 'mecanica', label: 'Engenharia Mecânica' }
      ]
    }
  ];

  return (
    <ServicoTemplate
      titulo="Engenheiros"
      subtitulo="Encontre os melhores profissionais de engenharia da sua região"
      profissionais={profissionais}
      filtrosAdicionais={filtrosAdicionais}
      iconePreco={<GraduationCap className="w-4 h-4 mr-2" />}
    />
  );
};

export default EngenheirosPage; 