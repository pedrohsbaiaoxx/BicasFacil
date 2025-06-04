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
  Save,
  Plus,
  Trash2,
  Check,
  X
} from 'lucide-react';

const PermissoesPage = () => {
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
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Settings className="w-5 h-5 mr-2" />
                <span>Configurações</span>
              </div>
            </Link>

            <Link href="/admin/master/permissoes">
              <div className="flex items-center p-2 rounded-lg bg-gray-100 cursor-pointer">
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
          <h1 className="text-2xl font-bold">Gerenciamento de Permissões</h1>
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

        {/* Permissions Content */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium">Perfis de Acesso</h2>
              <button className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark">
                <Plus className="w-5 h-5 mr-2" />
                <span>Novo Perfil</span>
              </button>
            </div>

            {/* Permissions Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Perfil
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Usuários
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Empresas
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Serviços
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Relatórios
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Configurações
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Administrador</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Check className="w-5 h-5 text-green-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Check className="w-5 h-5 text-green-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Check className="w-5 h-5 text-green-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Check className="w-5 h-5 text-green-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Check className="w-5 h-5 text-green-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Gerente</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Check className="w-5 h-5 text-green-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Check className="w-5 h-5 text-green-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Check className="w-5 h-5 text-green-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Check className="w-5 h-5 text-green-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <X className="w-5 h-5 text-red-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">Operador</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <X className="w-5 h-5 text-red-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Check className="w-5 h-5 text-green-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Check className="w-5 h-5 text-green-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <X className="w-5 h-5 text-red-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <X className="w-5 h-5 text-red-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

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

export default PermissoesPage; 