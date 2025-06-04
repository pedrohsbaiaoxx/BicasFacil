import React from 'react';
import { Link } from 'wouter';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

const ServicosPage: React.FC = () => {
  const servicos = [
    {
      title: "Pintores",
      icon: "paint-roller",
      description: "Encontre pintores profissionais para sua obra",
      href: "/servicos/pintores"
    },
    {
      title: "Encanadores",
      icon: "wrench",
      description: "Serviços de encanamento e manutenção hidráulica",
      href: "/servicos/encanadores"
    },
    {
      title: "Engenheiros",
      icon: "hard-hat",
      description: "Consultoria e projetos de engenharia",
      href: "/servicos/engenheiros"
    },
    {
      title: "Manicures",
      icon: "hand-sparkles",
      description: "Cuidados com as unhas e estética",
      href: "/servicos/manicures"
    },
    {
      title: "Cabeleireiros",
      icon: "user-nurse",
      description: "Profissionais especializados em cabelo",
      href: "/servicos/cabeleireiros"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Serviços</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicos.map((servico) => {
          const Icon = Icons[servico.icon as keyof typeof Icons];
          return (
            <Card key={servico.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon className="h-6 w-6" />
                  <CardTitle>{servico.title}</CardTitle>
                </div>
                <CardDescription>{servico.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href={servico.href}>Ver mais</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ServicosPage; 