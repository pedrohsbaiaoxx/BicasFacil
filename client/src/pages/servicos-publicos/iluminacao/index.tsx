import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Lightbulb, Phone } from 'lucide-react';

export default function IluminacaoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Iluminação Pública</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar serviços..."
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <MapPin className="w-4 h-4 mr-2" />
              Localização
            </Button>
            <Button variant="outline">
              <Lightbulb className="w-4 h-4 mr-2" />
              Tipo de Serviço
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Exemplo de card de serviço */}
        <Card>
          <CardHeader>
            <CardTitle>Iluminação Urbana</CardTitle>
            <CardDescription>Manutenção e Instalação</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-2" />
                Rua da Luz, 123 - Centro
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Phone className="w-4 h-4 mr-2" />
                (32) 99999-9999
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Lightbulb className="w-4 h-4 mr-2" />
                Manutenção, Instalação, Emergências
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Adicione mais cards de serviços aqui */}
      </div>
    </div>
  );
} 