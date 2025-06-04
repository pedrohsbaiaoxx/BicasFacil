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
  Trash2
} from 'lucide-react';

const UsuariosPage = () => {
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
              <div className="flex items-center p-2 rounded-lg bg-gray-100 cursor-pointer">
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
          <h1 className="text-2xl font-bold">Gerenciamento de Usuários</h1>
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

        {/* Search and Add User */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar usuários..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
            <Plus className="w-5 h-5 mr-2" />
            <span>Novo Usuário</span>
          </button>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">João Silva</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">joao.silva@email.com</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Admin
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Ativo
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Maria Santos</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">maria.santos@email.com</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Empresa
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Pendente
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="w-5 h-5" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsuariosPage; 