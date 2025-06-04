import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Briefcase, Users, Clock } from 'lucide-react';

export default function ConsultoriaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Consultoria</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar consultores..."
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Briefcase className="w-4 h-4 mr-2" />
              Área
            </Button>
            <Button variant="outline">
              <Users className="w-4 h-4 mr-2" />
              Experiência
            </Button>
            <Button variant="outline">
              <Clock className="w-4 h-4 mr-2" />
              Disponibilidade
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Consultoria em RH</CardTitle>
            <CardDescription>Especialista em Gestão de Pessoas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <Briefcase className="w-4 h-4 mr-2" />
                Recursos Humanos
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Users className="w-4 h-4 mr-2" />
                10+ anos de experiência
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                Segunda a Sexta - 8h às 18h
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Adicione mais cards de consultores aqui */}
      </div>
    </div>
  );
} 