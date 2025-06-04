import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Link } from "wouter";

const ServicosPublicosPage = () => {
  const servicos = [
    {
      title: "Água e Esgoto",
      icon: "wrench",
      description: "Serviços da COPASA e informações sobre abastecimento",
      href: "/servicos-publicos/agua-esgoto"
    },
    {
      title: "Energia Elétrica",
      icon: "wrench",
      description: "Serviços da CEMIG e informações sobre energia",
      href: "/servicos-publicos/energia"
    },
    {
      title: "Limpeza Urbana",
      icon: "wrench",
      description: "Coleta de lixo e limpeza das vias públicas",
      href: "/servicos-publicos/limpeza"
    },
    {
      title: "Iluminação Pública",
      icon: "wrench",
      description: "Manutenção e solicitações de iluminação pública",
      href: "/servicos-publicos/iluminacao"
    },
    {
      title: "Transporte Público",
      icon: "wrench",
      description: "Horários e itinerários do transporte público",
      href: "/servicos-publicos/transporte"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Serviços Públicos</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Acesse os principais serviços públicos da cidade
      </p>
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
                  <Link href={servico.href}>Acessar serviço</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ServicosPublicosPage; 