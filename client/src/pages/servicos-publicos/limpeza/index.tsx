import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Trash2, Phone, Calendar } from 'lucide-react';

export default function LimpezaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Limpeza Pública</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar bairro..."
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <MapPin className="w-4 h-4 mr-2" />
              Bairro
            </Button>
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Dia da Semana
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Exemplo de card de bairro */}
        <Card>
          <CardHeader>
            <CardTitle>Centro</CardTitle>
            <CardDescription>Coleta de Lixo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                Segunda e Quinta-feira
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Trash2 className="w-4 h-4 mr-2" />
                Lixo Orgânico e Reciclável
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Phone className="w-4 h-4 mr-2" />
                (32) 99999-9999
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bairro São José</CardTitle>
            <CardDescription>Coleta de Lixo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                Terça e Sexta-feira
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Trash2 className="w-4 h-4 mr-2" />
                Lixo Orgânico e Reciclável
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Phone className="w-4 h-4 mr-2" />
                (32) 99999-9999
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bairro Santa Rita</CardTitle>
            <CardDescription>Coleta de Lixo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                Quarta e Sábado
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Trash2 className="w-4 h-4 mr-2" />
                Lixo Orgânico e Reciclável
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Phone className="w-4 h-4 mr-2" />
                (32) 99999-9999
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Adicione mais cards de bairros aqui */}
      </div>
    </div>
  );
} 