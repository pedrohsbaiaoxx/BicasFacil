import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'wouter';
import { 
  LayoutDashboard,
  Building2,
  Users,
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
  X,
  FileText,
  BarChart2,
  Shield,
  CreditCard
} from 'lucide-react';

interface Empresa {
  id: number;
  nome: string;
  cnpj: string;
  email: string;
  telefone: string;
  endereco: string;
  tipo: string;
}

interface Usuario {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  tipo: string;
}

interface EmpresaData {
  nome: string;
  cnpj: string;
  email: string;
  telefone: string;
  endereco: string;
  tipo: string;
}

interface UsuarioData {
  nome: string;
  email: string;
  telefone: string;
  tipo: string;
}

interface ConfigData {
  taxaPlataforma: string;
  diasPagamento: string;
  emailSuporte: string;
  telefoneSuporte: string;
  nomeSistema: string;
  emailContato: string;
  endereco: string;
  facebook: string;
  instagram: string;
  notificacoesEmail: boolean;
  notificacoesPush: boolean;
  notificacoesNovosUsuarios: boolean;
  autenticacaoDoisFatores: boolean;
  senhaAtual: string;
  novaSenha: string;
  confirmarSenha: string;
  chavePix: string;
  taxaServico: string;
  metodosPagamento: {
    cartaoCredito: boolean;
    pix: boolean;
    boleto: boolean;
  };
}

interface ServicoData {
  nome: string;
  categoria: string;
  descricao: string;
  preco: string;
  foto: File | null;
}

interface PermissaoData {
  nome: string;
  descricao: string;
  permissoes: string[];
}

const MasterDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeSubTab, setActiveSubTab] = useState('geral');
  const [showEmpresaModal, setShowEmpresaModal] = useState(false);
  const [showUsuarioModal, setShowUsuarioModal] = useState(false);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [showEditEmpresaModal, setShowEditEmpresaModal] = useState(false);
  const [showEditUsuarioModal, setShowEditUsuarioModal] = useState(false);
  const [showServicoModal, setShowServicoModal] = useState(false);
  const [showPermissaoModal, setShowPermissaoModal] = useState(false);
  const [selectedEmpresa, setSelectedEmpresa] = useState<Empresa | null>(null);
  const [selectedUsuario, setSelectedUsuario] = useState<Usuario | null>(null);
  
  // Estados para o formulário de empresa
  const [empresaData, setEmpresaData] = useState<EmpresaData>({
    nome: '',
    cnpj: '',
    email: '',
    telefone: '',
    endereco: '',
    tipo: 'servico'
  });

  // Estados para o formulário de usuário
  const [usuarioData, setUsuarioData] = useState<UsuarioData>({
    nome: '',
    email: '',
    telefone: '',
    tipo: 'admin'
  });

  // Estados para o formulário de configurações
  const [configData, setConfigData] = useState<ConfigData>({
    taxaPlataforma: '',
    diasPagamento: '',
    emailSuporte: '',
    telefoneSuporte: '',
    nomeSistema: '',
    emailContato: '',
    endereco: '',
    facebook: '',
    instagram: '',
    notificacoesEmail: false,
    notificacoesPush: false,
    notificacoesNovosUsuarios: false,
    autenticacaoDoisFatores: false,
    senhaAtual: '',
    novaSenha: '',
    confirmarSenha: '',
    chavePix: '',
    taxaServico: '',
    metodosPagamento: {
      cartaoCredito: false,
      pix: false,
      boleto: false
    }
  });

  // Estados para o formulário de serviço
  const [servicoData, setServicoData] = useState<ServicoData>({
    nome: '',
    categoria: '',
    descricao: '',
    preco: '',
    foto: null
  });

  // Estados para o formulário de permissão
  const [permissaoData, setPermissaoData] = useState<PermissaoData>({
    nome: '',
    descricao: '',
    permissoes: []
  });

  // Estados para as listas
  const [empresas, setEmpresas] = useState<Empresa[]>([
    {
      id: 1,
      nome: 'Empresa XYZ',
      cnpj: '12.345.678/0001-90',
      email: 'contato@empresaxyz.com',
      telefone: '(11) 99999-9999',
      endereco: 'Rua Exemplo, 123',
      tipo: 'servico'
    }
  ]);

  const [usuarios, setUsuarios] = useState<Usuario[]>([
    {
      id: 1,
      nome: 'João Silva',
      email: 'joao.silva@email.com',
      telefone: '(11) 99999-9999',
      tipo: 'admin'
    }
  ]);

  const handleEmpresaChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEmpresaData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUsuarioChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUsuarioData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConfigChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name.startsWith('metodosPagamento.')) {
        const metodo = name.split('.')[1];
        setConfigData(prev => ({
          ...prev,
          metodosPagamento: {
            ...prev.metodosPagamento,
            [metodo]: checked
          }
        }));
      } else {
        setConfigData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      setConfigData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleServicoChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setServicoData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePermissaoChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPermissaoData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmpresaSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados da empresa:', empresaData);
    setShowEmpresaModal(false);
    setEmpresaData({
      nome: '',
      cnpj: '',
      email: '',
      telefone: '',
      endereco: '',
      tipo: 'servico'
    });
  };

  const handleUsuarioSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados do usuário:', usuarioData);
    setShowUsuarioModal(false);
    setUsuarioData({
      nome: '',
      email: '',
      telefone: '',
      tipo: 'admin'
    });
  };

  const handleConfigSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Configurações:', configData);
    setShowConfigModal(false);
  };

  // Funções para manipulação de empresas
  const handleNovaEmpresa = () => {
    setShowEmpresaModal(true);
  };

  const handleEditarEmpresa = (empresa: Empresa) => {
    setSelectedEmpresa(empresa);
    setEmpresaData(empresa);
    setShowEditEmpresaModal(true);
  };

  const handleExcluirEmpresa = (empresa: Empresa) => {
    if (window.confirm('Tem certeza que deseja excluir esta empresa?')) {
      console.log('Empresa excluída:', empresa);
    }
  };

  // Funções para manipulação de usuários
  const handleNovoUsuario = () => {
    setShowUsuarioModal(true);
  };

  const handleEditarUsuario = (usuario: Usuario) => {
    setSelectedUsuario(usuario);
    setUsuarioData(usuario);
    setShowEditUsuarioModal(true);
  };

  const handleExcluirUsuario = (usuario: Usuario) => {
    if (window.confirm('Tem certeza que deseja excluir este usuário?')) {
      console.log('Usuário excluído:', usuario);
    }
  };

  // Funções para manipulação de configurações
  const handleSalvarConfiguracoes = () => {
    console.log('Configurações salvas:', configData);
    setShowConfigModal(false);
  };

  // Funções para manipulação de serviços
  const handleServicoSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados do serviço:', servicoData);
    setShowServicoModal(false);
    setServicoData({
      nome: '',
      categoria: '',
      descricao: '',
      preco: '',
      foto: null
    });
  };

  // Funções para manipulação de permissões
  const handlePermissaoSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados da permissão:', permissaoData);
    setShowPermissaoModal(false);
    setPermissaoData({
      nome: '',
      descricao: '',
      permissoes: []
    });
  };

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'empresas', label: 'Empresas', icon: Building2 },
    { id: 'usuarios', label: 'Usuários', icon: Users },
    { id: 'servicos', label: 'Serviços', icon: FileText },
    { id: 'relatorios', label: 'Relatórios', icon: BarChart2 },
    { id: 'configuracoes', label: 'Configurações', icon: Settings },
    { id: 'permissoes', label: 'Permissões', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b">
            <h1 className="text-xl font-bold text-primary">Painel Master</h1>
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
              <span>Admin</span>
            </div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex justify-end space-x-4 mb-6">
          {activeTab === 'empresas' && (
            <button
              onClick={handleNovaEmpresa}
              className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
            >
              <Plus className="w-5 h-5 mr-2" />
              <span>Nova Empresa</span>
            </button>
          )}

          {activeTab === 'usuarios' && (
            <button
              onClick={handleNovoUsuario}
              className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
            >
              <Plus className="w-5 h-5 mr-2" />
              <span>Novo Usuário</span>
            </button>
          )}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Empresas Ativas</h3>
                    <p className="text-3xl font-bold">25</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Usuários</h3>
                    <p className="text-3xl font-bold">150</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Serviços</h3>
                    <p className="text-3xl font-bold">500</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Faturamento</h3>
                    <p className="text-3xl font-bold">R$ 50.000</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-4">Atividade Recente</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm">Nova empresa cadastrada</p>
                        <p className="text-xs text-gray-500">Empresa XYZ - 10 minutos atrás</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm">Novo usuário registrado</p>
                        <p className="text-xs text-gray-500">João Silva - 1 hora atrás</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'empresas' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Empresas</h2>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-4 border-b">
                    <div className="flex items-center">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Buscar empresas..."
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="divide-y divide-gray-200">
                    <div className="p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Empresa XYZ</h3>
                          <p className="text-sm text-gray-500">CNPJ: 12.345.678/0001-90</p>
                          <p className="text-sm text-gray-500">Tipo: Prestador de Serviço</p>
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
                  </div>
                </div>

                {/* Lista de Empresas */}
                <div className="space-y-4">
                  {empresas.map((empresa) => (
                    <div key={empresa.id} className="bg-white p-4 rounded-lg shadow">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-medium">{empresa.nome}</h3>
                          <p className="text-sm text-gray-500">{empresa.cnpj}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditarEmpresa(empresa)}
                            className="p-2 text-gray-500 hover:text-primary"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleExcluirEmpresa(empresa)}
                            className="p-2 text-gray-500 hover:text-red-500"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Modal de Nova Empresa */}
                {showEmpresaModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-4 w-full max-w-md">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold">Nova Empresa</h3>
                        <button 
                          onClick={() => setShowEmpresaModal(false)}
                          className="p-1 hover:bg-gray-100 rounded-full"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <form onSubmit={handleEmpresaSubmit} className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nome da Empresa
                          </label>
                          <input
                            type="text"
                            name="nome"
                            value={empresaData.nome}
                            onChange={handleEmpresaChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            CNPJ
                          </label>
                          <input
                            type="text"
                            name="cnpj"
                            value={empresaData.cnpj}
                            onChange={handleEmpresaChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
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
                            value={empresaData.email}
                            onChange={handleEmpresaChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
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
                            value={empresaData.telefone}
                            onChange={handleEmpresaChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
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
                            value={empresaData.endereco}
                            onChange={handleEmpresaChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tipo
                          </label>
                          <select
                            name="tipo"
                            value={empresaData.tipo}
                            onChange={handleEmpresaChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            required
                          >
                            <option value="servico">Prestador de Serviço</option>
                            <option value="loja">Loja de Produtos</option>
                          </select>
                        </div>
                        <div className="flex justify-end space-x-2 pt-2">
                          <button 
                            type="button"
                            onClick={() => setShowEmpresaModal(false)}
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

            {activeTab === 'usuarios' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Usuários</h2>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-4 border-b">
                    <div className="flex items-center">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Buscar usuários..."
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
                          <p className="text-sm text-gray-500">Tipo: Administrador</p>
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
                  </div>
                </div>

                {/* Lista de Usuários */}
                <div className="space-y-4">
                  {usuarios.map((usuario) => (
                    <div key={usuario.id} className="bg-white p-4 rounded-lg shadow">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-medium">{usuario.nome}</h3>
                          <p className="text-sm text-gray-500">{usuario.email}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditarUsuario(usuario)}
                            className="p-2 text-gray-500 hover:text-primary"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleExcluirUsuario(usuario)}
                            className="p-2 text-gray-500 hover:text-red-500"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Modal de Novo Usuário */}
                {showUsuarioModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-4 w-full max-w-md">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold">Novo Usuário</h3>
                        <button 
                          onClick={() => setShowUsuarioModal(false)}
                          className="p-1 hover:bg-gray-100 rounded-full"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                      <form onSubmit={handleUsuarioSubmit} className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nome
                          </label>
                          <input
                            type="text"
                            name="nome"
                            value={usuarioData.nome}
                            onChange={handleUsuarioChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
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
                            value={usuarioData.email}
                            onChange={handleUsuarioChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
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
                            value={usuarioData.telefone}
                            onChange={handleUsuarioChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tipo
                          </label>
                          <select
                            name="tipo"
                            value={usuarioData.tipo}
                            onChange={handleUsuarioChange}
                            className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            required
                          >
                            <option value="admin">Administrador</option>
                            <option value="master">Master</option>
                            <option value="empresa">Empresa</option>
                          </select>
                        </div>
                        <div className="flex justify-end space-x-2 pt-2">
                          <button 
                            type="button"
                            onClick={() => setShowUsuarioModal(false)}
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

            {activeTab === 'servicos' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Serviços</h2>
                  <button 
                    onClick={() => setShowServicoModal(true)}
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
                          <p className="text-sm text-gray-500">Preço: R$ 500,00</p>
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
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'relatorios' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Relatórios</h2>
                  <div className="flex space-x-4">
                    <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
                      Exportar PDF
                    </button>
                    <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
                      Exportar Excel
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Faturamento Mensal</h3>
                    <div className="h-64">
                      {/* Gráfico de faturamento */}
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-4">Crescimento de Usuários</h3>
                    <div className="h-64">
                      {/* Gráfico de usuários */}
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4">Relatório Detalhado</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Data
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tipo
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Valor
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            01/01/2024
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Serviço
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            R$ 500,00
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                              Concluído
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'configuracoes' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Configurações do Sistema</h2>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="border-b border-gray-200">
                    <div className="flex justify-between items-center px-4">
                      <nav className="flex space-x-4 p-4" aria-label="Tabs">
                        <button
                          onClick={() => setActiveSubTab('geral')}
                          className={`px-3 py-2 text-sm font-medium rounded-md ${
                            activeSubTab === 'geral'
                              ? 'bg-primary text-white'
                              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <Settings className="w-4 h-4 inline-block mr-2" />
                          Geral
                        </button>
                        <button
                          onClick={() => setActiveSubTab('notificacoes')}
                          className={`px-3 py-2 text-sm font-medium rounded-md ${
                            activeSubTab === 'notificacoes'
                              ? 'bg-primary text-white'
                              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <Bell className="w-4 h-4 inline-block mr-2" />
                          Notificações
                        </button>
                        <button
                          onClick={() => setActiveSubTab('seguranca')}
                          className={`px-3 py-2 text-sm font-medium rounded-md ${
                            activeSubTab === 'seguranca'
                              ? 'bg-primary text-white'
                              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <Shield className="w-4 h-4 inline-block mr-2" />
                          Segurança
                        </button>
                        <button
                          onClick={() => setActiveSubTab('pagamentos')}
                          className={`px-3 py-2 text-sm font-medium rounded-md ${
                            activeSubTab === 'pagamentos'
                              ? 'bg-primary text-white'
                              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <CreditCard className="w-4 h-4 inline-block mr-2" />
                          Pagamentos
                        </button>
                      </nav>
                      <button 
                        onClick={handleSalvarConfiguracoes}
                        className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
                      >
                        <Save className="w-5 h-5 mr-2" />
                        <span>Salvar Configurações</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    {activeSubTab === 'geral' && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center">
                          <Settings className="w-5 h-5 mr-2" />
                          Configurações Gerais
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Nome do Sistema
                            </label>
                            <input
                              type="text"
                              name="nomeSistema"
                              value={configData.nomeSistema}
                              onChange={handleConfigChange}
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                              placeholder="Bicas Fácil"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Email de Contato
                            </label>
                            <input
                              type="email"
                              name="emailContato"
                              value={configData.emailContato}
                              onChange={handleConfigChange}
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                              placeholder="contato@bicasfacil.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Telefone de Suporte
                            </label>
                            <input
                              type="tel"
                              name="telefoneSuporte"
                              value={configData.telefoneSuporte}
                              onChange={handleConfigChange}
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                              placeholder="(00) 0000-0000"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Endereço
                            </label>
                            <input
                              type="text"
                              name="endereco"
                              value={configData.endereco}
                              onChange={handleConfigChange}
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                              placeholder="Rua Exemplo, 123"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Facebook
                            </label>
                            <input
                              type="url"
                              name="facebook"
                              value={configData.facebook}
                              onChange={handleConfigChange}
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                              placeholder="https://facebook.com/bicasfacil"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Instagram
                            </label>
                            <input
                              type="url"
                              name="instagram"
                              value={configData.instagram}
                              onChange={handleConfigChange}
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                              placeholder="https://instagram.com/bicasfacil"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSubTab === 'notificacoes' && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center">
                          <Bell className="w-5 h-5 mr-2" />
                          Notificações
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">Notificações por Email</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                name="notificacoesEmail"
                                checked={configData.notificacoesEmail}
                                onChange={handleConfigChange}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">Notificações Push</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                name="notificacoesPush"
                                checked={configData.notificacoesPush}
                                onChange={handleConfigChange}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">Notificações de Novos Usuários</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                name="notificacoesNovosUsuarios"
                                checked={configData.notificacoesNovosUsuarios}
                                onChange={handleConfigChange}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSubTab === 'seguranca' && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center">
                          <Shield className="w-5 h-5 mr-2" />
                          Segurança
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Senha Atual
                            </label>
                            <input
                              type="password"
                              name="senhaAtual"
                              value={configData.senhaAtual}
                              onChange={handleConfigChange}
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Nova Senha
                            </label>
                            <input
                              type="password"
                              name="novaSenha"
                              value={configData.novaSenha}
                              onChange={handleConfigChange}
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Confirmar Nova Senha
                            </label>
                            <input
                              type="password"
                              name="confirmarSenha"
                              value={configData.confirmarSenha}
                              onChange={handleConfigChange}
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">Autenticação de Dois Fatores</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                name="autenticacaoDoisFatores"
                                checked={configData.autenticacaoDoisFatores}
                                onChange={handleConfigChange}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSubTab === 'pagamentos' && (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold flex items-center">
                          <CreditCard className="w-5 h-5 mr-2" />
                          Pagamentos
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Chave PIX
                            </label>
                            <input
                              type="text"
                              name="chavePix"
                              value={configData.chavePix}
                              onChange={handleConfigChange}
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                              placeholder="000.000.000-00"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Taxa de Serviço (%)
                            </label>
                            <input
                              type="number"
                              name="taxaServico"
                              value={configData.taxaServico}
                              onChange={handleConfigChange}
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                              placeholder="10"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Dias para Pagamento
                            </label>
                            <input
                              type="number"
                              name="diasPagamento"
                              value={configData.diasPagamento}
                              onChange={handleConfigChange}
                              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                              placeholder="30"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Métodos de Pagamento
                            </label>
                            <div className="space-y-2">
                              <label className="flex items-center">
                                <input
                                  type="checkbox"
                                  name="cartaoCredito"
                                  checked={configData.metodosPagamento.cartaoCredito}
                                  onChange={handleConfigChange}
                                  className="mr-2"
                                />
                                <span className="text-sm text-gray-700">Cartão de Crédito</span>
                              </label>
                              <label className="flex items-center">
                                <input
                                  type="checkbox"
                                  name="pix"
                                  checked={configData.metodosPagamento.pix}
                                  onChange={handleConfigChange}
                                  className="mr-2"
                                />
                                <span className="text-sm text-gray-700">PIX</span>
                              </label>
                              <label className="flex items-center">
                                <input
                                  type="checkbox"
                                  name="boleto"
                                  checked={configData.metodosPagamento.boleto}
                                  onChange={handleConfigChange}
                                  className="mr-2"
                                />
                                <span className="text-sm text-gray-700">Boleto Bancário</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'permissoes' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Permissões</h2>
                  <button 
                    onClick={() => setShowPermissaoModal(true)}
                    className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    <span>Nova Permissão</span>
                  </button>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="p-4 border-b">
                    <div className="flex items-center">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Buscar permissões..."
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="divide-y divide-gray-200">
                    <div className="p-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium">Administrador</h3>
                          <p className="text-sm text-gray-500">Acesso total ao sistema</p>
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterDashboard; 