import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Sofa, Phone } from 'lucide-react';

export default function MoveisDecoracaoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Lojas de Móveis e Decoração</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar lojas..."
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
              <Sofa className="w-4 h-4 mr-2" />
              Categoria
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Exemplo de card de loja */}
        <Card>
          <CardHeader>
            <CardTitle>Móveis Bicas</CardTitle>
            <CardDescription>Móveis e Decoração</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-2" />
                Rua das Flores, 456 - Centro
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Phone className="w-4 h-4 mr-2" />
                (32) 99999-9999
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Sofa className="w-4 h-4 mr-2" />
                Móveis, Decoração, Acessórios
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Adicione mais cards de lojas aqui */}
      </div>
    </div>
  );
} 