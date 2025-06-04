import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin, DollarSign, Home, Building2 } from 'lucide-react';

export default function ImoveisAluguelPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Imóveis para Alugar</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar imóveis..."
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
              <DollarSign className="w-4 h-4 mr-2" />
              Valor do Aluguel
            </Button>
            <Button variant="outline">
              <Home className="w-4 h-4 mr-2" />
              Tipo
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Exemplo de card de imóvel */}
        <Card>
          <CardHeader>
            <CardTitle>Apartamento 2 Quartos</CardTitle>
            <CardDescription>Bairro São José, Bicas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <Building2 className="w-4 h-4 mr-2" />
                75m²
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Home className="w-4 h-4 mr-2" />
                2 Quartos, 1 Banheiro
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <DollarSign className="w-4 h-4 mr-2" />
                R$ 1.200/mês
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Adicione mais cards de imóveis aqui */}
      </div>
    </div>
  );
} 