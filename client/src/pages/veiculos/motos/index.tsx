import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin, DollarSign, Bike, Calendar } from 'lucide-react';

export default function VeiculosMotosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Motos à Venda</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar motos..."
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
              Preço
            </Button>
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Ano
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Exemplo de card de moto */}
        <Card>
          <CardHeader>
            <CardTitle>Honda CG 160</CardTitle>
            <CardDescription>2020/2021 - Bicas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-500">
                <Bike className="w-4 h-4 mr-2" />
                160cc
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                2020/2021
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <DollarSign className="w-4 h-4 mr-2" />
                R$ 12.000
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Adicione mais cards de motos aqui */}
      </div>
    </div>
  );
} 