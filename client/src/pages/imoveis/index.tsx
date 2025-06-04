import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Bed, Bath, Ruler, Phone, Mail } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "wouter";
import { Icons } from "@/components/ui/icons";

const ImoveisPage = () => {
  const opcoes = [
    {
      title: "Comprar",
      icon: "building",
      description: "Encontre o imóvel ideal para comprar",
      href: "/imoveis/venda"
    },
    {
      title: "Alugar",
      icon: "building",
      description: "Encontre o imóvel ideal para alugar",
      href: "/imoveis/aluguel"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Imóveis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {opcoes.map((opcao) => {
          const Icon = Icons[opcao.icon as keyof typeof Icons];
          return (
            <Card key={opcao.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon className="h-6 w-6" />
                  <CardTitle>{opcao.title}</CardTitle>
                </div>
                <CardDescription>{opcao.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={opcao.href}>Ver imóveis</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ImoveisPage; 