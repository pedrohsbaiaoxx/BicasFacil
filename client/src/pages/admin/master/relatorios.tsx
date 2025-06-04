import React from 'react';
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
  Download,
  Calendar,
  Filter
} from 'lucide-react';

const RelatoriosPage = () => {
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
              <div className="flex items-center p-2 rounded-lg bg-gray-100 cursor-pointer">
                <BarChart2 className="w-5 h-5 mr-2" />
                <span>Relatórios</span>
              </div>
            </Link>

            <Link href="/admin/master/configuracoes">
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
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
          <h1 className="text-2xl font-bold">Relatórios</h1>
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

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Período</label>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Últimos 7 dias</option>
                  <option>Últimos 30 dias</option>
                  <option>Últimos 90 dias</option>
                  <option>Personalizado</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Relatório</label>
              <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Usuários</option>
                <option>Empresas</option>
                <option>Serviços</option>
                <option>Financeiro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Formato</label>
              <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
                <option>PDF</option>
                <option>Excel</option>
                <option>CSV</option>
              </select>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
              <Download className="w-5 h-5 mr-2" />
              <span>Gerar Relatório</span>
            </button>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Relatório de Usuários</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Total de Usuários</span>
                <span className="font-semibold">1,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Novos Usuários</span>
                <span className="font-semibold">45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Usuários Ativos</span>
                <span className="font-semibold">1,100</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Relatório de Empresas</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Total de Empresas</span>
                <span className="font-semibold">567</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Novas Empresas</span>
                <span className="font-semibold">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Empresas Ativas</span>
                <span className="font-semibold">500</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Relatório de Serviços</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Total de Serviços</span>
                <span className="font-semibold">890</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Novos Serviços</span>
                <span className="font-semibold">67</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Serviços Ativos</span>
                <span className="font-semibold">800</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatoriosPage; 