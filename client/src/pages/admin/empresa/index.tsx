import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'wouter';
import { 
  LayoutDashboard,
  FileText,
  Calendar,
  Users,
  FileText as FileTextIcon,
  Settings,
  MessageSquare,
  Bell,
  Plus,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  CheckCircle2,
  XCircle,
  Save,
  X
} from 'lucide-react';

interface FormData {
  foto: File | null;
  nome: string;
  categoria: string;
  descricao: string;
  preco: string;
}

interface ProdutoData {
  foto: File | null;
  nome: string;
  categoria: string;
  descricao: string;
  preco: string;
  tipo: string;
  caracteristicas: {
    area: string;
    quartos: string;
    marca: string;
    modelo: string;
    ano: string;
  };
}

interface AgendaData {
  cliente: string;
  servico: string;
  data: string;
  hora: string;
  observacao: string;
}

interface ClienteData {
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
}

interface HorarioData {
  dia: string;
  inicio: string;
  fim: string;
  intervaloInicio: string;
  intervaloFim: string;
}

const EmpresaDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showModal, setShowModal] = useState(false);
  const [showAgendaModal, setShowAgendaModal] = useState(false);
  const [showClienteModal, setShowClienteModal] = useState(false);
  const [showHorarioModal, setShowHorarioModal] = useState(false);
  const [showProdutoModal, setShowProdutoModal] = useState(false);
  const [tipoEmpresa, setTipoEmpresa] = useState('servico'); // 'servico' ou 'loja'
  
  // Estados para o formulário de serviço
  const [formData, setFormData] = useState<FormData>({
    foto: null,
    nome: '',
    categoria: '',
    descricao: '',
    preco: ''
  });

  // Estados para o formulário de produto
  const [produtoData, setProdutoData] = useState<ProdutoData>({
    foto: null,
    nome: '',
    categoria: '',
    descricao: '',
    preco: '',
    tipo: '',
    caracteristicas: {
      area: '',
      quartos: '',
      marca: '',
      modelo: '',
      ano: ''
    }
  });

  // Estados para o formulário de agendamento
  const [agendaData, setAgendaData] = useState<AgendaData>({
    cliente: '',
    servico: '',
    data: '',
    hora: '',
    observacao: ''
  });

  // Estados para o formulário de cliente
  const [clienteData, setClienteData] = useState<ClienteData>({
    nome: '',
    email: '',
    telefone: '',
    endereco: ''
  });

  // Estados para o formulário de horário
  const [horarioData, setHorarioData] = useState<HorarioData>({
    dia: '',
    inicio: '',
    fim: '',
    intervaloInicio: '',
    intervaloFim: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setFormData(prev => ({
        ...prev,
        foto: file
      }));
    }
  };

  const handleAgendaChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAgendaData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClienteChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setClienteData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleHorarioChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setHorarioData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProdutoChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('caracteristicas.')) {
      const caracteristica = name.split('.')[1];
      setProdutoData(prev => ({
        ...prev,
        caracteristicas: {
          ...prev.caracteristicas,
          [caracteristica]: value
        }
      }));
    } else {
      setProdutoData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar o serviço
    console.log('Dados do serviço:', formData);
    setShowModal(false);
    setFormData({
      foto: null,
      nome: '',
      categoria: '',
      descricao: '',
      preco: ''
    });
  };

  const handleAgendaSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados do agendamento:', agendaData);
    setShowAgendaModal(false);
    setAgendaData({
      cliente: '',
      servico: '',
      data: '',
      hora: '',
      observacao: ''
    });
  };

  const handleClienteSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados do cliente:', clienteData);
    setShowClienteModal(false);
    setClienteData({
      nome: '',
      email: '',
      telefone: '',
      endereco: ''
    });
  };

  const handleHorarioSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados do horário:', horarioData);
    setShowHorarioModal(false);
    setHorarioData({
      dia: '',
      inicio: '',
      fim: '',
      intervaloInicio: '',
      intervaloFim: ''
    });
  };

  const handleProdutoSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados do produto:', produtoData);
    setShowProdutoModal(false);
    setProdutoData({
      foto: null,
      nome: '',
      categoria: '',
      descricao: '',
      preco: '',
      tipo: '',
      caracteristicas: {
        area: '',
        quartos: '',
        marca: '',
        modelo: '',
        ano: ''
      }
    });
  };

  const handleNovoAgendamento = () => {
    setShowAgendaModal(true);
  };

  const handleNovoCliente = () => {
    setShowClienteModal(true);
  };

  const handleNovoHorario = () => {
    setShowHorarioModal(true);
  };

  const handleTipoProdutoChange = (tipo: string) => {
    setProdutoData(prev => ({
      ...prev,
      tipo
    }));
  };

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: tipoEmpresa === 'servico' ? 'servicos' : 'produtos', label: tipoEmpresa === 'servico' ? 'Serviços' : 'Produtos', icon: FileText },
    { id: 'agenda', label: 'Agenda', icon: Calendar },
    { id: 'clientes', label: 'Clientes', icon: Users },
    { id: 'orcamentos', label: 'Orçamentos', icon: FileTextIcon },
    { id: 'configuracoes', label: 'Configurações', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b">
            <h1 className="text-xl font-bold text-primary">Painel da Empresa</h1>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Empresa
              </label>
              <select
                value={tipoEmpresa}
                onChange={(e) => setTipoEmpresa(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="servico">Prestador de Serviço</option>
                <option value="loja">Loja de Produtos</option>
              </select>
            </div>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center w-full p-2 rounded-lg ${
                    activeTab === tab.id
                      ? 'bg-gray-100 text-primary'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-200">
              <MessageSquare className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary"></div>
              <span>Empresa</span>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Serviços Ativos</h3>
                    <p className="text-3xl font-bold">12</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Agendamentos Hoje</h3>
                    <p className="text-3xl font-bold">5</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Orçamentos Pendentes</h3>
                    <p className="text-3xl font-bold">3</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Avaliação Média</h3>
                    <p className="text-3xl font-bold">4.8</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-4">Atividade Recente</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm">Novo agendamento</p>
                        <p className="text-xs text-gray-500">Cliente: João Silva - 10 minutos atrás</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm">Novo orçamento solicitado</p>
                        <p className="text-xs text-gray-500">Serviço: Pintura - 1 hora atrás</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-4">Ações Rápidas</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="flex items-center justify-center p-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white">
                      <Plus className="w-5 h-5 mr-2" />
                      <span>Novo Serviço</span>
                    </button>
                    <button className="flex items-center justify-center p-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white">
                      <FileText className="w-5 h-5 mr-2" />
                      <span>Novo Orçamento</span>
                    </button>
                    <button className="flex items-center justify-center p-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>Verificar Agenda</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'servicos' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Serviços</h2>
                  <button 
                    onClick={() => setShowModal(true)}
                    className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    <span>Novo Serviço</span>
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-4 border-b">
                    <div className="flex items-center">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Buscar serviços..."
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="divide-y divide-gray-200">
                    <div className="p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Pintura Residencial</h3>
                          <p className="text-sm text-gray-500">Categoria: Pintura</p>
                          <p className="text-sm text-gray-500">R$ 1.500,00</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            Ativo
                          </span>
                          <button className="p-2 text-gray-500 hover:text-primary">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-500 hover:text-red-500">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Reforma de Banheiro</h3>
                          <p className="text-sm text-gray-500">Categoria: Reforma</p>
                          <p className="text-sm text-gray-500">R$ 3.000,00</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                            Pendente
                          </span>
                          <button className="p-2 text-gray-500 hover:text-primary">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-500 hover:text-red-500">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal de Novo Serviço */}
                {showModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-4 w-full max-w-md">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold">Novo Serviço</h3>
                        <button 
                          onClick={() => setShowModal(false)}
                          className="p-1 hover:bg-gray-100 rounded-full"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Foto de Capa
                          </label>
                          <div className="mt-1 flex justify-center px-4 pt-3 pb-4 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                              <svg
                                className="mx-auto h-8 w-8 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                                >
                                  <span>Upload de arquivo</span>
                                  <input
                                    id="file-upload"
                                    name="foto"
                                    type="file"
                                    className="sr-only"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                  />
                                </label>
                                <p className="pl-1">ou arraste e solte</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                PNG, JPG, GIF até 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nome do Serviço
                          </label>
                          <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleInputChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            placeholder="Ex: Pintura Residencial"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Categoria
                          </label>
                          <select 
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleInputChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            required
                          >
                            <option value="">Selecione uma categoria</option>
                            <option value="pintura">Pintura</option>
                            <option value="reforma">Reforma</option>
                            <option value="construcao">Construção</option>
                            <option value="manutencao">Manutenção</option>
                            <option value="instalacao">Instalação</option>
                            <option value="limpeza">Limpeza</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Descrição
                          </label>
                          <textarea
                            name="descricao"
                            value={formData.descricao}
                            onChange={handleInputChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            rows={2}
                            placeholder="Descreva o serviço..."
                            required
                          ></textarea>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Preço
                          </label>
                          <input
                            type="text"
                            name="preco"
                            value={formData.preco}
                            onChange={handleInputChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            placeholder="R$ 0,00"
                            required
                          />
                        </div>
                        <div className="flex justify-end space-x-2 pt-2">
                          <button 
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-100"
                          >
                            Cancelar
                          </button>
                          <button 
                            type="submit"
                            className="px-3 py-1.5 text-sm bg-primary text-white rounded-md hover:bg-primary-dark"
                          >
                            Salvar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'produtos' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Produtos</h2>
                  <button 
                    onClick={() => setShowProdutoModal(true)}
                    className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    <span>Novo Produto</span>
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-4 border-b">
                    <div className="flex items-center">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Buscar produtos..."
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="divide-y divide-gray-200">
                    <div className="p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Apartamento 2 Quartos</h3>
                          <p className="text-sm text-gray-500">Categoria: Imóvel</p>
                          <p className="text-sm text-gray-500">R$ 350.000,00</p>
                          <p className="text-sm text-gray-500">Disponível: 1 unidade</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            Disponível
                          </span>
                          <button className="p-2 text-gray-500 hover:text-primary">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-500 hover:text-red-500">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Carro Sedan 2023</h3>
                          <p className="text-sm text-gray-500">Categoria: Automóvel</p>
                          <p className="text-sm text-gray-500">R$ 120.000,00</p>
                          <p className="text-sm text-gray-500">Disponível: 3 unidades</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            Disponível
                          </span>
                          <button className="p-2 text-gray-500 hover:text-primary">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-500 hover:text-red-500">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal de Novo Produto */}
                {showProdutoModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-4 w-full max-w-md">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold">Novo Produto</h3>
                        <button 
                          onClick={() => setShowProdutoModal(false)}
                          className="p-1 hover:bg-gray-100 rounded-full"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <form onSubmit={handleProdutoSubmit} className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tipo de Produto
                          </label>
                          <select
                            name="tipo"
                            value={produtoData.tipo}
                            onChange={(e) => handleTipoProdutoChange(e.target.value)}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            required
                          >
                            <option value="">Selecione o tipo</option>
                            <option value="imovel">Imóvel</option>
                            <option value="carro">Carro</option>
                            <option value="moto">Moto</option>
                            <option value="outro">Outro</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Foto do Produto
                          </label>
                          <div className="mt-1 flex justify-center px-4 pt-3 pb-4 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                              <svg
                                className="mx-auto h-8 w-8 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                                >
                                  <span>Upload de arquivo</span>
                                  <input
                                    id="file-upload"
                                    name="foto"
                                    type="file"
                                    className="sr-only"
                                    accept="image/*"
                                    onChange={handleProdutoChange}
                                  />
                                </label>
                                <p className="pl-1">ou arraste e solte</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                PNG, JPG, GIF até 10MB
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Nome
                            </label>
                            <input
                              type="text"
                              name="nome"
                              value={produtoData.nome}
                              onChange={handleProdutoChange}
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                              placeholder="Nome do produto"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Categoria
                            </label>
                            <select
                              name="categoria"
                              value={produtoData.categoria}
                              onChange={handleProdutoChange}
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                              required
                            >
                              <option value="">Selecione</option>
                              <option value="residencial">Residencial</option>
                              <option value="comercial">Comercial</option>
                              <option value="luxo">Luxo</option>
                              <option value="popular">Popular</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Descrição
                          </label>
                          <textarea
                            name="descricao"
                            value={produtoData.descricao}
                            onChange={handleProdutoChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            rows={2}
                            placeholder="Descreva o produto..."
                            required
                          ></textarea>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Preço
                          </label>
                          <input
                            type="text"
                            name="preco"
                            value={produtoData.preco}
                            onChange={handleProdutoChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            placeholder="R$ 0,00"
                            required
                          />
                        </div>

                        {/* Campos específicos para imóveis */}
                        {produtoData.tipo === 'imovel' && (
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Área (m²)
                              </label>
                              <input
                                type="number"
                                name="area"
                                value={produtoData.caracteristicas.area}
                                onChange={handleProdutoChange}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                                placeholder="Área"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Quartos
                              </label>
                              <input
                                type="number"
                                name="quartos"
                                value={produtoData.caracteristicas.quartos}
                                onChange={handleProdutoChange}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                                placeholder="Nº de quartos"
                                required
                              />
                            </div>
                          </div>
                        )}

                        {/* Campos específicos para carros */}
                        {produtoData.tipo === 'carro' && (
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Marca
                              </label>
                              <input
                                type="text"
                                name="marca"
                                value={produtoData.caracteristicas.marca}
                                onChange={handleProdutoChange}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                                placeholder="Marca"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Modelo
                              </label>
                              <input
                                type="text"
                                name="modelo"
                                value={produtoData.caracteristicas.modelo}
                                onChange={handleProdutoChange}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                                placeholder="Modelo"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Ano
                              </label>
                              <input
                                type="number"
                                name="ano"
                                value={produtoData.caracteristicas.ano}
                                onChange={handleProdutoChange}
                                className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                                placeholder="Ano"
                                required
                              />
                            </div>
                          </div>
                        )}

                        <div className="flex justify-end space-x-2 pt-2">
                          <button 
                            type="button"
                            onClick={() => setShowProdutoModal(false)}
                            className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-100"
                          >
                            Cancelar
                          </button>
                          <button 
                            type="submit"
                            className="px-3 py-1.5 text-sm bg-primary text-white rounded-md hover:bg-primary-dark"
                          >
                            Salvar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'agenda' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Agenda</h2>
                  <button 
                    onClick={handleNovoAgendamento}
                    className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    <span>Novo Agendamento</span>
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                          Hoje
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                          Semana
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                          Mês
                        </button>
                      </div>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Buscar agendamentos..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="divide-y divide-gray-200">
                    <div className="p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Pintura Residencial</h3>
                          <p className="text-sm text-gray-500">Cliente: João Silva</p>
                          <p className="text-sm text-gray-500">09:00 - 12:00</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-500 hover:text-primary">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-500 hover:text-red-500">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Reforma de Banheiro</h3>
                          <p className="text-sm text-gray-500">Cliente: Maria Santos</p>
                          <p className="text-sm text-gray-500">14:00 - 17:00</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-500 hover:text-primary">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-500 hover:text-red-500">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal de Novo Agendamento */}
                {showAgendaModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-4 w-full max-w-md">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold">Novo Agendamento</h3>
                        <button 
                          onClick={() => setShowAgendaModal(false)}
                          className="p-1 hover:bg-gray-100 rounded-full"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <form onSubmit={handleAgendaSubmit} className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Cliente
                          </label>
                          <select
                            name="cliente"
                            value={agendaData.cliente}
                            onChange={handleAgendaChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            required
                          >
                            <option value="">Selecione um cliente</option>
                            <option value="joao">João Silva</option>
                            <option value="maria">Maria Santos</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Serviço
                          </label>
                          <select
                            name="servico"
                            value={agendaData.servico}
                            onChange={handleAgendaChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            required
                          >
                            <option value="">Selecione um serviço</option>
                            <option value="pintura">Pintura Residencial</option>
                            <option value="reforma">Reforma de Banheiro</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Data
                          </label>
                          <input
                            type="date"
                            name="data"
                            value={agendaData.data}
                            onChange={handleAgendaChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Hora
                          </label>
                          <input
                            type="time"
                            name="hora"
                            value={agendaData.hora}
                            onChange={handleAgendaChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Observação
                          </label>
                          <textarea
                            name="observacao"
                            value={agendaData.observacao}
                            onChange={handleAgendaChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            rows={2}
                            placeholder="Observações sobre o agendamento..."
                          ></textarea>
                        </div>
                        <div className="flex justify-end space-x-2 pt-2">
                          <button 
                            type="button"
                            onClick={() => setShowAgendaModal(false)}
                            className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-100"
                          >
                            Cancelar
                          </button>
                          <button 
                            type="submit"
                            className="px-3 py-1.5 text-sm bg-primary text-white rounded-md hover:bg-primary-dark"
                          >
                            Salvar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'clientes' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Clientes</h2>
                  <button 
                    onClick={handleNovoCliente}
                    className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    <span>Novo Cliente</span>
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-4 border-b">
                    <div className="flex items-center">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Buscar clientes..."
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="divide-y divide-gray-200">
                    <div className="p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">João Silva</h3>
                          <p className="text-sm text-gray-500">joao.silva@email.com</p>
                          <p className="text-sm text-gray-500">(11) 99999-9999</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-500 hover:text-primary">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-500 hover:text-red-500">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Maria Santos</h3>
                          <p className="text-sm text-gray-500">maria.santos@email.com</p>
                          <p className="text-sm text-gray-500">(11) 98888-8888</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-500 hover:text-primary">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-500 hover:text-red-500">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal de Novo Cliente */}
                {showClienteModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-4 w-full max-w-md">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold">Novo Cliente</h3>
                        <button 
                          onClick={() => setShowClienteModal(false)}
                          className="p-1 hover:bg-gray-100 rounded-full"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <form onSubmit={handleClienteSubmit} className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nome
                          </label>
                          <input
                            type="text"
                            name="nome"
                            value={clienteData.nome}
                            onChange={handleClienteChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            placeholder="Nome completo"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={clienteData.email}
                            onChange={handleClienteChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            placeholder="email@exemplo.com"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Telefone
                          </label>
                          <input
                            type="tel"
                            name="telefone"
                            value={clienteData.telefone}
                            onChange={handleClienteChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            placeholder="(00) 00000-0000"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Endereço
                          </label>
                          <input
                            type="text"
                            name="endereco"
                            value={clienteData.endereco}
                            onChange={handleClienteChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            placeholder="Rua, número, bairro"
                            required
                          />
                        </div>
                        <div className="flex justify-end space-x-2 pt-2">
                          <button 
                            type="button"
                            onClick={() => setShowClienteModal(false)}
                            className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-100"
                          >
                            Cancelar
                          </button>
                          <button 
                            type="submit"
                            className="px-3 py-1.5 text-sm bg-primary text-white rounded-md hover:bg-primary-dark"
                          >
                            Salvar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'orcamentos' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Disponibilidade de Agenda</h2>
                  <button 
                    onClick={handleNovoHorario}
                    className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    <span>Adicionar Horário</span>
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                          Hoje
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                          Semana
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                          Mês
                        </button>
                      </div>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Buscar horários..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="divide-y divide-gray-200">
                    <div className="p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Segunda-feira</h3>
                          <p className="text-sm text-gray-500">08:00 - 18:00</p>
                          <p className="text-sm text-gray-500">Intervalo: 12:00 - 13:00</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            Disponível
                          </span>
                          <button className="p-2 text-gray-500 hover:text-primary">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-500 hover:text-red-500">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Terça-feira</h3>
                          <p className="text-sm text-gray-500">08:00 - 18:00</p>
                          <p className="text-sm text-gray-500">Intervalo: 12:00 - 13:00</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            Disponível
                          </span>
                          <button className="p-2 text-gray-500 hover:text-primary">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-500 hover:text-red-500">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Quarta-feira</h3>
                          <p className="text-sm text-gray-500">08:00 - 18:00</p>
                          <p className="text-sm text-gray-500">Intervalo: 12:00 - 13:00</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            Disponível
                          </span>
                          <button className="p-2 text-gray-500 hover:text-primary">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-500 hover:text-red-500">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Quinta-feira</h3>
                          <p className="text-sm text-gray-500">08:00 - 18:00</p>
                          <p className="text-sm text-gray-500">Intervalo: 12:00 - 13:00</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            Disponível
                          </span>
                          <button className="p-2 text-gray-500 hover:text-primary">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-500 hover:text-red-500">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Sexta-feira</h3>
                          <p className="text-sm text-gray-500">08:00 - 18:00</p>
                          <p className="text-sm text-gray-500">Intervalo: 12:00 - 13:00</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            Disponível
                          </span>
                          <button className="p-2 text-gray-500 hover:text-primary">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button className="p-2 text-gray-500 hover:text-red-500">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal de Novo Horário */}
                {showHorarioModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-4 w-full max-w-md">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold">Novo Horário</h3>
                        <button 
                          onClick={() => setShowHorarioModal(false)}
                          className="p-1 hover:bg-gray-100 rounded-full"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <form onSubmit={handleHorarioSubmit} className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Dia da Semana
                          </label>
                          <select
                            name="dia"
                            value={horarioData.dia}
                            onChange={handleHorarioChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            required
                          >
                            <option value="">Selecione o dia</option>
                            <option value="segunda">Segunda-feira</option>
                            <option value="terca">Terça-feira</option>
                            <option value="quarta">Quarta-feira</option>
                            <option value="quinta">Quinta-feira</option>
                            <option value="sexta">Sexta-feira</option>
                            <option value="sabado">Sábado</option>
                            <option value="domingo">Domingo</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Horário de Início
                          </label>
                          <input
                            type="time"
                            name="inicio"
                            value={horarioData.inicio}
                            onChange={handleHorarioChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Horário de Término
                          </label>
                          <input
                            type="time"
                            name="fim"
                            value={horarioData.fim}
                            onChange={handleHorarioChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Início do Intervalo
                          </label>
                          <input
                            type="time"
                            name="intervaloInicio"
                            value={horarioData.intervaloInicio}
                            onChange={handleHorarioChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Fim do Intervalo
                          </label>
                          <input
                            type="time"
                            name="intervaloFim"
                            value={horarioData.intervaloFim}
                            onChange={handleHorarioChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                          />
                        </div>
                        <div className="flex justify-end space-x-2 pt-2">
                          <button 
                            type="button"
                            onClick={() => setShowHorarioModal(false)}
                            className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-100"
                          >
                            Cancelar
                          </button>
                          <button 
                            type="submit"
                            className="px-3 py-1.5 text-sm bg-primary text-white rounded-md hover:bg-primary-dark"
                          >
                            Salvar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'configuracoes' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Configurações da Empresa</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome da Empresa
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CNPJ
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="00.000.000/0000-00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="contato@empresa.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="(00) 0000-0000"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Endereço
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Rua Exemplo, 123"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
                    <Save className="w-5 h-5 mr-2" />
                    <span>Salvar Alterações</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpresaDashboard; 