import { useState } from 'react';
import { Search, Filter, MapPin, DollarSign, Home, Building2, BedDouble, Bath, Ruler, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ImoveisLancamentosPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    tipo: '',
    preco: '',
    quartos: '',
    entrega: ''
  });

  const imoveis = [
    {
      id: 1,
      titulo: 'Residencial Green Park',
      tipo: 'Apartamento',
      preco: 350000,
      quartos: 2,
      banheiros: 2,
      area: 75,
      endereco: 'Av. das Palmeiras, 1000 - Jardim Europa',
      descricao: 'Novo empreendimento com piscina, academia e área de lazer completa.',
      entrega: 'Dezembro 2024',
      imagem: '/imoveis/lancamento1.jpg'
    },
    {
      id: 2,
      titulo: 'Condomínio Solaris',
      tipo: 'Casa',
      preco: 550000,
      quartos: 3,
      banheiros: 2,
      area: 150,
      endereco: 'Rua dos Ipês, 500 - Bosque',
      descricao: 'Casas modernas em condomínio fechado com segurança 24h.',
      entrega: 'Março 2025',
      imagem: '/imoveis/lancamento2.jpg'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Lançamentos</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Buscar lançamentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex gap-2">
          <Select value={filters.tipo} onValueChange={(value) => setFilters({...filters, tipo: value})}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="casa">Casa</SelectItem>
              <SelectItem value="apartamento">Apartamento</SelectItem>
              <SelectItem value="duplex">Duplex</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.preco} onValueChange={(value) => setFilters({...filters, preco: value})}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Preço" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ate300">Até R$ 300.000</SelectItem>
              <SelectItem value="300a600">R$ 300.000 a R$ 600.000</SelectItem>
              <SelectItem value="acima600">Acima de R$ 600.000</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {imoveis.map((imovel) => (
          <Card key={imovel.id} className="overflow-hidden">
            <div className="aspect-video bg-gray-200">
              <img
                src={imovel.imagem}
                alt={imovel.titulo}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{imovel.titulo}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {imovel.endereco}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{imovel.descricao}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <BedDouble className="h-4 w-4" />
                  <span>{imovel.quartos} quartos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-4 w-4" />
                  <span>{imovel.banheiros} banheiros</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ruler className="h-4 w-4" />
                  <span>{imovel.area}m²</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Entrega: {imovel.entrega}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <span>R$ {imovel.preco.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Solicitar Informações</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ImoveisLancamentosPage; 