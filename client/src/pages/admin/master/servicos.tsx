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
  Search,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  Filter
} from 'lucide-react';

const ServicosPage = () => {
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
              <div className="flex items-center p-2 rounded-lg bg-gray-100 cursor-pointer">
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
          <h1 className="text-2xl font-bold">Gerenciamento de Serviços</h1>
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

        {/* Search and Filters */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar serviços..."
                className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Filter className="w-5 h-5 mr-2" />
              <span>Filtros</span>
            </button>
          </div>
          <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
            <Plus className="w-5 h-5 mr-2" />
            <span>Novo Serviço</span>
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Pintura Residencial</h3>
                  <p className="text-sm text-gray-500">Empresa XYZ</p>
                </div>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  Ativo
                </span>
              </div>
              <p className="text-gray-600 mb-4">Serviço completo de pintura residencial com garantia de 1 ano.</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">R$ 1.200,00</span>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Reforma de Banheiro</h3>
                  <p className="text-sm text-gray-500">Empresa ABC</p>
                </div>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  Pendente
                </span>
              </div>
              <p className="text-gray-600 mb-4">Reforma completa de banheiro com troca de revestimentos e louças.</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">R$ 3.500,00</span>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Instalação Elétrica</h3>
                  <p className="text-sm text-gray-500">Empresa DEF</p>
                </div>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                  Inativo
                </span>
              </div>
              <p className="text-gray-600 mb-4">Instalação e manutenção de sistemas elétricos residenciais.</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">R$ 800,00</span>
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicosPage; 