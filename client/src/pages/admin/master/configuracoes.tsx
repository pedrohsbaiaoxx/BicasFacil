import React, { useState } from 'react';
import { Link } from 'wouter';
import { 
  Users, 
  Building2, 
  Settings, 
  FileText, 
  BarChart2, 
  Shield,
  MessageSquare,
  Bell,
  Save,
  Mail,
  Lock,
  Globe,
  CreditCard,
  Bell as BellIcon,
  Shield as ShieldIcon,
  Settings as SettingsIcon,
  CreditCard as CreditCardIcon
} from 'lucide-react';

const ConfiguracoesPage = () => {
  const [activeTab, setActiveTab] = useState('geral');

  const tabs = [
    { id: 'geral', label: 'Geral', icon: SettingsIcon },
    { id: 'notificacoes', label: 'Notificações', icon: BellIcon },
    { id: 'seguranca', label: 'Segurança', icon: ShieldIcon },
    { id: 'pagamentos', label: 'Pagamentos', icon: CreditCardIcon }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold text-primary">Painel Master</h1>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            <Link href="/admin/master/usuarios">
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Users className="w-5 h-5 mr-2" />
                <span>Usuários</span>
              </div>
            </Link>

            <Link href="/admin/master/empresas">
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Building2 className="w-5 h-5 mr-2" />
                <span>Empresas</span>
              </div>
            </Link>

            <Link href="/admin/master/servicos">
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <FileText className="w-5 h-5 mr-2" />
                <span>Serviços</span>
              </div>
            </Link>

            <Link href="/admin/master/relatorios">
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <BarChart2 className="w-5 h-5 mr-2" />
                <span>Relatórios</span>
              </div>
            </Link>

            <Link href="/admin/master/configuracoes">
              <div className="flex items-center p-2 rounded-lg bg-gray-100 cursor-pointer">
                <Settings className="w-5 h-5 mr-2" />
                <span>Configurações</span>
              </div>
            </Link>

            <Link href="/admin/master/permissoes">
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Shield className="w-5 h-5 mr-2" />
                <span>Permissões</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Configurações do Sistema</h1>
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

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-4 py-2 text-sm font-medium ${
                      activeTab === tab.id
                        ? 'border-b-2 border-primary text-primary'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            {activeTab === 'geral' && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium">Configurações Gerais</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome do Sistema
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Bicas Fácil"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email de Contato
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="contato@bicasfacil.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone de Suporte
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="(00) 0000-0000"
                    />
                  </div>
                  <div>
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

                <div>
                  <h3 className="text-md font-medium mb-4">Redes Sociais</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Facebook
                      </label>
                      <input
                        type="url"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="https://facebook.com/bicasfacil"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Instagram
                      </label>
                      <input
                        type="url"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="https://instagram.com/bicasfacil"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notificacoes' && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium">Configurações de Notificações</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium">Notificações por Email</h3>
                      <p className="text-sm text-gray-500">Receba atualizações importantes por email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium">Notificações Push</h3>
                      <p className="text-sm text-gray-500">Receba notificações em tempo real</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium">Notificações de Novos Usuários</h3>
                      <p className="text-sm text-gray-500">Receba alertas sobre novos cadastros</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'seguranca' && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium">Configurações de Segurança</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Senha Atual
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Digite sua senha atual"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nova Senha
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Digite a nova senha"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirmar Nova Senha
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Confirme a nova senha"
                    />
                  </div>

                  <div className="pt-4">
                    <h3 className="text-sm font-medium mb-4">Autenticação de Dois Fatores</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Adicione uma camada extra de segurança à sua conta</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pagamentos' && (
              <div className="space-y-6">
                <h2 className="text-lg font-medium">Configurações de Pagamento</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Chave PIX
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Digite sua chave PIX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Taxa de Serviço (%)
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dias para Pagamento
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="7"
                    />
                  </div>

                  <div className="pt-4">
                    <h3 className="text-sm font-medium mb-4">Métodos de Pagamento</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input type="checkbox" className="h-4 w-4 text-primary" />
                          <span className="ml-2 text-sm">Cartão de Crédito</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input type="checkbox" className="h-4 w-4 text-primary" />
                          <span className="ml-2 text-sm">PIX</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input type="checkbox" className="h-4 w-4 text-primary" />
                          <span className="ml-2 text-sm">Boleto Bancário</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="mt-6 flex justify-end">
              <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
                <Save className="w-5 h-5 mr-2" />
                <span>Salvar Alterações</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfiguracoesPage; 