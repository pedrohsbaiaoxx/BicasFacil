import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, User, GraduationCap, Briefcase, Plus, X, Upload } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  formacao: string;
  experiencia: string;
  habilidades: string;
  arquivo: File | null;
}

export default function CurriculosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    formacao: '',
    experiencia: '',
    habilidades: '',
    arquivo: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Dados do currículo:', formData);
    setIsModalOpen(false);
    // Limpar o formulário após o envio
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      formacao: '',
      experiencia: '',
      habilidades: '',
      arquivo: null
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        arquivo: file
      }));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Currículos</h1>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Cadastrar Currículo
          </Button>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar currículos..."
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <User className="w-4 h-4 mr-2" />
              Nome
            </Button>
            <Button variant="outline">
              <GraduationCap className="w-4 h-4 mr-2" />
              Formação
            </Button>
            <Button variant="outline">
              <Briefcase className="w-4 h-4 mr-2" />
              Experiência
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>João Silva</CardTitle>
            <CardDescription>Desenvolvedor Front-end</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <GraduationCap className="w-4 h-4 mr-2" />
                Análise e Desenvolvimento de Sistemas
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Briefcase className="w-4 h-4 mr-2" />
                3 anos de experiência
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <User className="w-4 h-4 mr-2" />
                Bicas - MG
              </div>
            </div>
            <div className="mt-4">
              <Button className="w-full" onClick={() => setIsModalOpen(true)}>
                Se Candidatar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Cadastrar Currículo</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome Completo</Label>
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
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
              <Label htmlFor="formacao">Formação</Label>
              <Input
                id="formacao"
                name="formacao"
                value={formData.formacao}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experiencia">Experiência Profissional</Label>
              <Textarea
                id="experiencia"
                name="experiencia"
                value={formData.experiencia}
                onChange={handleChange}
                required
                className="h-24"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="habilidades">Habilidades</Label>
              <Textarea
                id="habilidades"
                name="habilidades"
                value={formData.habilidades}
                onChange={handleChange}
                required
                className="h-24"
              />
            </div>
            <div className="space-y-2">
              <Label>Currículo (PDF)</Label>
              <div className="flex items-center gap-2">
                <Input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('file-upload')?.click()}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {formData.arquivo ? formData.arquivo.name : 'Selecionar arquivo'}
                </Button>
              </div>
            </div>
            <DialogFooter className="pt-4">
              <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit">
                Cadastrar
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
} 