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
  Search,
  Plus,
  MoreVertical,
  Edit,
  Trash2,
  CheckCircle2,
  XCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

interface Empresa {
  id: number;
  nome: string;
  cnpj: string;
  email: string;
  telefone: string;
  endereco: string;
  tipo: string;
}

const EmpresasPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [formData, setFormData] = useState({
    nome: '',
    cnpj: '',
    email: '',
    telefone: '',
    endereco: '',
    tipo: 'servico'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    
    const novaEmpresa: Empresa = {
      id: Date.now(), // Usando timestamp como ID único
      ...formData
    };
    
    console.log('Nova empresa a ser adicionada:', novaEmpresa);
    
    setEmpresas(prevEmpresas => {
      const novasEmpresas = [...prevEmpresas, novaEmpresa];
      console.log('Estado atualizado:', novasEmpresas);
      return novasEmpresas;
    });
    
    setIsModalOpen(false);
    setFormData({
      nome: '',
      cnpj: '',
      email: '',
      telefone: '',
      endereco: '',
      tipo: 'servico'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

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
              <div className="flex items-center p-2 rounded-lg bg-gray-100 cursor-pointer">
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
          <h1 className="text-2xl font-bold">Gerenciamento de Empresas</h1>
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

        {/* Search and Add Company */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar empresas..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button onClick={handleOpenModal}>
            <Plus className="w-5 h-5 mr-2" />
            Nova Empresa
          </Button>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {empresas.map(empresa => (
            <Card key={empresa.id}>
              <CardHeader>
                <CardTitle>{empresa.nome}</CardTitle>
                <CardDescription>CNPJ: {empresa.cnpj}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {empresa.endereco}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Phone className="w-4 h-4 mr-2" />
                    {empresa.telefone}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Mail className="w-4 h-4 mr-2" />
                    {empresa.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Building2 className="w-4 h-4 mr-2" />
                    Tipo: {empresa.tipo}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal de Nova Empresa */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nova Empresa</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome da Empresa</Label>
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cnpj">CNPJ</Label>
                <Input
                  id="cnpj"
                  name="cnpj"
                  value={formData.cnpj}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endereco">Endereço</Label>
                <Input
                  id="endereco"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                  required
                />
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit">
                  Salvar
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmpresasPage; 