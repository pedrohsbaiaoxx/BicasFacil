import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Calendar, Users, BookOpen } from 'lucide-react';

export default function TreinamentosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Treinamentos</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar treinamentos..."
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Data
            </Button>
            <Button variant="outline">
              <BookOpen className="w-4 h-4 mr-2" />
              Área
            </Button>
            <Button variant="outline">
              <Users className="w-4 h-4 mr-2" />
              Vagas
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Desenvolvimento Web Moderno</CardTitle>
            <CardDescription>Curso de React e TypeScript</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                15/03/2024 - 20 vagas
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <BookOpen className="w-4 h-4 mr-2" />
                Tecnologia
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Users className="w-4 h-4 mr-2" />
                8 horas - Presencial
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Adicione mais cards de treinamentos aqui */}
      </div>
    </div>
  );
} 